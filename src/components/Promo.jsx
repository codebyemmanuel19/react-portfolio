import { useRef, useState } from "react";
import "./Promo.css";
import promoVideo from "../assets/codebyemma.mp4";

const Promo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <div className="promotion">
      <h2>Website Development Promo</h2>

      <p>
        <span className="old-price">₦500,000</span>{" "}
        <span className="new-price">₦120,000</span> — Get a professional,
        mobile-responsive website built for your business. Limited slots this
        month.
      </p>

      <div className="promo-video-wrapper">
        <video
          ref={videoRef}
          className="promo-video"
          src={promoVideo}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="auto"
          onClick={togglePlay}
        />

        <div className="video-controls">
          <button className="control-btn" onClick={togglePlay}>
            {playing ? "⏸️" : "▶️"}
          </button>
          <button className="control-btn" onClick={toggleMute}>
            {muted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promo;