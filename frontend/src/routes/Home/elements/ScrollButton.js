import React from "react";
import { Link } from 'react-scroll';

function ScrollButton() {
  return (
      <Link
        to="bottom-of-image"
        smooth={true}
        duration={500}
        className="bg-primary-bg bg-opacity-40 text-primary-text px-4 py-2 rounded-full cursor-pointer hover:bg-opacity-60 transition"
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </Link>
  );
}

export default ScrollButton;
