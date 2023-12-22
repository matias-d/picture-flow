import { Card } from "../../components/Root/ExplorePage/Card";
import { Loading } from "../../components/shared/Loading";

import { useAuth } from "../../hooks/useAuth";
import { useTeams } from "../../hooks/useTeams";


export function ExplorePage() {

  const { isAuth } = useAuth()
  const { data, isLoading, isError } = useTeams()

  
  if(isLoading) return <Loading  title='Cargando las seción de equipos...'/>
  if(isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer los equipos, intentalo de nuevo</p>

  return (
    <section className={`flex flex-col pt-8 gap-y-0.5 items-center w-full justify-center pb-12 lg:pb-6 text-center ${!isAuth && 'px-8'}`}>
      <h3 className="text-xl font-semibold text-gray-800">Explora nuestro futbol</h3>
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Sigue a tus equipos favoritos</h2>

      <section className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 gap-4">
        {
          data.map(team => (
            <Card key={team._id} team={team}/>
          ))
        }
      </section>

    </section>
  )
}
