import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  const navItems = ['Features', 'Pricing', 'Blogs', 'AboutUs', 'Contact'];
  const navIds: string[] = ['features', 'pricing', 'blogs', 'aboutus', 'contact'];

  // Scroll to section by id
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#101914] w-full pt-12 pb-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Logo and Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="EmailGigga Logo" className="w-7 h-7" />
            <span className="text-white font-semibold text-lg">EmailGigga</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
          {navItems.map((item, idx) => (
            <a key={item} onClick={() => handleNavClick(navIds[idx])} className="text-white text-sm hover:text-[var(--darkGreenColor)] transition cursor-pointer">
              {item}
            </a>
          ))}
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/Tuba282" target="_blank" aria-label="Twitter" className="text-white hover:text-[var(--darkGreenColor)] transition">
            <FaGithubSquare size={25}/></a>
          <a href="https://www.linkedin.com/in/tuba-jan-10b0a12b5/" target="_blank" aria-label="LinkedIn" className="text-white hover:text-[var(--darkGreenColor)] transition">
            <FaLinkedin size={25}/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="text-white hover:text-[var(--darkGreenColor)] transition">
            <RiInstagramFill size={25}/>
          </a>
        </div>
      </div>
      {/* SemiFooter */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col items-center">
          <span className="text-gray-400 text-xs">EmailGigga (c) {currentYear} Made by | Tuba Jan</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer