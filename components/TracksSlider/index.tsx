import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface TracksSliderProps {
  tracksIds?: string[];
}
const TracksSlider: React.FC<TracksSliderProps> = ({
  tracksIds = [
    "0c6xIDDpzE81m2q797ordA",
    "2uFvVZNMefFxgDU1VgZi8L",
    "5uEYRdEIh9Bo4fpjDd4Na9",
    "0VjIjW4GlUZAMYd2vXMi3b",
  ],
}) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="max-w-[90vw] my-8 flex items-center justify-center"
    >
      {tracksIds.map((track, index) => (
        <SwiperSlide key={track} className="flex items-center justify-center">
          <iframe
            width={700}
            height={300}
            src={`https://open.spotify.com/embed/track/${track}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TracksSlider;
