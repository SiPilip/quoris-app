'use client';

import { HiSearch } from 'react-icons/hi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

import forwardinLogo from '@/../public/logo-forwardin-white.png';
import elementFooter from '@/../public/footer-bg.png';

const faq = [
  {
    question: 'Apa itu Forwardin?',
    answer:
      'Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.',
  },
  {
    question: 'Apakah Forwardin cocok untuk saya?',
    answer:
      'Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.',
  },
  {
    question: 'Apakah Forwardin perlu di-install ke komputer?',
    answer:
      'Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.',
  },
];

export default function Footer() {
  const router = useRouter();

  const { ref: ref1 } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#faq', { scroll: false });
      }
    },
  });
  const { ref: ref2 } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#contact-us', { scroll: false });
      }
    },
  });

  return (
    <footer
      className="w-full h-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${elementFooter.src})` }}
    >
      <section
        id="faq"
        className="w-full flex h-screen justify-center "
        ref={ref1}
      >
        <div className="max-w-6xl w-full items-center h-screen flex flex-col gap-10 justify-center">
          <h1 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-row items-center max-w-2xl w-full">
            <div className="bg-white p-2 rounded-md basis-11/12">
              <input type="text" className="border-none outline-none" />
            </div>
            <HiSearch className="text-2xl basis-1/12 text-white" />
          </div>
          <div className="flex flex-col w-full max-w-2xl">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-3"
            >
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section
        id="contact-us"
        className="w-full flex flex-col gap-24 h-screen justify-center items-center "
        ref={ref2}
      >
        <div className="max-w-6xl flex flex-row justify-between w-full gap-16 text-white">
          <div className="flex flex-col gap-5">
            <Image src={forwardinLogo} />
            <p>
              Fowardin is your ultimate communication management solution. We
              empower businesses of all sizes with efficient message forwarding,
              streamlined contact management, and powerful campaign scheduling.
              Our mission is to simplify your communication processes, helping
              you engage with your audience effectively and effortlessly. Join
              us in transforming your communication game today!
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Contact Us</h1>
            <p>
              Join our mailing list to receive updates, exclusive content, and
              early access to upcoming events. By signing up, you become an
              integral part of our community, spreading the message of
              compassion and making a difference.
            </p>
            <ul>
              <li>Email: info@fowarin</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-nowrap">Lets Talk</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-5 text-white items-center">
          <h1 className="text-xl font-normal">Powered by</h1>
          <Image src={forwardinLogo} />
        </div>
      </section>
    </footer>
  );
}
