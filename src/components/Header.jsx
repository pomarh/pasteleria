import React from "react";

function Header() {
    return (
        <div className="flex gap-5">
            <h2>un pastel</h2>
            <div className="w-50 h-50 border border-red-800">
                <img className="w-full h-full object-cover" src="img/hero.png" alt="" />
            </div>
            <div className="w-50 h-50 ">
                <img className="w-full h-full object-cover" src="img/bonbita1.jpg" alt="" />
            </div>
            <div className="w-50 h-50 ">
                <img className="w-full h-full object-cover object-center" src="img/croissant2.jpg" alt="" />
            </div>
            <div className="w-50 h-50 ">
                <img className="w-full h-full object-cover object-center" src="img/pastel1.jpg" alt="" />
            </div>
        </div>
    );
}

export default Header;
