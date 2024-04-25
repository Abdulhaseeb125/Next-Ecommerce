"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { BsBagX, BsTable } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { LuLayoutDashboard, LuUser2 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineWaterfallChart } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
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
        <Link href="/" className="flex gap-3 items-center">
          <BsBagX size={24} />
          <label>Store</label>
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
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold ">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

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
                        <MdProductionQuantityLimits size={22} />
                        Dashboard
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2  ${open && "rotate-180"
                            }`}
                          size={22}
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
                              href="/seller/control-panel/dashboard/statistics"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium  duration-50  ${pathname === "/control-panel/dashboard/statistics" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Statistics
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/seller/control-panel/dashboard/traffic-analytics"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/seller/control-panel/dashboard/traffic-analytics" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Traffic Analytics
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/seller/control-panel/dashboard/top-products"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/seller/control-panel/dashboard/top-products" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Top Products
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
                        <MdProductionQuantityLimits size={22} />
                        Products
                        <MdKeyboardArrowDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2  ${open && "rotate-180"
                            }`}
                          size={22}
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
                              href="/seller/control-panel/products"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium  duration-50  ${pathname === "/Dashboard/products" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Product list
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/seller/control-panel/products/add_product"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4  py-1 font-medium  duration-50   ${pathname ===
                                "/seller/products/add_product" &&
                                "bg-slate-200 dark:bg-neutral-800"
                                }`}
                            >
                              Add Product
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}


              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/seller/control-panel/user-profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("user-profile") &&
                    "bg-slate-200 dark:bg-neutral-800"
                    }`}
                >
                  <LuUser2 size={20} />
                  Profile
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/seller/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("tables") &&
                    "hover:bg-slate-200 hover:dark:bg-neutral-800"
                    }`}
                >
                  <BsTable size={20} />
                  Tables
                </Link>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <Link
                  href="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("settings") &&
                    "bg-slate-200 dark:bg-neutral-800"
                    }`}
                >
                  <CiSettings size={20} />
                  Settings
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold ">OTHERS</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <Link
                  href="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium  duration-50  hover:bg-slate-200 hover:dark:bg-neutral-800 ${pathname.includes("chart") &&
                    "hover:bg-slate-200 hover:dark:bg-neutral-800"
                    }`}
                >
                  <MdOutlineWaterfallChart size={20} />
                  Chart
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
