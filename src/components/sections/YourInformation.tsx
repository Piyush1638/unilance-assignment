"use client";
import React from "react";
import { useSelector } from "react-redux";
import { CheckboxWithText } from "../CheckboxWithText";
import OrganizationForm from "../OrganizationForm";
import IndividualForm from "../IndividualForm";

interface ButtonProps {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}

const DonationButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={`border tablet:rounded rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const YourInformation = () => {
  const individualOrorganization = useSelector(
    (data: any) => data.individuaOrOrganizationButton
  );

  const amount = useSelector((data: any) => data.selectedAmount);

  const [selectedButton, setSelectedButton] = React.useState<string | null>(
    "UPI"
  );

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <section className="laptop:px-16 tablet:px-10 px-5  py-5 flex flex-col w-full tablet:w-[570px] laptop:w-[714px]">
      <h1 className="font-medium  tablet:text-2xl text-[20px]">
        Your Information
      </h1>
      {
        individualOrorganization === "individual" ? (<IndividualForm/>):(<OrganizationForm/>)
      }

      <div className="flex gap-3 tablet:flex-row tablet:items-center flex-col justify-start">
        <div className="flex flex-col tablet:w-1/2 w-full">
          <h4 className="font-normal">Monthly Donation</h4>
          <h3 className="text-xl mt-3 font-medium">
            ₹ {amount} <span className="text-[8px]">Rs</span>
          </h3>
          <CheckboxWithText
            label="Yes, I'll cover the transaction fees on Uniford
            can keep 100% of my donation."
            htmlfor="transaction-fees"
            className="text-[10px] laptop:text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          />
        </div>

        <div className="flex flex-col gap-2 my-4 tablet:my-0">
          <h5 className="text-sm whitespace-nowrap">
            Donate with your preferred payment method:
          </h5>
          <DonationButton
            onClick={() => handleButtonClick("UPI")}
            className={
              selectedButton === "UPI"
                ? "bg-[#B9E390] text-white text-sm py-2 shadow-md shadow-gray-400"
                : "text-sm py-2"
            }
          >
            UPI
          </DonationButton>
          <DonationButton
            onClick={() => handleButtonClick("Credit Card")}
            className={
              selectedButton === "Credit Card"
                ? "bg-[#B9E390] text-white text-sm py-2 shadow-md shadow-gray-400"
                : "text-sm py-2"
            }
          >
            Credit Card
          </DonationButton>
          <DonationButton
            onClick={() => handleButtonClick("Bank Transfer")}
            className={
              selectedButton === "Bank Transfer"
                ? "bg-[#B9E390] text-white text-sm py-2 shadow-md shadow-gray-400"
                : "text-sm py-2"
            }
          >
            Bank Transfer
          </DonationButton>
        </div>
      </div>
    </section>
  );
};

export default YourInformation;
