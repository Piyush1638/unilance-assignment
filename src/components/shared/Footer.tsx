import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {


  // Socials links, images and paths
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/uniford/",
      path: "/assets/svgs/instagram.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/uniford/",
      path: "/assets/svgs/linkedin.svg",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/uniford/",
      path: "/assets/svgs/facebook.svg",
    },
    {
      name: "Telegram",
      url: "https://www.telegram.com/uniford/",
      path: "/assets/svgs/telegram.svg",
    },
    {
      name: "Discord",
      url: "https://www.discord.com/uniford/",
      path: "/assets/svgs/discord.svg",
    },  
    {
      name: "Twitter",
      url: "https://www.twitter.com/uniford/",
      path: "/assets/svgs/twitter.svg",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/uniford/",
      path: "/assets/svgs/youtube.svg",
    },
  ]

  return (
    <footer className="bg-[#DCF1C7] w-full hidden tablet:flex items-center justify-center">
      <div>
        <div className="tablet:px-20 laptop:px-40 pt-10 pb-8">
          <h1 className="font-semibold tablet:text-xl laptop:text-4xl">
            Unlock potential, empower futures. Donate to education today
          </h1>
        </div>
        <div className="tablet:px-16 laptop:px-28">
          <hr className="h-px my-2 bg-[#103310] border-0 shadow-lg text-gray-500" />
        </div>

        <div className="flex items-center justify-between gap-5 tablet:px-20 laptop:px-40 pb-10 pt-4">
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/svgs/logo.svg"
              alt="logo"
              height={80}
              width={80}
            />
            <p className="text-base font-normal whitespace-nowrap">In India for the world</p>
          </div>
          <div className="flex flex-col relative top-12">
            <hr className="h-px my-2 bg-[#103310] border-0 shadow-lg text-gray-500" />
            <div className="flex items-center laptop:gap-8 gap-4">
              {socials.map((social,index)=>(
                <SocialsLinks key={index} url={social.url} path={social.path} name={social.name} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Link href="#">Back to top ^</Link>
            <div className="ps-8">
              <p>Doner Support</p>
              <p>donate@uniford.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialsLinks = ({url,path,name}:{url:string, path:string, name:string}) => (
  <div className="flex gap-5">
      <Link
        href={url}
        className="hover:opacity-70 transition-all ease-linear"
      >
        <Image
          src={path}
          alt={name}
          height={24}
          width={24}
          className="transition-all ease-linear laptop:h-8 tablet:h-[16.17px] h-auto"
        />
      </Link>
  </div>
)
