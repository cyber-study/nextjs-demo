import React from "react";

export default async function RootLayout({children}:any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};
