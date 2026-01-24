import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react' // Icons ke liye

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 1. Company / Project Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Store</h2>
          <p className="text-slate-400 text-sm">
            Building the future of e-commerce with modern tech stack and AI integration.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline decoration-blue-500 underline-offset-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* 3. Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all"><Github size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all"><Twitter size={20} /></a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
            <Mail size={16} /> <span>support@mystore.com</span>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
        <p>&copy; {currentYear} My Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer