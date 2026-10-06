export default function Bedroom() {
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
            SmartSpace • Bedroom
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Small Bedroom Organization Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Make your bedroom feel bigger, calmer, and more organized with
            practical storage ideas that work in small spaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            How to organize a small bedroom
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            A small bedroom does not have to feel cramped. The key is to use
            the space you already have more efficiently. Focus on vertical
            storage, hidden storage, and furniture that can serve more than
            one purpose.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                1. Use under-bed storage
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Use storage boxes or drawers underneath your bed for clothes,
                shoes, bedding, and other items that are not used every day.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                2. Think vertically
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Wall shelves and tall storage units can provide useful storage
                without taking up much floor space.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                3. Choose multifunctional furniture
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Look for beds with drawers, storage ottomans, foldable desks,
                and other furniture that provides more than one function.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                4. Keep surfaces clear
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Avoid filling desks, bedside tables, and other surfaces with
                unnecessary items. A clear surface can make a small room feel
                much more spacious.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">
              Quick bedroom checklist
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Use the space under your bed</li>
              <li>✓ Add vertical shelves</li>
              <li>✓ Reduce unnecessary clutter</li>
              <li>✓ Choose furniture with built-in storage</li>
              <li>✓ Keep frequently used items within easy reach</li>
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