import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi2';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import forwardinLogo from '../../public/logo-forwardin.svg';

const navs = [
  {
    title: 'Features',
    link: '',
    children: [
      {
        title: 'Feature 1',
        link: 'www.google.com',
      },
      {
        title: 'Feature 2',
        link: '',
      },
    ],
  },
  {
    title: 'Pricing',
    link: '',
  },
  {
    title: 'Demo',
    link: '',
  },
  {
    title: 'Blog',
    link: '',
  },
];

export default function Navbar() {
  return (
    <div className="w-screen flex justify-center ">
      <nav className="bg-white rounded-md flex flex-row items-center justify-between w-fit mt-10 mx-auto gap-10 [box-shadow:0px_21px_50px_0px_#0000000A] fixed z-30">
        <div className="ml-2">
          <Image src={forwardinLogo} />
        </div>
        <div>
          <ul className="flex flex-row items-center text-black [&>*:first-child]:text-primary gap-8">
            {navs.map((item, index) => (
              <li key={`nav-item-${index}`}>
                {!item.children ? (
                  <Link href={item?.link}>{item.title}</Link>
                ) : (
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className="-mx-4">
                        <div className="flex flex-row items-center gap-1 text-base ">
                          <span>{item.title}</span>
                          <HiChevronDown />
                        </div>
                      </MenubarTrigger>
                      <MenubarContent>
                        {item.children.map((item2, index2) => (
                          <Link href={item2.link} key={`nav-item-${index2}`}>
                            <MenubarItem>{item2.title}</MenubarItem>
                          </Link>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="bg-primary h-full block py-3 px-10 m-2 text-white rounded-md hover:bg-third transisi"
        >
          <span>Sign in</span>
        </button>
      </nav>
    </div>
  );
}
