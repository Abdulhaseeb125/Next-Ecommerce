import { BiSearch, BiUser } from "react-icons/bi";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import { Separator } from "../ui/separator";

import { auth } from "@/lib/auth";
import { NavAdminMenu, NavSellerMenu, NavUserMenu } from "../common/NavDropdownMenu";
// import NavSideMenu from "./NavSideMenu";

export default async function Navigation() {
    const session: any = await auth();

    return (
        <div>
            <div
                className={`flex items-center h-18 shadow-sm  justify-between gap-2 p-2 bg-secondary`}
            >
                <div className={`flex items-center gap-2 `}>
                    {/* <NavSideMenu /> */}
                    <Label className="text-xl font-bold">Store</Label>
                </div>
                <div className={`flex items-center `}>
                    <Label className={`relative flex items-center  max-w-72`}>
                        <Input
                            className=" placeholder:italic placeholder:text-neutral-400 block border border-neutral-400 py-2 pl-4 pr-14 shadow-sm focus:outline-none focus:border-neutral-900 focus-visible:ring-neutral-400 focus:ring-1 sm:text-sm rounded-full"
                            placeholder="Search...."
                            type="text"
                            name="search"
                        />
                        <Button
                            size={"sm"}
                            variant={"ghost"}
                            className="absolute right-1 rounded-full"
                        >
                            <BiSearch />
                        </Button>
                    </Label>


                    {session && session?.user?.role === "user" && <NavUserMenu />
                        || session && session.user.role === "seller" && <NavSellerMenu />
                        || session && session.user.role === "admin" && <NavAdminMenu />
                        || <div className="flex mx-2">
                            <Link href={"/login"}>
                                <Button
                                    className="hidden md:flex"
                                    size={"sm"}
                                    variant={"ghost"}
                                >
                                    <BiUser size={20} className="mr-1" />
                                    Log in
                                </Button>
                            </Link>
                            <Separator
                                orientation="vertical"
                                className="h-5 hidden md:block  "
                            />
                            <Link href={"/register"}>
                                <Button
                                    className="hidden md:block "
                                    size={"sm"}
                                    variant={"ghost"}
                                >
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    }


                </div>
            </div >
        </div >
    );
}
