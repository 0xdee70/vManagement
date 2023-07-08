import React from 'react'

export default function ManagerLogin() {
    return (
        <div>
            <div>
                <h3>Manager Login: </h3>
            </div>
            <div>
                <form>
                    <div>
                        <label>
                            Email:
                        </label>
                        <br />
                        <input
                            type='email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <br />
                        <input
                            type='password'
                            placeholder='Enter password'
                        />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
