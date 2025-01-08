import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './css/Login.module.css';

export default function Login({ onLogin }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate(); 

    const toggleMode = () => {
        setIsSignUp(!isSignUp); // 상태 변경 (로그인 <-> 회원가입)
    };

    const handleLogin = async () => {
        if (!username || !password) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        try {
            const response = isSignUp
                ? await axios.post('http://localhost:39090/api/user/insert', {
                      username,
                      password,
                      email,
                      name,
                      nickname,
                  })
                : await axios.post('http://localhost:39090/api/user/select', {
                      username,
                      password,
                  });

            if (response.status === 200) {
                const token = response.data.token;
                const message = isSignUp ? response.data.msg : response.data.msg;
                alert(message);
                if (!isSignUp) {
                    localStorage.setItem('username', token);
                    navigate('/');
                } else {
                    setIsSignUp(false); 
                }
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || '오류가 발생했습니다.';
            alert(errorMessage);
        }
    };

    const handleKakaoLogin = () => {
        // 카카오 로그인 로직
        window.Kakao.Auth.login({
            success: (authObj) => {
                console.log('Kakao Login Success:', authObj);
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakaoUsername = res.properties.nickname;
                        localStorage.setItem('username', kakaoUsername);
                        navigate('/');
                    },
                    fail: (err) => {
                        console.error('User Info Fetch Error:', err);
                    },
                });
            },
            fail: (err) => {
                console.error('Kakao Login Failed:', err);
            },
        });
    };

    return (
        <div className={style.container}>
            <div className={style.loginContainer}>
                {/* 회원가입 */}
                <div className={style.signInContainer}>
                    <h2 className={style.signTitle}>어서오세요!</h2>
                    <img src='/image/360_F_523040057_JYMTxoQGquklUthNLLjspI7ldR1hrFlH.jpg' className={style.signInImage} />
                    <p>계정이 있으신가요?</p>
                    <button className={style.btn} onClick={toggleMode}>
                        로그인
                    </button>
                </div>

                {/* 로그인 */}
                <div className={style.signUpContainer}>
                    <h2 className={style.signTitle}>저희랑 함께하세요!</h2>
                    <img src='/image/360_F_557636016_qBt5q3am5gWN7ubTEdOv4AXsDbew4qFc.jpg' className={style.signInImage} />
                    <p>계정이 없으신가요?</p>
                    <button className={style.btn} onClick={toggleMode}>
                        회원가입
                    </button>
                </div>

                {/* 입력 폼 */}
                <div
                    className={`${style.inputContainer} ${
                        isSignUp ? style.signUpMode : style.signInMode
                    }`}
                >
                    <h2 className={style.title}>{isSignUp ? '가입하기' : '로그인'}</h2>
                    <input
                        type='text'
                        placeholder='아이디'
                        className={style.inputBox}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='패스워드'
                        className={style.inputBox}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && (
                        <>
                            <input
                                type='password'
                                placeholder='패스워드 확인'
                                className={style.inputBox}
                            />
                            <input
                                type='email'
                                placeholder='이메일'
                                className={style.inputBox}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type='text'
                                placeholder='성함'
                                className={style.inputBox}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type='text'
                                placeholder='닉네임'
                                className={style.inputBox}
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                        </>
                    )}
                    <button className={style.btn} onClick={handleLogin}>
                        {isSignUp ? '회원가입' : '로그인'}
                    </button>

                    {/* 카카오 로그인 버튼 */}
                    {!isSignUp && (
                        <>
                            <button
                                className={`${style.btn} ${style.kakaoBtn}`}
                                onClick={handleKakaoLogin}
                            >
                                카카오로 로그인
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
