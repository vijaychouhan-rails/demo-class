import React, { useEffect, useState } from "react";

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("I am connected to the internet");
    };

    const handleOffline = () => {
      setIsOnline(false);
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

  return <div>{isOnline ? "You are connected" : "You are offline"}</div>;
}

export default OnlineStatus;
