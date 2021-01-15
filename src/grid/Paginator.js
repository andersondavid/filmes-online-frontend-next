import Link from 'next/link'
import { useRouter } from 'next/router'

const Paginator = ({ numberPages }) => {
  const router = useRouter()
  const parent = router.query
  let params = [];
  let { Categorys, SeeMore, SearchPage } = parent

  if (Categorys != undefined) {
    params = Categorys
  } else if (SeeMore != undefined) {
    params = SeeMore
  } else if (SearchPage != undefined) {
    params = SearchPage
  }

  const [type, currentPage] = params
  let renderBtn = currentPage - 3
  let numbers = []

  for (let i = 0; i < 5; i++) {
    renderBtn++

    if (renderBtn > 0 && renderBtn <= numberPages) {
      numbers.push(
        <Link key={i.toString()} href={`${type}/${renderBtn}`}>
          <a>
            <span
              className={currentPage == renderBtn ? 'current btns' : 'btns'}
            >
              {renderBtn}
            </span>
          </a>
        </Link>
      )
    }
  }

  return (
    <div className='container-paginator'>
      <span style={{ pointerEvents: currentPage == 1 ? 'none' : 'auto' }}>
        <Link href={`${type}/${currentPage == 1 ? 1 : currentPage - 1}`} className='btn-paginator'>
          ANTERIOR
        </Link>
      </span>

      <div className='paginator-list'>
        {currentPage > 3 && (
          <span>
            <Link href='1'>
              <span className='btns'>1</span>
            </Link>
            <span className='dots'>...</span>
          </span>
        )}
        {numbers}
        {currentPage + 3 < numberPages && (
          <span>
            <span className='dots'>...</span>
            <Link href={`/${type}/${numberPages}`}>
              <a>
                <span className='btns'>{numberPages}</span>
              </a>
            </Link>
          </span>
        )}
      </div>
      <span
        style={{ pointerEvents: currentPage == numberPages ? 'none' : 'auto' }}
      >
        <Link
          href={`${type}/${parseInt(currentPage) + 1}`}
          className='btn-paginator'
        >
          PROXIMO
        </Link>
      </span>
    </div>
  )
}

export default Paginator
