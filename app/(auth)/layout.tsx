import { montserrat300 } from "../fonts/montserrat";
import clsx from "clsx";
import Image from "next/image";
import bg from './../../assets/before_session_bg.jpg';
import "./global.css"
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <main className={clsx("flex min-h-screen w-screen justify-between items-center flex-row m-0 pb-0 pt-0 bg-slate-950")}>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center pt-[30rem] pl-[4rem]">

            </div>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center">{children}</div>
        </main>

    );
}
