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
import forwardinLogo from '../../public/logo-forwardin.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion2';

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
    <div className="w-screen flex justify-center relative">
      <nav className="bg-white rounded-md flex flex-row items-center justify-between w-fit mt-10 mx-auto gap-10 [box-shadow:0px_21px_50px_0px_#0000000A] fixed z-30 max-md:hidden">
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
      <nav className="hidden max-md:flex bg-white fixed top-0 left-0 w-screen justify-between px-10 py-5 z-30">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full">
            <div className="flex justify-between flex-row w-full">
              <Image src={forwardinLogo} />
              <AccordionTrigger>
                <HiOutlineMenu className="text-4xl text-primary" />
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <ul className="flex flex-col items-center text-black justify-center gap-7 font-semibold text-base">
                {navs.map((item, index) => (
                  <li key={`nav-item-${index}`} className="first:-mb-5 ">
                    {!item.children ? (
                      <Link href={item?.link}>{item.title}</Link>
                    ) : (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2" className="w-full">
                          <AccordionTrigger className="flex flex-row items-center gap-1 text-base ">
                            <span>{item.title}</span>
                            <HiChevronDown className="text-lg" />
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col  items-center  gap-5 text-base font-medium">
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
                <li className="bg-primary w-full text-center text-white py-3 rounded-md hover:bg-third transisi">
                  Sign in
                </li>
                <li className="bg-gray-50 w-full text-center text-black py-3 rounded-md hover:bg-gray-100 transisi">
                  Sign in as admin
                </li>
                <li className="w-full text-center text-black py-3 rounded-md  transisi">
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
