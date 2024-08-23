import React from "react";
import { View } from "react-native";
import { ImageSliderBox } from "react-native-image-slider-box";

const ImageSliderComponent = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <View>
      <ImageSliderBox
        images={images}
        autoplay
        circleLoop
        dotColor="#FF6347"
        inactiveDotColor="#90A4AE"
        sliderBoxHeight={200}
      />
    </View>
  );
};

export default ImageSliderComponent;
