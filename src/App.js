import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const Div = ({ children, ancho, alto, footer, titulo }) => {



  return (
    <div className="DivBody">
      <div className="DivHeader">
        <div className="TituloHead">
          <h3>{titulo}</h3>
        </div>
        <div className="CuadroImagen">
          <div className="ImagenPerfil">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-32.png"></img>
          </div>
        </div>
      </div>
      <div className="DivContent">
        <div className="DivContenido">
        {children}
        </div>
      </div>
      <div className="DivFooter">
        <div className='FooterContent'>
          {footer}
        </div>

      </div>
    </div>
  )
}

class App extends Component {

  render() {

    return (
      <div className="body">
        <Div
          titulo={'Windows'}
          alto={600}
          ancho={400}
          footer={'Thomás Miño Pradel'}
        >
          <div>
            <h1>thomas</h1>
            <p>asdasd</p>
            todo el contenido ira aqui <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate dui enim, id tristique sapien efficitur ac. Aenean dignissim condimentum vulputate. Aliquam facilisis sed turpis at sagittis. Etiam ullamcorper ex luctus hendrerit faucibus. Praesent sit amet quam sit amet felis condimentum dapibus vel ut nulla. Quisque viverra elementum ipsum, sed pellentesque turpis gravida eget. Suspendisse id mi vitae massa tincidunt rhoncus. Pellentesque tempus elit quis nulla egestas, non tincidunt tortor congue. Sed sagittis, massa eleifend consequat suscipit, ante mi vehicula ex, nec cursus ante dui sed magna. Nullam turpis ex, aliquet a tempor sed, vehicula vel nisi. In vitae quam sapien. Aenean faucibus posuere odio, non convallis nisl semper tempus. Vivamus cursus erat sed dolor imperdiet malesuada. Nam condimentum leo quis dui semper vestibulum.</p>
          </div>
        </Div>
      </div>
    )
  }
}

export default App;
