import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    nombre: '',
    ventanasArr: [
      { id: 0, titulo: 'Inicio', isOpen: false, alto: 700, ancho: 550, footer: 'Seleccione aplicación', run: true, img: "https://cdn0.iconfinder.com/data/icons/black-box/64/tile-sorting-32.png" },
      { id: 1, titulo: 'Criptos', isOpen: false, alto: 700, ancho: 1100, footer: 'Tus criptos', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 2, titulo: 'Comentarios', isOpen: false, alto: 600, ancho: 700, footer: 'Comentarios en construccion', run: false, img: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_6-48.png" },
      /* { id: 3, titulo: 'Ventana3', isOpen: false, alto: 745, ancho: 576, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 4, titulo: 'Ventana4', isOpen: false, alto: 246, ancho: 890, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 5, titulo: 'Ventana5', isOpen: false, alto: 345, ancho: 687, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 6, titulo: 'Ventana6', isOpen: false, alto: 213, ancho: 465, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 7, titulo: 'Ventana7', isOpen: false, alto: 746, ancho: 674, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
     */
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
    /* barra */
    const BarraTarea = () => {
      var hoy = new Date();
      var hora = hoy.getHours() + ':' + hoy.getMinutes();
      return (
        <div className="BarraTareas">
          <div className="Tareas">
            {VentanaP.map((t, index) => {
              if (t.run || t.id === 0) {
                return (
                  <div className="Tarea" key={t.id}>

                    <button className={t.isOpen ? "BotonOpen" : "Boton"}
                      onClick={() => {
                        let a = this.state.ventanasArr;
                        a[index].isOpen = !a[index].isOpen;

                        this.setState({ ventanasArr: a });
                      }}
                    > <img alt="avatar" width="32" height="32" src={t.img}></img> </button>

                  </div>
                )
              } else {
                return (null)
              }

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

    const Ventana = ({ children, footer, titulo, isOpen, alto, ancho, id, img }) => {
      if (isOpen) {
        return (

          <div className={id === 0 ? "Inicio" : "DivBody"} style={{ width: ancho, height: alto }}>
            <div className="DivHeader">
              <div className="VentanaOpciones">
                <div className="VentanaCerrar">
                  <button className={"BotonCerrar"}
                    onClick={() => {
                      let a = this.state.ventanasArr;
                      a[id].isOpen = !a[id].isOpen;
                      a[id].run = false;
                      this.setState({ ventanasArr: a });
                    }}
                  > X </button>
                </div>
                <div className="VentanaMinimizar">
                  <button className={"BotonCerrar"}
                    onClick={() => {
                      let a = this.state.ventanasArr;
                      a[id].isOpen = !a[id].isOpen;
                      a[id].run = true;
                      this.setState({ ventanasArr: a });
                    }}
                  > _ </button>
                </div>
              </div>
              <div className="TituloHead"><h3>{titulo}</h3></div>
              <div className="CuadroImagen">
                <div className="ImagenPerfil">
                  <img alt="avatar" width="32" height="32" src={img}></img>
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

    /* aplicaciones */
    return (
      <>
        <div className="body">
          {VentanaP.map((v) => {
            /* ventana inicio */
            if (v.id === 0) {
              return (
                <>
                  <Ventana id={v.id} titulo={v.titulo} isOpen={v.isOpen} footer={v.footer} alto={v.alto} ancho={v.ancho} img={v.img}>
                    <div>
                      <div className="VentanaInicio">
                        {this.state.ventanasArr.map((app, index) => {
                          if (app.id !== 0) {
                            return (
                              <div className="InicioCuadro">
                                <div className="VentanaInicioTarea" key={app.id}>
                                  <button className={"VentanaInicioBoton"}
                                    onClick={() => {
                                      let a = this.state.ventanasArr;
                                      a[index].isOpen = !a[index].isOpen;
                                      a[index].run = true;
                                      a[0].isOpen = false;
                                      this.setState({ ventanasArr: a });
                                    }}
                                  > <img alt="avatar" src={app.img}></img> </button>




                                </div>
                                <div className="VentanaInicioTexto">
                                  {app.titulo}
                                </div>
                              </div>
                            )
                          } else {
                            return (null)
                          }
                        })}
                      </div>
                    </div>
                  </Ventana>
                </>
              )
            }
            /* criptos */
            if (v.id === 1) {
              return (
                <>
                  <Ventana id={v.id} titulo={v.titulo} isOpen={v.isOpen} footer={v.footer} alto={v.alto} ancho={v.ancho} img={v.img}>
                    <div>
                      <div className="ContenidoCentradoSimple">
                        <img alt="en construccion" width="1000" src="https://i.ytimg.com/vi/qCylpmEvDCg/maxresdefault.jpg"></img>
                      </div>

                    </div>
                  </Ventana>
                </>
              )
            }
            /* comentarios */
            if (v.id === 2) {
              return (
                <>
                  <Ventana id={v.id} titulo={v.titulo} isOpen={v.isOpen} footer={v.footer} alto={v.alto} ancho={v.ancho} img={v.img}>
                    <div>
                      <div className="ContenidoCentradoSimple">
                      <img alt="criptos" width="500" height="500" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/SITIO-EN-CONSTRUCCION.jpg"></img>
                      </div>

                    </div>
                  </Ventana>
                </>
              )
            }
            else {
              return (
                <>
                  <Ventana
                    id={v.id}
                    titulo={v.titulo}
                    isOpen={v.isOpen}
                    footer={v.footer}
                    alto={v.alto}
                    ancho={v.ancho}
                    img={v.img}
                  >

                    <div>
                      <p>El contenido de esta ventana se ajusta</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate dui enim, id tristique sapien efficitur ac. Aenean dignissim condimentum vulputate. Aliquam facilisis sed turpis at sagittis. Etiam ullamcorper ex luctus hendrerit faucibus. Praesent sit amet quam sit amet felis condimentum dapibus vel ut nulla. Quisque viverra elementum ipsum, sed pellentesque turpis gravida eget. Suspendisse id mi vitae massa tincidunt rhoncus. Pellentesque tempus elit quis nulla egestas, non tincidunt tortor congue. Sed sagittis, massa eleifend consequat suscipit, ante mi vehicula ex, nec cursus ante dui sed magna. Nullam turpis ex, aliquet a tempor sed, vehicula vel nisi. In vitae quam sapien. Aenean faucibus posuere odio, non convallis nisl semper tempus. Vivamus cursus erat sed dolor imperdiet malesuada. Nam condimentum leo quis dui semper vestibulum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate dui enim, id tristique sapien efficitur ac. Aenean dignissim condimentum vulputate. Aliquam facilisis sed turpis at sagittis. Etiam ullamcorper ex luctus hendrerit faucibus. Praesent sit amet quam sit amet felis condimentum dapibus vel ut nulla. Quisque viverra elementum ipsum, sed pellentesque turpis gravida eget. Suspendisse id mi vitae massa tincidunt rhoncus. Pellentesque tempus elit quis nulla egestas, non tincidunt tortor congue. Sed sagittis, massa eleifend consequat suscipit, ante mi vehicula ex, nec cursus ante dui sed magna. Nullam turpis ex, aliquet a tempor sed, vehicula vel nisi. In vitae quam sapien. Aenean faucibus posuere odio, non convallis nisl semper tempus. Vivamus cursus erat sed dolor imperdiet malesuada. Nam condimentum leo quis dui semper vestibulum.</p>
                    </div>
                  </Ventana>
                </>
              )
            }

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
