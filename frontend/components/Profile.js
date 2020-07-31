import React, { useState } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

const Profile = ({ user }) => {
    console.log('user', user)
    
    const [firstName, setFirstName] = useState(`${user.firstName}`);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(`${user.email}`);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');


    return user.id ? (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={async (ev) => {
                ev.preventDefault()
                const profile = await Axios.get('/api/profile')
                console.log('profile', profile)
            }}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="name" className="form-control" aria-describedby="emailHelp" value={`${firstName}`} onChange={(ev) => setFirstName(ev.target.value)} />
                    <small className="form-text text-muted">Update First Name.</small>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="name" className="form-control" value={`${lastName}`} onChange={(ev) => setLastName(ev.target.value)} />
                    <small className="form-text text-muted">Update Last Name.</small>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={`${email}`} onChange={(ev) => setEmail(ev.target.value)} />
                    <small className="form-text text-muted">Update email address.</small>
                </div>
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
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    ) : <h2>Please log in or create an account.</h2>
}

const mapstate = ({ user }) => ({
    user
})

export default connect(mapstate, null)(Profile)
