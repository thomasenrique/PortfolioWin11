import './App.css';
import { Component } from 'react';

const Ventana = ({ children, footer, titulo, isOpen }) => {
  let a = window.Event.y;
  if (isOpen) {
    return (
      <div className="DivBody">
        <div className="DivHeader">
          <div className="TituloHead">
            <h3>{titulo}</h3>
            {a}
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
  } else {
    return (null)
  }
}

class App extends Component {
  state = {
    nombre: '',
    ventanasArr: [
      { id: 1, titulo: 'Ventana1', isOpen: false, alto: 600, ancho: 400, footer: 'Thomas Enrique' },
      { id: 2, titulo: 'Ventana2', isOpen: true, alto: 600, ancho: 400, footer: 'Thomas Enrique' },
      { id: 3, titulo: 'Ventana3', isOpen: true, alto: 600, ancho: 400, footer: 'Thomas Enrique' },
    ],
    ProgramaArr: [
      { key: 1, text: "Programa n1", img: "img not found" },
      { key: 2, text: "Programa n2", img: "img not found" },
      { key: 3, text: "Programa n3", img: "img not found" },
      { key: 4, text: "Programa n4", img: "img not found" },
      { key: 5, text: "Programa n5", img: "img not found" },
      { key: 6, text: "Programa n6", img: "img not found" },
    ],
  };
  updateValues = (prop, value) => {
    this.setState({ [prop]: value })
  }
  render() {
    const VentanaP = [...this.state.ventanasArr]

    const BarraTarea = () => {
      return (
        <div className="BarraTareas">
          <div className="Tareas">
            {VentanaP.map((t, index) => {
              return (
                <div className="Tarea" key={t.id}>

                  <button className={t.isOpen ? "BotonOpen" : "Boton"}
                    onClick={() => {
                      let a = this.state.ventanasArr;
                      a[index].isOpen = !a[index].isOpen;
                      this.setState({ventanasArr: a});
                    }}
                  > {t.id} </button>

                </div>
              )
            })}
          </div>
          <div className="Programas">
            {this.state.ProgramaArr.map((p) => {
              return (
                <div className="Programa" key={p.key}></div>
              )
            })}
          </div>
          <div className="Herramientas">
            <div className="Tiempo">
              <div className="Hora">11:23</div>
              <div className="Fecha">09-10-2021</div>
            </div>
          </div>
        </div>
      )
    }


    return (
      <div className="body">
        {VentanaP.map((v) => {
          return (
            <>
              <Ventana
                titulo={v.titulo}
                isOpen={v.isOpen}
                footer={v.footer}
              >
                <div>
                  {/* <h1>Thomas Miño Pradel</h1> */}
                  <p>El contenido de esta ventana se ajusta</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate dui enim, id tristique sapien efficitur ac. Aenean dignissim condimentum vulputate. Aliquam facilisis sed turpis at sagittis. Etiam ullamcorper ex luctus hendrerit faucibus. Praesent sit amet quam sit amet felis condimentum dapibus vel ut nulla. Quisque viverra elementum ipsum, sed pellentesque turpis gravida eget. Suspendisse id mi vitae massa tincidunt rhoncus. Pellentesque tempus elit quis nulla egestas, non tincidunt tortor congue. Sed sagittis, massa eleifend consequat suscipit, ante mi vehicula ex, nec cursus ante dui sed magna. Nullam turpis ex, aliquet a tempor sed, vehicula vel nisi. In vitae quam sapien. Aenean faucibus posuere odio, non convallis nisl semper tempus. Vivamus cursus erat sed dolor imperdiet malesuada. Nam condimentum leo quis dui semper vestibulum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate dui enim, id tristique sapien efficitur ac. Aenean dignissim condimentum vulputate. Aliquam facilisis sed turpis at sagittis. Etiam ullamcorper ex luctus hendrerit faucibus. Praesent sit amet quam sit amet felis condimentum dapibus vel ut nulla. Quisque viverra elementum ipsum, sed pellentesque turpis gravida eget. Suspendisse id mi vitae massa tincidunt rhoncus. Pellentesque tempus elit quis nulla egestas, non tincidunt tortor congue. Sed sagittis, massa eleifend consequat suscipit, ante mi vehicula ex, nec cursus ante dui sed magna. Nullam turpis ex, aliquet a tempor sed, vehicula vel nisi. In vitae quam sapien. Aenean faucibus posuere odio, non convallis nisl semper tempus. Vivamus cursus erat sed dolor imperdiet malesuada. Nam condimentum leo quis dui semper vestibulum.</p>
                </div>
              </Ventana>
            </>
          )
        })}

        {/* <Input
          value={this.state.nombre}
          onChange={e => this.updateValues('nombre', e.target.value)}
        /> */}
        <BarraTarea
          VentanaP={this.state.ventanasArr}
          Programas={this.state.ProgramaArr}
        />
      </div>
    )
  }
}



export default App;
