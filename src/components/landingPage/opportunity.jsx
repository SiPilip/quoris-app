'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

import opportunityImg from '@/../public/opportunity-img-1.png';

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
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#opportunity', { scroll: false });
      }
    },
  });

  const [opportunityCategories, setOpportunityCategories] = useState(
    'Bisnis dan Pemasaran',
  );

  const filteredResult = opportunity.find(
    (e) => e.title === opportunityCategories,
  );

  return (
    <section
      id="opportunity"
      className="flex h-full w-full justify-center bg-[#FEFEFF] px-10 max-lg:py-10 md:h-screen"
      ref={ref}
    >
      <div className="flex h-screen max-w-6xl flex-col justify-center">
        <h1 className="text-center text-4xl font-bold text-primary max-md:text-3xl">
          One Step Closer to More Effective and Connected Communication!
        </h1>
        <div className="grid grid-cols-3 place-content-center justify-items-center max-lg:grid-cols-1">
          <Image
            src={opportunityImg}
            className="mx-auto scale-75 max-lg:w-4/5"
          />
          <div className="col-span-2 flex flex-col items-start justify-center gap-5">
            <ul className="flex flex-row gap-3 max-lg:w-full max-lg:flex-col max-lg:text-center">
              {opportunity.map((item, index) => (
                <li
                  key={`item-${index}`}
                  className={cn(
                    `transisi cursor-pointer rounded-md border-2 border-primary px-3 py-2 font-medium text-primary`,
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
