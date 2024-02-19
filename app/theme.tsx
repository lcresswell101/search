import React, {useContext} from "react";
import themeContext from "@/app/themeContext";

const Theme = ({ children }: {children: React.ReactNode}) => {
    const theme = useContext(themeContext)

    return (
        <body className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
            {children}
        </body>
    )
}

export default Theme