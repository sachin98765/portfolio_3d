import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[rgb(16,13,37)] text-white py-4 mt-8">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="mailto:your-email@example.com" className="hover:text-blue-400 transition-colors duration-300">
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
