import React, { Component } from "react";
import ReactDOM from "react-dom/client";



class HotelCard extends Component {
  render() {
    const { image, rating, name, price, priceUnit, location, stars } = this.props;

    return (
      <div className="card my-3 col-4" style={{ borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        
        <div className="position-relative">
          <img
            src={image}
            className="w-100"
            style={{ height: "180px", objectFit: "cover" }}
            alt={name}
          />

          <div
            className="rating-badge"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "4px 12px",
              background: "#1e90ff",
              color: "white",
              borderRadius: "8px",
              fontSize: "14px"
            }}
          >
            {rating}
          </div>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title mb-1">{name}</h5>

            <div className="text-end">
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>₹{price}</span>
              <br />
              <span style={{ fontSize: "12px", color: "#555" }}>{priceUnit}</span>
            </div>
          </div>

          <div style={{ color: "#555", fontSize: "14px" }} className="mt-2">
            {location}
          </div>

          <div className="mt-1" style={{ fontSize: "16px" }}>
            {Array.from({ length: stars }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="container py-4">
        <h2 className="text-center mb-4">Tour / Hotel Details</h2>

        {/* Reusable Card Component */}
        <HotelCard
          image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
          rating="3.8/5"
          name="ESSOTTO RECREATION HUB"
          price={391}
          priceUnit="per night"
          location="KIADB Export Promotion Industrial Area"
          stars={4}
        />
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);