import Image from 'next/image';
import imgHero1 from '@/../public/hero-img-1.png';
import Signin from '@/components/dashboard/auth/signin';

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-5 max-md:hidden">
        <Image src={imgHero1} />
        <h1 className="text-2xl font-bold">
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools{' '}
        </h1>
        <p className="text-sm font-medium">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </p>
      </div>
      <div className="transisi flex w-full flex-col gap-5 md:hover:shadow-xl">
        <div className="rounded-xl bg-white p-10">
          <h1 className="text-center text-xl font-bold">Welcome Back!</h1>
          <p className="text-center font-medium">
            We’re so excited to see you again!
          </p>
          <Signin />
        </div>
      </div>
    </>
  );
}
