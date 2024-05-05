'use client'

import { IconContext } from "react-icons";
import { FaBoltLightning } from "react-icons/fa6";

import React from 'react'

export const LogoMedium = () => {
    return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "4em" }}>
            <div>
                <FaBoltLightning />
            </div>
        </IconContext.Provider>
  )
}

export default LogoMedium