import { RiSearch2Line } from "react-icons/ri";

export const TopBar = () => {
    return (
        <nav className="topbar">
        <div>
            <a href="/" style={{ 
                color: "#000000",
                backgroundColor: '#faf9f9',
                height: "100%",
                opacity: "60%",
                borderRadius: '1000px'}}> <RiSearch2Line /> New Search</a>
        </div>
        </nav>
    );
}