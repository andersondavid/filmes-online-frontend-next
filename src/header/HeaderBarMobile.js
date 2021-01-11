import { useState } from 'react'
import Link from 'next/link'
import SearchBar from '../searchbar/SeachBar'

const HeaderBarMobile = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  let leftMenu = openedMenu ? 0 : -100

  return (
    <div className='menu-head-mobile'>
      <div className='open-menu-header'>
        <button
          className='btn-menu material-icons'
          onClick={() => setOpenedMenu(!openedMenu)}
        >
          menu
        </button>
        <div className='logo'>
          <Link href='/'>
            <img src={'/images/small-logo.png'} alt='' />
          </Link>
        </div>
      </div>
      <div className='mobile-content-header' style={{ left: leftMenu + '%' }}>
        <SearchBar />
        <div>
          <ul>
            <li className='item-menu home-icon icons'>
              <Link onClick={() => setOpenedMenu(!openedMenu)} href='/'>
                Inicio
              </Link>
            </li>
            <li className='item-menu movie-icon expand-icon icons'>
              <Link
                onClick={() => setOpenedMenu(!openedMenu)}
                href='/vermais/filme/1'
              >
                Filmes
              </Link>
              <div className='header-dropdown'>
                <div className='dropdown'>
                  <ul>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Ação/1'
                      >
                        Ação
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Animação/1'
                      >
                        Animação
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Animes/1'
                      >
                        Animes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Aventura/1'
                      >
                        Aventura
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Comédia/1'
                      >
                        Comédia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Crime/1'
                      >
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Documentário/1'
                      >
                        Documentário
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Drama/1'
                      >
                        Drama
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Eróticos/1'
                      >
                        Eróticos
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Família/1'
                      >
                        Família
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Fantasia/1'
                      >
                        Fantasia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Faroeste/1'
                      >
                        Faroeste
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Ficção científica/1'
                      >
                        Ficção científica
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes em HD/1'
                      >
                        Filmes em HD
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes em FullHD/1'
                      >
                        Filmes em FullHD
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Clássicos/1'
                      >
                        Filmes Clássicos
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Antigos/1'
                      >
                        Filmes Antigos
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Cult/1'
                      >
                        Filmes Cult
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Dublados/1'
                      >
                        Filmes Dublados
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Legendados/1'
                      >
                        Filmes Legendados
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Nacionais/1'
                      >
                        Filmes Nacionais
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes da Disney/1'
                      >
                        Filmes da Disney
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes da Marvel/1'
                      >
                        Filmes da Marvel
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes da PassionFlix/1'
                      >
                        Filmes da PassionFlix
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Netflix/1'
                      >
                        Filmes Netflix
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Filmes Religiosos e Evangélicos/1'
                      >
                        Filmes Religiosos e Evangélicos
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Guerra/1'
                      >
                        Guerra
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/LGBT/1'
                      >
                        LGBT
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Kids/1'
                      >
                        Kids
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/História/1'
                      >
                        História
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Mistério/1'
                      >
                        Mistério
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Música/1'
                      >
                        Música
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Policial/1'
                      >
                        Policial
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Romance/1'
                      >
                        Romance
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Sci-Fi/1'
                      >
                        Sci-Fi
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Suspense/1'
                      >
                        Suspense
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Terror/1'
                      >
                        Terror
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Thriller/1'
                      >
                        Thriller
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Zumbi/1'
                      >
                        Zumbi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className='item-menu tv-icon expand-icon icons'>
              <Link
                onClick={() => setOpenedMenu(!openedMenu)}
                href='/vermais/serie/1'
              >
                Series Online
              </Link>
              <div className='header-dropdown'>
                <div className='dropdown'>
                  <ul>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Baseada em Fatos Reais/1'
                      >
                        Séries Baseada em Fatos Reais
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Baseadas em Livros/1'
                      >
                        Séries Baseadas em Livros
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Antigas/1'
                      >
                        Séries Antigas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Coreanas/1'
                      >
                        Séries Coreanas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Amazon/1'
                      >
                        Séries da Amazon
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Dubladas/1'
                      >
                        Séries Dubladas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Legendadas/1'
                      >
                        Séries Legendadas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Lançamentos/1'
                      >
                        Séries Lançamentos
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Netflix'
                      >
                        Séries Netflix
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da AMC/1'
                      >
                        Séries da AMC
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da ABC/1'
                      >
                        Séries da ABC
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Apple TV/1'
                      >
                        Séries da Apple TV
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Amazon/1'
                      >
                        Séries da Amazon
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da BBC/1'
                      >
                        Séries da BBC
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da DC/1'
                      >
                        Séries da DC
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Disney/1'
                      >
                        Séries da Disney
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da FOX/1'
                      >
                        Séries da FOX
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da FX/1'
                      >
                        Séries da FX
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries GloboPlay/1'
                      >
                        Séries GloboPlay
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries em HD/1'
                      >
                        Séries em HD
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Hulu/1'
                      >
                        Séries da Hulu
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da HBO/1'
                      >
                        Séries da HBO
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Médicas/1'
                      >
                        Séries Médicas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries Nacionais/1'
                      >
                        Séries Nacionais
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da NBC/1'
                      >
                        Séries da NBC
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da PassionFlix/1'
                      >
                        Séries da PassionFlix
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Série da ShowTime/1'
                      >
                        Série da ShowTime
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da Starz/1'
                      >
                        Séries da Starz
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Série da SyFy/1'
                      >
                        Série da SyFy
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da TNT/1'
                      >
                        Séries da TNT
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setOpenedMenu(!openedMenu)}
                        href='/categoria/Séries da The CW/1'
                      >
                        Séries da The CW
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderBarMobile
