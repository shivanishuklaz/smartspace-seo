import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SmartSpace
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="text-gray-900">
              Home
            </Link>

            <Link href="/spaces" className="hover:text-gray-900">
              Spaces
            </Link>

            <a href="#tips" className="hover:text-gray-900">
              Tips
            </a>

            <Link
              href="/spaces"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-white transition hover:bg-gray-700"
            >
              Explore
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Smart living • Better spaces
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-950 sm:text-7xl">
            Make your small space feel bigger.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Discover practical organization, storage, and space-saving ideas
            that help you make the most of every corner of your home.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/spaces"
              className="rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Explore Spaces →
            </Link>

            <a
              href="#tips"
              className="rounded-full border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
            >
              Get Smart Tips
            </a>
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Smart ideas for every room.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Find simple ways to organize small bedrooms, kitchens, living
              rooms, and other spaces without making your home feel crowded.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Bedroom */}
            <Link
              href="/spaces/bedroom"
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                🛏️
              </div>

              <h3 className="text-2xl font-bold">Bedroom</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Make a small bedroom feel calmer and more spacious with smart
                storage and organization ideas.
              </p>

              <p className="mt-6 text-sm font-semibold group-hover:underline">
                Explore bedroom ideas →
              </p>
            </Link>

            {/* Kitchen */}
            <Link
              href="/spaces/kitchen"
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                🍳
              </div>

              <h3 className="text-2xl font-bold">Kitchen</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover practical kitchen storage ideas for small kitchens,
                limited cabinets, and crowded counters.
              </p>

              <p className="mt-6 text-sm font-semibold group-hover:underline">
                Explore kitchen ideas →
              </p>
            </Link>

            {/* Living Room */}
            <Link
              href="/spaces/living-room"
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                🛋️
              </div>

              <h3 className="text-2xl font-bold">Living Room</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Create a cleaner and more open living room using hidden
                storage, multifunctional furniture, and vertical space.
              </p>

              <p className="mt-6 text-sm font-semibold group-hover:underline">
                Explore living room ideas →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                One home. Smarter choices.
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Every corner can work harder.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Small spaces do not have to feel limiting. Use the right
                organization techniques to create a home that feels cleaner,
                calmer, and easier to live in.
              </p>

              <Link
                href="/spaces"
                className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                Explore All Spaces →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/spaces/bedroom"
                className="rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:bg-gray-800"
              >
                <p className="text-sm text-gray-400">01</p>
                <h3 className="mt-10 text-xl font-bold">Bedroom</h3>
              </Link>

              <Link
                href="/spaces/kitchen"
                className="rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:bg-gray-800"
              >
                <p className="text-sm text-gray-400">02</p>
                <h3 className="mt-10 text-xl font-bold">Kitchen</h3>
              </Link>

              <Link
                href="/spaces/living-room"
                className="rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:bg-gray-800"
              >
                <p className="text-sm text-gray-400">03</p>
                <h3 className="mt-10 text-xl font-bold">Living Room</h3>
              </Link>

              <Link
                href="/spaces/bathroom"
                className="rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:bg-gray-800"
              >
                <p className="text-sm text-gray-400">04</p>
                <h3 className="mt-10 text-xl font-bold">Bathroom</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Tips */}
      <section id="tips" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Smart Tips
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Small changes. Big difference.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Start with simple organization habits that can immediately make
              a small home feel more functional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-lg font-bold">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold">Use vertical space</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Walls are often forgotten storage areas. Add shelves, hooks,
                racks, or wall-mounted organizers to free up floor space.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-lg font-bold">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold">Declutter regularly</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keeping only the things you actually use makes organization
                easier and prevents small spaces from becoming overcrowded.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-lg font-bold">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Choose multifunctional furniture
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Look for furniture that serves more than one purpose, such as
                storage beds, foldable desks, or ottomans with hidden storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          © 2026 SmartSpace. Smart ideas for better living.
        </div>
      </footer>
    </main>
  );
}