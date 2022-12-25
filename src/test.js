
import React, { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import TableHead from "./components/Table/TableHead";
// const axios = require('axios').default
const Func = () => {

    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    // console.log(fetchedData)
    return (
        <div>
            <TableHead />
            <Table results={results} />
        </div>
    )
}
export default Func