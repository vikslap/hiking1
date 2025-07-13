import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import heroImg from "../assets/splash.png";

export default function SidebarWrapper({ children }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/plan", label: "Plan Your Hike" },
    // Add more routes as needed
  ];

  return (
    <div className="relative min-h-screen bg-white font-public text-gray-800 overflow-x-hidden">
      {/* Hamburger */}
      <button
        ref={buttonRef}
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-30 p-2 rounded-md bg-white shadow-md transition-transform duration-300 ${
          open ? "translate-x-[260px]" : "translate-x-0"
        }`}
      >
        <Menu className="w-6 h-6 text-gray-800" />
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-20 h-full w-[260px] bg-white shadow-lg transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={heroImg}
            alt="Home"
            className="w-full h-[260px] object-cover"
          />
        </Link>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-gray-800 font-karla hover:text-burnt"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="transition-transform duration-300">
        {children}
      </main>
    </div>
  );
}
