import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "./css/AdminProject.module.css";

export default function AdminProject() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    // 프로젝트 목록 불러오기
    useEffect(() => {
        axios.post('http://localhost:39090/api/admin/project/select', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("username")}`
            }
        }).then((response) => {
            if (response.data.result === true) {
                setProjects(response.data.list);
            } else {
                alert("어드민 계정이 아닙니다.");
                navigate('/');
            }
        }).catch((error) => {
            console.log("데이터 수신 실패", error);
        });
    }, [navigate])

    // 선택한 프로젝트
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    // 프로젝트 추가
    const handleEdit = () => {
        navigate('/admin/project/edit');
    };

    // 프로젝트 수정
    const handleUpdate = () => {
        if (selectedProject) {
            
        } else {
            alert("수정할 수 없습니다. 프로젝트를 선택해주세요.");
        }
    };

    // 프로젝트 삭제
    const handleDelete = () => {
        if (selectedProject) {
            
        } else {
            alert("삭제할 수 없습니다. 프로젝트를 선택해주세요.");
        }
    };
    
    return (
        <div className={styles.bigContainer}>
            <div className={styles.btnContainer}>
                <button className={styles.addBtn} onClick={handleEdit}>프로젝트 추가</button>
                <button className={styles.addBtn} onClick={handleUpdate}>프로젝트 수정</button>
                <button className={styles.addBtn} onClick={handleDelete}>프로젝트 삭제</button>
            </div>
            <div className={styles.container}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectBox} onClick={() => handleProjectClick(project)}
                    style={{
                        backgroundColor: selectedProject === project ? '#444857' : '#1E1F26',
                        cursor: 'pointer'
                    }}>
                        <img src={project.imageSrc} alt={project.name} className={styles.image}></img>
                        <p><strong>ID : </strong>{project.id}</p>
                        <p><strong>제목 : </strong>{project.name}</p>
                        <p><strong>내용 : </strong>{project.description}</p>
                        <p><strong>시작일 : </strong>{project.startDate}</p>
                        <p><strong>마감일 : </strong>{project.endDate}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}