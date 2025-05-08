import Head from 'next/head';
import Link from 'next/link';
import React from 'react';



export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <Head>
        <title>Contact Us | Orlando Roof Repair</title>
        <meta name="description" content="Get in touch with Orlando's top-rated roof repair team." />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>
      
          <form action="https://formspree.io/f/xeogkkjb" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
            <input type="text" name="phone" placeholder="Your Phone Number" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="How can we help?" required className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
          </form>
    </div>
  );
}