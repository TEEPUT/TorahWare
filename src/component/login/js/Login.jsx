import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigate 추가
import style from './css/Login.module.css';

export default function Login({ onLogin }) {
    const [isSignUp, setIsSignUp] = useState(false); // 회원가입 상태 관리
    const [username, setUsername] = useState(''); // 사용자 이름 상태 관리
    const navigate = useNavigate(); // 라우팅을 위한 훅

    const toggleMode = () => {
        setIsSignUp(!isSignUp); // 상태 변경 (로그인 <-> 회원가입)
    };

    const handleLogin = () => {
        if (username) {
            // 로그인 성공 처리
            localStorage.setItem('username', username); // 세션 저장
            onLogin(username); // App.js에서 로그인 상태 업데이트
            navigate('/'); // 홈 화면으로 이동
        } else {
            alert('Please enter your username');
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
                        const kakaoUsername = res.properties.nickname; // 사용자 이름 가져오기
                        localStorage.setItem('username', kakaoUsername); // 세션 저장
                        navigate('/'); // 홈 화면으로 이동
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
                    <h2 className={style.signTitle}>Welcome Back!</h2>
                    <img src='/image/image.png' className={style.signInImage} />
                    <p>Have an account?</p>
                    <button className={style.btn} onClick={toggleMode}>
                        Login
                    </button>
                </div>

                {/* 로그인 */}
                <div className={style.signUpContainer}>
                    <h2 className={style.signTitle}>Join Us!</h2>
                    <img src='/image/image.png' className={style.signInImage} />
                    <p>Don't have an account?</p>
                    <button className={style.btn} onClick={toggleMode}>
                        Register
                    </button>
                </div>

                {/* 입력 폼 */}
                <div
                    className={`${style.inputContainer} ${
                        isSignUp ? style.signUpMode : style.signInMode
                    }`}
                >
                    <h2 className={style.title}>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h2>
                    <input
                        type='text'
                        placeholder={isSignUp ? 'New Username' : 'Username'}
                        className={style.inputBox}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder={isSignUp ? 'New Password' : 'Password'}
                        className={style.inputBox}
                    />
                    {isSignUp && (
                        <>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className={style.inputBox}
                            />
                            <input
                                type='email'
                                placeholder='Email Address'
                                className={style.inputBox}
                            />
                        </>
                    )}
                    <button className={style.btn} onClick={handleLogin}>
                        {isSignUp ? 'Register' : 'Login'}
                    </button>

                    {/* 카카오 로그인 버튼 */}
                    {!isSignUp && (
                        <>
                        <button
                            className={`${style.btn} ${style.kakaoBtn}`}
                            onClick={handleKakaoLogin}
                        >
                            Login with Kakao
                        </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
