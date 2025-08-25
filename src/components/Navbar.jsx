import Sidebar from "./Sidebar"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 fixed bg-white/5 backdrop-blur-xl border-b-2 border-white/15 shadow-xl shadow-white/5 w-full z-10">
      <img width={250} src={logo} alt="" />
        <Sidebar/>
    </div>
  )
}

export default Navbar