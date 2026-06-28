import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold mb-6">
          College Discovery Platform
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Discover, Compare and Save Colleges Across India
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/colleges"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Explore Colleges
          </Link>

          <Link
            href="/compare"
            className="border px-6 py-3 rounded-lg"
          >
            Compare Colleges
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="border rounded-xl p-6">
          <h2 className="text-4xl font-bold">35+</h2>
          <p>Colleges</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-4xl font-bold">15+</h2>
          <p>Cities</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-4xl font-bold">7</h2>
          <p>Categories</p>
        </div>
      </section>
    </main>
  );
}