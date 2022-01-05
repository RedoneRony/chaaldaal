import React from "react";

import "../User/User.css";
// pass data using props from Users js
function FilteredUser(props) {
  const { name, pictureUrl } = props.user.profile;
  const dayDetails = props.user.calendar.daysWithDetails;
  const Userid = dayDetails[Object.keys(dayDetails)[0]].day.userId;

  return (
    <div className="user">
      <div>
        <img src={pictureUrl} alt="" />
        <br />
        <br />
        <h6 className="user-name">{name}</h6>
        <br />
        <br />
        <h6 className="user-id">{Userid}</h6>
      </div>
    </div>
  );
}

export default FilteredUser;
