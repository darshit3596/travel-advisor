import React, { useEffect, useState } from "react";

const InternetStatus = () => {
  const [isOnline, setIsOnline] = useState(true); // default to true initially

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Set the initial status correctly
    updateOnlineStatus();

    // Listen for changes in connectivity
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Clean up
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    !isOnline && (
      <div
        style={{
          backgroundColor: "#ffcccc",
          color: "#b00020",
          padding: "10px",
          textAlign: "center",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        🔌 You are offline. Please check your internet connection.
      </div>
    )
  );
};

export default InternetStatus;
