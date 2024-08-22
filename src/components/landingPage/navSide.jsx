'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const section = [
  {
    title: 'Get Started',
    id: 'get-started',
  },
  {
    title: 'Broadcast',
    id: 'broadcast',
  },
  {
    title: 'Campaign',
    id: 'campaign',
  },
  {
    title: 'Auto Reply',
    id: 'auto-reply',
  },
  {
    title: 'Opportunity',
    id: 'opportunity',
  },
  {
    title: 'Pricing',
    id: 'pricing',
  },
  {
    title: 'FAQ',
    id: 'faq',
  },
  {
    title: 'Contact Us',
    id: 'contact-us',
  },
];

export default function NavSide() {
  const params = useParams();
  const [sectionHash, setSectionHash] = useState('');

  useEffect(() => {
    setSectionHash(window.location.hash.replace('#', ''));
  }, [params]);

  return (
    <div className="fixed z-30 left-14 top-1/2 transform -translate-y-1/2">
      <ul className="flex flex-col">
        {section.map((item, index) => (
          <Link
            href={`#${item.id}`}
            key={`item-${index}`}
            className={cn('border-l-2 pl-2 py-1', {
              'border-black': item.id === sectionHash,
            })}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
