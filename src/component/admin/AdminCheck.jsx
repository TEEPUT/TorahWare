import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import styles from './css/AdminCheck.module.css'

export default function AdminCheck() {
    const storedUsername = localStorage.getItem("username");
    const navigate = useNavigate();


    useEffect(() => {
       axios.post("http://localhost:39090/api/grantcheck", {}, {
        headers: {
            Authorization: `Bearer ${storedUsername}`
          }
       }) 
       .then(response => {
            if(response.data.result === true) {
                alert(response.data.msg);
                navigate(response.data.url);
            } else {
                alert(response.data.msg);
                window.location.href = response.data.url;
            }
       })
       .catch(error => {
            console.log(error);
       }) 
    },[storedUsername, navigate])

    return (
        <div className={styles.flexContainer}>
            <div className={styles.container}>
                <h1>권한을 체크중입니다</h1>
                <img src="/image/free-icon-under-construction-2276240.png" alt="권한 체크 중" className={styles.stopImage}/>
            </div>
        </div>
    )
}