import React, { useState } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { updateUser } from "../redux/user";

const updateProfile = ({ user, updateUser }) => {
  const [firstName, setFirstName] = useState(`${user.firstName}`);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(`${user.email}`);
  const [birthday, setBirthday] = useState(`${user.birthday}`);
  const [location, setLocation] = useState(`${user.location}`);

  const token = window.localStorage.getItem("token")
  return token ? (
    <div>
      <h1>Update Profile</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const options = {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          };
          updateUser(options, firstName, lastName, email)
        }}
      >
        <div className="form-group">
          <label>First Name</label>
          <input
            type="name"
            className="form-control"
            aria-describedby="emailHelp"
            value={`${firstName}`}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <small className="form-text text-muted">Update First Name.</small>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="name"
            className="form-control"
            value={`${lastName}`}
            onChange={(ev) => setLastName(ev.target.value)}
          />
          <small className="form-text text-muted">Update Last Name.</small>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={`${email}`}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <small className="form-text text-muted">Update email address.</small>
        </div>
        <div className="form-group">
          <label>Birthday</label>
          <input
            type="birthday"
            className="form-control"
            value={`${birthday}`}
            onChange={(ev) => setBirthday(ev.target.value)}
          />
          <small className="form-text text-muted">Update Birthday (MM/DD/YYYY).</small>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="birthday"
            className="form-control"
            value={`${location}`}
            onChange={(ev) => setLocation(ev.target.value)}
          />
          <small className="form-text text-muted">Update Location.</small>
        </div>
        <div>
          <a className="btn btn-primary" href="/profile" role="button">
            Back
          </a>
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  ) : (
    <h2>Please log in or create an account.</h2>
  );
};

const mapstate = ({ user }) => ({
  user,
});

const mapDispatch = (dispatch) => ({
  updateUser: (token, firstName,lastName,email) => dispatch(updateUser(token, firstName, lastName, email))
});

export default connect(mapstate, mapDispatch)(updateProfile);
