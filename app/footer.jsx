import Link from 'next/link';
import {
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
  FaGithub
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-left" data-aos="fade-right">
          © {new Date().getFullYear()} Hiron. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl" data-aos="fade-left">
          <Link
            href="https://www.linkedin.com/in/md-hiron-mia-872485214/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://wa.link/9z29aj"
            target="_blank"
            aria-label="WhatsApp"
            className="hover:text-cyan-400 transition"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://github.com/md-hiron"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
