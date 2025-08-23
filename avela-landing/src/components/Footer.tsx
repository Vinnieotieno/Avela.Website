//
"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Security", href: "#" },
        { name: "Mobile App", href: "#" },
        { name: "Integrations", href: "#" }
      ]
    },
    {
      title: "For Employees",
      links: [
        { name: "Get Started", href: "#" },
        { name: "Advance Calculator", href: "#" },
        { name: "Financial Wellness", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      title: "For Employers",
      links: [
        { name: "Partner with Us", href: "#" },
        { name: "Enterprise Solutions", href: "#" },
        { name: "Implementation", href: "#" },
        { name: "ROI Calculator", href: "#" },
        { name: "Case Studies", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Investors", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
  ]

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hello@avela.co.ke" },
    { icon: <Phone className="w-4 h-4" />, text: "+254-700-AVELA" },
    { icon: <MapPin className="w-4 h-4" />, text: "Nairobi, Kenya" }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0081cc]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Stay Updated with
                  <span className="bg-gradient-to-r from-[#0081cc] to-blue-400 bg-clip-text text-transparent"> Avela</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get the latest updates on new features, financial wellness tips, and exclusive offers 
                  delivered straight to your inbox.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0081cc] focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-[#0081cc] to-blue-600 hover:from-[#006bb3] hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap">
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-500 text-sm">
                  No spam, unsubscribe at any time. By subscribing, you agree to our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0081cc] to-blue-400 bg-clip-text text-transparent mb-4">
                  Avela
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Empowering the modern workforce with instant access to earned wages. 
                  We're building a more financially inclusive future, one paycheck at a time.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-400">
                    <div className="text-[#0081cc]">
                      {info.icon}
                    </div>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-[#0081cc] text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="font-semibold text-white text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#0081cc] transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
                <span>© {currentYear} Avela. All rights reserved.</span>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-[#0081cc] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#0081cc] transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-[#0081cc] transition-colors">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>All systems operational</span>
                </div>
                <span>•</span>
                <span>CBK Compliant</span>
                <span>•</span>
                <span>M-Pesa Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}