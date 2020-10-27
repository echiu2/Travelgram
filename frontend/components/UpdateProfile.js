import React, { useState } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { updateUser } from "../redux/user";

const updateProfile = ({ user, updateUser }) => {
  const [firstName, setFirstName] = useState(`${user.firstName}`);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(`${user.email}`);
  // const [password, setPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return window.localStorage.getItem("token") ? (
    <div>
      <h1>Update Profile</h1>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          updateUser(firstName, lastName, email)
          // const profile = await Axios.put("/api/user", {
          //   user,
          //   firstName,
          //   lastName,
          //   email,
          // });
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
  updateUser: (firstName,lastName,email) => dispatch(updateUser(firstName, lastName, email))
});

export default connect(mapstate, mapDispatch)(updateProfile);
