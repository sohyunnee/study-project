import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <div className='login'>
            <form className='form'>
                아이디: <input type="text"/><br/>
                비밀번호: <input type="text"/>
            <div className='button'>
            <button>회원가입</button>
            <button>로그인</button>
            </div>
            </form>
        </div>
    )
}

export default Login;