"use client";
import Link from "next/link";
import React from "react";
import { SelectOption } from "../SelectOption";
import { setIndividualOrOrganizationButton } from "@/app/redux/slice";
import { useDispatch } from "react-redux";
import { CheckboxWithText } from "../CheckboxWithText";

interface CustomButtonProps {
  amount: number;
  selectedAmount: number | null;
  handleButtonClick: (amount: number) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  amount,
  selectedAmount,
  handleButtonClick,
}) => {
  const isSelected = selectedAmount === amount;

  const buttonClassName = isSelected
    ? "bg-[#B9E390] text-black hover:bg-[#B9E390] hover:text-black laptop:w-[90px] w-[71px] laptop:text-sm text-[10px] h-7"
    : "bg-transparent border-[0.5px] border-black text-black laptop:w-[90px] w-[71px] laptop:text-sm text-[10px] h-7";

  return (
    <button
      className={`${buttonClassName} rounded w-[90px]`}
      onClick={() => handleButtonClick(amount)}
    >
      ₹ {amount}
    </button>
  );
};

const HelpUsToDoMore = () => {
  const [individualOrOrganizationButtonClicked, setIndividualOrOrganizationButtonClicked] = React.useState("individual");
  const [selectedAmount, setSelectedAmount] = React.useState<number>(3000);

  const dispatch = useDispatch();
  const individialOrOrganizationButtonDispatch = (individualOrOrganization: string)=>{
    setIndividualOrOrganizationButtonClicked(individualOrOrganization);
    dispatch(setIndividualOrOrganizationButton(individualOrOrganization));
  }

  const handleButtonClick = (amount: number) => {
    setSelectedAmount(amount);
  };


  return (
    <section className="laptop:px-16 tablet:px-10 px-5 laptop:pt-16 laptop:pb-4 tablet:py-10 py-5 flex flex-col w-full tablet:w-[570px] laptop:w-[714px]">
      <h1 className="font-medium laptop:text-5xl tablet:text-4xl text-[20px]">
        Help us to do more
      </h1>
      <p className="text-sm font-light my-4 leading-5">
        We'll get right to the point: we're asking you to help support Uniford.
        We're a nonprofit that relies on support from people like you. If
        everyone reading this gives $2 monthly, Uniford can continue to thrive
        for years. Please help keep Uniford free, for anyone, anywhere forever.
      </p>
      <p className="text-[13px] font-normal my-2">
        Did you know you might be able to double your gift?{" "}
        <span className="underline tracking-wide italic ">
          <Link href="#" className="font-medium">
            Check to see if your employer matches
          </Link>
        </span>
      </p>
      <p className="italic tablet:block hidden  underline font-semibold text-sm">
        What to know about tax benefits?{" "}
        <span className="no-underline">CHECK FAQ's</span>
      </p>

      {/* Choose an organization or individual */}
      <div className="my-4">
        <div className="flex items-center justify-center tablet:px-10 px-5 mt-3">
          <button
            className={`${
              individualOrOrganizationButtonClicked === "individual" ? "clicked" : "not-clicked"
            } rounded-tl-[5px] rounded-bl-[5px] laptop:w-[264px] tablet:w-56 w-[120px] text-xs tablet:text-sm tablet:py-2 py-1`}
            onClick={() => individialOrOrganizationButtonDispatch("individual")}
            >
            Individual
          </button>
          <button
            className={`${
              individualOrOrganizationButtonClicked === "organization" ? "clicked" : "not-clicked"
            }  rounded-tr-[5px] rounded-br-[5px] laptop:w-[264px] tablet:w-56 w-[120px] text-xs tablet:text-sm tablet:py-2 py-1`}
            onClick={() => individialOrOrganizationButtonDispatch("organization")}
            >
            Organization
          </button>
        </div>
      </div>

      {/* How often do you like to donate */}
      <div className="">
        <label className="font-normal text-sm">
          How often would you like to donate ?
        </label>
        <div className="tablet:px-10 px-5 mt-3">
          <SelectOption
            placeholder="Monthly"
            items={["Monthly", "Quaterly", "Yearly"]}
          />
          <div />
        </div>
      </div>

      {/* Choose a monthly amount */}
      <div className="mt-4">
        <label className="font-normal text-sm">Choose a monthly amount</label>
        <div className="flex tablet:items-center justify-start tablet:flex-row flex-col px-5 tablet:gap-3  gap-5 mt-3">
          <div className="flex items-center gap-3 laptop:pe-5 ">
            <CustomButton
              amount={3000}
              selectedAmount={selectedAmount}
              handleButtonClick={handleButtonClick}
            />

            <CustomButton
              amount={5000}
              selectedAmount={selectedAmount}
              handleButtonClick={handleButtonClick}
            />

            <CustomButton
              amount={9000}
              selectedAmount={selectedAmount}
              handleButtonClick={handleButtonClick}
            />
          </div>
          <div className="flex items-center rounded-[5px] w-40">
            <form className="flex items-center justify-center border-[0.5px] border-black rounded w-[166px]">
              <select name="currency" id="cars" className="outline-none border-r-2 mr-2">
                <option value="rs">Rs</option>
                <option value="uad">UAD</option>
                <option value="usd">USD</option>
                <option value="aed">AED</option>
              </select>
              <input
                type="text"
                placeholder="Other"
                className=" px-1 outline-none w-full"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Dedicate my donation in honor or in memory of someone */}
      <CheckboxWithText 
      htmlfor="honor-memory"
      label="Dedicate my donation in honor or in memory of someone" 
      className = "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"     
      />
    </section>
  );
};

export default HelpUsToDoMore;
