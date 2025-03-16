
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import FooterIconGroup from "@/components/FooterIconGroup";
import { IoMdCall } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";
import { IoMdPin } from "react-icons/io";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Din Mægler",
  description: "En fiktiv ejendomsmægler med fiktive ejendomme",
};

export default function RootLayout({
  children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="bg-primary text-white p-3">
            <div className="container mx-auto flex justify-between">
          <div className="left-group items-center gap-2 flex"><FaPaperPlane /> 4000@dinmaegler.com <FaPhoneAlt className="ml-4" />+45 7070 4000  </div> 
          <Link
							href="/login"
							className="flex gap-2 items-center"
						>
							<FaUser />log ind
						</Link>
            </div>
          </div>
          <div className="p-4">
              <div className="container mx-auto flex justify-between">
              <Link href="/">
                    <Image src={"/din_maegler_logo.png"} width={296} height={49} alt="Din Mægler" />
              </Link>
              <nav className="flex items-end sm:hidden">
                <button className="text-3xl" >&#9776;</button>
              </nav>
                <nav className="gap-8 items-end hidden sm:flex">
                  <Link href="/boliger">Boliger til salg</Link>
                  <Link href="/maeglere">Mæglere</Link>
                  <Link href="/kontakt">Kontakt os</Link>
                </nav>
              </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="pt-16 bg-gradient-to-t from-white from-35% to-35% to-transparent">
          <div className="container mx-auto">
            <Image src="/din_maegler_logo.png" width={296} height={49} alt="Din Mægler" />
            <p className="my-6">
            Din Mægler er din landsdækkende ejendomsmæglerkæde. <br />Vi sikrer et trygt og effektivt boligsalg - hurtigt og problemfrit.
            </p>
            <div className="grid grid-cols-[4fr_6fr] gap-20 pb-16">
              <div className="border p-12 bg-white ">
                <FooterIconGroup 
                    icon={<IoMdCall size="2em" />}
                    smallText="Ring til os"
                    bigText="+45 7070 4000"
                />
                <FooterIconGroup 
                    icon={<IoMdPaperPlane size="2em" />}
                    smallText="Send os en mail"
                    bigText="4000@dinmaegler.com"
                />
                <FooterIconGroup 
                    icon={<IoMdPin size="2em" />}
                    smallText="Besøg os"
                    bigText="Stændertorvet 78, 4000 Roskilde"
                />
                <p className="text-balance">Din Mægler Roskilde er din boligbutik i lokalområdet.</p>

              </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Quicklinks</h3>
                <p>Boliger til salg</p>
                <p>Mæglere</p>
                <p>Kontakt os</p>
                <p>Log ind / bliv bruger</p>
              </div>
              <div className="mt-auto">
                <Image width={228} height={78} src="/dms_logo.png" alt="Medlem af Dansk Mægler Sammenslutning" />
              </div>
            </div>
            </div>
          </div>
          <div>
            <p className="p-2 bg-primary text-white text-center text-balance">© 2021 Din Mægler</p>
          </div>
        </footer>
      </body>

    </html>
  );
}
