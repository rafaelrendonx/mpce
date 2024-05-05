'use client'

import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

export const LogoBurger = () => {
    return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "3em" }}>
            <div>
                <GiHamburgerMenu />
            </div>
        </IconContext.Provider>
    )
}

export default LogoBurger