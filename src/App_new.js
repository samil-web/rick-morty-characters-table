import { useEffect, useState } from "react";
import "./App_new.css";
import "../src/components/Table/Table.css"
// import "../src/components/Search/search.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table"
import TableHead from "./components/Table/TableHead";

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="margin margin-heading margin-bottom heading bottom-margin">Characters</h1>
      <div className="flex">
        <Search className='search ' setSearch={setSearch} updatePageNumber={updatePageNumber} />
        <Filter
          pageNumber={pageNumber}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
      </div>
      <TableHead />
      <Table page='/' results={results} />
      <Pagination className="pag-right" pageNumber={pageNumber} info={info} updatePageNumber={updatePageNumber} />
    </div>
  );
}



export default App;
