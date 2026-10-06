import Link from "next/link";

export default function HomeOffice() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
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

      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            SmartSpace • Home Office
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Small Home Office Organization Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Create a productive workspace in a small room with smart storage,
            compact furniture, and simple organization techniques.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            How to organize a small home office
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            A small workspace can still be comfortable and productive. The
            key is to reduce clutter, use vertical space, and choose furniture
            that fits the available area.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                1. Use vertical storage
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Wall shelves and pegboards can store books, stationery, and
                accessories without taking up valuable desk or floor space.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                2. Manage your cables
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Use cable clips, ties, and organizers to keep charging cables
                and wires neat and prevent your workspace from looking
                cluttered.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                3. Choose a compact desk
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A narrow, foldable, or wall-mounted desk can provide a useful
                workspace without occupying too much room.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                4. Keep the desk minimal
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keep only the items you use regularly on your desk. Store
                everything else in drawers, shelves, or organizers.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">
              Small workspace without a separate room?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              You do not need an entire room for a home office. A small corner
              of a bedroom, living room, or hallway can become a productive
              workspace with a compact desk and smart vertical storage.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold">
              Quick home office organization checklist
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Use vertical storage</li>
              <li>✓ Keep cables organized</li>
              <li>✓ Choose compact furniture</li>
              <li>✓ Keep your desk clutter-free</li>
              <li>✓ Use unused corners for your workspace</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          © 2026 SmartSpace. Smart ideas for better living.
        </div>
      </footer>
    </main>
  );
}