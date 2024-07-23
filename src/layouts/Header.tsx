import AccountCircle from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark"; // Import Bookmark icon
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History"; // Import History icon
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/dionysus-logo-transparent.png";

interface NavButton {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

const navButtons: NavButton[] = [
  { label: "Watchlist", path: "/watchlist", icon: <BookmarkIcon /> }, // Add icons here
  { label: "History", path: "/history", icon: <HistoryIcon /> },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar className="border-none bg-gradient-to-b from-slate-900 to-purple-900">
      <Toolbar className="flex items-center justify-between px-4 relative">
        <Link to="/">
          <img src={logo} alt="Dionysus Logo" className="w-20 h-20 p-3" />
        </Link>

        {/* Desktop Navigation */}
        {isDesktop && (
          <nav className="m-2 p-2">
            <ul className="flex space-x-5">
              {navButtons.map((button) => (
                <li
                  key={button.label}
                  className="text-white hover:text-gray-300"
                >
                  <Link
                    to={button.path}
                    className="text-white hover:text-brand-light"
                  >
                    {button.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/account">
                  <AccountCircle className="text-white text-2xl" />
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Hamburger Menu (only on mobile) */}
        {!isDesktop && (
          <div className="relative">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
              className="z-10"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* Mobile Modal (with arrow) */}
            <Modal
              open={isMobileMenuOpen}
              onClose={toggleMobileMenu}
              aria-labelledby="mobile-menu-modal-title"
              aria-describedby="mobile-menu-modal-description"
            >
              <div className="absolute top-16 right-2 w-auto bg-brand-light shadow-2xl rounded-md pl-0 pr-2">
                <div className="absolute top-0 right-2 -mt-2 w-4 h-4 bg-brand-light transform rotate-45"></div>
                <List>
                  {/* Account Link */}
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      to="/account"
                      onClick={toggleMobileMenu}
                    >
                      <AccountCircle className="mr-2 text-black" />{" "}
                      {/* Icon in Account link */}
                      <ListItemText className="text-black" primary="Account" />
                    </ListItemButton>
                  </ListItem>

                  {navButtons.map((button) => (
                    <ListItem key={button.label} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={button.path}
                        onClick={toggleMobileMenu}
                      >
                        {button.icon && (
                          <span className="mr-2 text-black">{button.icon}</span>
                        )}{" "}
                        {/* Render the icon */}
                        <ListItemText
                          className="text-black"
                          primary={button.label}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Modal>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
