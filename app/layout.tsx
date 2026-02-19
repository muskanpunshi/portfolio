import "styles/globals.css";
import { ReactNode } from "react";
import { Inter, Sora, Six_Caps, Raleway } from "next/font/google";
import WebLayout from "@components/layout/layout";
import Cursor from "@components/layout/circularScrollIndicator";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-six-caps"
});
const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-raleway"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={` `}>
          <Cursor />
        <WebLayout>{children} </WebLayout>
      </body>
    </html>
  );
}
