import React from 'react'

const Signup = () => {

    const handleSubmit = () => {
        alert('Login Success')
    }

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup