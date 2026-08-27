import "./Promo.css";
import promoVideo from "../assets/IMG_5263.MP4";


const Promo = () => {
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
          className="promo-video"
          src={promoVideo}
          
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default Promo;