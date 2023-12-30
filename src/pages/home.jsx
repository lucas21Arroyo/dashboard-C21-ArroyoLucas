import { GenresInDb } from "../components/GenresInDb"
import { LastMoviesInDb } from "../components/LastMoviesInDb"



export const Home = () => {
  return (
   <>
    <div className="row">		
    <LastMoviesInDb/>			
    <GenresInDb/>
    </div>
    </>
  )
}
