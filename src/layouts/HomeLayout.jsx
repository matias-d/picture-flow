// src/components/shared/Header.jsx
import { Header } from "../components/shared/Header.jsx";

// src/components/shared/NavBar.jsx
import { NavBar } from "../components/shared/NavBar.jsx";

// src/hooks/useAuth.jsx
import { useAuth } from "../hooks/useAuth.jsx";

// Tu archivo original
import { Outlet } from "react-router-dom";


export function HomeLayout() {

  const { isAuth } = useAuth()

  
  
  return (
    <>
        <Header />

        <main className={` pt-20  lg:pb-0 ${isAuth && 'container mx-auto pb-12'} `}>
            <Outlet />
        </main>

      {
        isAuth && <NavBar />
      }
    </>
  )
}
