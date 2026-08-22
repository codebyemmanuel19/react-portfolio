import "./Promo.css";

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
    </div>
  );
};

export default Promo;