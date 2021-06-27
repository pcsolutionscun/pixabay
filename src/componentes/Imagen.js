import React, { Component } from 'react';


const Imagen = (props) =>{

	const { largeImageURL,likes,previewURL,pageURL,tags,views,webformatWidth} = props.imagen; 

	return (
				<div className="card m-3">
				  <h3 className="card-header">Card header</h3>
				  <div className="card-body">
				    <h5 className="card-title">Special title treatment</h5>
				    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
				  </div>
				 <img src={previewURL} alt={tags} className="card-img-top"  />
				  <div className="card-body">

				  </div>
				  <ul className="list-group list-group-flush">
				    <li className="list-group-item">{likes} Me gusta</li>
				    <li className="list-group-item">{views} Vistas</li>
				  </ul>
				  <div className="card-body">
				    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
				  </div>
				  <div className="card-footer text-muted">
				    2 days ago
				  </div>
				</div>
		)
} 

export default Imagen;