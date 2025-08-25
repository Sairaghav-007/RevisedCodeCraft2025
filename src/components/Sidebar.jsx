import { useState} from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={toggleNav}
        className="lg:hidden transition-all duration-300 hover:text-[#5F85DB] text-white hover:scale-105 active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          className="w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>

      <nav className="hidden lg:flex text-xl text-white font-bold space-x-10 pr-2">
        {["home", "prize", "domain", "contact", "instruction"].map(
          (section) => (
            <button
              key={section}
              className="transition-all duration-300  hover:scale-125 hover:-translate-y-1 active:scale-95 hover:text-blue-500"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          )
        )}
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-black backdrop-blur-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={toggleNav}
            className="transition-all duration-300 hover:text-white text-white hover:scale-125 active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.0"
              stroke="currentColor"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className=" text-5xl pb-32 bg-black h-screen text-white font-bold flex flex-col items-center justify-center gap-10  ">
          {["home", "prize", "domain", "contact", "instruction"].map(
            (section) => (
              <button
                key={section}
                className="transition-all duration-300 hover:scale-125 active:scale-95 hover:text-white"
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
