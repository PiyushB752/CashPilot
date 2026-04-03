import "./Layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children, role, setRole }) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header role={role} setRole={setRole} />
        {children}
      </div>
    </div>
  );
}