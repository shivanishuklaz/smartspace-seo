const spaces = [
  {
    title: "Bedroom",
    description:
      "Smart storage and organization ideas to make your bedroom feel spacious, calm, and comfortable.",
    tips: ["Under-bed storage", "Vertical shelves", "Multi-purpose furniture"],
    link: "/spaces/bedroom",
  },
  {
    title: "Kitchen",
    description:
      "Make the most of limited kitchen space with practical organization and storage solutions.",
    tips: ["Wall-mounted storage", "Drawer organizers", "Compact appliances"],
    link: "/spaces/kitchen",
  },
  {
    title: "Living Room",
    description:
      "Create a cleaner and more spacious living room without compromising on comfort or style.",
    tips: ["Hidden storage", "Floating shelves", "Multi-functional furniture"],
    link: "/spaces/living-room",
  },
  {
    title: "Bathroom",
    description:
      "Simple ways to organize a small bathroom and keep everyday essentials within easy reach.",
    tips: ["Corner shelves", "Door organizers", "Wall-mounted baskets"],
    link: "/spaces/bathroom",
  },
  {
    title: "Home Office",
    description:
      "Build a productive workspace even when you have very limited room available.",
    tips: ["Vertical storage", "Cable management", "Foldable desks"],
    link: "/spaces/home-office",
  },
];

export default function Spaces() {
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
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            SmartSpace
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Smart ideas for every space.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore practical organization, storage, and space-saving ideas
            designed specifically for smaller homes.
          </p>
        </div>
      </section>

      {/* Spaces */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space) => (
              <a
                key={space.title}
                href={space.link}
                className="block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-xl">
                  ✦
                </div>

                <h2 className="text-2xl font-bold">{space.title}</h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {space.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Quick ideas
                  </p>

                  <ul className="space-y-2 text-sm text-gray-700">
                    {space.tips.map((tip) => (
                      <li key={tip}>✓ {tip}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-sm font-semibold">
                  Explore ideas →
                </p>
              </a>
            ))}
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