import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/img/dionysus-logo-transparent.png"; // Import the logo

interface NavButton {
  label: string;
  path: string;
}

const navButtons: NavButton[] = [
  { label: "Watchlist", path: "/watchlist" },
  { label: "History", path: "/history" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar className="border-none bg-gradient-to-b from-slate-900 to-purple-900">
      <Toolbar className="flex items-center justify-between px-4">
        <Typography
          variant="h4"
          component={Link}
          to="/"
          className="font-bold font-kalina flex-grow bg-gradient-to-tr from-pink-400 to-purple-900 bg-clip-text text-transparent hover:text-brand-light text-left"
        >
          <img src={logo} alt="Dionysus Logo" className="w-20 h-20 p-3"></img>
        </Typography>

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
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <List className="bg-brand w-64">
            {navButtons.map((button) => (
              <ListItem key={button.label} disablePadding>
                <ListItemButton component={Link} to={button.path}>
                  <ListItemText primary={button.label} className="text-white" />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/account">
                <ListItemText primary="Account" className="text-white" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
