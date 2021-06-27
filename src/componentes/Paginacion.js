import React, { Component } from 'react';


const Paginacion = props => {

	return ( 

		<div className="col-md-12 d-flex flex-wrap align-items-start justify-content-center">

			<button onClick={props.paginaAnterior} type="button" className="btn btn-info me-1">Anterior &larr;</button> 
			<button onClick={props.paginaSiguiente} type="button" className="btn btn-info ms-1">Sigueinte &rarr;</button> 

		</div>

		)

}

export default Paginacion;