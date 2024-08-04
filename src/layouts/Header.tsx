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
    <div className="flex flex-grow items-center justify-between border-none bg-gradient-to-r from-background-800 to-background-800 via-background-950 fixed rounded-full w-[98%] px-1 top-5 left-1/2 -translate-x-1/2 h-16">
      <div className="flex items-center justify-between w-full space-x-2">
        {/* Start Section */}
        {isDesktop ? (
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Dionysus Logo" className="w-16 p-2" />
            </Link>
          </div>
        ) : (
          <div className="relative w-full px-2">
            <SearchBar />
          </div>
        )}

        {/* Center Section */}
        <div className="flex-grow flex justify-center">
          {isDesktop ? (
            <div className="relative w-full max-w-screen-md pl-56">
              <SearchBar />
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* End Section */}
        <div className="flex items-center">
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
  <div className="relative pr-4">
    <button
      onClick={toggleMenu}
      className="bg-primary-300 text-secondary-800 rounded-full p-2"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <GrFormClose /> : <TiThMenu />}
    </button>
    <div
      className={`absolute top-16 right-0 bg-gradient-to-bl from-secondary-800 to-background-950 shadow-2xl rounded-md transition-transform duration-300 ${
        isOpen
          ? "transform translate-y-0 opacity-100 z-50 !important"
          : "transform -translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute -top-2 right-6 transform rotate-45 bg-secondary-800 w-4 h-4"></div>
      <ul>
        {navButtons.map((button) => (
          <li key={button.label} className="py-2 px-4">
            <Link
              to={button.path}
              className="flex items-center text-text-200 hover:text-white"
              onClick={toggleMenu}
            >
              {button.icon && <span className="mr-2">{button.icon}</span>}
              <span>{button.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
