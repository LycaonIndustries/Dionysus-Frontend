import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";

interface NavButton {
  label: string;
  path: string;
}

const navButtons: NavButton[] = [
  { label: "Home", path: "/" },
  { label: "Watchlist", path: "/watchlist" },
  { label: "History", path: "/history" },
  { label: "Account", path: "/account" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      className="bg-transparent" // Using Tailwind for background
    >
      <Toolbar className="flex textitems-center justify-between px-4 bg-brand-dark">
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="font-bold text-xl flex-grow text-brand-light"
        >
          Dionysus
        </Typography>

        {/* Desktop Navigation */}
        {isDesktop && (
          <div className="flex">
            {navButtons.map((button) => (
              <Button
                key={button.label}
                color="inherit"
                component={Link}
                to={button.path}
                className="text-white hover:text-gray-300"
              >
                {button.label}
              </Button>
            ))}
          </div>
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
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <List className="bg-brand w-64">
          {" "}
          {/* Tailwind for Drawer */}
          {navButtons.map((button) => (
            <ListItem key={button.label} disablePadding>
              <ListItemButton component={Link} to={button.path}>
                <ListItemText
                  primary={button.label}
                  className="text-white" // Tailwind for text color
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
