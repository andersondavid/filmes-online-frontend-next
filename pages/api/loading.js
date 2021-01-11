const items = []

for (let index = 0; index < 12; index++) {
  items.push({
    img: '/images/loader-2.gif',
    nota: 'TMDB 10',
    ano: '2021',
    titulo: 'Amazoflix',
    link: '/',
		duracao: '1:00',
		_id: index
  })
}

const watch =   {
	categorias: ['Acão', 'Aventura', 'Romance', 'Comédia', 'Terror', 'Lançamentos'],
	img: '/images/loader-2.gif',
	nota: '10',
	ano: '2021',
	titulo: 'Amazoflix',
	descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, orci ac ullamcorper consectetur, eros nisi condimentum libero, at porta velit erat at est. Morbi odio justo, laoreet ut rutrum vitae, euismod ut est. In hac habitasse platea dictumst. In non dignissim eros. Pellentesque a ornare tortor. Aliquam eget felis hendrerit, volutpat enim sit amet, aliquam justo. Curabitur placerat pulvinar augue, vitae lobortis massa rutrum sed.",
	duracao: "1:00h",
	pagina: "/",
	data: 'Hoje',
	links: '',
	nome_ep: 'Amazoflix',
	num_ep: '1x1',
	createdAt: 0,
	updatedAt: 0,
};

const gridEpisodes = {
	episodios: items,
	paginas: '/'
}

const loading = {
  recentFeed: {
    series_recentes: items,
		filmes_recentes: items,
		filmes_destaques: items,
  },
  content_grid: {
    total_pag: 1,
		resultado: items,
	},
	watch,
	gridEpisodes
}

export default loading
