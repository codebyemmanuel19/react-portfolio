import { useRef, useState } from "react";
import "./Promo.css";
import promoVideo from "../assets/codebyemma.mp4";

const Promo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
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
        />
        <button className="mute-toggle" onClick={toggleMute}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
};

export default Promo;