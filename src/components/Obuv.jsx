import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

const Obuv = () => {
  const [mass, setMass] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVal1();
  }, []);

  function getVal1() {
    Axios.get("https://api.npoint.io/09f380758dc525dc73d7").then((ress) => {
      dispatch({ type: "added1", payload: { mass: ress.data } });
      setMass(ress.data);
    });
  }

  return (
    <div className="container">
      <h4 className="text-success my-3 fw-bold">Oyoq kiyimlar</h4>
      <div className="row">
        {mass &&
          mass.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="card">
                  <img width={232} src={item.img} alt="rasm" />
                  <h6 className="ps-2">{item.price}$</h6>
                  <h6 className=" ps-2 fw-bold">{item.name}</h6>
                </div>
                <button className=" my-2 mb-5 btn btn-success form-control fw-bold fs-5">
                  Sotib Olish
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Obuv;
