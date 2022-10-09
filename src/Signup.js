import React from 'react';

const Signup = () => {
    return (
        <form>
            아이디: <input/>
            비밀번호: <input/>
            이름: <input/>
            생년월일: <input/>
            <div>
                <button>작성 완료</button>
                <button>작성 취소</button>
            </div>
        </form>
    )
}

export default Signup;