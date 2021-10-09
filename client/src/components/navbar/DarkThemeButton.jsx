import React from "react";

function DarkThemeButton() {
   
    return (
        <div className="flex items-center justify-center w-full">
        <label htmlFor="toggleB" className="flex items-end cursor-pointer">
            <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
        </label>
        </div>
    )
}

export default DarkThemeButton;