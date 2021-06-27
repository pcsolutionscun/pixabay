import React, { Component } from 'react';

class Buscador extends Component {

	busquedaref = React.createRef();
	
	getdates = (e) =>{

		e.preventDefault();

		const term = this.busquedaref.current.value;
		this.props.searchData(term);
	}

	render() {

		return (
			<form onSubmit={this.getdates}  className="d-flex"> 
				<input type="text" ref={this.busquedaref} className="form-control me-sm-2" placeholder="Buscar" />
				<input type="submit" value="Buscar" className="btn btn-secondary my-2 my-sm-0" />
			</form>


			);   
	}
}
export default Buscador;