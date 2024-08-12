import NavLarge from "./(components)/NavBarLarge/navBarLarge";
import NavSmall from "./(components)/NavBarSmall/navBarSmall";
import clsx from "clsx";
import { Metadata } from "next";
import AuthProvider from "./(components)/authProvider";
import "./globals.css";
import { redirect } from "next/navigation";
import { montserrat200, montserrat300, montserrat400 } from "./fonts/montserrat";

export const metadata: Metadata = {
  title: {
    template: "%s | Crashem",
    default: "Crashem"
  },
  description: 'Crashem - A Community for the Gully Cricketers',
};
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={clsx('flex h-screen w-screen justify-between items-center flex-row m-0 pb-0 pt-0 bg-slate-950 overflow-hidden', montserrat400.className)}>
        {children}
      </body >
    </html>

  );
}
