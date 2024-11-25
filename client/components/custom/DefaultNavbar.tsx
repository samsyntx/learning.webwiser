import React from "react";
import Image from "next/image";
import { lightLogo } from "@/assets/data/unified";
import { Menu } from "lucide-react";

const DefaultNavbar = () => {
  return (
    <section className="py-4 px-2">
      <div className="">
        <div className="grid grid-cols-2 border dark:border-white/15 border-black/15 rounded-full p-4  items-center">
          <div>
            <Image src={lightLogo} alt="Alt Text" width={50} height={30} />
          </div>
          <div className="flex justify-end">
            <Menu className="dark:text-white md:hidden" size={30} />
            <button
              type="button"
              className="border border-white h-12 rounded-full px-6 font-medium"
            >
              Login
            </button>
            <button
              type="button"
              className="border border-white h-12 rounded-full px-6 font-medium"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultNavbar;
