import React from "react";
import { CheckboxWithText } from "./CheckboxWithText";
import { IoIosInformationCircleOutline } from "react-icons/io";


const IndividualForm = () => {
  return (
    <form className="my-8 flex flex-col gap-3">
      <div className="flex tablet:items-center tablet:flex-row flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm hidden tablet:block font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            className="tablet:w-[210.76px] laptop:w-[264px] border-[0.5px] border-black tablet:rounded-md rounded-3xl px-4 py-2 mt-1 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm hidden tablet:block font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Second Name
          </label>
          <input
            type="text"
            id="name"
            className=" tablet:w-[210.76px] laptop:w-[264px] border-[0.5px] border-black tablet:rounded-md rounded-3xl px-4 py-2 mt-1 outline-none"
          />
        </div>
      </div>
      <div className="relative bottom-3 flex items-center gap-2">
        <CheckboxWithText
          htmlfor="hide-name"
          label="Hide my name from public"
          className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <IoIosInformationCircleOutline className="cursor-pointer"/>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm hidden tablet:block font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Mail ID
        </label>
        <input
          type="email"
          id="email"
          placeholder="Mail ID"
          className="tablet:w-[210.76px] laptop:w-[264px] border-[0.5px] border-black tablet:rounded-md rounded-3xl px-4 py-2 mt-1 outline-none"
        />
        <p className="text-[10px] font-normal">
          your reciept will be emailed here
        </p>
      </div>
      <div className="gap-3 flex tablet:flex-col flex-col-reverse my-2 tablet:my-0">
        <p className="text-sm">
          By donating you agree our terms and conditions.
        </p>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-sm hidden tablet:block font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            className="tablet:w-[210.76px] laptop:w-[264px] border-[0.5px] border-black tablet:rounded-md rounded-3xl px-4 py-2 mt-1 outline-none"
          />
        </div>
      </div>

      <hr className="h-px my-2 bg-[#103310] border-0 shadow-lg text-gray-500" />
    </form>
  );
};

export default IndividualForm;
