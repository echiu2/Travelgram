import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { loadRequests } from '../redux/friendRequests'
const FriendRequests = ({ friendRequests, user, getRequests }) => {
    useEffect(() => {
        const load = async () => {
            const token = window.localStorage.getItem('token')
            getRequests(token)
        }
        load()
    }, [])
    console.log('reqs', friendRequests)
    console.log('user', user)
    return (
        <div>
            <h1>FRIEND REQUESTS</h1>
            {
                friendRequests.map((request, idx) => {
                    return request.userId === user.id ? <div key={idx}>sent to {} </div> : <div key={idx}>invite from {} </div>
                })
            }
        </div>
    )
}

const mapState = ({ friendRequests, user }) => ({
    friendRequests,
    user
})
const mapdispatch = (dispatch) => ({
    getRequests: (token) => dispatch(loadRequests(token))
})
export default connect(mapState, mapdispatch)(FriendRequests)