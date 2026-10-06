export default function Kitchen() {
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

            <a href="/spaces" className="text-gray-900">
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
            SmartSpace • Kitchen
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Small Kitchen Organization Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover practical ways to organize a small kitchen, create more
            storage, and keep your cooking space clean and functional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">
            How to organize a small kitchen
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Small kitchens can quickly become cluttered when storage is
            limited. The best approach is to make use of vertical surfaces,
            empty corners, drawers, and other overlooked areas.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                1. Use vertical wall space
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Install shelves, hooks, or wall-mounted organizers to store
                frequently used kitchen items without taking up valuable
                counter space.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                2. Organize your drawers
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Drawer dividers and organizers can help separate utensils,
                cooking tools, and other small items while making everything
                easier to find.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                3. Make use of corners
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Corner shelves, rotating organizers, and narrow storage units
                can turn unused kitchen corners into useful storage areas.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 p-7">
              <h3 className="text-xl font-bold">
                4. Keep counters clear
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Store appliances and rarely used items when possible. Keeping
                the countertop clear makes a small kitchen feel more open.
              </p>
            </article>
          </div>

          {/* Special Section */}
          <div className="mt-12 rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">
              Small kitchen without cabinets?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              If your kitchen has limited or no cabinets, use open shelving,
              pegboards, hanging racks, magnetic organizers, and rolling
              storage carts to create additional storage without major
              renovations.
            </p>
          </div>

          {/* Checklist */}
          <div className="mt-8 rounded-3xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold">
              Quick kitchen organization checklist
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Use vertical wall space</li>
              <li>✓ Organize drawers with dividers</li>
              <li>✓ Make use of empty corners</li>
              <li>✓ Store rarely used appliances away</li>
              <li>✓ Keep frequently used items easy to reach</li>
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