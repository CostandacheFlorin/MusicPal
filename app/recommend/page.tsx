"use client";
import Input from "@/components/Input";
import React from "react";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import dynamic from "next/dynamic";

// const DynamicDropdown = dynamic(
//   async () => import("../../components/Dropdown"),
//   { ssr: false }
// );
const Recommend = () => {
  const eventHandler = (e: string) => {
    console.log(e);
  };
  return (
    <div className="h-screen flex flex-col bg-primary items-center">
      <h2 className=" w-full p-4 text-white text-center text-2xl">
        Configure your recommendations settings
      </h2>

      <div className=" mb-10 text-textPrimary text-center">
        <h3 className="text-bold pb-4 text-xl">Guide</h3>
        <div>
          Up to 5 seed values may be provided in any combination of artists,
          tracks and genres.
        </div>
      </div>

      <div className="max-w-2xl ">
        <Input
          placeholder="Track"
          labelPosition="center"
          label="Track"
          onChange={eventHandler}
        />
        <Input
          placeholder="Artist"
          labelPosition="center"
          label="Artist"
          onChange={eventHandler}
        />

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-textPrimary text-center text-lg">Genres</p>
          </div>

          <p className="text-textPrimary">Current genres</p>
          <Dropdown
            className="mt-2"
            options={[
              { label: "Banana", value: "banana" },
              { label: "Cherry", value: "cherry" },
              { label: "Durian", value: "durian" },
              { label: "Elderberry", value: "elderberry" },
              { label: "Fig", value: "fig" },
            ]}
            onChange={eventHandler}
            value={"banana"}
            loading={false}
            placeholder={"test"}
            onClear={() => {
              console.log("respect");
            }}
          />
          <Button
            className="bg-tertiary  rounded-md py-2  w-full text-center"
            text="Add genre"
            onClick={() => console.log("respect")}
          />
        </div>
        <p className="text-red-500 text-center p-4">Error</p>
        <Button
          className="bg-tertiary rounded-md py-2  w-full text-center"
          text="Search"
          onClick={() => console.log("respect")}
        />
      </div>
    </div>
  );
};

export default Recommend;
