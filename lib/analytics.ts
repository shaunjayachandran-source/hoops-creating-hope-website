import { track } from '@vercel/analytics';

// Thin wrapper over the Vercel Web Analytics already installed on the site.
// Custom events only appear in the dashboard on Vercel plans that include them; on other
// plans this is a harmless no-op. Never pass personal or payment details here.
export type GiveEvent =
  | 'donate_click'
  | 'monthly_click'
  | 'impact_nav'
  | 'corporate_nav'
  | 'volunteer_nav'
  | 'community_fundraising_nav'
  | 'partnership_inquiry';

export function trackEvent(name: GiveEvent, props?: Record<string, string>) {
  try {
    track(name, props);
  } catch {
    // Analytics must never break navigation.
  }
}
