import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    nombre: '',
    ventanasArr: [
      { id: 0, titulo: 'Inicio', isOpen: false, alto: 700, ancho: 550, footer: 'Seleccione aplicación', atencion: false },
      { id: 1, titulo: 'Ventana1', isOpen: false, alto: 700, ancho: 546, footer: 'Thomas Enrique', atencion: false },
      { id: 2, titulo: 'Ventana2', isOpen: true, alto: 543, ancho: 687, footer: 'Thomas Enrique', atencion: false },
      { id: 3, titulo: 'Ventana3', isOpen: true, alto: 745, ancho: 576, footer: 'Thomas Enrique', atencion: false },
      { id: 4, titulo: 'Ventana3', isOpen: true, alto: 246, ancho: 890, footer: 'Thomas Enrique', atencion: false },
      { id: 5, titulo: 'Ventana3', isOpen: true, alto: 345, ancho: 687, footer: 'Thomas Enrique', atencion: false },
      { id: 6, titulo: 'Ventana3', isOpen: true, alto: 213, ancho: 465, footer: 'Thomas Enrique', atencion: false },
      { id: 7, titulo: 'Ventana3', isOpen: true, alto: 746, ancho: 674, footer: 'Thomas Enrique', atencion: false },
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
      var hoy = new Date();
      var hora = hoy.getHours() + ':' + hoy.getMinutes();
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
                      this.setState({ ventanasArr: a });
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
              <div className="Hora">{hora}</div>
              <div className="Fecha">09-10-2021</div>
            </div>
          </div>
        </div>
      )
    }

    const Ventana = ({ children, footer, titulo, isOpen, alto, ancho, id }) => {
      let a = window.Event.y;
      if (isOpen) {
        return (

          <div className={id == 0 ? "Inicio" : "DivBody"} style={{ width: ancho, height: alto }}>
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

    return (
      <>
        <div className="body">
          {VentanaP.map((v) => {
            return (
              <>
                <Ventana
                  id={v.id}
                  titulo={v.titulo}
                  isOpen={v.isOpen}
                  footer={v.footer}
                  alto={v.alto}
                  ancho={v.ancho}
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
          <div style={{ height: "45px", width: "100%" }}></div>
        </div>

        <BarraTarea
          VentanaP={this.state.ventanasArr}
          Programas={this.state.ProgramaArr}
        />
      </>
    )
  }
}



export default App;
