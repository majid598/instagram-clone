import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SideNav from "./components/SideNav";
import Register from "./components/Register";
import Explore from "./components/Explore";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Create from "./components/Create";
import Chat from "./components/Chat";
import { AppProvider, useGlobalContext } from "./context/globalContext";
import NotifSide from "./components/NotifSide";
import Box from "./components/Box";

function App() {
    return (
        <>
            <AppProvider>
                <Router className="flex">
                    <SideNav />
                    <NotifSide />
                    <Search />
                    <Box />
                    <Create/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/explore" element={<Explore />} />
                        <Route exact path="/chats" element={<Chats />} />
                        <Route exact path="/aboutme" element={<Profile />} />
                        <Route exact path="/search" element={<Search />} />
                        <Route exact path="/post" element={<Create />} />
                        <Route exact path="/chat/:id" element={<Chat />} />
                        <Route exact path="/*" element={<NotFound />} />
                    </Routes>
                </Router>
            </AppProvider>
        </>
    );
}

export default App;
