import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import FilterBTN from "../FilterBTN";
import { useState } from 'react';
const Species = ({ updateSpecies, updatePageNumber, clear }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = e => {
    setIsActive(e => !e)
  }
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className={isActive ? 'accordion-button' : "accordion-button collapsed"}
          onClick={handleClick}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className={isActive ? 'accordion-collapse' : "accordion-button collapse"}
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={clear}
          className="text-primary text-decoration-underline text-center mb-3"
        >
          Clear Filters
        </div>
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Species;
