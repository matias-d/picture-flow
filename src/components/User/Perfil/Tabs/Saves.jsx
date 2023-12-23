import { useUserSaves } from "../../../../hooks/useUser.jsx"
import { useAuth } from "../../../../hooks/useAuth.jsx"
import { PinList } from "../../../shared/PinList.jsx"
import { Loading } from "../../../shared/Loading.jsx"

export function Saves () {

    const { user } = useAuth()

    const { data, isLoading, isError } = useUserSaves({ userId : user._id })

       
    if (isLoading) return <Loading title='¡Cargando las ideas guardadas!'/>

    if (isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer las ideas guardadas del usuario, intentalo de nuevo</p>  

    return (
        <section>
            <PinList pins={data} isSave={true}/>
        </section>
    )
}