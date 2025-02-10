import { useState } from "react";
import "./dataTable.css"
import users from "./data/user-table-data.json"


function DataTable() {
  const message = "Data Table";
  const [page, setPage] = useState(1);
  const [numSelect, setNumSelect] = useState(5);

  const maxPage = Math.ceil(users.length / numSelect);

  return (
    <div className="data-table">
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))
            .slice((page - 1) * numSelect, (page - 1) * numSelect + numSelect)}
        </tbody>
      </table>
      <Selector numSelect={numSelect} setNumSelect={setNumSelect}/>
      <Btn type="Prev" page={page} setPage={setPage} maxPage={maxPage} />
      <span>Page {page} of {maxPage}</span>
      <Btn type="Next" page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
}

function Selector({ numSelect, setNumSelect }) {
  
  const handleItemsPerPageChange = (event) => {
    setNumSelect(Number(event.target.value));
  };

  return (
    <select value={numSelect} onChange={handleItemsPerPageChange}>
      <option value="5">Show 5</option>
      <option value="10">Show 10</option>
      <option value="20">Show 20</option>
    </select>
  );
}

function Btn({ type, page, setPage, maxPage }) {
  const handlePage = () => {
    type === "Prev" ? setPage(page - 1) : setPage(page + 1);
  };

  const isDisabled =
    (type === "Prev" && page === 1) || (type === "Next" && page === maxPage);
  return (
    <button onClick={handlePage} disabled={isDisabled}>
      {type}
    </button>
  );
}

export default DataTable;