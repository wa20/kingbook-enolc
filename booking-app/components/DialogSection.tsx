"use client";

import Link from "next/link";
import React, { useState, Fragment } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Disclosure } from "@headlessui/react";
import { cn } from "../lib/utils";

type DialogSectionProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
  callsToAction: CallToAction[];
};

const DialogSection: React.FC<DialogSectionProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  callsToAction,
  products,
}) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Overlay className="fixed inset-0 z-5 bg-black opacity-40" />

      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
              alt="booking logo"
            />
          </a>
          <button
            type="button"
            className="-m-2 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                      Stays
                      <ChevronDownIcon
                        className={cn(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {[...products, ...callsToAction].map(item => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                        >  
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </> 
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DialogSection;
