import React from 'react';
import './LoginPage.css';
import Category from './Category';
import { useState } from 'react';

const LoginPage = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div className='main'>메인</div>
            <div>
                <button onMouseOver={()=>{
                    setVisible(!visible);
                }}>List</button>
                {visible && <Category/>}
            </div>
        </div>
    )
}

export default LoginPage;