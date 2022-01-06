import React, { useState, useEffect } from "react";
import User from "../User/User";
import FilteredUser from "../FilteredUser/FilteredUser";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
function Users() {
  // declare user state
  const [users, setUsers] = useState([]);
  const [userlist, setUserlist] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("");

  console.log(fromDate);
  console.log(toDate);
  console.log(status);

  console.log(userlist);
  console.log(users);

  const userCalendar = users.map((user) => {
    return user.calendar;
  });
  console.log(userCalendar);
  const dayDate = userCalendar.map((day) => {
    return day.dateToDayId;
  });
  console.log(dayDate);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // load all user data from data folder
  useEffect(() => {
    Promise.all([
      fetch("/data/2.json").then((res) => res.json()),
      fetch("/data/7.json").then((res) => res.json()),
      fetch("/data/2627.json").then((res) => res.json()),
      fetch("/data/10780.json").then((res) => res.json()),
      fetch("/data/13116.json").then((res) => res.json()),
      fetch("/data/14842.json").then((res) => res.json()),
      fetch("/data/17172.json").then((res) => res.json()),
      fetch("/data/20566.json").then((res) => res.json()),
      fetch("/data/21632.json").then((res) => res.json()),
      fetch("/data/27366.json").then((res) => res.json()),
      fetch("/data/29127.json").then((res) => res.json()),
      fetch("/data/30024.json").then((res) => res.json()),
      fetch("/data/30332.json").then((res) => res.json()),
      fetch("/data/31870.json").then((res) => res.json()),
      fetch("/data/33550.json").then((res) => res.json()),
      fetch("/data/34407.json").then((res) => res.json()),
      fetch("/data/34429.json").then((res) => res.json()),
      fetch("/data/36495.json").then((res) => res.json()),
      fetch("/data/37327.json").then((res) => res.json()),
      fetch("/data/38639.json").then((res) => res.json()),
    ]).then((data) => setUsers(...users, data));
  }, [!users]);

  const HandleNameSearch = (e) => {
    const profile = users.map((user) => {
      const profileName = user.profile.name.toLowerCase();
      if (profileName.search(e.target.value.toLowerCase()) !== -1) {
        return user;
      } else {
        return "";
      }
    });
    const result = profile.filter((user) => user !== "");
    setUserlist(result);
  };
  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDate = (e) => {
    setToDate(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="container">
      <div className="filter-search">
        <Button
          variant="light"
          className="btn-sm dropdown-search"
          onClick={() => {
            handleShow();
          }}
        >
          Edit Filter
          <FontAwesomeIcon icon={faSlidersH} />
        </Button>
        <Modal show={show} onHide={handleClose} size="sm" className="category">
          <Form>
            <Modal.Header className="modal-header" closeButton></Modal.Header>
            <Modal.Body>
              <br />
              <h4 style={{ textAlign: "center" }}> User Analyzer</h4>
              <p style={{ textAlign: "center" }}>
                Select filters to generate report
              </p>

              <div className="edit-form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <h6>Date</h6>
                  <hr />
                  <Form.Group>
                    <Container>
                      <Row>
                        <Col lg="2" md="2" sm="6" className="from-style">
                          From
                        </Col>
                        <Col lg="10" md="10" sm="6">
                          <Form.Control type="date" onChange={handleFromDate} />
                        </Col>
                      </Row>
                    </Container>
                  </Form.Group>
                  <Form.Group>
                    <Container>
                      <Row>
                        <Col lg={2} md={2} sm={2} className="form-style">
                          To
                        </Col>
                        <Col lg={10} md={10} sm={10}>
                          <Form.Control type="date" onChange={handleToDate} />
                        </Col>
                      </Row>
                    </Container>
                  </Form.Group>

                  <br />
                  <p>Status</p>
                  <hr />
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="active"
                      onClick={handleStatus}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Active
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="super activate"
                      onClick={handleStatus}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Super Active
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="bored"
                      onClick={handleStatus}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Bored
                    </label>
                  </div>
                </Form.Group>
                <br />
                <Form.Group>
                  <div class="col-md-12 text-center">
                    <Button
                      onClick={handleClose}
                      size="sm"
                      className="button-modal"
                      type="submit"
                    >
                      Generate
                    </Button>
                  </div>
                </Form.Group>
              </div>
            </Modal.Body>
          </Form>
        </Modal>
      </div>
      <br />
      <br />

      <div className="input-group mb-3 w-50 mx-auto md-2 lg-2 sm-1 ">
        <button
          onclick="searchBook()"
          class="btn btn-outline-secondary"
          type="button"
          id="button-search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          id="search-field"
          type="text"
          className="form-control md-10 lg-10 sm-11"
          placeholder="Search by name"
          onChange={HandleNameSearch}
        ></input>
      </div>
      <div className="row">
        {/* user data */}
        <div className="card">
          {userlist.length === 20 || userlist === ""
            ? users?.map((user, id) => <User key={id} user={user}></User>)
            : userlist.map((user, id) => (
                <FilteredUser key={id} user={user}></FilteredUser>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
