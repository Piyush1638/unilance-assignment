import React from "react";

const CollabsAndSponsorships = () => {
  return (
    <section className="bg-[#ffffff] rounded-3xl tablet:rounded-xl px-5 py-5 flex flex-col w-full min-w-[312px] tablet:w-[349px] max-h-[370px]">
      <h3 className="laptop:text-2xl text-base font-semibold">
        For Collab and <br /> Sponserships
      </h3>
      <form className="flex flex-col gap-4 my-3 px-3">
        <input
          type="text"
          placeholder="Mail ID"
          className="placeholder:text-[10px]  outline-none border-[0.5px] border-[#000000BF] py-2 px-3 rounded-lg tablet:rounded-3xl"
        />
        <input
          type="text"
          placeholder="Phone No."
          className="placeholder:text-[10px]  outline-none border-[0.5px] border-[#000000BF] py-2 px-3 rounded-lg tablet:rounded-3xl"
        />
        <textarea
          name="description"
          id="description"
          cols={10}
          rows={5}
          placeholder="Description"
          className="placeholder:text-[10px] h-24 outline-none border-[0.5px] border-[#000000BF] py-2 px-3 rounded-lg tablet:rounded-3xl"
        ></textarea>
      </form>
      <button className="px-2 py-1 bg-[#B9E390] rounded-[5px] shadow-md shadow-gray-400">
        Submit
      </button>
    </section>
  );
};

export default CollabsAndSponsorships;
