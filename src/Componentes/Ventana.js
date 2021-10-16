const Ventana = ({ children, footer, titulo, isOpen, alto, ancho, id, img, Cerrar, minimizar }) => {
  if (isOpen) {
    return (
      <div className={id === 0 ? "Inicio" : "DivBody"} style={{ width: ancho, height: alto }}>
        <div className="DivHeader">
          <div className="VentanaOpciones">
            <div className="VentanaCerrar">
              <button className={"BotonCerrar"}
                onClick={Cerrar}
              > X </button>
            </div>
            <div className="VentanaMinimizar">
              <button className={"BotonCerrar"}
                onClick={minimizar}
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

export default Ventana;