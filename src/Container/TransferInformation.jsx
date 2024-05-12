import React, { useEffect, useState } from "react";
import TransferInfoCard from "./TransferInfoCard";
import "./allInfoCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransfers } from "../redux/transferSlice";

const TransferInformation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransfers());
  }, []);
  const { transfers } = useSelector((store) => store.transfer);
  return (
    <div className="cards">
      {transfers?.map((transfer) => {
        return <TransferInfoCard key={transfer.id} transfer={transfer} />;
      })}
    </div>
  );
};

export default TransferInformation;
