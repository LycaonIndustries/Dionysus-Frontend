import React, { useCallback, useState } from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaBookmark, FaHouse } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../assets/img/dionysus-logo-transparent.png";
import SearchBar from "../components/Search";
import { NavButton } from "../interfaces/General";
import { useMediaQuery } from "../utilities/meidaQuery";

const navButtons: NavButton[] = [
  { label: "Home", path: "/", icon: <FaHouse />, hide: true },
  {
    label: "Account",
    path: "/account",
    icon: <MdAccountCircle />,
    hide: true,
  },
  { label: "Watchlist", path: "/watchlist", icon: <FaBookmark /> },
  { label: "History", path: "/history", icon: <FaHistory /> },
  { label: "LogIn", path: "/auth/login", icon: <BiSolidLogInCircle /> },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <div className="border-none bg-gradient-to-r from-background-800 to-background-800 via-background-950 fixed rounded-full w-[98%] px-1 top-5 left-1/2 -translate-x-1/2 h-16">
      <div className="flex flex-grow items-center justify-between w-full">
        {/* Logo (only on desktop) */}
        {isDesktop && (
          <Link to="/">
            <img src={logo} alt="Dionysus Logo" className="w-16 p-2" />
          </Link>
        )}

        {/* Search Bar (centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-sm px-10">
          <SearchBar />
        </div>

        {/* Navigation */}
        {isDesktop ? (
          <DesktopNavigation navButtons={navButtons} />
        ) : (
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
            navButtons={navButtons}
          />
        )}
      </div>
    </div>
  );
};

const DesktopNavigation: React.FC<{ navButtons: NavButton[] }> = ({
  navButtons,
}) => (
  <nav className="m-2 p-2">
    <ul className="flex space-x-5">
      {navButtons.map(
        (button) =>
          !button.hide && (
            <li key={button.label} className="text-white hover:text-gray-300">
              <Link
                to={button.path}
                className="text-white hover:text-brand-light"
              >
                {button.label}
              </Link>
            </li>
          )
      )}
      <li>
        <Link to="/account">
          <MdAccountCircle className="text-white text-2xl" />
        </Link>
      </li>
    </ul>
  </nav>
);

const MobileNavigation: React.FC<{
  isOpen: boolean;
  toggleMenu: () => void;
  navButtons: NavButton[];
}> = ({ isOpen, toggleMenu, navButtons }) => (
  <div className="relative">
    {/* Make sure the menu is positioned relative to this */}
    {/* Hamburger/Close Button */}
    <button onClick={toggleMenu} className="absolute right-0 z-10">
      {isOpen ? <GrFormClose /> : <TiThMenu />}
    </button>
    {/* Mobile Menu Modal */}
    <ul
      className={`absolute top-16 right-0 w-auto bg-brand-light shadow-2xl rounded-md pl-0 pr-2 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <div className="absolute top-0 right-2 -mt-2 w-4 h-4 bg-brand-light transform rotate-45"></div>
      {navButtons.map((button) => (
        <li key={button.label} onClick={toggleMenu}>
          {" "}
          {/* Close menu on click */}
          <Link to={button.path}>
            {button.icon && <span className="mr-2">{button.icon}</span>}
            <span>{button.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default Header;
