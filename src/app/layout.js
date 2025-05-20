import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const IvyMode = localFont({
  src: [
    {
      path: '../fonts/IvyMode-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/IvyMode-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/IvyMode-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/IvyMode-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/IvyMode-Italic.woff',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../fonts/IvyMode-BoldItalic.woff',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../fonts/IvyMode-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../fonts/IvyMode-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/IvyMode-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/IvyMode-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
})

const Satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
     {
      path: '../fonts/Satoshi-BoldItalic.woff',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../fonts/Satoshi-Italic.woff',
      weight: 'normal',
      style: 'italic',
    },
     {
      path: '../fonts/Satoshi-Light.woff',
      weight: '300',
      style: 'normal',
    },
     {
      path: '../fonts/Satoshi-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Satoshi-Medium.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-MediumItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "New Kolkata",
  description: "Alcove Realty presents New Kolkata Sangam a riverside project where the beauty of nature meets the artistry of modern architecture. Your dream home awaits by the riverside. Explore now!",
  keywords: "Apartments/Flat In Serampore New Kolkata, Serampore Flats For Sale, Serampore Flat Price | Serampore Flat - New Kolkata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${IvyMode.className} ${Satoshi.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
