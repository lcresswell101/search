'use client'

import React from "react";
import "./globals.css";
import Theme from "@/app/theme";
import themeContext from "@/app/themeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <themeContext.Provider value={'dark'}>
        <Theme>
          { children }
        </Theme>
      </themeContext.Provider>
    </html>
  );
}
