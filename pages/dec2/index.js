import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function handleScroll(e) {
      console.log("======scrolling==================");
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      console.log("I am connected to the internet");
    };

    const handleOffline = () => {
      console.log("Disconnected...so sad!!!");
    };

    // Add event listeners when the component mounts
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    const fetchData = () => {
      fetch("https://reqres.in/api/users?page=1&delay=10")
        .then((response) => {
          if (!response.ok) {
            console.log("====err0r=========================");
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("====success=========================", data);
          setUsers(data.data); // Assuming the response has a 'data' property containing the user array
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <Link href="/home">Home Page</Link>

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </>
  );
}
