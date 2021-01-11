/* lib */

import Link from 'next/link'
import api from './api/api'
import loading from './api/loading'
/* compoentes*/

import SeachBar from '../src/searchbar/SeachBar'
import Spotlight from '../src/grid/Spotlight'
import GridRecentItems from '../src/grid/GridRecentItems'
import ErrorElem from '../src/ErrorElem'


export async function getStaticProps () {
  const data = await api('/recentes')

  return { props: { data: data } }
}

const Home = ({ data }) => {
  let content = data

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
            <GridRecentItems
              itemsForGrid={content.filmes_recentes}
              nameForGrid={'Filmes Recentes'}
            />
          </div>
          <div className='container-grid'>
            <span className='link-see-more'>
              <Link href='/vermais/serie/1'>Ver mais</Link>
            </span>
            <GridRecentItems
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

export default Home
