'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react' 

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS integration - replace with your service details
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_IHRE_SERVICE_ID',
          template_id: 'template_IHRE_TEMPLATE_ID', 
          user_id: 'IHRE_PUBLIC_KEY',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'y.a.mueller@gmail.com'
          }
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <header className="bg-white/95 backdrop-blur-sm shadow-md border-b border-stone-200">
        <div className="max-w-full mx-auto px-8 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-red-600">
                  <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" fill="currentColor"/>
                  <rect x="11" y="6" width="2" height="12" fill="white"/>
                  <rect x="6" y="11" width="12" height="2" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-stone-800">Yvonne Müller</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">About</a>
              <a href="#services" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Services</a>
              <a href="#projects" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Projects</a>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <div className="bg-white/40 backdrop-blur-sm mx-8 my-6 rounded-2xl shadow-lg border border-white/50">
        <section className="py-8 px-8">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              
              <div className="lg:col-span-1 bg-gradient-to-br from-stone-600 to-amber-700 text-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 border-b border-white/30 pb-4">My Approach</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-base">
                    I combine analytical thinking with creativity and human understanding.
                  </p>
                  <p className="leading-relaxed text-base">
                    Whether it is building a career center from scratch, enhancing processes with gamification, or integrating AI into HR tools, my focus is on making innovation serve people and organizations.
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mt-6">
                    <p className="font-semibold italic text-center text-base">
                      Keep it smart, keep it human, and add just enough curiosity to keep things interesting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex justify-center">
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          src="/profile-photo.jpg"
                          alt="Yvonne Müller"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      <h1 className="text-4xl font-bold text-stone-900">
                        Yvonne Müller
                      </h1>
                      <h2 className="text-xl text-stone-700 font-semibold leading-tight">
                        Your Swiss Army Knife for HR, Communication and AI-powered Solutions
                      </h2>
                      <p className="text-lg text-stone-700 italic bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-stone-200">
                        Keep it smart. Keep it human. And always keep a Swiss Army knife handy.
                      </p>
                      <p className="text-base text-stone-700 leading-relaxed">
                        With over 15 years of experience in Human Resources, I bring the versatility, precision, 
                        and reliability of a Swiss Army knife. I am a communicator, organizer, and innovator who 
                        thrives on transforming challenges into opportunities.
                      </p>
                      
                      <div className="flex flex-col gap-3">
                        
                      <a href="#contact"
                          className="bg-gradient-to-r from-stone-600 to-amber-700 text-white px-6 py-3 rounded-lg hover:from-stone-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                        >
                          Get in Touch
                        </a>
                        
                        <a href="https://www.linkedin.com/in/yvonnemueller/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-stone-600 text-stone-700 px-6 py-3 rounded-lg hover:bg-stone-600 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                          <span>🔗</span>
                          <span>LinkedIn</span>
                        </a>
                        
                        <a href="https://medium.com/@y.a.mueller"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-amber-700 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                          <span>📝</span>
                          <span>Medium Articles</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-stone-900 mb-6">Highlights</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">15+ years of HR expertise across Switzerland and international markets</p>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">Led projects in executive search, career development, and organizational transformation</p>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">Designed and implemented eLearning modules and gamified onboarding processes</p>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">Advanced skills in AI applications for HR, including data analytics and tool development</p>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">Recognized for strong communication, facilitation, and cross-functional collaboration</p>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-stone-200">
                        <div className="w-6 h-6 bg-gradient-to-r from-stone-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-stone-800 font-medium leading-relaxed text-base">Known to bring structure into chaos and sometimes even a smile into complex projects</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl border-l-4 border-amber-700 shadow-md">
                      <p className="text-stone-700 text-base">
                        <span className="font-bold text-amber-800">Fun fact:</span> I once turned an onboarding trail into a gamified adventure that people still talk about.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-8 px-8 border-t border-stone-200">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">Strategic HR Consulting and Talent Development</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Comprehensive HR strategies that align with your business goals</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">Organizational Design and Change Management</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Streamline your organization for maximum efficiency and growth</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">Executive Search and Stakeholder Engagement</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Find and engage the right talent for your leadership team</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">eLearning Design and Gamification</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Make learning engaging through innovative gamification approaches</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">AI-driven Tools and Data Analytics</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Leverage AI and data to make informed HR decisions</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight">Communication and Workshop Facilitation</h3>
                <p className="text-stone-700 font-medium text-base leading-relaxed">Expert facilitation and communication strategies</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-8 px-8 border-t border-stone-200">
          <div className="max-w-full mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-8">Project Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-tight">Websites</h3>
                <p className="text-stone-700 mb-4 font-medium text-base leading-relaxed">Custom web solutions for various clients</p>
                <button className="text-amber-700 hover:text-amber-900 font-semibold flex items-center space-x-1 transition-colors">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-tight">AI-Generated Tools</h3>
                <p className="text-stone-700 mb-4 font-medium text-base leading-relaxed">Including games, job scrapers, and automation tools</p>
                <button className="text-amber-700 hover:text-amber-900 font-semibold flex items-center space-x-1 transition-colors">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-tight">PSI Trail and QR Scanner</h3>
                <p className="text-stone-700 mb-4 font-medium text-base leading-relaxed">Digitalization of assessment processes with QR technology</p>
                <button className="text-amber-700 hover:text-amber-900 font-semibold flex items-center space-x-1 transition-colors">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-tight">CV Creation E-Learning</h3>
                <p className="text-stone-700 mb-4 font-medium text-base leading-relaxed">Interactive learning modules for resume building</p>
                <button className="text-amber-700 hover:text-amber-900 font-semibold flex items-center space-x-1 transition-colors">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200 hover:border-amber-400">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 leading-tight">PDF Work Platform</h3>
                <p className="text-stone-700 mb-4 font-medium text-base leading-relaxed">Comprehensive platform for PDF manipulation and processing</p>
                <button className="text-amber-700 hover:text-amber-900 font-semibold flex items-center space-x-1 transition-colors">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* New Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 mx-8 mb-6 rounded-2xl shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring structure, creativity, and Swiss precision to your project? 
              I bring the mindset of a builder, the skills of a communicator, and the agility of a problem-solver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-amber-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">Fill out the contact form and I'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-amber-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Switzerland - Available for remote work worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-amber-600 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Expertise</p>
                      <p className="text-gray-600">HR Strategy, AI Integration, Process Optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-700 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-semibold mb-6">
                  What I bring to your team:
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <span>15+ years of HR expertise across international markets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <span>Swiss precision and reliability in project delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <span>AI and automation implementation experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <span>Creative problem-solving with structured approach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Project collaboration, consultation, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help bring structure and innovation to your team..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 transition-colors font-medium text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 text-green-600">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                      </span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 text-red-600">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-red-800">
                        Something went wrong. Please try again or contact me through LinkedIn.
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 text-white py-6 px-8 mx-8 mb-6 rounded-b-2xl shadow-lg">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 relative">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-red-500">
                  <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" fill="currentColor"/>
                  <rect x="11" y="6" width="2" height="12" fill="white"/>
                  <rect x="6" y="11" width="12" height="2" fill="white"/>
                </svg>
              </div>
              <span className="text-lg font-semibold">Yvonne Müller</span>
            </div>
            <div className="text-stone-400">
              © 2025 Yvonne Müller. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}