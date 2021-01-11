import { Link, useParams } from 'react-router-dom'

const Paginator = props => {
  let { page } = useParams()

  let renderBtn = page - 3
  let numbers = []

  for (let i = 0; i < 5; i++) {
    renderBtn++

    if (renderBtn > 0 && renderBtn <= props.numberPages) {
      console.log(page, renderBtn)

      numbers.push(
        <Link key={i.toString()} href={{ pathname: renderBtn }}>
          <span className={page == renderBtn ? 'current btns' : 'btns'}>
            {renderBtn}
          </span>
        </Link>
      )
    }
  }

  return (
    <div className='container-paginator'>
      <Link
        href={{ pathname: page - 1 }}
        style={{ pointerEvents: page == 1 ? 'none' : 'auto' }}
        className='btn-paginator'
      >
        ANTERIOR
      </Link>

      <div className='paginator-list'>
        {page > 3 && (
          <span>
            <Link href={{ pathname: 1 }}>
              <span className='btns'>1</span>
            </Link>
            <span className='dots'>...</span>
          </span>
        )}
        {numbers}
        {(page + 3) < props.numberPages && (
          <span>
            <span className='dots'>...</span>
            <Link href={{ pathname: props.numberPages }}>
              <span className='btns'>{props.numberPages}</span>
            </Link>
          </span>
        )}
      </div>

      <Link
        href={{ pathname: parseInt(page, 10) + 1 }}
        style={{ pointerEvents: page == props.numberPages ? 'none' : 'auto'}}
        className='btn-paginator'
      >
        PROXIMO
      </Link>
    </div>
  )
}

export default Paginator
