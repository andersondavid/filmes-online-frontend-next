import Link from 'next/link';

const Footer = () => {
	return(
		<footer className="container-footer">
			<nav className='footer-normal-links'>
				<ul>
					<li><Link href={'/direitos'}>Aviso Legal / Copyright</Link></li>
				</ul>
			</nav>
			<p className='footer-phrase'>AmazoFlix - Seus Filmes e Séries Online em um só lugar. © Copyright 2021</p>
			<nav className='footer-bottons'>
				<ul>
					<li className='ft-btn'>
						<Link href={'/categoria/Filmes em HD/1'}>Filmes em HD</Link>
					</li>
					<li className='ft-btn'>
						<Link href={'/categoria/Filmes Dublados/1'}>Filmes Dublados</Link>
					</li>
					<li className='ft-btn'>
						<Link href={'/categoria/Filmes Nacionais/1'}>Filmes Nacionais</Link>
					</li>
				</ul>
			</nav>
		</footer>
	)
}

export default Footer;