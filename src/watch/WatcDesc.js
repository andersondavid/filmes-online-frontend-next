import Link from 'next/link'

const Genres = props => {
  let { genresList } = props

  const newList = genresList.map((item, index) => (
    <Link href={'/categoria/' + item + '/1'} key={index.toString()}>
      <a>
        <li>{item}</li>
      </a>
    </Link>
  ))

  return newList
}

const WatchDesc = props => {
  const descData = props.watchDescData

  const rateTmdb = parseFloat(descData.nota.replace('TMDB', '')).toFixed(1)

  return (
    <div>
      <div className='component-desc-watch'>
        <div className='thumb'>
          <figure>
            <img src={descData.img} loop='infinite' alt='' />
          </figure>
        </div>
        <div className='text-desc'>
          <div className='desc-header'>
            <h2>{descData.titulo}</h2>
            <div className='links-categorys'>
              <ul>
                {descData.categorias && (
                  <Genres genresList={descData.categorias} />
                )}
              </ul>
              <div className='duration-year'>
                <span className='duration'>{descData.duracao}</span>
                <span className='year'>{descData.ano}</span>
                {descData.temporadas && (
                  <span className='season'>
                    <span className='season-count'>
                      {descData.temporadas.length}
                    </span>{' '}
                    Temporadas
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='watch-description'>
            <p>{descData.descricao}</p>
          </div>
        </div>
      </div>
      <div className='rate-big'>
        <span className='rate-star material-icons'>star</span>
        <span className='rate-num'>{rateTmdb || '10.0'}</span>
        <span className='rate-tmdb'>TMBD</span>
        <span className="rate-num">{props.epName}</span>
      </div>
    </div>
  )
}

export default WatchDesc
