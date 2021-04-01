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
    console.log('friends', friendRequests)
    return (
        <div>
            <h1>FRIEND REQUESTS</h1>
            {
                friendRequests.map((request, idx) => {
                    return request.userId === user.id ?
                        <div className="card" key={idx}>
                            {/* <div className="card-header">
                            </div> */}
                            <div className="card-body">
                                {/* <div>sent to {request.userId}</div> */}

                                <button onClick={() => axios.post('/api/friendRequests')} className="btn btn-primary">Accept</button>
                                <button onClick={() => console.log('stranger danger')} className="btn btn-danger">Decline</button>
                            </div>
                            {/* <div className="card-footer"></div> */}
                        </div> :
                        <div className="card" key={idx}>
                            {/* <div className="card-header">
                            </div> */}
                            <div className="card-body">
                                {/* <div>sent from {request.user.firstName + " " + request.user.lastName} </div> */}

                                <button onClick={() => console.log('test')} className="btn btn-primary">Accept</button>
                                <button onClick={() => console.log('stranger danger')} className="btn btn-danger">Decline</button>
                            </div>

                            {/* <div className="card-footer"></div> */}
                        </div>
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