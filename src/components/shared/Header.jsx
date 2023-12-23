import { useAuth } from "../../hooks/useAuth.jsx"
import { Nav as NavHome} from "../Root/Home/Nav.jsx"
import { Nav as NavLanding} from "../Root/LandingPage/Nav.jsx"




export function Header () {


    const { isAuth } = useAuth()

    
    return (
        <header className="fixed top-0 left-0 w-full bg-white flex items-center lg:gap-x-56 justify-between px-6 py-4 z-[100]">
            {
                isAuth ? <NavHome /> : <NavLanding />
            }
        </header>
    )
}