import NavLarge from "../(components)/NavBarLarge/navBarLarge";
import NavSmall from "../(components)/NavBarSmall/navBarSmall";
import clsx from "clsx";
import { Metadata } from "next";
import AuthProvider from "../(components)/authProvider";
import "./styles.css"
import { montserrat300 } from "../fonts/montserrat";
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
            <AuthProvider>
                <body className={clsx('flex h-screen w-screen justify-between items-center flex-row m-0 pb-0 pt-0 bg', montserrat300.className)}>
                    <div className="h-auto absolute left-0 top-0 w-auto invisible lg:visible">
                        <NavLarge />
                    </div>
                    <div className="h-auto absolute top-0 w-auto lg:hidden">
                        <NavSmall />
                    </div>

                    <div className={clsx('main-cont h-full w-full flex flex-col items-center justify-start', 'lg:block lg:pl-36 lg:pt-3 lg:pr-3 lg:pb-3', 'sm:block sm:pt-20 sm:pl-3 sm:pr-3 sm:pb-3 bg')}>
                        {children}
                    </div>
                    {/* <div className="absolute top-1/2 right-1/2 w-auto h-auto">
                        <SignoutPopover />
                    </div> */}
                </body >
            </AuthProvider>

        </html>

    );
}
