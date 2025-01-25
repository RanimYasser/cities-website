import React from "react";
import data from "../../backend/section2.json";
import "./Product.css"; 

const Product = () => {
  return (
    <section className="product-section">
      <div className="product-container">
        {/* Section Name */}
        <h2>{data.sectionName}</h2>

        {/* Title */}
        <h1>{data.title1}</h1>

        {/* Image */}
        {data.images && data.images.length > 0 && (
          <div className="product-images">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image.sky} // Use the "sky" property from the JSON
                alt={`Product Image ${index + 1}`}
                className="product-image"
              />
            ))}
          </div>
        )}

        {/* Paragraph */}
        <p>{data.paragraph}</p>
      </div>
    </section>
  );
};

export default Product;
