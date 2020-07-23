import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ user }) => {
    console.log('user', user)
    return (
        <div>
            <h1>
              Welcome to Profile!
            </h1>
        </div>
    )
}

const mapstate = ({ user }) => ({
    user
})

export default connect(mapstate, null)(Profile)
