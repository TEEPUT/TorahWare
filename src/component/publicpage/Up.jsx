import style from './css/Up.module.css';

export default function Up() {
    // 맨 위로 이동하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // 스크롤을 맨 위로
            behavior: 'smooth', // 부드럽게 스크롤 이동
        });
    };

    return (
        <div>
            {/* 클릭 이벤트 추가 */}
            <img
                src='/image/image.png'
                className={style.up}
                alt="Scroll to top"
                onClick={scrollToTop} // 클릭 시 scrollToTop 호출
            />
        </div>
    );
}
