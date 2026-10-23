import type { Metadata } from 'next';
import Image from 'next/image';
import { images, siteConfig } from '@/lib/utils';
import TrackedLink from '@/components/give/TrackedLink';
import { btnOnDark, btnPrimary, btnSecondary, eyebrow, textLink } from '@/components/give/styles';

export const metadata: Metadata = {
  title: 'Fundraising',
  description:
    'Support Hoops Creating Hope through basketball, learning, and mentorship for young people in underserved communities in India.',
  alternates: { canonical: '/fundraise' },
  openGraph: {
    title: 'Fundraising | Hoops Creating Hope',
    description:
      'Support Hoops Creating Hope through basketball, learning, and mentorship for young people in underserved communities in India.',
  },
};

// Same figures used on the homepage and impact page. See the review notes in the PR before changing.
const metrics = [
  { value: '2,500+', label: 'Young people reached since 2012' },
  { value: '60%', label: 'Girls participating (approximate)' },
  { value: '85%', label: 'High School Completion Rate' },
  { value: String(siteConfig.firstProgram), label: 'Programs began' },
];

// The amounts offered on the Givebutter checkout itself (verified on the live campaign).
// Shown for reference only: donors pick their amount, or enter their own, at checkout.
const checkoutAmounts = ['$25', '$55', '$100', '$250', '$500', '$1,000'];

const sectionHeading = 'font-display text-5xl text-brand-blue [text-wrap:balance] md:text-6xl';
const rule = <span className="mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />;

export default function FundraisePage() {
  return (
    <div className="bg-brand-cream text-gray-800">
      {/* 1. HERO */}
      <section aria-labelledby="give-hero-heading" className="relative isolate overflow-hidden bg-black">
        <Image
          src={images.hero}
          alt="A girl in a Hoops Creating Hope jersey drives toward the basket while teammates practice behind her."
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[60%_30%]"
        />
        {/* Scrim on the text side keeps copy readable; the photo stays visible on the right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/10" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="max-w-2xl">
            <p className={`${eyebrow} text-brand-yellow`}>GIVE TO HOOPS CREATING HOPE</p>
            <h1 id="give-hero-heading" className="mt-4 font-display text-5xl leading-[0.95] text-white [text-wrap:balance] md:text-7xl">
              Help change the game. Help change a future.
            </h1>
            <div className="mt-6 space-y-4 text-lg text-white/90 md:text-xl">
              <p>
                Hoops Creating Hope uses basketball, academic support, and mentorship to help young people in
                underserved communities in India stay in school, build confidence, and discover their potential.
              </p>
              <p>
                Your generosity helps create opportunities that reach beyond the court and into the classroom, the
                family, and the community.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={siteConfig.donateUrl} external event="donate_click" location="hero" className={btnPrimary}>
                Donate to Hoops Creating Hope
              </TrackedLink>
              <TrackedLink href="/impact" event="impact_nav" location="hero" className={btnOnDark}>
                Explore Our Impact
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CASE FOR GIVING */}
      <section aria-labelledby="case-heading" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="case-heading" className={sectionHeading}>
              Every young person deserves the opportunity to thrive.
            </h2>
            {rule}
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                For young people facing barriers to educational opportunity, consistent support, positive role models,
                and a place to belong can make a meaningful difference.
              </p>
              <p>
                Since 2010, Hoops Creating Hope has worked to bring basketball, learning, and mentorship together to
                help young people build the skills and confidence to shape their futures.
              </p>
              <p>
                Your support helps sustain this work and expand opportunities for the young people and communities we
                serve.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 md:order-first">
            <Image
              src={images.portrait}
              alt="Two smiling girls in Hoops Creating Hope shirts hold basketballs on a school court."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[45%_50%]"
            />
          </div>
        </div>
      </section>

      {/* 3. IMPACT */}
      <section aria-labelledby="impact-heading" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id="impact-heading" className={sectionHeading}>
              A lasting impact, on and off the court.
            </h2>
            {rule}
            <p className="mt-6 text-lg leading-relaxed">
              Our work brings basketball, learning, and mentorship together to create opportunities for young people
              to grow.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-gray-200 py-10 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-base font-semibold text-gray-700">{m.label}</dt>
                <dd className="font-display text-5xl text-brand-blue sm:text-6xl">{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-gray-600">
            Figures as reported by Hoops Creating Hope. Participation is cumulative since programs began in 2012.
          </p>
          <TrackedLink href="/impact" event="impact_nav" location="impact_section" className={`${btnSecondary} mt-8`}>
            See Our Impact
          </TrackedLink>
        </div>
      </section>

      {/* 4. WHAT A GIFT SUPPORTS */}
      <section aria-labelledby="supports-heading" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id="supports-heading" className={sectionHeading}>
              Your generosity puts opportunity into action.
            </h2>
            {rule}
            <p className="mt-6 text-lg leading-relaxed">
              Gifts support the work that makes our programs possible, from basketball coaching and learning
              opportunities to mentorship and the resources that help young people participate.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 md:p-10">
              <p className={`${eyebrow} text-brand-blue`}>One-time giving</p>
              <h3 className="mt-3 font-display text-4xl text-gray-900">Make a difference today.</h3>
              <p className="mt-4 text-lg leading-relaxed">
                Make a contribution to support Hoops Creating Hope&apos;s work with young people and communities.
              </p>
              <TrackedLink href={siteConfig.donateUrl} external event="donate_click" location="one_time" className={`${btnPrimary} mt-8`}>
                Make a One-Time Gift
              </TrackedLink>
            </div>
            <div className="rounded-2xl bg-brand-blue p-8 text-white md:p-10">
              <p className={`${eyebrow} text-brand-yellow`}>Monthly giving</p>
              <h3 className="mt-3 font-display text-4xl">Be part of their journey.</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Ongoing support helps Hoops Creating Hope plan, sustain, and develop its programs over time.
              </p>
              <TrackedLink href={siteConfig.donateUrl} external event="monthly_click" location="monthly" className={`${btnPrimary} mt-8`}>
                Become a Monthly Supporter
              </TrackedLink>
              <p className="mt-4 text-sm text-white/80">On the secure checkout, select “Monthly” before choosing your amount.</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700">
            All gifts are processed securely by Givebutter, where you can choose a one-time, monthly, or quarterly gift.
          </p>
        </div>
      </section>

      {/* 5. SUGGESTED GIFT AMOUNTS */}
      <section aria-labelledby="amounts-heading" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="amounts-heading" className={sectionHeading}>
            Every gift helps move the work forward.
          </h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed">
            Choose the contribution that feels right for you. Your support helps provide the resources that make
            HCH&apos;s programs possible.
          </p>
          <p id="amounts-note" className="mt-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
            Amounts offered at checkout
          </p>
          <ul aria-labelledby="amounts-note" className="mt-4 flex flex-wrap justify-center gap-3">
            {checkoutAmounts.map((a) => (
              <li key={a} className="min-w-[6rem] rounded-full border-2 border-gray-300 px-5 py-2 font-display text-3xl text-gray-900">
                {a}
              </li>
            ))}
            <li className="rounded-full border-2 border-dashed border-gray-400 px-5 py-2 font-display text-3xl text-gray-700">
              Other amount
            </li>
          </ul>
          <TrackedLink href={siteConfig.donateUrl} external event="donate_click" location="amounts" className={`${btnPrimary} mt-10`}>
            Choose Your Gift
          </TrackedLink>
        </div>
      </section>

      {/* 6. MORE WAYS TO HELP */}
      <section aria-labelledby="more-heading" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id="more-heading" className={sectionHeading}>
              Be part of the movement.
            </h2>
            {rule}
            <p className="mt-6 text-lg leading-relaxed">
              There are many ways to support Hoops Creating Hope and help create opportunities for young people.
            </p>
          </div>
          <ul className="mt-12 grid gap-10 border-t border-gray-300 pt-10 md:grid-cols-3 md:gap-8">
            <li>
              <h3 className="text-2xl font-bold text-gray-900">Corporate partnerships</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Partner with Hoops Creating Hope to support educational opportunity, youth development, and
                community-based sports programs.
              </p>
              <TrackedLink href="/corporate-partnerships" event="corporate_nav" location="more_ways" className={`${textLink} mt-4 inline-block`}>
                Explore Corporate Partnerships
              </TrackedLink>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-gray-900">Community fundraising</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Bring your school, team, workplace, or community together around a shared purpose.
              </p>
              <TrackedLink href="/get-involved#fundraise" event="community_fundraising_nav" location="more_ways" className={`${textLink} mt-4 inline-block`}>
                Explore Community Fundraising
              </TrackedLink>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-gray-900">Volunteer and advocate</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Share your time, expertise, and network to help Hoops Creating Hope grow its impact.
              </p>
              <TrackedLink href="/volunteer" event="volunteer_nav" location="more_ways" className={`${textLink} mt-4 inline-block`}>
                Get Involved
              </TrackedLink>
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TRUST AND ACCOUNTABILITY */}
      <section aria-labelledby="trust-heading" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 id="trust-heading" className={sectionHeading}>
            Your trust matters.
          </h2>
          {rule}
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              We believe supporters deserve to understand the work they make possible. Hoops Creating Hope is committed
              to responsible stewardship, meaningful relationships with the communities we serve, and sharing what we
              learn along the way.
            </p>
            <p>
              Explore our programs, read our impact reporting, and learn more about the people and partners behind this
              work.
            </p>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <li><TrackedLink href="/impact" event="impact_nav" location="trust" className={textLink}>Our Impact</TrackedLink></li>
            <li><a href="/about" className={textLink}>Our Story</a></li>
            <li><a href="/programs" className={textLink}>Programs</a></li>
            <li><a href="/contact" className={textLink}>Contact Us</a></li>
            <li className="sm:col-span-2">
              <a href={siteConfig.irsFilingsUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                Public IRS filings (Form 990)<span className="sr-only"> on ProPublica (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p className="mt-10 border-t border-gray-200 pt-6 text-gray-700">
            Hoops Creating Hope is the operating name of {siteConfig.legalName}, a 501(c)(3) nonprofit organization
            (EIN {siteConfig.ein}). Contributions are tax-deductible to the extent allowed by law.
          </p>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section aria-labelledby="final-heading" className="bg-brand-blue px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 id="final-heading" className="font-display text-5xl [text-wrap:balance] md:text-7xl">
            Help open the next door.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/90 md:text-xl">
            <p>
              Every contribution helps Hoops Creating Hope continue its work with young people through basketball,
              learning, and mentorship.
            </p>
            <p>
              Thank you for believing in what young people can achieve when they have the opportunity and support to
              thrive.
            </p>
          </div>
          <TrackedLink href={siteConfig.donateUrl} external event="donate_click" location="final" className={`${btnPrimary} mt-10`}>
            Give to Hoops Creating Hope
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
