import GridItems from '../../src/grid/GridItems'
import Spotlight from '../../src/grid/Spotlight'
import Paginator from '../../src/grid/Paginator'
import SeachBar from '../../src/searchbar/SeachBar'
import ErrorElem from '../../src/ErrorElem'
import { useMemo } from 'react'
import useFetch from '../../src/api/useFetch'
import loading from '../../src/api/loading'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Categorys = ({ dataInitial }) => {

  let content = loading.content_grid
  const router = useRouter()
  const [type, page] = router.query.Categorys
  
  const fixLinks = data => {
    let newData = {}
    newData.resultado = data.resultado.map(item => ({
      ...item,
      link: '/assistir/' + item.pagina
    }))
    newData.total_pag = data.total_pag
    return newData
  }

  const { data, error } = useFetch(`/categoria/${type}/${page}`)

  if (data) {
    content = fixLinks(data)
  } else if (dataInitial) {
    content = fixLinks(dataInitial)
  }

  const gridMemo = useMemo(() => {
    return (
      <GridItems
        itemsForGrid={content.resultado}
        nameForGrid={`Categoria ${type}`}
      />
    )
  }, [content])

  const spotMemo = useMemo(() => {
    return <Spotlight />
  }, [])

  if (error) <ErrorElem />

  return (
    <div className='see-more-container'>
      <Head>
        <title>Categorias - {type} - AmazoFlix</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='search-bar-home'>
        <SeachBar />
      </div>
      <div className='homepage-container container-main'>
        <main className='grid-main'>
          {gridMemo}
          <Paginator parent={'Category'} numberPages={content.total_pag} />
        </main>
        <aside className='spotlight'>{spotMemo}</aside>
      </div>
    </div>
  )
}

export default Categorys

Categorys.getInitialProps = async (ctx) => {
  
  const [type, page] = ctx.query.Categorys
  const response = await fetch(`https://api-amazoflix.herokuapp.com/categoria/${type}/${page}`)
  const data = await response.json() 
  return { dataInitial: data }
}