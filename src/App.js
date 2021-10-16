import './App.css';
import { Component } from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Ventana from './Componentes/Ventana'
import BarraTarea from './Componentes/BarraTarea'

const P = styled.p`
      font-size: 24px;
      color: green;
    `
const Button = styled.button`
  transition: box-shadow 0.2s ease;

      backgroud-color: ${props => props.primary ? 'red' : 'white'};
      color: ${props => props.primary ? 'green' : 'blue'};
      padding: 10px 15px;
      border: solid 2px red;
      border-radius: 4px;

      &:hover {
        box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
      }

      &.secondary {
        backgroud-color: blue
        border: solid 2px red;
        color: magenta
        width: 150px
      }
    `
const ButtonPulento = styled(Button)`
    width: 200px;
    heigth: 80px;
    `


class App extends Component {
  state = {
    nombre: '',
    ventanasArr: [
      { id: 0, titulo: 'Inicio', isOpen: false, alto: 700, ancho: 550, footer: 'Seleccione aplicación', run: true, img: "https://cdn0.iconfinder.com/data/icons/black-box/64/tile-sorting-32.png" },
      { id: 1, titulo: 'Criptos', isOpen: false, alto: 700, ancho: 1100, footer: 'Tus criptos', run: false, img: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitcoincash_bch_bitcoin-48.png" },
      { id: 2, titulo: 'Comentarios', isOpen: false, alto: 600, ancho: 700, footer: 'Comentarios en construccion', run: false, img: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_6-48.png" },
      { id: 3, titulo: 'Hooks', isOpen: false, alto: 800, ancho: 600, footer: 'Thomas Enrique', run: false, img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-48.png" },
      /*{ id: 4, titulo: 'Ventana4', isOpen: false, alto: 246, ancho: 890, footer: 'Thomas Enrique', run: false, img: "" },
      { id: 5, titulo: 'Ventana5', isOpen: false, alto: 345, ancho: 687, footer: 'Thomas Enrique', run: false, img: "" },
      { id: 6, titulo: 'Ventana6', isOpen: false, alto: 213, ancho: 465, footer: 'Thomas Enrique', run: false, img: "" },
      { id: 7, titulo: 'Ventana7', isOpen: false, alto: 746, ancho: 674, footer: 'Thomas Enrique', run: false, img: "" },
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
  VentanaCerrar = (id) => {
    let a = this.state.ventanasArr;
    a[id].isOpen = !a[id].isOpen;
    a[id].run = false;
    this.setState({ ventanasArr: a });
  }
  VentanaMinimizar = (id) => {
    let a = this.state.ventanasArr;
    a[id].isOpen = !a[id].isOpen;
    a[id].run = true;
    this.setState({ ventanasArr: a });
  }
  BarraTareasMinimizarMaximizar = (index) => {
    let a = this.state.ventanasArr;
    a[index].isOpen = !a[index].isOpen;
    this.setState({ ventanasArr: a });
  }
  render() {

    const useContador2 = (inicial) => {
      const [contador2, setContador2] = useState(inicial)
      const incrementar = () => {
        setContador2(contador2 + 1)
      }

      return [contador2, incrementar]
    }
    const CustomHooks = () => {
      const [contador2, incrementar] = useContador2(0);
      useEffect(() => {
        document.title = contador2
      }, [contador2])
      return (
        <>
          <img width="100%" src="https://i.ibb.co/KDyKmT9/Captura-de-pantalla-de-2021-10-13-14-02-47.png" alt="custum hoook"></img>
          <code className="code">
            const [contador2, useContador2] = useContador2(0) <br></br>
            Contador2: {contador2} <br></br>
            "onClick en boton: incrementar"<br></br>
          </code>
          <p>Contador2: {contador2}</p>
          <Button primary={true} onClick={incrementar}>Aumentar 2</Button>
          <Button primary={true} className="secondary" onClick={incrementar}>Aumentar 2</Button>
          <p>Tiene un useEffect que actualiza el nombre de la pagina</p>
        </>
      )
    }
    const Hooks = () => {
      const [contador, setContador] = useState(0)
      return (
        <>
          <code className="code">
            const [contador, setContador] = useState(0) <br></br>
            Contador: {contador} <br></br>
            onClick en boton: setContador(contador + 1)<br></br>
          </code>
          <p>Contador: {contador}</p>
          <ButtonPulento primary={false} onClick={() => { setContador(contador + 1) }}>Aumentar</ButtonPulento>
          <ButtonPulento primary={false} as="a" href="#" onClick={() => { setContador(contador + 1) }}>Aumentar</ButtonPulento>
        </>
      )
    }
    /* aplicaciones */
    return (
      <>
        <div className="body">
          {this.state.ventanasArr.map((v) => {
            /* ventana inicio */
            if (v.id === 0) {
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
                    Cerrar={(id) => { this.VentanaCerrar(id) }}
                    minimizar={(id) => { this.VentanaMinimizar(id) }} >
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
                  <Ventana
                    id={v.id}
                    titulo={v.titulo}
                    isOpen={v.isOpen}
                    footer={v.footer}
                    alto={v.alto}
                    ancho={v.ancho}
                    img={v.img}
                    Cerrar={(id) => { this.VentanaCerrar(id) }}
                    minimizar={(id) => { this.VentanaMinimizar(id) }} >
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
                  <Ventana
                    id={v.id}
                    titulo={v.titulo}
                    isOpen={v.isOpen}
                    footer={v.footer}
                    alto={v.alto}
                    ancho={v.ancho}
                    img={v.img}
                    Cerrar={(id) => { this.VentanaCerrar(id) }}
                    minimizar={(id) => { this.VentanaMinimizar(id) }} >
                    <div>
                      <div className="ContenidoCentradoSimple">
                        <img alt="criptos" width="500" height="500" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/SITIO-EN-CONSTRUCCION.jpg"></img>
                      </div>
                    </div>
                  </Ventana>
                </>
              )
            }
            // hooks y custom hooks
            if (v.id === 3) {
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
                    Cerrar={(id) => { this.VentanaCerrar(id) }}
                    minimizar={(id) => { this.VentanaMinimizar(id) }} >
                    <div>
                      <div className="ContenidoCentradoSimple">
                        <P>Hooks</P>
                        {<Hooks />}

                        <br></br>
                        <p>Custum Hooks</p>
                        <CustomHooks />
                        <br></br>
                        <p>Si se minimiza o cierra esta ventana, en hook pierder el valor por que se hace un ComponenDidMount, i think</p>
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
                    Cerrar={(id) => { this.VentanaCerrar(id) }}
                    minimizar={(id) => { this.VentanaMinimizar(id) }} >

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
          CallbackSelect={(index) => { this.BarraTareasMinimizarMaximizar(index) }}


        />
      </>
    )
  }
}



export default App;
