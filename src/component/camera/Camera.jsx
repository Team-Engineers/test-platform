import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    // Cleanup function
    return () => {
      const currentWebcamRef = webcamRef.current;

      if (currentWebcamRef) {
        const tracks =
          (currentWebcamRef.srcObject &&
            currentWebcamRef.srcObject.getTracks()) ||
          [];
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // Cleanup when receiving new props (e.g., navigating to a different page)
  useEffect(() => {
    return () => {
      const currentWebcamRef = webcamRef.current;

      if (currentWebcamRef) {
        const tracks =
          (currentWebcamRef.srcObject &&
            currentWebcamRef.srcObject.getTracks()) ||
          [];
        tracks.forEach((track) => track.stop());
      }
    };
  }, [webcamRef]);

  return (
    <div>
      <h2>Live Camera Feed</h2>
      <Webcam
        audio={false}
        height={480}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
      />
    </div>
  );
};

export default Camera;
