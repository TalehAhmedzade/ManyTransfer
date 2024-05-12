import React, { useState } from "react";
import "./addCard.css";
import { useDispatch, useSelector } from "react-redux";
import { editTransfer } from "../redux/transferSlice";
const EditTransferInfoCard = ({ transfer, setIsVisible }) => {
  const dispatch = useDispatch();
  const [editedTransfer, setEditedTransfer] = useState(transfer);
  const handleChange = (e) => {
    setEditedTransfer({ ...editedTransfer, [e.target.name]: e.target.value });
    console.log(editedTransfer);
  };
  const handleClick = () => {
    console.log(editedTransfer);
    dispatch(editTransfer(editedTransfer));
    setIsVisible(false);
  };
  return (
    <>
      <div className="infoCard">
        <div className="form">
          <input
            name="from"
            value={editedTransfer.from}
            type="text"
            id="from"
            placeholder="From"
            onChange={handleChange}
          />
          <input
            name="to"
            onChange={handleChange}
            value={editedTransfer.to}
            type="text"
            id="to"
            placeholder="to"
          />
          <input
            name="amount"
            onChange={handleChange}
            value={editedTransfer.amount}
            type="text"
            id="amount"
            placeholder="amount"
          />
          <button onClick={handleClick}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default EditTransferInfoCard;
