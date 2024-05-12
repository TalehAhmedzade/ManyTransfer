import React, { useState } from "react";
import "./addCard.css";
import { useDispatch } from "react-redux";
import { addTransfer } from "../redux/transferSlice";
const AddTransferInfoCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTransfer, setNewTransfer] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsVisible(false);
    console.log(newTransfer);
    dispatch(addTransfer(newTransfer));
    setNewTransfer({ from: "", to: "", amount: "" });
  };

  const handleChange = (e) => {
    setNewTransfer({ ...newTransfer, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="infoCard">
        <button onClick={() => setIsVisible(!isVisible)}>Add</button>
        {isVisible && (
          <div className="form">
            <input
              value={newTransfer.from}
              name="from"
              type="text"
              id="from"
              onChange={handleChange}
              placeholder="From"
            />
            <input
              value={newTransfer.to}
              name="to"
              type="text"
              id="to"
              placeholder="to"
              onChange={handleChange}
            />
            <input
              value={newTransfer.amount}
              name="amount"
              onChange={handleChange}
              type="number"
              id="amount"
              placeholder="amount"
            />
            <button onClick={handleClick}>+</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddTransferInfoCard;
