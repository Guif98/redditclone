import React from "react";

function Button(props){
    let classNames = "border border-gray-300 rounded-full px-3 text-sm font-bold hover:opacity-70";
    if (props.outline) {
        classNames += " text-gray-300 ";
    } else {
        classNames += " bg-gray-300 ";
    }

    return (
        <button {...props} className={classNames + props.className}></button>
    );
}

export default Button;