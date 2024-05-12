import React, { useEffect, useState } from "react";
import "./infoCard.css";
import EditTransferInfoCard from "./EditTransferInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransferInfo } from "../redux/transferSlice";
const TransferInfoCard = ({transfer}) => {
  const [isVisible,setIsVisible] = useState(false)
  const handleEditClick = () => {
    setIsVisible(!isVisible);

  };
  const dispatch = useDispatch()
  const handleDeleteClick = () => {
    dispatch(deleteTransferInfo(transfer.id))
  };
  return (
    <>
      <div className="card">
        <p>From: {transfer.from} To: {transfer.to} {transfer.amount} $</p>
        <div className="action">
          <button className="edit" onClick={handleEditClick}>
            <i className="fa fa-edit"></i>
          </button>
          <button onClick={handleDeleteClick} className="delete">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
      {isVisible&&<EditTransferInfoCard transfer = {transfer} setIsVisible = {setIsVisible}/>}
    </>
  );
};

export default TransferInfoCard;
