import Link from 'next/link'

const PostItem = props => {
  const { itemsForGrid } = props

  return itemsForGrid.map((item, index) => (
    <div className='post-item-container' key={item._id}>
      <Link
        href={{
          pathname: item.link
        }}
      >
        <a>
          <div className='thumb'>
            <figure>
              <img src={item.img} loop='infinite' alt='' />
            </figure>
            <div className='hover-play'>
              <span className='btn-play material-icons'>play_arrow</span>
              <p className='btn-watch'>Assistir</p>
            </div>
            <p className='year-release'>{item.ano}</p>
          </div>
          <p className='item-name'>{item.titulo}</p>
          <p className='text-rate-imdb'>
            TMDB{' '}
            <span className='rate-imdb'>
              {item.nota.replace('TMDB', '') || '10.0'}
            </span>
          </p>
        </a>
      </Link>
    </div>
  ))
}

const GridItems = props => {
  let { itemsForGrid, nameForGrid } = props

  return (
    <div className='grid-items'>
      <div className='header-grid'>
        <h2>{nameForGrid}</h2>
      </div>
      <hr className='hr-bottom-head-grid' />
      <div className='list-show-items'>
        <PostItem itemsForGrid={itemsForGrid} />
      </div>
    </div>
  )
}

export default GridItems
