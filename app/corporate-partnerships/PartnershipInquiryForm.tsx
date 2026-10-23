'use client';

import { useRef, useState, type FormEvent } from 'react';
import { formConfig, getFormspreeUrl } from '@/lib/form-config';
import { siteConfig } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import { btnPrimary } from '@/components/give/styles';

// Options mirror the "Ways to partner" section on this page.
export const interestOptions = [
  'Support programs',
  'Invest in education and youth development',
  'Equip young people to participate',
  'Engage your employees and community',
  'Provide flexible organizational support',
  'Not sure yet',
] as const;

type Field = 'name' | 'email' | 'organization' | 'interest';
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'email-app';

const labels: Record<Field, string> = {
  name: 'Name',
  email: 'Work email',
  organization: 'Organization',
  interest: 'Area of interest',
};

function validate(data: FormData): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const organization = String(data.get('organization') || '').trim();
  const interest = String(data.get('interest') || '');
  if (!name) errors.name = 'Please enter your name.';
  if (!email) errors.email = 'Please enter your work email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address, like name@company.com.';
  if (!organization) errors.organization = 'Please enter your organization.';
  if (!interestOptions.includes(interest as (typeof interestOptions)[number])) errors.interest = 'Please choose an area of interest.';
  return errors;
}

export default function PartnershipInquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const focusStatus = () => requestAnimationFrame(() => statusRef.current?.focus());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never fill this hidden field.
    if (String(data.get('_gotcha') || '')) return;

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(labels) as Field[]).find((f) => found[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const payload = {
      name: String(data.get('name')).trim(),
      email: String(data.get('email')).trim(),
      organization: String(data.get('organization')).trim(),
      interest: String(data.get('interest')),
      message: String(data.get('message') || '').trim(),
    };

    // No form service configured: hand off to the visitor's email app instead of pretending to submit.
    if (!formConfig.partnershipFormId) {
      const subject = encodeURIComponent(`Corporate partnership inquiry: ${payload.organization}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nWork email: ${payload.email}\nOrganization: ${payload.organization}\nArea of interest: ${payload.interest}\n\n${payload.message}`
      );
      trackEvent('partnership_inquiry', { result: 'email_app' });
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus('email-app');
      focusStatus();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(getFormspreeUrl(formConfig.partnershipFormId), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, _subject: `Corporate partnership inquiry: ${payload.organization}` }),
      });
      if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      trackEvent('partnership_inquiry', { result: 'sent' });
      setStatus('success');
      formRef.current?.reset();
    } catch {
      trackEvent('partnership_inquiry', { result: 'error' });
      setStatus('error');
    }
    focusStatus();
  }

  if (status === 'success') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-2xl border-2 border-brand-blue bg-white p-8 focus:outline-none">
        <p className="font-display text-3xl text-brand-blue">Thank you. Your message has been sent.</p>
        <p className="mt-3 text-gray-700">
          We&apos;ll review your note and reply to the work email you provided.
        </p>
      </div>
    );
  }

  const inputClass = (f?: Field) =>
    `mt-2 block w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-gray-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 ${
      f && errors[f] ? 'border-red-700' : 'border-gray-300'
    }`;
  const errorText = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="mt-2 text-sm font-semibold text-red-700">
        {errors[f]}
      </p>
    ) : null;
  const describedBy = (f: Field) => (errors[f] ? `${f}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-required-note">
      <p id="form-required-note" className="text-sm text-gray-600">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {/* Honeypot for spam bots: hidden from people and assistive technology */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-bold text-gray-900">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-required="true"
            aria-invalid={!!errors.name} aria-describedby={describedBy('name')} className={inputClass('name')} />
          {errorText('name')}
        </div>
        <div>
          <label htmlFor="email" className="font-bold text-gray-900">
            Work email <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-required="true"
            aria-invalid={!!errors.email} aria-describedby={describedBy('email')} className={inputClass('email')} />
          {errorText('email')}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="font-bold text-gray-900">
          Organization <span aria-hidden="true">*</span>
        </label>
        <input id="organization" name="organization" type="text" autoComplete="organization" required aria-required="true"
          aria-invalid={!!errors.organization} aria-describedby={describedBy('organization')} className={inputClass('organization')} />
        {errorText('organization')}
      </div>

      <div>
        <label htmlFor="interest" className="font-bold text-gray-900">
          Area of interest <span aria-hidden="true">*</span>
        </label>
        <select id="interest" name="interest" required aria-required="true" defaultValue=""
          aria-invalid={!!errors.interest} aria-describedby={describedBy('interest')} className={inputClass('interest')}>
          <option value="" disabled>
            Choose one
          </option>
          {interestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errorText('interest')}
      </div>

      <div>
        <label htmlFor="message" className="font-bold text-gray-900">
          Message <span className="font-normal text-gray-600">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={5} maxLength={3000} className={inputClass()} />
      </div>

      <p className="text-sm text-gray-600">
        We use these details only to respond to your inquiry. See our{' '}
        <a href="/privacy" className="font-semibold text-brand-blue underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status === 'error' && (
          <p role="alert" className="rounded-xl border-2 border-red-700 bg-red-50 p-4 font-semibold text-red-800">
            Sorry, your message didn&apos;t send. Please try again, or email us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
        {status === 'email-app' && (
          <p className="rounded-xl border-2 border-brand-blue bg-white p-4 text-gray-800">
            Your email app should now open with your inquiry ready to send. If it didn&apos;t, email us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-blue underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>

      <button type="submit" disabled={status === 'submitting'} className={`${btnPrimary} w-full sm:w-auto disabled:opacity-60`}>
        {status === 'submitting' ? 'Sending…' : 'Start a Partnership Conversation'}
      </button>
    </form>
  );
}
