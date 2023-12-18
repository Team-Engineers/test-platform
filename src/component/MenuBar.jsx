import React from "react";

const MenuBar = () => {
  return (
    <div class="top-menu-bar">
      <div class="testtitle">SimCAT Zero Online</div>
      <div class="timerblock show-mobile">
        <b>
          <span>Time Left: </span>
          <span id="timer">
            <span>00</span>:<span>25</span>:<span>07</span>
          </span>
        </b>
      </div>
      <div class="menubar" role="presentation">
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
        <div class="icon-bar"></div>
      </div>
    </div>
  );
};

export default MenuBar;
