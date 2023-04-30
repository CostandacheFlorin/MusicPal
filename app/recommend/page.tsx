"use client";

import Input from "@/components/Input";
import React from "react";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../../components/Button"), {
  ssr: false,
});

const Recommend = () => {
  const eventHandler = (e: string) => {
    console.log(e);
  };
  return (
    <div className="h-screen flex flex-col bg-primary items-center">
      <h2 className=" w-full p-4 text-white text-center text-2xl">
        Configure your recommendations settings
      </h2>

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
