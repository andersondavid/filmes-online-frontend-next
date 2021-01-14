const Error = (props) => {

	console.error(props.error);
	
	return(
		<div className="container-loading">
			<h2 className="text-loading">Houve um error para processar a requisção, por favor recarregue a pagina ou tente mais tarde.</h2>
		</div>
	)
}

export default Error;