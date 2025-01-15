import { useEffect, useState } from 'react';
import styles from './css/AdminMain.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminMain() {
    const storedUsername = localStorage.getItem("username");
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost:39090/api/message', {}, {
            headers: {
                Authorization: `Bearer ${storedUsername}`
              }
        }
        )
            .then((response) => {
                if (response.data.result === true) {
                    setMessages(response.data.list);
                } else {
                    alert("어드민 계정이 아닙니다.")
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log("데이터 수신 실패", error);
            });
    }, []);

    return (
        <div className={styles.container}>
            {messages.map((message, index) => (
                <div key={index} className={styles.messageBox}>
                    <p>보낸사람: {message.sendUser}</p>
                    <p>이메일: {message.sendEmail}</p>
                    <p>보낸 시간: {message.sendDate}</p>
                    <p>제목: {message.messageTitle}</p>
                    <p>내용: {message.messageContent}</p>
                </div>
            ))}
        </div>
    );
}
