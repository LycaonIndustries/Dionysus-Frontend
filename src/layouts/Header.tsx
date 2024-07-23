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

interface NavButton {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

const navButtons: NavButton[] = [
  { label: "Watchlist", path: "/watchlist", icon: <BookmarkIcon /> },
  { label: "History", path: "/history", icon: <HistoryIcon /> },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <AppBar className="border-none bg-gradient-to-b from-slate-900 to-purple-900">
      <Toolbar className="flex items-center justify-between px-4 relative">
        <Link to="/">
          <img src={logo} alt="Dionysus Logo" className="w-20 h-20 p-3" />
        </Link>

        {isDesktop && <DesktopNavigation navButtons={navButtons} />}

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

const DesktopNavigation: React.FC<{ navButtons: NavButton[] }> = ({
  navButtons,
}) => (
  <nav className="m-2 p-2">
    <ul className="flex space-x-5">
      {navButtons.map((button) => (
        <li key={button.label} className="text-white hover:text-gray-300">
          <Link to={button.path} className="text-white hover:text-brand-light">
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
);

const MobileNavigation: React.FC<{
  isOpen: boolean;
  toggleMenu: () => void;
  navButtons: NavButton[];
}> = ({ isOpen, toggleMenu, navButtons }) => (
  <div className="relative">
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={toggleMenu}
      className="z-10"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>

    <Modal open={isOpen} onClose={toggleMenu}>
      <div className="absolute top-16 right-2 w-auto bg-brand-light shadow-2xl rounded-md pl-0 pr-2">
        <div className="absolute top-0 right-2 -mt-2 w-4 h-4 bg-brand-light transform rotate-45"></div>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/account" onClick={toggleMenu}>
              <AccountCircle className="mr-2 text-black" />{" "}
              <ListItemText className="text-black" primary="Account" />
            </ListItemButton>
          </ListItem>

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

export default Header;
