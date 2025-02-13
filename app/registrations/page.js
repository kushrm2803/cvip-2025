import React from 'react';
import HeroSection from '@/components/HeroSection';

const data = [
    {
      duration: "Early Bird Registration (Till November 05, 2025)",
      rows: [
        {
          category: "Student Author Registration Fee - IAPR/IUPRAI Member",
          indian: "INR 9440",
          foreign: "USD 250",
        },
        {
          category: "Student Author Registration Fee - Non IAPR/IUPRAI Member",
          indian: "INR 10620",
          foreign: "USD 300",
        },
        {
          category: "Author Registration Fee (Academic) - IAPR/IUPRAI Member",
          indian: "INR 11800",
          foreign: "USD 350",
        },
        {
          category: "Author Registration Fee (Academic) - Non IAPR/IUPRAI Member",
          indian: "INR 12980",
          foreign: "USD 400",
        },
        {
          category: "Author Registration Fee (Industry) - IAPR/IUPRAI Member",
          indian: "INR 12980",
          foreign: "USD 400",
        },
        {
          category: "Author Registration Fee (Industry) - Non IAPR/IUPRAI Member",
          indian: "INR 14160",
          foreign: "USD 450",
        },
        {
          category: "Non-Author Registration Fee",
          indian: "INR 5900",
          foreign: "USD 200",
        },
      ],
    },
    {
      duration: "Late Registration (After November 05, 2025)",
      rows: [
        {
          category: "Student Author Registration Fee - IAPR/IUPRAI Member",
          indian: "INR 10620",
          foreign: "USD 300",
        },
        {
          category: "Student Author Registration Fee - Non IAPR/IUPRAI Member",
          indian: "INR 11800",
          foreign: "USD 350",
        },
        {
          category: "Author Registration Fee (Academic) - IAPR/IUPRAI Member",
          indian: "INR 12980",
          foreign: "USD 400",
        },
        {
          category: "Author Registration Fee (Academic) - Non IAPR/IUPRAI Member",
          indian: "INR 14160",
          foreign: "USD 450",
        },
        {
          category: "Author Registration Fee (Industry) - IAPR/IUPRAI Member",
          indian: "INR 14160",
          foreign: "USD 450",
        },
        {
          category: "Author Registration Fee (Industry) - Non IAPR/IUPRAI Member",
          indian: "INR 15340",
          foreign: "USD 500",
        },
        {
          category: "Non-Author Registration Fee",
          indian: "INR 7080",
          foreign: "USD 250",
        },
      ],
    },
    {
      duration: "Onsite Registration",
      rows: [
        {
          category: "Author/Non-Author Registration Fee",
          indian: "INR 15340",
          foreign: "USD 500",
        },
      ],
    },
    {
      duration: "Additional Charges",
      rows: [
        {
          category: "Charges for Additional Pages (per page)",
          indian: "INR 2400",
          foreign: "USD 30",
        },
      ],
    },
  ];

const registrations = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-2 md:p-12">
      <HeroSection
        key={Math.random()}
        title="Registrations"
        imageUrl="/home/college-photo.jpeg"
      />
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
      <ul className="list-disc list-inside text-base">
        <li>
            <span className="font-normal">
            Registration and camera-ready submission portals open (Round 1):
            </span>
            <span className="text-red-600 ml-2">July 05, 2025</span>
        </li>
        <li>
            <span className="font-normal">
            Deadline for camera-ready submission (Round 1):
            </span>
            <span className="text-red-600 ml-2">August 01, 2025</span>
        </li>
        <li>
            <span className="font-normal">
            Deadline for early bird registration (Round 1):
            </span>
            <span className="text-red-600 ml-2">August 01, 2025</span>
        </li>
        </ul>
        <h2 className="pt-4 text-2xl font-semibold mb-4">Registration Instructions</h2>
      <ol className="list-decimal list-inside text-lg mb-6 space-y-2">
        <li>
          Registration fees is to be paid at the following link:{" "}
          <a href="#" className="text-blue-600 underline">
            Payment Link
          </a>
        </li>
        <li>
          Please select payment category as CVIP 2025 and enter your paper ID in the remarks.
        </li>
        <li>After making payment, kindly take a print/screenshot of your registration receipt.</li>
        <li>
          Once the registration fee is paid, fill in the{" "}
          <a href="#" className="text-blue-600 underline">
            Registration Form
          </a>{" "}
          and upload the receipt.
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4">Single Conference Registration Includes</h3>
      <ul className="list-disc list-inside text-lg mb-6 space-y-2">
        <li>All CVIP 2025 conference sessions</li>
        <li>All keynote and invited talks</li>
        <li>Refreshments and lunch (Dec 19-21, 2025)</li>
        <li>Conference dinner</li>
        <li>Conference kit with stationery</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Please Note the Following Conditions Before Registering</h3>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>
          Registration form is available at{" "}
          <a href="#" className="text-blue-600 underline">
            Registration Form
          </a>
        </li>
        <li>
          At least one author for an accepted paper is compulsory to register and present the paper to be included in the
          conference proceedings.
        </li>
        <li>
          In case of Student Author, a valid proof of being a student must be uploaded during registration.
        </li>
        <li>
          In case of IAPR or IUPRAI Members, a valid proof must be uploaded during registration.
        </li>
        <li>
          An author can present another paper at a reduced fee @ 50% of the original registration fee; i.e., the total
          registration fee will be 1.5 times the registration fee of one paper. This discount applies only for additional
          papers presented by the same author.
        </li>
        <li>
          If the final manuscript in Springer format exceeds 15 pages, an additional INR 2400 or USD 30 will be charged for
          each extra page.
        </li>
        <li>
          Onsite registration will be available on the days of the conference (Dec 19-21, 2025) starting from 8:30 A.M. at
          the conference venue.
        </li>
      </ul>
      {/* table */}
      <p className='text-lg mt-8 mb-2 space-y-2'>The registration categories and the corresponding charges are shown in the table below

</p>
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 text-black -700">
            <th className="border px-6 py-4 w-1/4">Duration</th>
            <th className="border px-4 py-4 w-1/2">Category</th>
            <th className="border px-4 py-4">Indian Delegates</th>
            <th className="border px-4 py-4">Foreign Delegates</th>
          </tr>
        </thead>
        <tbody>
          {data.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {section.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {/* Only render the Duration cell on the first row of each section, with rowSpan covering all rows */}
                  {rowIndex === 0 && (
                    <td
                      rowSpan={section.rows.length}
                      className="border px-6 py-3 align-top bg-gray-50 font-semibold"
                    >
                      {section.duration}
                    </td>
                  )}
                  <td className="border px-6 py-3">{row.category}</td>
                  <td className="border px-6 py-3">{row.indian}</td>
                  <td className="border px-6 py-3">{row.foreign}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
        {/* notes */}
        <h3 className="text-3xl font-semibold my-4 text-gray-800">Notes</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>18% GST</strong> is included in the registration fee given above.
        </li>
        <li>
          <strong>USD conversion rate</strong> is considered at INR 83 for the payment of registration fees.
        </li>
        <li>
          You must upload the final camera-ready submission before you register your paper and pay the registration fee.
        </li>
        <li>
          Camera-ready paper submission details can be found at the link below:{" "}
          <a href="#" className="text-blue-600 underline">
            Camera Ready Submission
          </a>
        </li>
        <li>
          The final camera-ready manuscript submission (Round 1) deadline is <strong>August 01, 2025</strong>.
        </li>
        <li>
          For accommodation details, please see the <strong>accommodation section</strong>.
        </li>
        <li>
          We do not entertain <strong>cancellation of registrations</strong>, and no refunds will be provided.
        </li>
      </ul>


      </div>
    </div>
  );
};

export default registrations;
