import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Tran from "./Tran";

export const TransList = () => {
  const { trans } = useContext(GlobalContext);

  console.log(trans);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {trans.map((tran, id) => (
          <Tran key={id} tran={tran} />
        ))}
      </ul>
    </>
  );
};
