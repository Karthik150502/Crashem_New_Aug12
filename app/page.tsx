
import Link from "next/link";
import NavLarge from "./(components)/NavBarLarge/navBarLarge";
import NavSmall from "./(components)/NavBarSmall/navBarSmall";

import clsx from "clsx";
export default async function Home() {


  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg">
      <h1 className="text-5xl text-center font-thin">Home Page</h1>
      <div className="w-full h-auto absolute bottom-6">
        <Link href="/signin" className="inline-block float-right mr-4">Sign In</Link>
      </div>
    </div>

  );
}
