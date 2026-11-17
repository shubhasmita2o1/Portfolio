export function Navbar() {
  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="flex items-center justify-between px-6 md:px-11 lg:px-14 py-7">
        <span className="text-[14px] md:text-[15px] font-medium tracking-tight text-[#524d47] font-editorial">
          Web Developer &amp; Designer
        </span>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-8 text-[14px] md:text-[15px] font-medium tracking-tight text-[#524d47] font-editorial">
            <li>
              <a href="#Services" className="hover:text-black transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#Works" className="hover:text-black transition-colors">
                Works
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-black transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-black transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
