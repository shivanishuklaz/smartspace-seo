import Link from "next/link";

export default function LivingRoom() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SmartSpace
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>

            <Link href="/spaces" className="hover:text-gray-900">
              Spaces
            </Link>

            <Link href="/#tips" className="hover:text-gray-900">
              Tips
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            SmartSpace • Living Room
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Small Living Room Storage Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover simple storage and organization ideas that can make a
            small living room feel cleaner, more spacious, and comfortable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            How to organize a small living room
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            A living room often needs to serve several purposes while having
            limited space. Smart furniture choices and hidden storage can help
            you keep the room functional without making it feel crowded.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                1. Choose multifunctional furniture
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Choose furniture that performs more than one function, such as
                storage ottomans, sofa beds, or coffee tables with storage.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                2. Use hidden storage
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Storage baskets, cabinets, and furniture with hidden
                compartments can keep everyday items out of sight and reduce
                visual clutter.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                3. Add floating shelves
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Floating shelves make use of wall space while keeping the
                floor clear. They are useful for books, plants, and decorative
                items.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                4. Keep the floor open
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Avoid filling every part of the floor with furniture. Leaving
                clear walking areas can make a small living room feel larger.
              </p>
            </article>
          </div>

          {/* Special Section */}
          <div className="mt-12 rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">
              Make a small living room feel bigger
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Focus on reducing clutter, using vertical storage, selecting
              appropriately sized furniture, and keeping frequently used items
              organized. Small changes can make the room feel much more open.
            </p>
          </div>

          {/* Checklist */}
          <div className="mt-8 rounded-3xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold">
              Quick living room organization checklist
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Choose multifunctional furniture</li>
              <li>✓ Use hidden storage wherever possible</li>
              <li>✓ Install floating shelves</li>
              <li>✓ Keep walking areas clear</li>
              <li>✓ Remove items that are rarely used</li>
            </ul>
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