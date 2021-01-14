import api from '../api/api'
import loading from '../api/loading'
import { useEffect, useState, useMemo } from 'react'

import WatchDesc from '../../src/watch/WatcDesc'
import Player from '../../src/watch/Player'
import GridEpisodes from '../../src/watch/GridEpisodes'

const Watch = ({ dataWatch }) => {
  const [contentLinks, setContentLinks] = useState()
  const [episode, setEpisode] = useState({})
  let seasonData = dataWatch.temporadas

  useEffect(() => {
    if (dataWatch.links) {
      setContentLinks(dataWatch.links)
    }

  }, [contentLinks])

  useEffect(() => {
    if (episode != {}) {
      console.log(episode)

      api('/' + episode.link)
        .then(response => {
          setContentLinks(response.links)
        })
        .catch(err => console.error(err))
    }
    return () => {
      console.log('limpo');
      seasonData = {}
    }
  }, [episode])

  return (
    <div className='container-watch'>
      <WatchDesc watchDescData={dataWatch} />

      {contentLinks && (
        <div id='player' name='episodio'>
          <Player playerOption={contentLinks} />
        </div>
      )}

      {dataWatch.temporadas && (
        <div id='content-serie'>
          <GridEpisodes setEpisode={setEpisode} seasonData={seasonData} />
        </div>
      )}
    </div>
  )
}

export default Watch

Watch.getInitialProps = async ctx => {
  const res = await fetch('https://api-amazoflix.herokuapp.com' + ctx.asPath)

  const json = await res.json()
  return { dataWatch: json }
}
