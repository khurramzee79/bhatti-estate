import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const siteTitle = "Bhatti Estate & Builders";
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDesc = description || "Find your dream property in Malir Cantt and Askari with Bhatti Estate.";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@500;700&display=swap" />
      </Head>
      <div className="flex flex-col min-h-screen font-sans text-secondary">
        <Navbar />
        <main className="flex-grow bg-neutral">{children}</main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/923002334448?text=Hi%20Bhatti%20Estate,%20I%20am%20interested%20in%20a%20property."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center gap-2"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
          <span className="font-bold hidden md:inline">Chat with us</span>
        </a>
      </div>
    </>
  );
}