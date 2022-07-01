import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Completed.css";

const Completed = () => {
  const [listItems, setListItems] = useState([]);
  const [checked, setChecked] = useState(false);
  console.log(checked);

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl">completed tasks</h2>
      <div class="card w-96 my-12 mx-auto shadow-xl">
        <div class="card-body">
        <div className="todo-listItems">
        {listItems.map((item) => (
          <div className="todo-item">
            <>
              <input
                type="checkbox"
                onClick={() => setChecked(!checked)}
                class="checkbox"
                checked="checked"
              />
              <p className="item-content" >{item.item}</p>
            </>
          </div>
        ))}
      </div>
          
        </div>
      </div>
    </div>
  );
};

export default Completed;
