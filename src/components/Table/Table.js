import "./Table.css"
// import TableHead from "./TableHead";
import React from "react";
const Table = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, origin, gender, species } = x;

      return (
        // <div >

        // </div>
        <table style={{ backgroundColor: status === 'Dead' ? '#F6F8FA' : 'white' }}

        >
          <tbody

          >

            <tr key={id}>
              <td >{name}
                <br></br>
                {species}
              </td>
              <td>
                <img src={image} alt="" height={100} />
              </td>

              <td>{origin.name}</td>
              <td>{gender}</td>
              <td>{status}</td>
            </tr>

          </tbody>
        </table>
      );
    });
  }
  else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}
export default Table

