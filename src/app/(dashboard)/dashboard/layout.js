export default function layout({ children }) {
  return (
    <main className="bg-white">
      <div className="bg-lightsecondary lg:grid lg:h-screen lg:grid-cols-[19rem_1fr] lg:grid-rows-[auto_1fr]">
        <header className="hidden px-[2.8rem] py-[2rem] pr-[3.8rem] lg:block">
          header
        </header>
        <aside className="border-solid bg-white md:row-[1/-1] lg:flex lg:flex-col lg:gap-[3.2rem] lg:border-r lg:border-r-gray-100 lg:px-[2.4rem] lg:py-[2rem] lg:pl-[1.6rem]">
          aside
        </aside>
        <main className="flex flex-col justify-start overflow-y-scroll pt-6 lg:px-8 lg:pb-[6.4rem] lg:pt-12">
          {children}
          <div className="w-full pt-4">Forwardin - Copyright</div>
        </main>
      </div>
    </main>
  );
}
