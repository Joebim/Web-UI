import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const tabsRef = useRef(null);
  const selectorRef = useRef(null);

  useEffect(() => {
    // Get references to elements once they're rendered
    const tabs = tabsRef.current;
    const selector = selectorRef.current;

    // Initial setup for selector
    const activeItem = tabs.querySelector('.active');
    const activeWidth = activeItem.offsetWidth; // Use offsetWidth for accurate width
    selector.style.left = activeItem.offsetLeft + "px";
    selector.style.width = activeWidth + "px";

    // Event listener for tab clicks
    tabs.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const clickedTab = event.target;

        tabs.querySelectorAll("a").forEach((tab) => tab.classList.remove("active"));
        clickedTab.classList.add('active');

        const activeWidth = clickedTab.offsetWidth;
        const itemPos = clickedTab.offsetLeft;

        selector.style.left = itemPos + "px";
        selector.style.width = activeWidth + "px";
      }
    });
  }, []); // Run useEffect only once after initial render

  return (
    <div className="wrapper">
      <nav className="tabs" ref={tabsRef}>
        <div className="selector" ref={selectorRef}></div>
        <Link to="/" className="active"><i className="fab fa-superpowers"></i>Web</Link>
        <Link to="/ui"><i className="fas fa-hand-rock"></i>UI</Link>
        <Link to="/graphics"><i className="fas fa-bolt"></i>Graphics</Link>
        <Link to="/animations"><i className="fas fa-burn"></i>Animations</Link>
      </nav>
    </div>
  );
}
