/* lib */
import Link from 'next/link'
import Head from 'next/head'
import useFetch from '../src/api/useFetch'
import loading from '../src/api/loading'
/* compoentes*/
import SeachBar from '../src/searchbar/SeachBar'
import Spotlight from '../src/grid/Spotlight'
import GridItems from '../src/grid/GridItems'
import ErrorElem from '../src/ErrorElem'

const Home = ({ data }) => {
  let content = loading.recentFeed

  //const { data, error } = useFetch('/recentes')

  if (data) {
    content = data
  }

  return (
    <div className='home-page'>
      <Head>
        <title>AmazoFlix - Filmes e Series de Graça</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
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
          <Spotlight />
        </aside>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps (context) {
  const response = await fetch('https://api-amazoflix.herokuapp.com/recentes')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data } // will be passed to the page component as props
  }
}
