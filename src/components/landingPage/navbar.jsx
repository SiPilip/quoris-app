import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDown, HiOutlineMenu } from 'react-icons/hi';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import forwardinLogo from '@/../public/logo-forwardin.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion2';

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
    <div className="relative flex w-screen justify-center">
      <nav className="fixed z-30 mx-auto mt-10 flex w-fit flex-row items-center justify-between gap-10 rounded-md bg-white [box-shadow:0px_21px_50px_0px_#0000000A] max-md:hidden">
        <div className="ml-2">
          <Image src={forwardinLogo} />
        </div>
        <div>
          <ul className="flex flex-row items-center gap-8 text-black [&>*:first-child]:text-primary">
            {navs.map((item, index) => (
              <li key={`nav-item-${index}`}>
                {!item.children ? (
                  <Link href={item?.link}>{item.title}</Link>
                ) : (
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className="-mx-4">
                        <div className="flex flex-row items-center gap-1 text-base">
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
        <Link
          type="button"
          href="/signin"
          className="transisi m-2 block h-full rounded-md bg-primary px-10 py-3 text-white hover:bg-third"
        >
          <span>Sign in</span>
        </Link>
      </nav>
      <nav className="fixed left-0 top-0 z-30 hidden w-screen justify-between bg-white px-14 py-5 shadow-lg max-md:flex">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full">
            <div className="flex w-full flex-row justify-between">
              <Image src={forwardinLogo} className="-ml-8" />
              <AccordionTrigger>
                <HiOutlineMenu className="text-4xl text-primary" />
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <ul className="flex flex-col items-center justify-center gap-5 text-base font-semibold text-black">
                {navs.map((item, index) => (
                  <li key={`nav-item-${index}`} className="first:-mb-5">
                    {!item.children ? (
                      <Link href={item?.link}>{item.title}</Link>
                    ) : (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2" className="w-full">
                          <AccordionTrigger className="flex flex-row items-center gap-1 text-base">
                            <span>{item.title}</span>
                            <HiChevronDown className="text-lg" />
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col items-center gap-5 text-base font-medium">
                              {item.children.map((item2, index2) => (
                                <Link
                                  href={item2.link}
                                  key={`nav-item-${index2}`}
                                >
                                  {item2.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </li>
                ))}
                <Link
                  href="/signin"
                  className="transisi w-full rounded-md bg-primary py-3 text-center text-white hover:bg-third"
                >
                  Sign in
                </Link>
                <li className="transisi -mt-2 w-full rounded-md bg-gray-50 py-3 text-center text-black hover:bg-gray-100">
                  Sign in as admin
                </li>
                <li className="transisi -mt-2 w-full rounded-md py-3 text-center text-black">
                  Sign in as Customer Service
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
