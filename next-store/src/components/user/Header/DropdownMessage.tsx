import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button"

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
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
        className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-red-400 ${notifying === false ? "hidden" : "inline"
          }`}
      >
        <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
      </span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full dark:bg-neutral-800"
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <FiMessageCircle className="h-[1.2rem] w-[1.2rem]  transition-all" />
      </Button>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-96 w-72 flex-col rounded-sm border border-stroke  shadow dark:border-neutral-800 dark:bg-neutral-900  bg-white sm:right-0 sm:w-80 ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <div className="px-4 py-3">
          <h5 className="text-sm font-medium ">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-02.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2 min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              href="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-01.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Robert Jhon
                </h6>
                <p className="text-sm">Can you share your offer?</p>
                <p className="text-xs">10 min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4  px-4 py-3 hover:bg-slate-100  border dark:hover:bg-neutral-800"
              href="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-03.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Henry Dholi
                </h6>
                <p className="text-sm">I cam across your profile and...</p>
                <p className="text-xs">1 day ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border px-4 py-3 hover:bg-slate-100  dark:hover:bg-neutral-800"
              href="/messages"
            >
              <div className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-04.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
