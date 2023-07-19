import React, { useState } from 'react'
import { LoginForm, SignupForm } from '../../components'
import { Link } from 'react-router-dom';
import './style.modules.css'
function Auth() {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className='home'><Link to="/">Home</Link></div>
            <div className={active ? "container-1  right-panel-active" : "container-1"}>

                <div className="form-container sign-up-container">
                    <SignupForm setActive={setActive} />
                </div>
                <div className="form-container sign-in-container">
                    <LoginForm setActive={setActive} />
                </div>
                <div className="overlay-container">
                    <div className="overlay">

                        <div className="overlay-panel overlay-left">

                        </div>
                        <div className="overlay-panel overlay-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth