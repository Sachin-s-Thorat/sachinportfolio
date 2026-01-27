import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import {
  GithubIcon,
  LinkedinIcon,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black/40 backdrop-blur">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3 text-center md:text-left"
        >
          {/* Branding */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Sachin Thorat
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Full Stack Java Developer <br />
              Spring Boot • React • MySQL
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-white font-medium mb-3">
              Let’s Connect
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:sachin@email.com"
                className="text-gray-400 hover:text-white transition"
              >
                <EnvelopeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>
             Copyright © {currentYear}  Sachin Thorat. All rights reserved. {' '}
            <HeartIcon className="inline w-4 h-4 text-rose-500" />
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
