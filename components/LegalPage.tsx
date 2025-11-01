import React from 'react';

interface LegalPageProps {
  navigateTo: (page: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ navigateTo }) => {
  return (
    <section className="py-24 pt-40 bg-[#1a202c]">
      <div className="container mx-auto px-6 text-gray-300 max-w-4xl">
        <button onClick={() => navigateTo('main')} className="mb-8 text-blue-400 hover:text-blue-300 transition-colors">
          &larr; Back to main page
        </button>

        <h1 className="text-4xl font-extrabold text-white mb-8">Terms and Conditions & Cookie Policy</h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Terms and Conditions</h2>
            <div className="space-y-4 prose prose-invert text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
              <p>Welcome to the Avance Global Basketball Cup website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, you must not use our website.</p>
              
              <h3 className="text-xl font-semibold text-white">1. Intellectual Property</h3>
              <p>The content of this site, including text, graphics, logos, and images, is the property of AVANCE Global and is protected by copyright laws. Unauthorized reproduction, distribution, or modification of any material without our prior written consent is prohibited.</p>

              <h3 className="text-xl font-semibold text-white">2. Website Use</h3>
              <p>This website is for informational purposes about the Avance Global Cup 2026 event. You agree not to use the site for any unlawful purpose or in any way that could harm the reputation of the event or its organizers.</p>

              <h3 className="text-xl font-semibold text-white">3. Disclaimer of Liability</h3>
              <p>The information on this website is provided "as is," without any warranties. While we strive to keep the information up-to-date and correct, we do not guarantee its completeness or accuracy. AVANCE Global will not be liable for any loss or damage arising from the use of this site.</p>

              <h3 className="text-xl font-semibold text-white">4. Governing Law</h3>
              <p>These terms and conditions will be governed by and construed in accordance with the laws of Spain, and any disputes will be subject to the exclusive jurisdiction of the courts of Málaga.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Cookie Policy</h2>
            <div className="space-y-4 prose prose-invert text-gray-300">
              <p>This website uses cookies to enhance your user experience. A cookie is a small text file stored on your browser.</p>
              
              <h3 className="text-xl font-semibold text-white">1. What cookies do we use?</h3>
              <p><strong>Essential Cookies:</strong> We use cookies that are strictly necessary for the website to function. For example, we use a cookie to remember your consent to our cookie policy.</p>
              <p><strong>Third-Party Cookies:</strong> We do not currently use analytics, marketing, or other third-party cookies. If this changes in the future, we will update this policy.</p>

              <h3 className="text-xl font-semibold text-white">2. How to manage cookies?</h3>
              <p>When you first visit our site, you will be presented with a cookie consent banner. You can accept the use of cookies to hide this banner on future visits. You can also manage and delete cookies through your web browser settings. Please note that disabling essential cookies may affect the site's functionality.</p>
              
              <h3 className="text-xl font-semibold text-white">3. Contact</h3>
              <p>If you have any questions about our terms or cookie policy, you can contact us using the information provided in the contact section of this website.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;