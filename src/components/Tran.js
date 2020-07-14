import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Tran({ tran }) {
  const { deleteTran } = useContext(GlobalContext);
  const sign = tran.amount < 0 ? "-" : "+";
  return (
    <li className={tran.amount < 0 ? "minus" : "plus"}>
      {tran.text}{" "}
      <span>
        {sign}${Math.abs(tran.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTran(tran.id)}>
        x
      </button>
    </li>
  );
}
