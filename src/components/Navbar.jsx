import { Menu } from "lucide-react";

const Navbar = ({toggleSidebar}) => {
    return (
        <>
            <header className="bg-blue-500 text-white shadow p-4 md:hidden flex justify-between items-center">
                <button onClick={toggleSidebar}>
                    <Menu size={28} />
                </button>
                <h1 className="text-xl font-bold">BEDA YAPEAUD</h1>
            </header>
        </>
    );
}

export default Navbar;
