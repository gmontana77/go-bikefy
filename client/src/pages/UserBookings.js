import React, { useEffect } from "react";
import Defaultlayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import moment from "moment";
import Spinner from "../components/Spinner";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <Defaultlayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={15} sm={24}>
          {bookings
            .filter((o) => o.user == user._id)
            .map((booking) => {
              return (
                <Row gutter={16} className="bs1 m-2 text-left">
                  <Col lg={6} sm={24}>
                    <p>
                      Brand: <b>{booking.bike.name}</b>
                    </p>
                    <p>
                      Total days: <b>{booking.totalDays}</b>
                    </p>
                    <p>
                      Rent per day: <b>€{booking.bike.rentPerDay}</b>
                    </p>
                    <p>
                      Total amount: <b>€{booking.totalAmount}</b>
                    </p>
                  </Col>

                  <Col lg={10} sm={24}>
                    <p>
                      Transaction Id : <b>{booking.transactionId}</b>
                    </p>
                    <img
                      style={{ borderRadius: 5 }}
                      src={booking.bike.image}
                      alt="bike for rent"
                      height="340"
                      className="p-2"
                    />
                  </Col>
                  <Col lg={8} sm={24}>
                    <p>
                      Date of booking:{" "}
                      <b>{moment(booking.createdAt).format("MMM DD yyyy")}</b>
                    </p>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </Defaultlayout>
  );
}

export default UserBookings;
