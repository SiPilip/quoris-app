'use client';

import { useState } from 'react';
import Image from 'next/image';
import opportunityImg from '@/../public/opportunity-img-1.png';
import { cn } from '@/lib/utils';

const opportunity = [
  {
    title: 'Bisnis dan Pemasaran',
    content:
      'Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.',
  },
  {
    title: 'Komersial dan Penjualan',
    content:
      'Bidang ini dapat memanfaatkan fitur Broadcast untuk meningkatkan penjualan dengan menyampaikan penawaran khusus, diskon, dan promosi terbaru kepada pelanggan. Fitur ini memungkinkan bisnis untuk menjangkau audiens yang lebih luas dan memastikan pesan penting sampai ke tangan konsumen secara tepat waktu. Selain itu, fitur Campaign dapat membantu menyusun strategi pemasaran yang efektif, memastikan bahwa pesan promosi Anda tidak hanya tepat sasaran, tetapi juga berdampak maksimal pada konversi penjualan.',
  },
  {
    title: 'Organisasi Sosial',
    content:
      'Organisasi sosial dapat menggunakan fitur Broadcast untuk menyebarkan informasi penting, mengorganisir kampanye kesadaran, dan mengajak partisipasi masyarakat dalam berbagai kegiatan sosial. Fitur ini sangat berguna dalam mengkoordinasikan aksi sosial dengan cepat dan efisien, serta memastikan pesan Anda diterima oleh komunitas yang tepat. Selain itu, fitur Campaign membantu merencanakan komunikasi yang strategis, memastikan bahwa setiap pesan dapat memotivasi dan menginspirasi tindakan dari audiens yang relevan.',
  },
];

export default function Opportunity() {
  const [opportunityCategories, setOpportunityCategories] = useState(
    'Bisnis dan Pemasaran',
  );

  const filteredResult = opportunity.find(
    (e) => e.title === opportunityCategories,
  );

  return (
    <section
      id="broadcast"
      className="w-full flex h-screen justify-center bg-[#FEFEFF]"
    >
      <div className="max-w-6xl h-screen flex flex-col justify-center ">
        <h1 className="text-primary text-center font-bold text-4xl">
          One Step Closer to More Effective and Connected Communication!
        </h1>
        <div className="place-content-center justify-items-center grid grid-cols-3">
          <Image src={opportunityImg} className="scale-75" />
          <div className="flex flex-col justify-center items-start gap-5 col-span-2">
            <ul className="flex flex-row gap-3">
              {opportunity.map((item, index) => (
                <li
                  key={`item-${index}`}
                  className={cn(
                    `border-primary border-2 py-2 px-3 rounded-md text-primary font-medium cursor-pointer transisi`,
                    {
                      'bg-primary text-white':
                        item.title === opportunityCategories,
                    },
                  )}
                  onClick={() => setOpportunityCategories(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <p className="font-medium">{filteredResult.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
