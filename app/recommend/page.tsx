"use client";
import Input from "@/components/Input";
import React, { useState } from "react";
import Button from "@/components/Button";
import { Select } from "antd";

import { Radio } from "antd";
import { useRecommendations } from "@/hooks/useRecommendations";
import TracksSlider from "@/components/TracksSlider";
import AddTracks from "@/components/AddTracks";
import AddArtists from "@/components/AddArtists";
const Recommend = () => {
  const {
    handleTrackChange,
    handleArtistChange,
    onChangeRadio,
    error,
    handleTagsChange,
    options,
    genres,
    popularity,
    submitRecommendation,
    track,
    artist,
  } = useRecommendations();
  return (
    <div className="h-screen  flex flex-col bg-primary items-center">
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

      <div className="max-w-2xl flex flex-col gap-4 ">
        <AddTracks />
        <AddArtists />
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-textPrimary text-center text-lg">Genres</p>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Select tags"
              onChange={handleTagsChange}
              options={options}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4  items-center ">
          <h3 className=" text-textPrimary text-center text-lg">Popularity</h3>

          <Radio.Group onChange={onChangeRadio} value={popularity}>
            <Radio value={"high"}>High</Radio>
            <Radio value={"medium"}>Medium</Radio>
            <Radio value={"low"}>Low</Radio>
          </Radio.Group>
        </div>

        <Button
          className="bg-tertiary rounded-md py-2 text-bold  w-full text-center"
          text="Save settings"
          onClick={submitRecommendation}
        />
      </div>

      {/* <TracksSlider /> */}
      {error && <p className="text-red-500 text-center p-4">{error}</p>}
    </div>
  );
};

export default Recommend;
