import { MoreToExplore } from "../../components/Root/DetailPin/MoreToExplore.jsx";

import { DetailPin } from "../../components/Root/DetailPin/DetailPin.jsx";

import { IconArrowLeft } from "../../components/icons/IconArrowLeft.jsx";

import { Loading } from "../../components/shared/Loading.jsx";

import { LinkIcon } from "../../components/ui/LinkIcon.jsx";

import { usePinsById } from "../../hooks/usePins.jsx";

import { useAuth } from "../../hooks/useAuth.jsx";

import { useParams } from "react-router-dom";


export function DetailPagePin () {

  const { id } = useParams()

  const { isLoading : isLoad } = useAuth()
  
  const {data : pin, isLoading : isLoadPin, isError} = usePinsById({ id })


  if(isLoad || isLoadPin ) return <Loading title='Cargando los detalles de la idea...'/>
  

  if (isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer los detalles de la idea, intentalo de nuevo</p>   
  
  
    return (
        <section className="relative px-4 lg:px-0">
            
            <LinkIcon className='fixed top-28 left-4 z-50 bg-gray-100/80 p-3 hover:bg-gray-100' href='/'>
                <IconArrowLeft />
            </LinkIcon>

            <DetailPin pin={pin}/>
            
            <MoreToExplore teamId={pin.team._id} title={pin.title} pinId={pin._id}/>
           
        </section>
    )
}