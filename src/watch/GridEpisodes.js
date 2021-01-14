import { useEffect, useState } from 'react'
import loading from '../api/loading'
import useFetch from '../api/useFetch'

import SelectSeason from './SelectSeason'
import ErrorElem from '../ErrorElem'

const PostEp = ({ listEps, setEpisode }) => {
  const renderEps = listEps.map((item, index) => (
    <a herf='#' onClick={() => setEpisode(item)} key={index.toString()}>
      <li className='list-ep-container'>
        <div className='thumb-ep'>
          <figure>
            <img src={item.img} alt='' />
          </figure>
        </div>
        <div className='entry-ep'>
          <h2 className='ep-num'>{item.num_ep}</h2>
          <h4 className='ep-name'>{item.nome_ep}</h4>
          <span className='ep-data'>{item.data}</span>
        </div>
      </li>
    </a>
  ))

  return renderEps
}

const GridEpisodes = ({ seasonData, setEpisode }) => {
  let content = loading.gridEpisodes
  let seasonsHandled = []
  const [seasonCurrent, setSeasonCurrent] = useState({})

  const urlSeason = seasonsString => {
    return seasonsString.map(item => ({
      season: item.split('|')[0],
      url: '/' + item.split('|')[1]
    }))
  }

  seasonsHandled = urlSeason(seasonData)

  useEffect(() => {
    setSeasonCurrent(seasonsHandled[0])
  }, [])

  const { data, error } = useFetch(seasonCurrent.url)

  if (data) {
    content = data
  } else if (error) {
    return <ErrorElem />
  }

  return (
    <div className='grid-eps'>
      <div className='header-grid-eps'>
        <SelectSeason
          seasonsHandled={seasonsHandled}
          seasonCurrent={seasonCurrent}
          setSeasonCurrent={setSeasonCurrent}
        />
      </div>
      <ul>
        <PostEp listEps={content.episodios} setEpisode={setEpisode} />
      </ul>
    </div>
  )
}

export default GridEpisodes
