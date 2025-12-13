import React from "react";
import "./Benefits.css";

export default function Benefits({ benefits }) {
  return (
    <section className="py-5" style={{ background: "white" }}>
      <div className="container">
        <div className="row g-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="col-6 col-lg-3">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon size={32} color="#000" strokeWidth={2.5} />
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                    {benefit.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
