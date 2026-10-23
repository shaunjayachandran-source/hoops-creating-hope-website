// Shared button/link styles for the giving and partnership pages, built from the site's
// existing Tailwind tokens plus the HCH brand blue (#2E5C9E) and yellow (#FCBA03).
// Focus rings are explicit so keyboard users can always see where they are.
const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2';

export const btnPrimary = `${base} bg-brand-yellow text-black hover:bg-[#e5a800] focus-visible:outline-brand-blue`;
export const btnOnDark = `${base} border-2 border-white text-white hover:bg-white hover:text-black focus-visible:outline-brand-yellow`;
export const btnSecondary = `${base} border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus-visible:outline-brand-blue`;
export const textLink =
  'font-bold text-brand-blue underline decoration-2 underline-offset-4 hover:decoration-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue';
export const eyebrow = 'text-sm font-bold uppercase tracking-[0.2em]';
