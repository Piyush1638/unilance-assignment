// MobileMenu component
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface NavbarLink {
  title: string;
  path: string;
  url: string;
}

interface MobileMenuProps {
  links: NavbarLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/svgs/hamburger-menu.svg"
          alt="Menu"
          height={21}
          width={23.1}
        />
      </SheetTrigger>
      <SheetContent className="px-0">
        <SheetHeader>
          <Separator className="mt-5" />
          <SheetDescription className="flex flex-col items-start gap-3">
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className="w-full flex px-4 py-2 hover:bg-[#B9E390] hover:text-black items-center justify-start gap-3"
              >
                <Image
                  src={link.path}
                  alt={link.title}
                  height={24}
                  width={24}
                  className="transition-all ease-linear h-8 "
                />
                <Link href={link.url} className="text-sm font-semibold">
                  {link.title}
                </Link>
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
