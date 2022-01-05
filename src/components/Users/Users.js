import React, { useState, useEffect } from "react";
import User from "../User/User";
import FilteredUser from "../FilteredUser/FilteredUser";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
function Users() {
  // declare user state
  const [users, setUsers] = useState([]);
  const [userlist, setUserlist] = useState("");
  console.log(userlist);
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
          <Form className="subCategory">
            <Modal.Header closeButton>
              <Modal.Title>Update Value</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} size="sm">
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                size="sm"
                type="submit"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
      <br />
      <br />
      {/* <div className="container"> */}
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
        {/* programmer data */}
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
