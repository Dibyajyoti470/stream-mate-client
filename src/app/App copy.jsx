import "./App.css";
import { useRef, useEffect } from "react";
import { VideoPlayer } from "../VideoPlayer";
import { io } from "socket.io-client";

function App() {
  const playerRef = useRef(null);
  const socketRef = useRef(null);
  // const isSeekingRef = useRef(false);

  const videoLink =
    "http://localhost:5000/uploads/courses/C3rbinFUGoG7VvTqEi94G/index.m3u8";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("timeupdate", () => {
      // if (isSeekingRef.current) {
      //   return;
      // }
      // const currentTime = player.currentTime();
      // handlePlaybackTimeChanged(currentTime);
    });

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  // const handlePlaybackTimeChanged = (currentTime) => {
  //   console.log(currentTime);
  //   const socket = socketRef.current;
  //   if (socket) {
  //     socket.emit("time-update-client", currentTime);
  //   }
  // };

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socketRef.current = socket;

    // socket.on("time-update-server", (updatedTime) => {
    //   console.log("Time updated from server: ", updatedTime);

    //   if (playerRef.current) {
    //     isSeekingRef.current = true;
    //     playerRef.current.currentTime(updatedTime);
    //     isSeekingRef.current = false;
    //   }
    // });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
