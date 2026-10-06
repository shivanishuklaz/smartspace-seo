export default function Bathroom() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="text-xl font-bold">
            SmartSpace
          </a>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-gray-900">
              Home
            </a>

            <a href="/spaces" className="hover:text-gray-900">
              Spaces
            </a>

            <a href="/#tips" className="hover:text-gray-900">
              Tips
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            SmartSpace • Bathroom
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Small Bathroom Storage Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover simple bathroom storage ideas that help you organize
            everyday essentials without taking up valuable floor space.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            How to organize a small bathroom
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Bathrooms can become cluttered quickly when storage is limited.
            Using walls, corners, doors, and unused vertical space can create
            extra storage without making the bathroom feel crowded.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                1. Use wall-mounted storage
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Wall-mounted shelves and baskets can store toiletries,
                towels, and other essentials while keeping the floor clear.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                2. Make use of the door
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Over-the-door organizers can provide additional storage for
                toiletries, cleaning supplies, and smaller bathroom items.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                3. Use corner space
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Corner shelves and narrow storage units can turn unused
                bathroom corners into practical storage areas.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                4. Keep counters organized
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keep only frequently used items on the counter. Use small
                containers and organizers to prevent unnecessary clutter.
              </p>
            </article>
          </div>

          {/* Special Section */}
          <div className="mt-12 rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">
              Small bathroom with no storage?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              If your bathroom has little or no built-in storage, consider
              freestanding shelves, over-the-door organizers, wall hooks,
              corner racks, and compact rolling carts.
            </p>
          </div>

          {/* Checklist */}
          <div className="mt-8 rounded-3xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold">
              Quick bathroom organization checklist
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Use vertical wall space</li>
              <li>✓ Add an over-the-door organizer</li>
              <li>✓ Make use of empty corners</li>
              <li>✓ Keep bathroom counters clear</li>
              <li>✓ Store rarely used items elsewhere</li>
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