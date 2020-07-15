import React, { useState } from 'react'

export const Login = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log('username', userName)
    console.log('password', password)
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name="name" placeholder="Username" onChange={(ev) => setUsername(ev.target.value)}></input>
                <input type="text" name='password' placeholder="password" onChange={(ev) => setPassword(ev.target.value)}></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}
