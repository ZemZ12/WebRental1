import Head from 'next/head';


export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <Head>
          <title>Our Roofing Services | Orlando Roof Repair</title>
          <meta name="description" content="Explore all roofing services we offer in the Orlando area." />
        </Head>

        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        
        </header>

        <ul className="list-disc list-inside space-y-2">
          <li>Shingle Roof Repairs</li>
          <li>Tile Roof Repairs</li>
          <li>Emergency Leak Fix</li>
          <li>Gutter Cleaning</li>
          <li>Roof Inspection</li>
        </ul>
      </div>
    </div>
  );
}