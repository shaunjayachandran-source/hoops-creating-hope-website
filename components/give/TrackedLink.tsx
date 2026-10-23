'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent, type GiveEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  event: GiveEvent;
  location: string;
  className?: string;
  children: ReactNode;
  /** External links (Givebutter, IRS filings) open in a new tab and say so to screen readers. */
  external?: boolean;
}

export default function TrackedLink({ href, event, location, className, children, external }: TrackedLinkProps) {
  const onClick = () => trackEvent(event, { location });
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
