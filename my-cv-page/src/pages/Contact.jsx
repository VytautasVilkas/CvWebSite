import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact() {
  const [animationError, setAnimationError] = useState(false);

  const contactInfo = {
    email: "Vytautas@Vilkas.lt",
    phone: "+370 60600856",
  };

  return (
    <section id="contact" className="py-12 flex items-center justify-center bg-white p-6">

      <div className="w-full max-w-xl bg-dark shadow-lg rounded-lg p-8 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact</h3>

        {/* Centered Lottie Animation */}
        {!animationError && (
          <div className="flex justify-center mb-6">
            <DotLottieReact
              src="https://lottie.host/5aaa5a52-c93b-4e4d-b1d1-0a7b8b43e29a/Lej3P4geOT.lottie"
              loop
              autoplay
              style={{ width: "180px", height: "180px" }}
              onError={() => setAnimationError(true)}
            />
          </div>
        )}

        <p className="text-gray-600 mb-6">Feel free to reach out for more information.</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gray-700">Email</h4>
            <p className="text-gray-900">{contactInfo.email}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-700">Phone</h4>
            <p className="text-gray-900">{contactInfo.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
