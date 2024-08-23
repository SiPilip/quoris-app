import Image from 'next/image';
import imgHero1 from '@/../public/hero-img-1.png';
import Signup from '@/components/dashboard/auth/signup';

export default async function page() {
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
          <h1 className="text-center text-xl font-bold">
            Welcome to Forwardin
          </h1>
          <p className="mx-auto w-4/5 text-center font-medium">
            Revolutionize your communication journey with Fowardin today
          </p>
          <Signup />
        </div>
      </div>
    </>
  );
}
