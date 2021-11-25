import React, { useEffect, useState } from "react";
import { Row, Col, Divider, DatePicker, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Defaultlayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllBikes } from "../redux/actions/bikeActions";
import moment from "moment";
import { bookBike } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";

const { RangePicker } = DatePicker;

function BookingBike({ match }) {
  const { bikes } = useSelector((state) => state.bikesReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [bike, setbike] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalDays, setTotalDays] = useState(0);
  const [premium, setPremium] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (bikes.length == 0) {
      dispatch(getAllBikes());
    } else {
      setbike(bikes.find((o) => o._id == match.params.bikeid));
    }
  }, [bikes]);

  useEffect(() => {
    setTotalAmount(totalDays * bike.rentPerDay);
    if (premium) {
      setTotalAmount(totalAmount * 3);
    }
  }, [premium, totalDays]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("DD MMM yyyy HH:mm"));
    setTo(moment(values[1]).format("DD MMM yyyy HH:mm"));

    setTotalDays(values[1].diff(values[0], "days"));
  }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      bike: bike._id,
      totalDays,
      totalAmount,
      premiumRequired: premium,
      bookSlots: {
        from,
        to,
      },
    };

    dispatch(bookBike(reqObj));
  }

  return (
    <Defaultlayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img src={bike.image} className="bikeImg2 bs1" alt="bike for rent" />
        </Col>
        <Col lg={10} sm={24} xs={24}>
          <Divider type="horizontal">
            <p className="dtInfo">Bike info</p>
          </Divider>
          <div>
            <p className="dtName">{bike.name}</p>
            <p className="dtPrice">€{bike.rentPerDay} per Day</p>
            <p className="dtFooter">
              Type: <span className="dtFooter2">{bike.type}</span>
            </p>
          </div>
          <Divider type="horizontal">
            <p className="dtInfo2">Select the date you'd like to block</p>
          </Divider>
          <RangePicker format="MMM DD yyyy HH:mm" onChange={selectTimeSlots} />
          {from && to && (
            <div>
              <p className="tcs">
                We hire all our bikes in two categories: <b>Basic</b> or{" "}
                <b>Premium</b>. If you keep basic we just charge €10.
              </p>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setPremium(true);
                  } else {
                    setPremium(false);
                  }
                }}
              >
                I rather have a Premium Bike
              </Checkbox>

              <h3 className="totalAmount">Total Amount: € {totalAmount}</h3>
              <StripeCheckout
                shippingAddress
                token={onToken}
                amount={totalAmount * 100}
                currency="EUR"
                stripeKey="pk_test_51GuFQwEGbOOiC4bEg3Yo9uRT9IaqGxakAo6FPk1p0bJgcc8QtnMRuJN8evYqHRvMH3uv861S8B8vcfgJRr7mFVwe00OrtVxqpN"
              >
                <button className="btn1">Book Now</button>
              </StripeCheckout>
            </div>
          )}
        </Col>
      </Row>
    </Defaultlayout>
  );
}

export default BookingBike;
