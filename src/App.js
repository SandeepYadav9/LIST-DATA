import React, { useState } from "react";
import "./App.css";
const data = [
  { name: "Ispreet", id: 1 },
  { name: "With Sandeep", id: 2 },
  { name: "Monu", id: 3 },
  { name: "Ispreet", id: 4 },
  { name: "Mohali b8", id: 5 },
];
const App = () => {
  const [listName, setListName] = useState(data);
  const [searchLists, setSearchLists] = useState("");

  const onDeleteHandler = (item) => {
    const deleteLists = listName.filter((list, index) => list.id !== item);
    setListName(deleteLists);
  };

  const onSearchHandler = (e) => {
    const searchKey = e.target.value;
    setSearchLists(e.target.value);
    if (searchKey !== "") {
      const result = data.filter((list) =>
        list.name.toLowerCase().startsWith(searchKey.toLowerCase())
      );

      setListName(result);
    } else {
      setListName(data);
    }
  };
  return (
    <div className="app">
      <div>
        <input
          type="text"
          placeholder="Search Data "
          value={searchLists}
          onChange={onSearchHandler}
        />
      </div>
      <hr />
      {listName.map((list, index) => {
        return (
          <div key={list.id} className="text">
            <span contentEditable="true"> {list.name}</span>

            <button onClick={() => onDeleteHandler(list.id)}>
              Delete/Edits
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
