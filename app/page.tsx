// app/page.tsx
"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section */}
      <header className="bg-light/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-primary"
              >
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" fill="currentColor" />
                <rect x="11" y="6" width="2" height="12" fill="white" />
                <rect x="6" y="11" width="12" height="2" fill="white" />
              </svg>
              <span className="text-xl font-bold text-primary">Yvonne Müller</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-text hover:text-primary font-medium">
                Services
              </a>
              <a href="#projects" className="text-text hover:text-primary font-medium">
                Projects
              </a>
              <a href="#contact" className="text-text hover:text-primary font-medium">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        // app/page.tsx (Hero-Bereich)
<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-24">
  <div>
    <h1 className="text-5xl font-bold mb-6">
      <span className="text-accent">whY More...</span><br />
      Innovation, Precision, Human Touch
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Like a Swiss Army knife, I combine HR expertise, AI innovation, and gamification to solve complex challenges.
    </p>
    <a
      href="#contact"
      className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
    >
      Book a Free Strategy Call
    </a>
  </div>
  <div className="flex justify-center">
    <Image
      src="/profile-photo.jpg"
      alt="Yvonne Müller"
      width={400}
      height={400}
      className="rounded-lg shadow-xl object-cover"
      priority
    />
  </div>
</section>


        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center mb-12 text-primary">What I Do</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Strategic HR Consulting", desc: "Comprehensive HR strategies for modern organizations." },
      { title: "AI-driven Tools", desc: "Leverage AI to automate and optimize HR processes." },
      { title: "Gamification", desc: "Engage teams with creative, game-based learning solutions." },
    ].map((service) => (
      <div
        key={service.title}
        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-accent"
      >
        <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
        <p className="text-gray-600">{service.desc}</p>
      </div>
    ))}
  </div>
</section>


        {/* Contact */}
        <section id="contact" className="bg-light py-16 rounded-xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Let’s Work Together</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formsubmit.co Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form
                  action="https://formsubmit.co/y.a.mueller@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Contact Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yvonnesportfolio.vercel.app/thank-you" />
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-90 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Zeeg Widget */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-primary">Book a Call</h3>
                <div className="zeeg-inline-widget" style={{ minWidth: "100%", height: "600px" }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Zeeg Script (vor </body>) */}
      <script
        type="text/javascript"
        src="https://assets.zeeg.me/embed.min.js"
        data-user="yvonnemueller"
        data-event-type="consulting-call-with-yvonne"
        async
      ></script>
    </div>
  );
}
