import React, { useEffect, useState } from "react";
import "./styles.css";

function DarkModeToggle() {
  const toggleTheme = () => {};

  return (
    <div className={`container`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">Light Mode</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
