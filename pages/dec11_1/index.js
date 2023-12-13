import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function Dec11_1() {
  const vRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      vRef.current.play();
    } else {
      vRef.current.pause();
    }
    // const _ref = vRef;
    // vRef.current.play();

    // setTimeout(() => {
    //   _ref.current.load();
    //   vRef.current.play();
    // }, 5000);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <center>
      <video
        style={{ border: "5px solid red", marginTop: "10px" }}
        ref={vRef}
        muted
        src={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        }
        // loop
        playsInline
      />
      <div className="mb-5" style={{ marginLeft: "10px", marginTop: "10px" }}>
        <Button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>
    </center>
  );
}

export default Dec11_1;
