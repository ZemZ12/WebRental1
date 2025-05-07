import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <Head>
        <title>Contact Us | Orlando Roof Repair</title>
        <meta name="description" content="Get in touch with Orlando's top-rated roof repair team." />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <Link href="/" className="text-blue-600 underline">← Back to Home</Link>
      </header>

      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 max-w-md">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}