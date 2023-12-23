import { IconArrowLeft } from "@components/icons/IconArrowLeft.jsx"
import { PinList  } from '@components/shared/PinList'
import { LinkIcon } from "@components/ui/LinkIcon"
import { usePinsByTeam } from "../../hooks/usePins"
import { useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { Loading } from "@components/shared/Loading"


export function TeamPage() {

    const { team } = useParams()

    const { isAuth } = useAuth()
    const {data, isLoading, isError} = usePinsByTeam({ team })

    if (isLoading) return <Loading title='Cargando las ideas del equipo...'/>

    if (!isLoading && !data?.teams?.length) return <p>No hay equipos en esta secion</p>

    if (isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer los detalles de la idea, intentalo de nuevo</p>   

  return (
    <section className={`flex flex-col gap-y-4 justify-center w-full items-center pb-6 ${!isAuth && 'px-6'}`}>
        <LinkIcon className='fixed top-28 left-4 z-50 bg-gray-100/80 p-3 hover:bg-gray-100' href='/explore'>
                <IconArrowLeft />
        </LinkIcon>
        
        <article className="relative w-[40rem] h-72 rounded-3xl overflow-hidden group">
          <picture className="w-full h-full flex justify-center items-center">
                <img src={data.team.teamImage} className="object-cover"/>
            </picture>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pb-4 bg-black/40 rounded-3xl ">
                <p className="text-white font-semibold"> Equipo Argentino</p>
                <h4 className="text-4xl font-semibold text-white">{data.team.teamName}</h4>
            </div> 
      </article>

      <p>Todas las ideas de {data.team.teamName} compartidas en un mismo lugar</p>


      <PinList pins={data.teams}/> 
    </section>
  )
}
