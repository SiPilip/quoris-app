import Image from 'next/image';
import forwardinLogo from '@/../public/logo-forwardin.svg';
import imgHero1 from '@/../public/hero-img-1.png';

export default function AuthLayout({ children }) {
  return (
    <main className="h-screen w-screen max-md:bg-white">
      <nav className="left-0 top-0 mx-auto w-full max-w-7xl px-10 py-10 max-md:fixed">
        <Image src={forwardinLogo} className="scale-125 max-md:mx-auto" />
      </nav>
      <div className="mx-auto my-auto grid max-w-7xl grid-cols-2 place-items-center gap-10 rounded-lg py-10 max-md:h-screen max-md:grid-cols-1 md:px-10">
        <div className="flex flex-col gap-5 max-md:hidden">
          <Image src={imgHero1} />
          <h1 className="text-2xl font-bold">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="text-sm font-medium">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}
