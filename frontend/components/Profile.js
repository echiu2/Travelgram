import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ user }) => {
    console.log('user', user)
    return (
        <div>
            WELCOME TO Profile
        </div>
    )
}

const mapstate = ({ user }) => ({
    user
})

export default connect(mapstate, null)(Profile)
