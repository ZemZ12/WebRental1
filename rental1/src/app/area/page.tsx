import Head from 'next/head';
import Link from 'next/link';

export default function Area() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <Head>
        <title>Service Areas | Orlando Roof Repair</title>
        <meta name="description" content="We serve all neighborhoods around Orlando. See if we cover your area." />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Service Areas</h1>
      </header>

      <ul className="list-disc list-inside space-y-2">
        <li>Example</li>
        <li>Example</li>
        <li>Example</li>
        <li>Example</li>
        <li>Example</li>
        <li>Example</li>
      </ul>
    </div>
  );
}