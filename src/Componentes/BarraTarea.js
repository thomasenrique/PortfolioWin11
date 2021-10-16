const BarraTarea = ({ VentanaP, Programas, CallbackSelect }) => {
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
                  onClick={CallbackSelect}
                ><img alt="avatar" width="32" height="32" src={t.img}></img> </button>
              </div>
            )
          } else {
            return (null)
          }

        })}
      </div>
      <div className="Programas">
        {Programas.map((p) => {
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

export default BarraTarea;