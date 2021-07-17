// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { HomeAction } from "../redux/store";
import { AppNav } from "./AppNav";

export const Home = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state);

  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // const updateUserName = e => setUserName(e.target.value);
  // const updatePassword = e => setPassword(e.target.value);

  // const addNewUser = () => {
  //   dispatch(HomeAction({ userName, password }));
  //   setUserName("");
  //   setPassword("");
  // };

  return (
    <div>
      {/* <AppNav /> */}
      <div className="alert alert-secondary">
        <h3 className="text-center">Electricity Home</h3>
      </div>

      <div class="container mb-5 mt-5" style={{ height: "40vh" }}>
        <div class="row">
          <Link to="/customer-upsert">
            <div className="col ml-5">
              <h2 className="col text-danger">Customer</h2>
              <p className="text-dark">
                <h6>kjcdkgkgdsahouchvjbvljshvoiuksdadjgds</h6>
              </p>
            </div>
          </Link>
          <Link to="/address">
            <div className="col-6 ml-5">
              <h2 className="col text-danger">Address</h2>
              <p className="text-dark">
                <h6>kjcdkgkgdsahouchvjbvljshvoiuksdadjgds</h6>
              </p>
            </div>
          </Link>
          <Link to="/connection-upsert">
            <div className="col-6 ml-5 ">
              <h2 className="col text-danger">Connection</h2>
              <p className="text-dark">
                <h6>kjcdkgkgdsahouchvjbvljshvoiuksdadjgds</h6>
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div class="container mt-5" style={{ height: "40vh" }}>
        <div class="row">
          <Link to="/reading-upsert">
            <div className="col-6 ml-5 float-left">
              <Link to="/reading-upsert">
                <h2 className="col text-danger">Reading</h2>
              </Link>
              <p className="text-dark">
                <h6>kjcdkgkgdsahouchvjbvljshvoiuksdadjgds</h6>
              </p>
            </div>
          </Link>
          <Link to="/bill-upsert">
            <div className="col-6 ml-5 float-right ">
              <Link to="/bill-upsert">
                <h2 className="col text-danger">BILL</h2>
              </Link>
              <p className="text-dark">
                <h6>kjcdkgkgdsahouchvjbvljshvoiuksdadjgds</h6>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
