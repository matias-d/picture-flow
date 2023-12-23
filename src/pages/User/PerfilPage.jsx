import { TabsList } from '../../components/User/Perfil/Tabs/TabsList.jsx';
import { useAuth } from '../../hooks/useAuth.jsx';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserById } from '../../hooks/useUser.jsx';
import { Loading } from '../../components/shared/Loading.jsx';



export function PerfilPage () {

  const { isLoading, isAuth} = useAuth()  
  const { userId } = useParams()

  const { data : user, isLoading : isLoadUser, isError } = useUserById({ userId })

  if(isLoading || isLoadUser) return <Loading title='Estamos cargando los datos del perfil...'/>
  
  if(!isLoading && !isAuth) {
      toast.error('Para acceder debes autenticarte')
      return <Navigate to='/auth/login'/>
  }
  
  if (isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer los detalles del usuario, intentalo de nuevo</p>   
  
   
    return (
        <section className='w-full flex flex-col items-center py-12 px-4 lg:px-0'>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'}  className='rounded-full w-32 h-32 object-cover'/>
                <div className='flex flex-col gap-y-1 items-center'>
                    <h3 className='text-3xl font-semibold'>{user?.name ? user.name : user.username}</h3>
                    <p className='text-gray-400'>@{user.username}</p>
                    <p className='text-gray-500'>#41234252564</p>
                </div>
            </div>

           

            
            <TabsList />
            

        </section>
    )
}

