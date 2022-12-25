import React from "react";
import Species from "./category/Species";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./filter.css"

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateSpecies,
}) => {
  let clear = () => {
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div >
      <div className="accordion" id="accordionExample">


        <Species
          clear={clear}
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />

      </div>
    </div>
  );
};

export default Filter;
