import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component {

	mostrarResult = () => {

		const imagenes = this.props.imagenes;
		
		if(imagenes.length === 0 ) return null;

		return ( 

			<React.Fragment>

			 <div className="col-md-12 d-flex flex-wrap align-items-start justify-content-center">
			{ imagenes.map( imagen => (

				<Imagen
					key={imagen.id}
					imagen={imagen}	
				/>

				))}
			</div>

			<Paginacion
                  paginaAnterior={this.props.paginaAnterior}
                  paginaSiguiente={this.props.paginaSiguiente}

			 />

			</React.Fragment>

		)	
	}

	render(){

		return (
				<React.Fragment>
					{this.mostrarResult()}
				</React.Fragment>	
			);
	}
}

export default Resultado;