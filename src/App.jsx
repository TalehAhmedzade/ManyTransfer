import { useState } from "react";
import "./App.css";
import TransferInformation from "./Container/TransferInformation";
import AddTransferInfoCard from "./Container/AddTransferInfoCard";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useSelector((store) => store.transfer);

  return (
    <>
     

        <div className="app">
          
          {isLoading&&<div className="loading">Loading...</div>}
          <AddTransferInfoCard />
          <TransferInformation />
          
        </div>
    
        
    </>
  );
}

export default App;
