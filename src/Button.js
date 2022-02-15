import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  return (
    <div className="row">
      <span>
        &#60; Button
        {variant ? ` variant = "${variant}"` : ""}
        {disableShadow ? " disableShadow" : ""}
        {disabled ? " disabled" : ""}
        {startIcon ? ` startIcon= "${startIcon}"` : ""}
        {size ? ` size= "${size}"` : ""}
        {color ? ` color= "${color}"` : ""}
        /&#62;
      </span>
      <br />

      <button
        className={`${variant ? variant : ""}
         ${disableShadow ? "disableShadow" : ""} 
         ${disabled ? "disabled" : ""}
         ${startIcon || endIcon ? "icon" : ""}
         ${size ? size : ""}
         ${color ? color : ""}
         `}
      >
        {startIcon && <MdLocalGroceryStore className="startIcon" />}
        {disabled ? "Disabled" : "Default"}
        {endIcon && <MdLocalGroceryStore className="endIcon" />}
      </button>
    </div>
  );
};

export default Button;
