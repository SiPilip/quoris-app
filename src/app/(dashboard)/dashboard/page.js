import { HiUser } from 'react-icons/hi';
import DashboardHeader from '@/components/dashboard/root/header';
import { Progress } from '@/components/ui/progress';
import { ComponentChart } from '@/components/dashboard/root/chart';
import { AreaChartComponent } from '@/components/dashboard/root/areachart';
import MessageTrendChart from '@/components/dashboard/root/linechart';

export default function Dashboard() {
  return (
    <section className="mx-auto my-0 -mt-5 flex w-full flex-col lg:gap-[2rem] lg:px-8 lg:pb-8">
      <DashboardHeader />
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 rounded-md bg-white py-5">
          <div className="flex w-full flex-row justify-between p-5">
            <div className="flex flex-row items-center gap-5">
              <p className="w-14">Paket saat ini</p>
              <h1 className="text-3xl font-bold">Starter</h1>
              <div className="-ml-3 rounded-full bg-black px-2 py-1 text-xs text-white">
                Free
              </div>
            </div>
            <div className="flex flex-col items-end text-sm">
              <p>Aktif sampai dengan</p>
              <p className="font-semibold">Selasa, 29 Agustus 2023</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="grid w-full basis-5/6 grid-cols-3 justify-between p-5">
              <div className="flex flex-col items-start gap-5">
                <p>Devices</p>
                <p>Contacts</p>
              </div>
              <div className="col-span-2 flex flex-col items-start gap-5">
                <div>
                  <Progress value={80} />
                  <p>8 dari 10 device yang tersedia</p>
                </div>
                <div>
                  <Progress value={5} />
                  <p>5 dari 100 device yang tersedia</p>
                </div>
              </div>
            </div>
            <div className="grid w-full basis-3/6 grid-rows-2 justify-between gap-3 p-5">
              <div className="flex flex-col items-start gap-5">
                <p>Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
              </div>
              <div className="col-span-2 flex flex-col items-start gap-5">
                <button
                  type="button"
                  className="transisi w-full rounded-md border-2 border-primary py-2 hover:bg-primary hover:text-white"
                >
                  Upgrade Paket
                </button>
              </div>
            </div>
          </div>
          <p className="text-center font-medium text-gray-400">
            Tambahkan kapasitas fitur lainnya
          </p>
        </div>
        <div className="col-span-1 rounded-md bg-white p-5">
          <h1 className="mb-3 text-xl font-semibold">Pesan Terakhir</h1>
          <div className="grid grid-rows-3 gap-3">
            <div className="flex flex-row items-center gap-4 rounded-xl bg-gray-100 px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <HiUser className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-bold">Anda</h3>
                <p className="line-clamp-1">
                  Hi apa kabar kamu yang disana aku rindu nich
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 rounded-xl bg-gray-100 px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <HiUser className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-bold">Anda</h3>
                <p className="line-clamp-1">
                  Hi apa kabar kamu yang disana aku rindu nich
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 rounded-xl bg-gray-100 px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <HiUser className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-bold">Anda</h3>
                <p className="line-clamp-1">
                  Hi apa kabar kamu yang disana aku rindu nich
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-lg font-medium text-primary">
            Tampilkan lainnya
          </p>
        </div>
      </div>
      <div className="w-full rounded-md bg-white p-5">
        <h1 className="mb-5 text-2xl font-bold">Analitik</h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 rounded-md border-2 border-gray-300 bg-white p-5">
            <h1 className="text-lg font-bold">Ringkasan hari ini</h1>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-md bg-gray-100 p-3">
                <p className="text-sm">Device</p>
                <p className="font-semibold">RMX3263</p>
              </div>
              <div className="rounded-md bg-gray-100 p-3">
                <p className="text-sm">Aktif sejak</p>
                <p className="font-semibold">29.8.2023</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="">
                <p className="text-sm">Pesan Keluar</p>
                <p className="text-2xl font-semibold">24</p>
              </div>
              <div className="">
                <p className="text-sm">Pesan Masuk</p>
                <p className="text-2xl font-semibold">7</p>
              </div>
              <div className="">
                <p className="text-sm">Pesan Gagal</p>
                <p className="text-2xl font-semibold">0</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 rounded-md border-2 border-gray-300 bg-white p-5">
            <h1 className="text-lg font-bold">Total statistik pesan</h1>
            <div className="grid grid-cols-2">
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm">Total Pesan Keluar</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <div>
                  <p className="text-sm">Total Pesan Gagal</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div>
                  <p className="text-sm">Total Pesan Masuk</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ComponentChart />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-md border-2 border-gray-300 p-5">
          <div className="mb-5 grid w-3/5 grid-cols-4 gap-4">
            <div className="rounded-md bg-gray-100 p-3 text-center">
              <p className="text-sm">Hari ini</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="rounded-md bg-gray-100 p-3 text-center">
              <p className="text-sm">Rata-rata harian</p>
              <p className="text-2xl font-bold">7</p>
            </div>
            <div className="rounded-md bg-gray-100 p-3 text-center">
              <p className="text-sm">Bulan ini</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <div className="rounded-md bg-gray-100 p-3 text-center">
              <p className="text-sm">Rata-rata waktu</p>
              <p className="text-2xl font-bold">00:02:42</p>
            </div>
          </div>
          <h1 className="text-lg font-bold">Grafik chart perjam</h1>
          <div className="relative w-full rounded-md border-2 border-gray-300">
            <AreaChartComponent />
          </div>
          <h1 className="mt-5 text-lg font-bold">Trend Interaksi Pesan</h1>
          <div className="h-64 w-full rounded-md border-2 border-gray-300 py-5 pr-10">
            <MessageTrendChart />
          </div>
        </div>
      </div>
    </section>
  );
}
