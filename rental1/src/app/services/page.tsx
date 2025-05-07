import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <Head>
        <title>Our Roofing Services | Orlando Roof Repair</title>
        <meta name="description" content="Explore all roofing services we offer in the Orlando area." />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <Link href="/" className="text-blue-600 underline">← Back to Home</Link>
      </header>

      <ul className="list-disc list-inside space-y-2">
        <li>Shingle Roof Repairs</li>
        <li>Tile Roof Repairs</li>
        <li>Emergency Leak Fix</li>
        <li>Gutter Cleaning</li>
        <li>Roof Inspection</li>
      </ul>
    </div>
  );
}