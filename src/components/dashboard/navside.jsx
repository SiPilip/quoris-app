'use client';

import { usePathname } from 'next/navigation';
import {
  FaTachometerAlt,
  FaMobileAlt,
  FaAddressBook,
  FaUsers,
  FaEnvelope,
  FaInbox,
  FaPaperPlane,
  FaBroadcastTower,
  FaBullhorn,
  FaReply,
  FaHeadset,
  FaChartBar,
  FaCode,
  FaCog,
} from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const nav = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: <FaTachometerAlt />,
  },
  {
    title: 'Device',
    link: '/dashboard/device',
    icon: <FaMobileAlt />,
  },
  {
    title: 'Contact',
    link: '/',
    icon: <FaAddressBook />,
    children: [
      {
        title: 'Contacts',
        link: '/',
        icon: <FaAddressBook />,
      },
      {
        title: 'Groups',
        link: '/',
        icon: <FaUsers />,
      },
    ],
  },
  {
    title: 'Message List',
    link: '/',
    icon: <FaEnvelope />,
    children: [
      {
        title: 'Messenger',
        link: '/',
        icon: <FaEnvelope />,
      },
      {
        title: 'Incoming Chat',
        link: '/',
        icon: <FaInbox />,
      },
      {
        title: 'Outgoing Chat',
        link: '/',
        icon: <FaPaperPlane />,
      },
    ],
  },
];

const navTools = [
  {
    title: 'Broadcast',
    link: '/',
    icon: <FaBroadcastTower />,
  },
  {
    title: 'Campaign',
    link: '/',
    icon: <FaBullhorn />,
  },
  {
    title: 'Auto Reply',
    link: '/',
    icon: <FaReply />,
  },
  {
    title: 'Customer Service',
    link: '/',
    icon: <FaHeadset />,
  },
  {
    title: 'Analytics',
    link: '/',
    icon: <FaChartBar />,
  },
  {
    title: 'Forwardin API',
    link: '/',
    icon: <FaCode />,
  },
];

const navOthers = [
  {
    title: 'Settings',
    link: '/',
    icon: <FaCog />,
  },
];

export default function Navside() {
  const path = usePathname();

  return (
    <>
      <ul className="flex flex-col gap-1 font-medium">
        {nav.map((item, index) => (
          <>
            <Link href={item.link}>
              <li
                className={cn(
                  'w-full rounded-xl bg-white px-5 py-3 text-black',
                  {
                    'bg-primary text-white': path === item.link,
                  },
                )}
                key={`item-${index}`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </div>
              </li>
            </Link>
            <ul className="ml-3 flex flex-col gap-2 font-medium">
              {item.children &&
                item.children.map((item2, index2) => (
                  <Link href={item2.link}>
                    <li
                      className={cn(
                        'w-full rounded-xl bg-white px-5 py-3 text-black',
                        {
                          'bg-primary text-white': path === item.link,
                        },
                      )}
                      key={`item-${index2}`}
                    >
                      <div className="flex items-center gap-2">
                        {item2.icon}
                        {item2.title}
                      </div>
                    </li>
                  </Link>
                ))}
            </ul>
          </>
        ))}
      </ul>
      <p className="-mt-8 text-sm">Tools</p>
      <ul className="-mt-8 flex flex-col gap-1 font-medium">
        {navTools.map((item, index) => (
          <Link href={item.link}>
            <li
              className={cn(
                'w-full rounded-xl bg-white px-5 py-3 text-black hover:font-medium',
                {
                  'bg-primary font-medium text-white': path === item.link,
                },
              )}
              key={`item-${index}`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <p className="-mt-8 text-sm">Others</p>
      <ul className="-mt-8 flex flex-col gap-1 font-medium">
        {navOthers.map((item, index) => (
          <Link href={item.link}>
            <li
              className={cn(
                'w-full rounded-xl bg-white px-5 py-3 text-black hover:font-medium',
                {
                  'bg-primary font-medium text-white': path === item.link,
                },
              )}
              key={`item-${index}`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
