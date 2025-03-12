import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

export const metadata = {
  title: "Movie Explorer",
  description: "Search for your favorite movies and check their ratings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
