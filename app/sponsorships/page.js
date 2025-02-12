"use react"
import React from 'react';
import SponsorsSection from '@/components/home/SponsorSection';
import HeroSection from '@/components/HeroSection';

const SponsorshipPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <HeroSection
        key={Math.random()}
        title="Sponsorship"
        imageUrl="/home/college-photo.jpeg"
      />
      {/* <SponsorsSection /> */}

      <div className='bg-white p-4 md:p-8 rounded-xl shadow-lg mb-8 animate-fade-in'>
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Call for Sponsors</h2>
          <p className="text-base md:text-lg mb-4">
            We invite your organisation to be part of the International Conference on Agriculture 2024 (ICA 24) being hosted in IIIT Delhi, India from 21 May – 24 May 2024.
          </p>
          <p className="text-base md:text-lg mb-4">
            ICA24 is the premier international conference in the area of agriculture and attracts hundreds of abstract submissions and interest from those throughout the agriculture field around the world.
          </p>
          <p className="text-base md:text-lg mb-4">
            The 2024 conference is anticipated to attract over 300 attendees from around the globe and we have a wide array of partnership opportunities available to suit your budget and ensure your brand has significant options for exposure throughout the event.
          </p>
          <p className="text-base md:text-lg mb-4">
            As a sponsor, you’ll have access to a captive audience of professionals from multiple industries, providing you with a unique opportunity to showcase your products and services.
          </p>
          <p className="text-base md:text-lg mb-4">
            To ensure that you secure the highest levels of exposure, we encourage you to confirm your sponsorship as early as possible. Don’t wait any longer, join us at ICA24 in marvellous Delhi and take your organisation to the next level!
          </p>
          <p className="text-base md:text-lg mb-4">
            As a sponsor, you will get a mention on the website, publicity emails, and posters. Please see below the last year's event coverage by various newspapers.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2">The benefits of sponsorship are the following:</h3>
          <ul className="list-disc list-inside text-base md:text-lg mb-6">
            <li>Maximum visibility during the pre-conference announcements and the conference.</li>
            <li>Development of familiarity with the innovation leaders of the agriculture automation field.</li>
            <li>One-to-one engagement opportunities with agriculture experts nationally and internationally.</li>
            <li>Early and in-depth exposure to ideas that will shape the future of agriculture-centric computation.</li>
            <li>Product and service demonstrations through a short oral conference talk and booth.</li>
            <li>Networking with soon-to-graduate students and informal contacts during the conference.</li>
            <li>Opportunities for collaboration with researchers from both academia and industry.</li>
            <li>Permanent presence on the ICA 2024 website and social media posts.</li>
          </ul>
        </section>
        
        <section className="bg-white p-4 md:p-8 rounded-xl shadow-lg animate-fade-in overflow-x-auto mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Sponsorship Tiers</h2>
          <div className="w-full overflow-x-auto scrollbar-thin">
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-lg">
              <thead>
                <tr className='bg-gray-100'>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Fund</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Complimentary Passes</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Table/Stall</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Website Branding</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Brochure Branding</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">Participation in Industry Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Diamond - 5 lacs</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Stall</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Gold - 3 lacs</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Table</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Silver - 1 lac</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">2</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Table</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">-</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Bronze - 50,000</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">1</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Table</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">-</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Contact Information</h2>
          <p className="text-base md:text-lg mb-4">
            For more details or inquiries about sponsorship, please contact:
          </p>
          <div className="text-base md:text-lg">
            <p><strong>Arjun Kumar</strong> - <a href="mailto:arjun@uavio.in" className="text-blue-600">arjun@uavio.in</a></p>
            <p><strong>Santosh Vipparthi</strong> - <a href="mailto:skvipparthi@iitrpr.ac.in" className="text-blue-600">skvipparthi@iitrpr.ac.in</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorshipPage;
