import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Icons */}
        <div className="footer_icons">
          <FacebookIcon className="footer_icon" />
          <InstagramIcon className="footer_icon" />
          <YouTubeIcon className="footer_icon" />
        </div>

        {/* Link Columns */}
        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Service Code Button */}
        <div className="service_code">
          <button type="button">Service Code</button>
        </div>

        {/* Copyright Notice */}
        <div className="footer_copyright">
          <p>&copy; 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
