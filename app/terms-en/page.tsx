import Head from 'next/head'

export default function PrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Privacy Policy - Depogro</title>
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last updated: January 30, 2025</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>At Depogro, we prioritize the privacy of our users and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information. By using our services, you agree to the practices described in this Privacy Policy.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>We collect the following types of personal data:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Personal Information: Name, last name, address, and phone number.</li>
            <li>Usage Data: Information such as IP address, browser type, time spent on pages, and other analytics to improve the service.</li>
          </ul>
          <p className="mt-2">We do not collect sensitive information like credit card details or conduct any online transactions through our platform.</p>
        </section>

        {/* Add the rest of the sections following the same structure */}
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us using the website form at www.depogro.com, or use the address or phone number below:</p>
          <p><strong>Address:</strong> Rue du Parc, Ariana 2036, Tunisie</p>
          <p><strong>Phone number:</strong> +216 71 123 456</p>
        </section>
      </div>
    </div>
  )
}
