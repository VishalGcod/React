import { fetchUsers } from "../redux/inputAction";
import { useEffect, useReducer } from "react";
import React from "react";
import { useDispatch } from "react-redux";

function ApiFetching({ userData, fetchUsers }) {
  const fetchReq=useReducer((state)=>state?.fetch?.users)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  return (
    <div>
      {
        fetchReq.map((e)=>(
          <h1>{e.name}</h1>
        ))
      }
    </div>
  )
}

export default ApiFetching
