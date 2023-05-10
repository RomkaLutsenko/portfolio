import "../index.scss"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {MainPage} from "../pages";

const App = () => {
    return (
        <div className="wrapper">
            <main className="page">
                <Header />
                <MainPage />
                <Footer />
            </main>
        </div>
    );
};

export default App;
