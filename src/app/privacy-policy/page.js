'use client';
import { SlideUp } from '@/components/animations'
import Image from 'next/image';
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <main>
        <SlideUp>
        <section className="relative justify-center bg-[#FDF9F6] flex flex-col items-center md:h-[220px] md:top-[65] h-[180px] top-[50]">
          <SlideUp delay={0.4}>
            <div className="text-center pb-4 md:pb-0">
              <span className="text-[#22252e] font-bold text-[20px]">
                • Home
              </span>
              <span className="mx-2">—</span>
              <span className="text-[#5c5f68] font-normal text-[20px]">
                Privacy Policy
              </span>
            </div>
          </SlideUp>
        </section>
      </SlideUp>

      <section className=" no-negative-margin">
        <SlideUp delay={0.8}>
          <div className="container mx-auto">
            <div className="relative w-full md:h-[460px] h-[265px]">
              <Image
                src="/assets/privacy-policy.png"
                alt="Hero-img"
                fill
                priority
              />
            </div>
            <div className="z-20 flex text-center items-center justify-center relative p-[10px] -mt-12 mx-2 md:mx-[80px]  md:p-12 bg-white/80 backdrop-filter backdrop-blur-[14px] bg-opacity-80">
              <h2 className="text-center project-overview-title mobile-title max-w-[800px]">
                Privacy{" "}
                <span className="orange-color">Policy</span>
              </h2>
            </div>
          </div>
        </SlideUp>
          </section>
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  
                  {/* Introduction */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">1. Introduction</h3>
                    <p className="text-[#5c5f68] mb-4">
                      Thank you for visiting our Website.
                    </p>
                    <p className="text-[#5c5f68] mb-4">
                      The Privacy Policy tells you how we use the information collected on this Website. Please read the same carefully before using the Website or submitting any personal information. By using the Website, you are accepting the practices described in this Privacy Policy. The Policies may be reviewed and changed from time to time, which shall be posted and changes will only apply to activities and information on a subsequent basis and not on retroactive basis. You are encouraged to review the Privacy Policy whenever you visit the site to make sure that you have understood how the information you provide will be put to use.
                    </p>
                    <p className="text-[#5c5f68] mb-4">
                      <strong>Please Note:</strong> The practices set forth herein are for this Website only. If you navigate to other Websites, please review the privacy policies posted at those sites.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">2. Information We Collect</h3>
                    <p className="text-[#5c5f68] mb-4">
                      We may collect the following types of personal data:
                    </p>
                    <ul className="list-disc pl-6 text-[#5c5f68] space-y-2">
                      <li><strong>Contact Information:</strong> We may collect your name, email address, phone number, and postal address.</li>
                      <li><strong>Transaction Data:</strong> Information about your property transactions with us.</li>
                      <li><strong>Usage Data:</strong> Information about your use of our website and other digital platforms.</li>
                      <li><strong>Technical Data:</strong> Information about your device, IP address, browser, and software.</li>
                      <li>Your reviews, feedback and opinions about our products, programmes, and services.</li>
                      <li><strong>Other information:</strong> Age, sex, date of birth, marital status, nationality, occupation or any other personal information provided by you.</li>
                    </ul>
                  </div>

                  {/* How We Use Your Information */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">3. How We Use Your Information</h3>
                    <p className="text-[#5c5f68] mb-4">
                      We use your personal data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 text-[#5c5f68] space-y-2">
                      <li>To provide services and information you request.</li>
                      <li>To process property transactions.</li>
                      <li>To communicate with you about our services, offers, and updates, through email, SMS, social media channels and any other means of communication platforms.</li>
                      <li>To improve our digital platforms and services.</li>
                      <li>To comply with legal obligations.</li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">4. Data Security</h3>
                    <p className="text-[#5c5f68] mb-4">
                      We take reasonable steps to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, please note that no data transmission over the internet can be guaranteed to be entirely secure.
                    </p>
                  </div>

                  {/* Sharing Your Information */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">5. Sharing Your Information</h3>
                    <p className="text-[#5c5f68] mb-4">
                      We may share your personal data with:
                    </p>
                    <ul className="list-disc pl-6 text-[#5c5f68] space-y-2">
                      <li>Service providers and business partners to fulfill your requests.</li>
                      <li>Legal authorities and regulators as required by law.</li>
                    </ul>
                  </div>

                  {/* Your Rights */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">6. Your Rights</h3>
                    <p className="text-[#5c5f68] mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 text-[#5c5f68] space-y-2">
                      <li>Access and request a copy of your personal data.</li>
                      <li>Correct any inaccuracies in your personal data.</li>
                      <li>Withdraw your consent where applicable.</li>
                      <li>Request erasure of your personal data.</li>
                      <li>Object to the processing of your personal data.</li>
                    </ul>
                  </div>

                  {/* Cookie Policy */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#22252e] mb-4">7. Cookie Policy</h3>
                    <p className="text-[#5c5f68] mb-4">
                      Our digital platforms may use cookies to enhance your experience. You can manage your cookie preferences in your browser settings.
                    </p>
                  </div>

                                     {/* Contact Us */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">8. Contact Us</h3>
                     <p className="text-[#5c5f68] mb-4">
                       If you have any questions or concerns about this Policy or your personal data, please contact us at{' '}
                       <a href="mailto:marketing@alcoverealty.in" className="text-[#ff6b35] hover:underline">
                         marketing@alcoverealty.in
                       </a>
                     </p>
                   </div>

                 </div>
               </div>
             </div>
           </section>

           {/* Terms of Use Section */}
           <section className="">
             <div className="container mx-auto px-4 md:px-8">
               <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-12">
                   <h2 className="project-overview-title mobile-title">
                     <span className="orange-color">Terms</span> of Use
                   </h2>
                 </div>
                 
                 <div className="prose prose-lg max-w-none">
                   
                   {/* Acceptance of Terms */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">1. Acceptance of Terms</h3>
                     <p className="text-[#5c5f68] mb-4">
                       By using our digital platforms, you agree to comply with these Terms of Use. If you do not agree with these terms, please do not use our services.
                     </p>
                   </div>

                   {/* Use of Services */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">2. Use of Services</h3>
                     <p className="text-[#5c5f68] mb-4">
                       You may use our digital platforms for lawful purposes only. You agree not to engage in any activity that violates applicable laws or infringes upon the rights of others.
                     </p>
                   </div>

                   {/* Intellectual Property */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">3. Intellectual Property</h3>
                     <p className="text-[#5c5f68] mb-4">
                       All content on our digital platforms, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use this content without our written consent.
                     </p>
                   </div>

                   {/* Third-Party Links */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">4. Third-Party Links</h3>
                     <p className="text-[#5c5f68] mb-4">
                       Our digital platforms may contain links to third-party websites. We are not responsible for the content or practices of these websites and encourage you to review their respective privacy policies and terms of use.
                     </p>
                   </div>

                   {/* Disclaimer */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">5. Disclaimer</h3>
                     <p className="text-[#5c5f68] mb-4">
                       We provide information on our digital platforms for general informational purposes only. We do not guarantee the accuracy or completeness of this information.
                     </p>
                   </div>

                   {/* Limitation of Liability */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">6. Limitation of Liability</h3>
                     <p className="text-[#5c5f68] mb-4">
                       We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our digital platforms.
                     </p>
                   </div>

                   {/* Governing Law */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">7. Governing Law</h3>
                     <p className="text-[#5c5f68] mb-4">
                       These Terms of Use are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, India.
                     </p>
                   </div>

                   {/* Changes to Terms */}
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-[#22252e] mb-4">8. Changes to Terms</h3>
                     <p className="text-[#5c5f68] mb-4">
                       We may update these Terms of Use from time to time. Please review them periodically to stay informed of any changes.
                     </p>
                   </div>

                 </div>
               </div>
             </div>
           </section>
    </main>
  )
}

export default PrivacyPolicy;