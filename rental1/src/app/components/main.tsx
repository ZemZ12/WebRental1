import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";



export default function Main() {

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Name of Business for SEO</title>
        <meta name="" content="" />
      </Head>

      <main className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Example1</li>
            <li>Example1</li>
            <li>Example3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <form action="https://formspree.io/f/xeogkkjb" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
            <input type="text" name="phone" placeholder="Your Phone Number" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="How can we help?" required className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.575735729243!2d-81.37923678494578!3d28.538335482446825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77af3950ff3b3%3A0xaca8ea1a92b6de2!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1632324781104!5m2!1sen!2sus"
              width="100%" height="300"  loading="lazy"
              className="rounded border"
            ></iframe>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} BusinessName . All rights reserved.
      </footer>
    </div>
  );
}
