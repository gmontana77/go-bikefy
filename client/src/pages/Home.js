import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Defaultlayout from "../components/DefaultLayout";
import { getAllBikes } from "../redux/actions/bikeActions";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Home() {
  const { bikes } = useSelector((state) => state.bikesReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBikes());
  }, []);

  return (
    <Defaultlayout>
      {loading == true && <Spinner />}

      <Row justify="center" gutter={16} className="mt-5">
        {bikes.map((bike) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="bike p-2 bs1 mt-3">
                <img src={bike.image} className="bikeImg" alt="bike for rent" />
              </div>
              <div className="bike-content d-flex align-items-center justify-content-between">
                <div>
                  <p className="name">{bike.name}</p>
                  <p className="type">Type: {bike.type}</p>
                  <p className="category">Specs: {bike.category}</p>
                </div>
                <div className="mr-2">
                  <p className="price">€{bike.rentPerDay}/Day</p>
                  <button className="btn1">
                    <Link to={`/booking/${bike._id}`}>Add to card</Link>
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Defaultlayout>
  );
}

export default Home;
