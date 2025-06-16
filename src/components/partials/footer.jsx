const Footer = () => (
  <footer className="mt-12 py-6 px-6 bg-white/7 rounded-lg flex flex-col items-center gap-2 text-white">
    <div className="flex gap-6 text-xl">
      <a
        href="https://github.com/Kumar-Sahani200"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white-400 transition-colors"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github"></i> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/kumar-sahani/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white-500 transition-colors"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <a
        href="https://www.instagram.com/schrodinger_mind/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        aria-label="Instagram"
      >
        <i className="fa-brands fa-instagram"></i> Instagram
      </a>
      <a
        href="https://sahani.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        aria-label="Personal Website"
      >
        <i className="fa-solid fa-globe"></i> Personal Website
      </a>
    </div>
    <div className="text-xs text-gray-300 mt-2">
      &copy; {new Date().getFullYear()} Kumar Sahani
      <span className=""> 🍻</span>
    </div>
  </footer>
);

export default Footer;
