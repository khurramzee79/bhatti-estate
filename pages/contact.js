import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-center mb-8">Contact Bhatti Estate</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-gray-600">Whether you are buying, selling, or looking for construction services, our team is ready to assist you.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="font-bold">Address:</div>
                <div>Malir Cantt, Karachi, Pakistan<br/>(Office details to be added)</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="font-bold">Phone:</div>
                <div>0300 233 4448<br/>0335 233 4448</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="font-bold">Email:</div>
                <div>info@bhattiestate.com</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <input type="text" name="name" className="w-full border p-2 rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input type="email" name="email" className="w-full border p-2 rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea name="message" className="w-full border p-2 rounded h-32" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}