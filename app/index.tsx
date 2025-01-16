import { Button, Pressable, StyleSheet, View } from "react-native";

import { useVideoPlayer, VideoView } from "expo-video";
import { ThemedView } from "@/components/ThemedView";
import { useEffect } from "react";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function HomeScreen() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.playbackRate = 0.3;
    player.preservesPitch = true;
  });

  const playUrl = () => {
    player.play();
  };

  return (
    <ThemedView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.button}>
          <Button
            onPress={() => {
              playUrl();
            }}
            title={"Play"}
          />
        </ThemedView>

        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          nativeControls={false}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderStyle: "solid",
  },
  video: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
  container: {
    margin: "auto",
  },
  interrogationContainer: {
    backgroundColor: "rgb(91, 121, 236)",
    opacity: 1,
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
