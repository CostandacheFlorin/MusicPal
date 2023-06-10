"use client";
import React from "react";
import Button from "@/components/Button";
import { Select } from "antd";

import { Radio } from "antd";
import { useRecommendationsConfig } from "@/hooks/useRecommendationsConfig";
import AddTracks from "@/components/AddTracks";
import AddArtists from "@/components/AddArtists";
const Recommend = () => {
  const {
    onChangeRadio,
    genresOptions,
    handleTagsChange,
    genres,
    popularity,
    submitRecommendation,
    fetchingErrors,
  } = useRecommendationsConfig();
  return (
    <div className="min-h-[100vh] h-full flex flex-col bg-primary items-center">
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

      <div className="w-full flex flex-col gap-4 items-center justify-center ">
        <AddTracks />
        <AddArtists />
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-textPrimary text-center text-lg">Genres</p>
            <Select
              mode="tags"
              className="max-w-[100%]"
              placeholder="Select tags"
              onChange={handleTagsChange}
              options={genresOptions}
              value={genres}
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
          className="bg-tertiary rounded-md w-[200px] py-2 text-bold  w-full text-center"
          text="Save settings"
          onClick={submitRecommendation}
        />

        {fetchingErrors.setRecommendationsSettings.hasError ? (
          <p className="text-red-500 text-center py-4">
            {fetchingErrors.setRecommendationsSettings.errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Recommend;
