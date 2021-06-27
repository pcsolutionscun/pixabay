 import React, { Component } from 'react';
 import Buscador from './componentes/Buscador';
 import Resultado from './componentes/Resultado';

  class App extends Component {

    state = {

      termino : '',
      Imagen : [],
      pagina: ''

    }

    scroll = () => {

      const element = document.querySelector('.navbar-collapse');
      element.scrollIntoView('smooth','end'); 

     }

    paginaAnterior = () => { 

      let pagina = this.state.pagina;

      if ( pagina === 1) return null;

      pagina -= 1; 

      this.setState({

        pagina

      }, () =>{

        this.query();
        this.scroll();
      });

     }

    paginaSiguiente = () => {

      let pagina = this.state.pagina;

      pagina += 1; 

      this.setState({

        pagina

      }, () => {

        this.query();
        this.scroll();
      });

      }


  query = () => {

   const termino = this.state.termino;
   const pagina = this.state.pagina;
   const url = `https://pixabay.com/api/?key=14276481-fbb97eb07584cdd78c8f65e71&q=${termino}&per_page=20&page=${pagina}`;

   fetch(url)
   .then( resp => resp.json())
   .then( resp => this.setState({ Imagen : resp.hits }) )

  }

   searchData = (termino)=>{

      this.setState({
        
        termino: termino,
        pagina : 1

      }, () => {

        this.query();
      
      })

    }

      render() {

      return (

        <div className="App">   

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </li>
                  </ul>
                    <Buscador

                      searchData={this.searchData}

                    />
                </div>                 
              </div>  
            </nav>
        
            <Resultado
                  imagenes={this.state.Imagen}
                  paginaAnterior={this.paginaAnterior}
                  paginaSiguiente={this.paginaSiguiente}
                />

                <div className="py-5"></div> 

           </div>
        </div>
      );
    }
}
export default App;