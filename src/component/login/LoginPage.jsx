import NavBar from "../publicpage/NavBar";
import Up from "../publicpage/Up";
import Login from "./js/Login";
import Footer from "../publicpage/Footer"

export default function LoginPage() {

    const LoginPageSections = [
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
      ];

    return (
        <div>
            <NavBar title="Login Page" sections={LoginPageSections} />

            <Login />

            {/* 상위로 이동 */}
            <Up />

            {/* 푸터 */}
            <Footer />
        </div>
    )
}