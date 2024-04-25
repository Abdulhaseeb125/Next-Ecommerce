
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    // DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "../ui/avatar"
import React from "react"
import {  CgShoppingCart } from "react-icons/cg";
import { BiBookmark, BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { RxDashboard } from "react-icons/rx";
import { auth } from "@/lib/auth";
import { SignOutButton } from "../auth/signoutButton";
async function NavUserMenu() {
    const session = await auth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className=" border">
                    <AvatarImage src="/images/user/default_user.png" />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex items-center justify-between">
                    {session?.user?.name}
                    <DarkModeSwitcher />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={"user/account/profile"}>
                        <DropdownMenuItem>
                            <BiUser className="mr-2" size={19} />
                            <span>Profile</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        <CgShoppingCart className="mr-2" size={19} />
                        <span>Cart</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BiBookmark className="mr-2" size={19} />
                        <span>Wishlist</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FiSettings className="mr-2" size={19} />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutButton />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


async function NavSellerMenu() {
    const session = await auth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className=" border">
                    <AvatarImage src="/images/user/default_user.png" />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex justify-between items-center">
                    {session?.user?.name}
                    <DarkModeSwitcher />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={"/seller/control-panel/dashboard/statistics"}>
                        <DropdownMenuItem>
                            <RxDashboard className="mr-2" size={19} />
                            <span>Control Panel</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <BiUser className="mr-2" size={19} />
                            <span>My Products</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        <FiSettings className="mr-2" size={19} />
                        <span>Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BiBookmark className="mr-2" size={19} />
                        <span>Messages</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutButton />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


async function NavAdminMenu() {
    const session = await auth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className=" border">
                    <AvatarImage src="/images/user/default_user.png" />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex items-center justify-between">
                    {session?.user?.name}
                    <DarkModeSwitcher />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={"user/account/profile"}>
                        <DropdownMenuItem>
                            <BiUser className="mr-2" size={19} />
                            <span>Control-Panel</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        <CgShoppingCart className="mr-2" size={19} />
                        <span>Requests</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BiBookmark className="mr-2" size={19} />
                        <span>Messages</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FiSettings className="mr-2" size={19} />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutButton />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export { NavUserMenu, NavSellerMenu, NavAdminMenu }