'use client';

import { useState } from 'react';
import {
  HiChartBar,
  HiClock,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiDocument,
  HiIdentification,
  HiSignal,
} from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { cn, formatIDR } from '@/lib/utils';

const pricing = [
  {
    name: 'Starter',
    description:
      'Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.',
    price: [0, 0],
    feature: {
      autoreply: 100,
      broadcast: 500,
      campaign: 50,
      contact: 500,
      device: 50,
      contactImport: true,
      googleSync: true,
    },
  },
  {
    name: 'Basic',
    description:
      'Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
    recommended: true,
    price: [65000, 650000],
    feature: {
      autoreply: 100,
      broadcast: 500,
      campaign: 50,
      contact: 500,
      device: 50,
      contactImport: true,
      googleSync: true,
    },
  },
  {
    name: 'Premium',
    description:
      'Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
    price: [76000, 800000],
    feature: {
      autoreply: 100,
      broadcast: 500,
      campaign: 50,
      contact: 500,
      device: 50,
      contactImport: true,
      googleSync: true,
    },
  },
  {
    name: 'Pro',
    description:
      'Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.',
    price: [86000, 900000],
    feature: {
      autoreply: 100,
      broadcast: 500,
      campaign: 50,
      contact: 500,
      device: 50,
      contactImport: true,
      googleSync: true,
    },
  },
];

export default function OurPricing() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#pricing', { scroll: false });
      }
    },
  });

  const [pricingDur, setPricingDur] = useState(0);

  return (
    <section
      id="pricing"
      className="flex w-full justify-center bg-[#FAFAFA] px-10"
      ref={ref}
    >
      <div className="flex h-screen max-w-6xl flex-col justify-center max-lg:h-full max-lg:py-10">
        <h1 className="mb-3 text-center text-4xl font-bold max-md:text-3xl">
          Our Pricing
        </h1>
        <div className="mx-auto mb-3 flex w-fit select-none flex-row justify-between rounded-full bg-white p-1 shadow-md">
          <div
            className={cn(
              'cursor-pointer rounded-full bg-white px-8 py-2 text-black',
              { 'bg-primary text-white': pricingDur === 0 },
            )}
            onClick={() => setPricingDur(0)}
          >
            Monthly
          </div>
          <div
            className={cn(
              'cursor-pointer rounded-full bg-white px-8 py-2 text-black',
              { 'bg-primary text-white': pricingDur === 1 },
            )}
            onClick={() => setPricingDur(1)}
          >
            Yearly
          </div>
        </div>
        <p className="mx-auto mb-3 w-fit rounded-md bg-neutral-200 px-5 py-2 text-primary">
          Hemat hingga 25% dengan paket tahunan
        </p>
        <div className="grid grid-cols-4 place-content-center justify-items-center gap-2 max-lg:grid-cols-1 max-lg:gap-8">
          {pricing.map((item, index) => (
            <div
              className={cn(
                'transisi flex flex-col justify-between gap-5 rounded-lg px-5 py-3 hover:bg-white hover:shadow-lg',
                {
                  'bg-white': item.recommended === true,
                },
              )}
              key={`item-${index}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="flex flex-row items-end text-2xl font-bold">
                  {item.price[pricingDur] === 0
                    ? 'Gratis'
                    : formatIDR(item.price[pricingDur])}
                  <span className="text-base font-semibold">
                    /{pricingDur === 0 ? 'bulan' : 'tahun'}
                  </span>
                </h1>
                {!item.recommended ? (
                  <button
                    type="button"
                    className="my-5 w-full rounded-md bg-primary py-2 text-white"
                  >
                    Start Now
                  </button>
                ) : (
                  <button
                    type="button"
                    className="my-5 w-full rounded-md bg-[#FFB020] py-2 text-white"
                  >
                    Get Started
                  </button>
                )}
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-1">
                    <HiClock className="text-primary" />
                    {item.feature.autoreply} Auto Reply
                  </li>
                  <li className="flex items-center gap-1">
                    <HiSignal className="text-primary" />
                    {item.feature.broadcast} Broadcast
                  </li>
                  <li className="flex items-center gap-1">
                    <HiChartBar className="text-primary" />
                    {item.feature.campaign} Campaign
                  </li>
                  <li className="flex items-center gap-1">
                    <HiIdentification className="text-primary" />
                    {item.feature.contact} Contact
                  </li>
                  <li className="flex items-center gap-1">
                    <HiDevicePhoneMobile className="text-primary" />
                    {item.feature.device} Device
                  </li>
                  <li className="flex items-center gap-1">
                    <HiDocument className="text-primary" />
                    {item.feature.contactImport} Excel / CSV Contact Import
                  </li>
                  <li className="flex items-center gap-1">
                    <HiComputerDesktop className="text-primary" />
                    {item.feature.googleSync} Google Contact Sync
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
