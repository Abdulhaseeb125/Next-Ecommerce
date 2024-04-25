"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { TbBoxSeam } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineBorderColor, MdOutlineFavoriteBorder, MdOutlineManageAccounts, MdOutlineWaterfallChart, MdReviews } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import { Label } from "@/components/ui/label";
import { CiShoppingCart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { Badge } from "@/components/ui/badge";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[999] flex h-screen w-72 flex-col overflow-y-hidden bg-slate-100 duration-200 ease-linear dark:bg-neutral-900 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-6">
        <Link href="/" className="flex gap-1 items-center">
          <TbBoxSeam color="#D83F31" size={30} />
          <Label className="text-xl" >Store</Label>
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <RxCross2 size={24} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-50 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2 px-4 py-2 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold opacity-60 ">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

              <SidebarLinkGroup
                activeCondition={
                  pathname.includes("/account")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={` group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("account") &&
                          "bg-slate-200 dark:bg-neutral-800"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdOutlineManageAccounts size={24} />
                        Account
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2  ${open && "rotate-180"
                            }`}
                          size={24}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${!open && "hidden"
                          }`}
                      >
                        <ul className="mb-5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/user/account/profile"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium  duration-50  ${pathname === "/user/account/profile" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/control-panel/dashboard/traffic-analytics"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/control-panel/dashboard/traffic-analytics" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Address Book
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/control-panel/dashboard/top-products"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/control-panel/dashboard/top-products" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Payment Options
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/products" || pathname.includes("products")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={` group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("Dashboard/products") &&
                          "bg-slate-200 dark:bg-neutral-800"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdOutlineBorderColor size={24} />
                        Orders
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2  ${open && "rotate-180"
                            }`}
                          size={24}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${!open && "hidden"
                          }`}
                      >
                        <ul className="mb-5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/user/orders/my-orders"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium  duration-50  ${pathname === "/user/orders/my-orders" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              My Orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/user/orders/returns"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium  duration-50  ${pathname === "/user/orders/returns" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Returns
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/user/orders/cancellations"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/user/orders/cancellations" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Cancellations
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>


              <li>
                <Link
                  href="/settings"
                  className={`group relative flex justify-between items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("settings") &&
                    "bg-slate-200 dark:bg-neutral-800"
                    }`}
                >
                  <div className="flex gap-3">
                    <CgShoppingCart size={24} />
                    Cart
                  </div>
                  <Badge className="rounded-full bg-red-500 text-white">4</Badge>
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("settings") &&
                    "bg-slate-200 dark:bg-neutral-800"
                    }`}
                >
                  <MdOutlineFavoriteBorder size={24} />
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("settings") &&
                    "bg-slate-200 dark:bg-neutral-800"
                    }`}
                >
                  <MdReviews size={24} />
                  My Reviews
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
          <div>
            <Link
              href="/user/seller-form"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50 hover:bg-[#D83F3190] bg-[#D83F3180]`}
            >
              <BiUserCheck size={24} />
              Become a seller
            </Link>
          </div>



        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
