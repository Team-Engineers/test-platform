import React from "react";
import "./question.css";

const Keyboard = () => {
  return (
    <div>
      <span style={{ color: "#000000" }}>
        <input type="text" id="text-168171699415117" name="q-168171699415117" />
      </span>
      <div class="keyboard ">
        <div class="keyitems">
          <span role="presenation" class="backspace">
            Backspace
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="keyItem">
            7
          </span>
          <span role="presenation" class="keyItem">
            8
          </span>
          <span role="presenation" class="keyItem">
            9
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="keyItem">
            4
          </span>
          <span role="presenation" class="keyItem">
            5
          </span>
          <span role="presenation" class="keyItem">
            6
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="keyItem">
            1
          </span>
          <span role="presenation" class="keyItem">
            2
          </span>
          <span role="presenation" class="keyItem">
            3
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="keyItem">
            0
          </span>
          <span role="presenation" class="keyItem">
            .
          </span>
          <span role="presenation" class="keyItem">
            -
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="specialKey">
            ←
          </span>
          <span role="presenation" class="specialKey">
            →
          </span>
        </div>
        <div class="keyitems">
          <span role="presenation" class="clearall">
            Clear All
          </span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
