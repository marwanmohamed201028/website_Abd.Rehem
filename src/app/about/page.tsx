import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Abd Rehem
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              We believe in creating premium clothing that combines style, comfort, and quality 
              for the modern lifestyle. Our mission is to deliver exceptional value through 
              craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded with a passion for quality clothing, Abd Rehem emerged from the simple 
                belief that everyone deserves to wear clothes that make them feel confident 
                and comfortable.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We started with a small collection of carefully designed shirts and hoodies, 
                each piece crafted with attention to detail and made from premium materials 
                that stand the test of time.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our collection while maintaining our commitment 
                to quality, sustainability, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Abd Rehem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every piece is made from premium materials 
                and crafted to last.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices and responsible sourcing 
                to minimize our environmental impact.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help you find 
                the perfect clothing for your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To provide premium quality clothing that empowers people to look and feel 
                their best every day. We believe that great clothing should be accessible, 
                durable, and environmentally responsible.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We're constantly innovating to bring you the latest trends while maintaining 
                our commitment to timeless quality and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    <strong>Premium Materials:</strong> Only the finest fabrics and materials
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    <strong>Craftsmanship:</strong> Attention to detail in every stitch
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    <strong>Sustainability:</strong> Environmentally conscious practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-600">
                    <strong>Customer Satisfaction:</strong> Exceptional service and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Abd Rehem who are dedicated to bringing you 
              the best clothing experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-green-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with 15+ years in fashion industry
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-green-600 mb-2">Head Designer</p>
              <p className="text-gray-600 text-sm">
                Creative genius behind our iconic designs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-green-600 mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Ensuring quality and efficiency in every process
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}