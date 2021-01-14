/* lib */
import Link from 'next/link'
import useFetch from './api/useFetch'
import loading from './api/loading'
/* compoentes*/
import SeachBar from '../src/searchbar/SeachBar'
import Spotlight from '../src/grid/Spotlight'
import GridItems from '../src/grid/GridItems'
// import ErrorElem from '../src/ErrorElem'


const Home = () => {
  let content = loading.recentFeed;

  const { data, error } = useFetch('/recentes')

  if (data) {
    content = data
  } else if (error) {
    return <ErrorElem error={error} />
  }

  return (
    <div className='home-page'>
      <div className='search-bar-home'>
        <SeachBar />
      </div>
      <div className='container-main homepage-container'>
        <main className='grid-main'>
          <div className='container-grid'>
            <span className='link-see-more'>
              <Link href='/vermais/filme/1'>
                <a>Ver mais</a>
              </Link>
            </span>
            <GridItems
              itemsForGrid={content.filmes_recentes}
              nameForGrid={'Filmes Recentes'}
            />
          </div>
          <div className='container-grid'>
            <span className='link-see-more'>
              <Link href='/vermais/serie/1'>Ver mais</Link>
            </span>
            <GridItems
              itemsForGrid={content.series_recentes}
              nameForGrid={'Series Recentes'}
            />
          </div>
        </main>
        <aside className='spotlight'>
          <Spotlight spotlightData={data} />
        </aside>
      </div>
    </div>
  )
}

export default Home;