import type { Metadata } from 'next';
import Image from 'next/image';
import { images, siteConfig } from '@/lib/utils';
import { btnOnDark, btnPrimary, eyebrow, textLink } from '@/components/give/styles';
import PartnershipInquiryForm from './PartnershipInquiryForm';

export const metadata: Metadata = {
  title: 'Corporate Partnerships',
  description:
    'Partner with Hoops Creating Hope to help young people in underserved communities in India build brighter futures through basketball, learning, and mentorship.',
  alternates: { canonical: '/corporate-partnerships' },
  openGraph: {
    title: 'Corporate Partnerships | Hoops Creating Hope',
    description:
      'Help young people build brighter futures through basketball, learning, and mentorship.',
  },
};

// Discussion pathways, not fixed packages. Copy approved by HCH.
const waysToPartner = [
  {
    title: 'Support programs',
    body: 'Help sustain basketball coaching, learning opportunities, mentorship, and the resources required for program delivery.',
  },
  {
    title: 'Invest in education and youth development',
    body: 'Explore ways to support educational engagement and opportunities for young people participating in HCH programs.',
  },
  {
    title: 'Equip young people to participate',
    body: 'Discuss support for appropriate equipment, facilities, and other program needs.',
  },
  {
    title: 'Engage your employees and community',
    body: 'Explore employee giving, matching gifts, team fundraising, and other opportunities to connect your organization with the mission.',
  },
  {
    title: 'Provide flexible organizational support',
    body: 'Help strengthen the resources HCH needs to sustain and develop its work.',
  },
];

// Figures already approved and used elsewhere on the site.
const facts = [
  { label: 'Founded', value: String(siteConfig.founded) },
  { label: 'Programs since', value: String(siteConfig.firstProgram) },
  { label: 'Young people reached since 2012', value: '2,500+' },
  { label: 'Cities in India', value: '5' },
];

export default function CorporatePartnershipsPage() {
  return (
    <div className="bg-brand-cream text-gray-800">
      {/* HERO */}
      <section aria-labelledby="cp-hero-heading" className="relative isolate overflow-hidden bg-black">
        <Image
          src={images.colorfulBuilding}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[50%_70%] opacity-60"
        />
        {/* Scrim keeps text readable over any part of the photo */}
        <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <p className={`${eyebrow} text-brand-yellow`}>CORPORATE PARTNERSHIPS</p>
          <h1 id="cp-hero-heading" className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-white [text-wrap:balance] md:text-7xl">
            Partner in creating opportunity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Help young people build brighter futures through basketball, learning, and mentorship.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#ways-to-partner" className={btnPrimary}>
              Explore Partnership Opportunities
            </a>
            <a href="#start-a-conversation" className={btnOnDark}>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section aria-label="The opportunity" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed md:text-xl">
          <p className="text-2xl font-semibold leading-snug text-gray-900 md:text-3xl">
            Hoops Creating Hope works with young people in underserved communities in India to create opportunities
            for growth on the court, in the classroom, and beyond.
          </p>
          <p>
            We believe every young person deserves the chance to develop their potential, build confidence, and
            discover what is possible when they have the right support.
          </p>
          <p>
            By partnering with Hoops Creating Hope, your organization can help sustain this work and contribute to
            meaningful opportunities for the communities we serve.
          </p>
        </div>
      </section>

      {/* A PARTNERSHIP WITH PURPOSE */}
      <section aria-labelledby="purpose-heading" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src={images.programActivity}
              alt="A coach in an orange shirt guides a young player's shooting form on an outdoor court."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
          <div>
            <h2 id="purpose-heading" className="font-display text-5xl text-brand-blue md:text-6xl">
              A partnership with purpose
            </h2>
            <span className="mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                We work to bring basketball, education, and mentorship together in a model designed to support young
                people&apos;s development.
              </p>
              <p>
                We welcome conversations with organizations that share our commitment to educational opportunity,
                youth development, community engagement, and inclusive access to sport.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-200 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-gray-600">{f.label}</dt>
                  <dd className="font-display text-4xl text-brand-blue">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WAYS TO PARTNER */}
      <section id="ways-to-partner" aria-labelledby="ways-heading" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 id="ways-heading" className="font-display text-5xl text-brand-blue md:text-6xl">
            Ways to partner
          </h2>
          <span className="mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
          <ol className="mt-12 divide-y divide-gray-300 border-y border-gray-300">
            {waysToPartner.map((w, i) => (
              <li key={w.title} className="grid gap-3 py-8 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-8">
                <span className="font-display text-3xl text-brand-blue" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{w.title}</h3>
                <p className="text-lg leading-relaxed text-gray-700">{w.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section aria-labelledby="accountability-heading" className="bg-brand-blue px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 id="accountability-heading" className="font-display text-5xl md:text-6xl">
            A relationship built on accountability
          </h2>
          <span className="mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/90">
            <p>We value partnerships grounded in shared purpose, clear expectations, and responsible stewardship.</p>
            <p>
              We aim to communicate transparently about program activities, the use of funds, and the outcomes we
              measure. Partnership opportunities, reporting commitments, and recognition arrangements will be
              discussed and agreed upon based on the scope of each relationship.
            </p>
          </div>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <li>
              <a href="/impact" className="font-bold text-white underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow">
                Read our impact report
              </a>
            </li>
            <li>
              <a href={siteConfig.irsFilingsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow">
                View our public IRS filings<span className="sr-only"> on ProPublica (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-white/80">
            Hoops Creating Hope is the operating name of {siteConfig.legalName}, a 501(c)(3) nonprofit
            (EIN {siteConfig.ein}).
          </p>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="start-a-conversation" aria-labelledby="inquiry-heading" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <h2 id="inquiry-heading" className="font-display text-5xl text-brand-blue [text-wrap:balance] md:text-6xl">
              Let&apos;s explore what we can accomplish together.
            </h2>
            <span className="mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed">
              Tell us about your organization and what you hope to achieve through a partnership. We would welcome
              the opportunity to discuss how your priorities and resources might align with the work of Hoops
              Creating Hope.
            </p>
            <p className="mt-6 text-gray-700">
              Prefer email? Write to{' '}
              <a href={`mailto:${siteConfig.email}?subject=Corporate%20partnership%20inquiry`} className={textLink}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <PartnershipInquiryForm />
        </div>
      </section>
    </div>
  );
}
