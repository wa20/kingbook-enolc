"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, Fragment } from "react";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Dialog,
  Disclosure,
  Transition,
} from "@headlessui/react";
// import { Popover } from "@/components/ui/popover";

const products = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Book a Stay",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  {
    name: "See Demo Booking",
    href: "#",
    icon: PlayCircleIcon,
  },
  {
    name: "Contact Support",
    href: "#",
    icon: PhoneIcon,
  },
];

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94] shadow-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
              alt="booking logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setBurgerMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
    
    
        <PopoverGroup className="hidden lg-flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lgp-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon 
                            className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                            aria-hidden="true"
                        />

                      </div>
                    </div>
                  ))}
                </div> 
              </PopoverPanel>
            </Transition>
          </Popover>
        </PopoverGroup>
      </nav>
    </header>
  );
}

export default Header;
