import AccountCircle from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/dionysus-logo-transparent.png";
import { NavButton } from "../interfaces/General";
import SearchBar from "../components/Search";

// Array of navigation buttons with their labels, paths, and optional icons
const navButtons: NavButton[] = [
  { label: "Watchlist", path: "/watchlist", icon: <BookmarkIcon /> },
  { label: "History", path: "/history", icon: <HistoryIcon /> },
];

// Header component that contains the navigation bar and responsive menu
const Header: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook to check if the screen width is considered desktop
  const isDesktop = useMediaQuery("(min-width: 600px)");

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  // Render the Header component with responsive design
  return (
    <AppBar className="border-none bg-gradient-to-b from-slate-900 to-purple-900">
      <Toolbar className="flex items-center justify-between px-4 relative">
        {/* Logo linking to the home page */}
        <Link to="/">
          <img src={logo} alt="Dionysus Logo" className="w-20 p-3" />
        </Link>

        <SearchBar />

        {/* Render DesktopNavigation if on a desktop screen */}
        {isDesktop && <DesktopNavigation navButtons={navButtons} />}

        {/* Render MobileNavigation if on a small screen */}
        {!isDesktop && (
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
            navButtons={navButtons}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

// Desktop navigation component for larger screens
const DesktopNavigation: React.FC<{ navButtons: NavButton[] }> = ({
  navButtons,
}) => (
  <nav className="m-2 p-2">
    <ul className="flex space-x-5">
      {/* Render navigation buttons */}
      {navButtons.map((button) => (
        <li key={button.label} className="text-white hover:text-gray-300">
          <Link to={button.path} className="text-white hover:text-brand-light">
            {button.label}
          </Link>
        </li>
      ))}
      {/* Account link with icon */}
      <li>
        <Link to="/account">
          <AccountCircle className="text-white text-2xl" />
        </Link>
      </li>
    </ul>
  </nav>
);

// Mobile navigation component for smaller screens
const MobileNavigation: React.FC<{
  isOpen: boolean; // Flag to indicate if the menu is open
  toggleMenu: () => void; // Function to toggle the menu open/close
  navButtons: NavButton[]; // Array of navigation buttons
}> = ({ isOpen, toggleMenu, navButtons }) => (
  <div className="relative">
    {/* Button to open/close mobile menu */}
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={toggleMenu}
      className="z-10"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>

    {/* Modal component for the mobile menu */}
    <Modal open={isOpen} onClose={toggleMenu}>
      <div className="absolute top-16 right-2 w-auto bg-brand-light shadow-2xl rounded-md pl-0 pr-2">
        <div className="absolute top-0 right-2 -mt-2 w-4 h-4 bg-brand-light transform rotate-45"></div>
        <List>
          {/* Account link in mobile menu */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/account" onClick={toggleMenu}>
              <AccountCircle className="mr-2 text-black" />{" "}
              <ListItemText className="text-black" primary="Account" />
            </ListItemButton>
          </ListItem>

          {/* Render navigation buttons in mobile menu */}
          {navButtons.map((button) => (
            <ListItem key={button.label} disablePadding>
              <ListItemButton
                component={Link}
                to={button.path}
                onClick={toggleMenu}
              >
                {button.icon && (
                  <span className="mr-2 text-black">{button.icon}</span>
                )}
                <ListItemText className="text-black" primary={button.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Modal>
  </div>
);

// Export the Header component as the default export
export default Header;
