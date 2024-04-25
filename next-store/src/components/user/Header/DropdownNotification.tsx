import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative">
      <span
        className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-400 ${
          notifying === false ? "hidden" : "inline"
        }`}
      >
        <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
      </span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full dark:bg-neutral-800 "
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <BellIcon  className="h-[1.2rem] w-[1.2rem]  transition-all " />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-28 mt-2 flex h-96 w-72 flex-col rounded-sm border bg-white dark:bg-neutral-900 shadow dark:border-neutral-800  sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3">
          <h5 className="text-sm font-medium ">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-100  dark:hover:bg-neutral-800"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  It is a long established fact
                </span>{" "}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  There are many variations
                </span>{" "}
                of passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">04 Jan, 2025</p>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
