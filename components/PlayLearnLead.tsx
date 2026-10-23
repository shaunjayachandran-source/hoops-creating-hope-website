import Image from 'next/image';
import { images } from '@/lib/utils';

// "Our Approach": Play / Learn / Lead.
// Static, server-renderable markup (no client JS, no animation), so it is fast and
// respects reduced-motion preferences by design. Photos are existing HCH assets.

interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Keeps the subject in frame when the photo is cropped to the card ratio. */
  focus: string;
}

const pillars: Pillar[] = [
  {
    id: 'play',
    number: '01',
    title: 'PLAY',
    description:
      'Build skills, teamwork, and leadership through structured basketball coaching and team participation.',
    image: images.coachHighFive,
    alt: 'A coach in an orange Hoops Creating Hope shirt high-fives a child beside a painted outdoor basketball hoop while another child watches.',
    focus: 'object-[50%_40%]',
  },
  {
    id: 'learn',
    number: '02',
    title: 'LEARN',
    description:
      'Learn through play, embrace mistakes as opportunities to grow, and build a lasting culture of school engagement.',
    image: images.scholars,
    alt: 'A woman in an orange shirt and a boy in a white shirt laugh together, surrounded by basketballs on a court.',
    focus: 'object-[50%_20%]',
  },
  {
    id: 'lead',
    number: '03',
    title: 'LEAD',
    description:
      'Develop confidence, communication, and leadership through mentorship and meaningful contributions to the community.',
    image: images.teamGathering,
    alt: 'A young coach in an orange shirt leans down to a group of children in white Hoops Creating Hope shirts seated together on a court.',
    focus: 'object-[75%_50%]',
  },
];

export default function PlayLearnLead() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="bg-dark-100 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            OUR APPROACH
          </p>
          <h2
            id="approach-heading"
            className="font-display text-5xl text-white [text-wrap:balance] md:text-7xl"
          >
            More than a game.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300 md:text-xl">
            Basketball is where it starts. Learning, growth, and leadership are where it can
            lead.
          </p>
        </header>

        <ol className="mt-14 grid list-none gap-14 p-0 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <li key={pillar.id}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark-300 md:aspect-[4/5]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={75}
                  className={`object-cover ${pillar.focus}`}
                />
              </figure>

              {/* Number + connector line (decorative; the list already provides the order) */}
              <div className="mt-6 flex items-center gap-4" aria-hidden="true">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {pillar.number}
                </span>
                <span className="h-px flex-1 bg-brand-blue" />
              </div>

              <h3 className="mt-5 font-display text-4xl text-white lg:text-5xl">
                {pillar.title}
              </h3>
              <span className="mt-3 block h-1 w-12 bg-brand-yellow" aria-hidden="true" />
              <p className="mt-4 text-base leading-relaxed text-gray-300 lg:text-lg">
                {pillar.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
