import React, { useState } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

const updateSecurity = ({user}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    return window.localStorage.getItem("token") ? (
        <div>
            <h1>Update Security Settings</h1>
            <form onSubmit={async (ev) => {
                ev.preventDefault()
                const profile = await Axios.put('/api/user', {user, password, newPassword, confirmNewPassword})
                console.log("password", password)
            }}>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} />
                    <small className="form-text text-muted">Current Password</small>
                </div>
                <div className="form-group">
                    <label >New Password</label>
                    <input type="password" className="form-control" id="newPassword" placeholder="New Password" onChange={(ev) => setNewPassword(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label >Confirm New Password</label>
                    <input type="password" className="form-control" id="confirmNewPassword" placeholder="Confirm New Password" onChange={(ev) => setConfirmNewPassword(ev.target.value)} />
                </div>
                <div>
                    <a className="btn btn-primary" href="/profile" role="button">Back</a>
                    <button type="submit" className="btn btn-primary">Update Password</button>
                </div>
            </form>
        </div>
    ) : <h2>Please log in or create an account.</h2>

}

const mapstate = ({ user }) => ({
    user
})

export default connect(mapstate, null)(updateSecurity)
