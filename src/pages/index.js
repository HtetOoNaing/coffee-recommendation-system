import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Banner Section */}
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/images/coffee-banner.jpeg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Discover Your Perfect Coffee</h1>
              <p className="text-xl mb-8">Personalized recommendations powered by AI</p>
              <Link href="/recommendation" className="bg-[#A53F3F] text-white py-3 px-6 rounded-full text-lg hover:opacity-85">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why You'll Love Our Recommendations</h2>
            <p className="text-lg mt-4">Explore the benefits of using our AI-powered coffee recommendation system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <Image src="/images/personalized.jpg" alt="Personalized Recommendations" width={400} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Personalized Recommendations</h3>
              <p>Our AI analyzes your preferences to suggest the best coffee for you.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <Image src="/images/flavors.jpg" alt="Discover New Flavors" width={400} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Discover New Flavors</h3>
              <p>Explore a variety of coffee flavors and find your new favorite.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <Image src="/images/community.jpg" alt="Join Our Community" width={400} height={300} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
              <p>Share your coffee experiences and learn from other coffee enthusiasts.</p>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}