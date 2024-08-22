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
  const [pricingDur, setPricingDur] = useState(0);

  return (
    <section id="pricing" className="w-full flex justify-center bg-[#FEFEFF]">
      <div className="max-w-6xl h-screen flex flex-col justify-center ">
        <h1 className="text-center font-bold text-4xl mb-3">Our Pricing</h1>
        <div className="rounded-full bg-white shadow-md flex flex-row justify-between p-1 select-none mb-3 w-fit mx-auto">
          <div
            className={cn(
              ' bg-white rounded-full px-8 py-2 text-black cursor-pointer',
              { 'bg-primary text-white': pricingDur === 0 },
            )}
            onClick={() => setPricingDur(0)}
          >
            Monthly
          </div>
          <div
            className={cn(
              ' bg-white rounded-full px-8 py-2 text-black cursor-pointer',
              { 'bg-primary text-white': pricingDur === 1 },
            )}
            onClick={() => setPricingDur(1)}
          >
            Yearly
          </div>
        </div>
        <p className="bg-neutral-200 py-2 px-5 text-primary rounded-md w-fit mx-auto mb-3">
          Hemat hingga 25% dengan paket tahunan
        </p>
        <div className="place-content-center justify-items-center grid grid-cols-4 gap-2">
          {pricing.map((item, index) => (
            <div
              className="hover:bg-white transisi rounded-lg hover:shadow-lg px-5 py-3 flex flex-col justify-between gap-5"
              key={`item-${index}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="font-medium text-sm">{item.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold flex flex-row items-end">
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
                    className="bg-primary w-full py-2 text-white rounded-md my-5"
                  >
                    Start Now
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#FFB020] w-full py-2 text-white rounded-md my-5"
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
