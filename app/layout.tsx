import type { Metadata } from "next";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
    title: "PrintForge",
    description: "Discover what's possible with 3D printing",
};

const montserrat = Montserrat_Alternates({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--montserrat-alternates"
});

const albertSans = Albert_Sans({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
    display: "swap"
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
        <body className={`${albertSans.className} ${montserrat.variable}`}>
            <Header />
            {children}
        </body>
        </html>
    );
}
