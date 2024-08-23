import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

// Import your local images
import img1 from "../assets/imgs/1.jpg";
import img2 from "../assets/imgs/2.png";
import img3 from "../assets/imgs/3.jpg";

const { width } = Dimensions.get("window");

const CardComponent = () => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  const images = [img1, img2, img3]; // Array of your local images

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Slide out the current image to the left
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 50, // Duration of the slide-out
        useNativeDriver: true,
      }).start(() => {
        // Reset the position, change the image, and slide in the new one from the right
        const nextIndex = (imageIndex + 1) % images.length;
        setImageIndex(nextIndex);
        slideAnim.setValue(width); // Start the new image from the right side
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200, // Duration of the slide-in
          useNativeDriver: true,
        }).start();
      });
    }, 10000);

    // Clean up the timer if the component is unmounted before the timer completes
    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
          <Card.Cover source={images[imageIndex]} style={styles.cardImage} />
        </Animated.View>
      </Card>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: "100%",
  },
  cardImage: {
    height: 450,
  },
});
