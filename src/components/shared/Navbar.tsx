import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

interface NavbarLink {
  title: string;
  path: string;
  url: string;
}
const Navbar = () => {
  const links: NavbarLink[] = [
    {
      title: "Review",
      path: "/assets/svgs/review.svg",
      url: "/review",
    },
    {
      title: "Tools",
      path: "/assets/svgs/tools.svg",
      url: "/tools",
    },
    {
      title: "University",
      path: "/assets/svgs/university.svg",
      url: "/university",
    },
    {
      title: "Resource",
      path: "/assets/svgs/resource.svg",
      url: "/resource",
    },
    {
      title: "Scholarship",
      path: "/assets/svgs/scholarship.svg",
      url: "/scholarship",
    },
    {
      title: "Rewards",
      path: "/assets/svgs/rewards.svg",
      url: "/rewards",
    },
  ];

  return (
    <nav className="bg-[#FFFFFF] flex items-center justify-between py-2 ps-2 fixed top-0 w-full">
      <div>
        <Image
          src="/assets/svgs/logo.svg"
          alt="brand"
          height={60}
          width={60}
          className="h-12 w-12"
        />
      </div>
      <div className="tablet:flex hidden items-center flex-row  justify-evenly laptop:gap-8 gap-3 laptop:pe-20 pe-7">
        <div className="flex items-center justify-evenly laptop:gap-5 tablet:gap-4">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="flex items-center justify-center flex-col hover:scale-[1.04] transition-all ease-in-out"
            >
              <Image
                src={link.path}
                alt={link.title}
                height={24}
                width={24}
                className="transition-all ease-in-out laptop:h-8 h-4 "
              />
              <p className="text-[7.19px] font-semibold laptop:text-sm">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="#"
          className="flex items-center justify-center text-black tablet:rounded-[5.14px] laptop:rounded-[10px] laptop:w-36 laptop:h-12 tablet:w-[71.95px] tablet:text-[9.25px] laptop:text-lg tablet:h-[29.18px] bg-[#B9E390] font-semibold hover:bg-[#B9E390] hover:text-black"
        >
          Donation
        </Link>
      </div>

      <div className="tablet:hidden block pr-7">
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
