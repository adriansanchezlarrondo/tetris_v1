import { home } from '../vistas/home'
import { juego } from '../vistas/juego'
import { ranking } from '../vistas/ranking'
import { panel } from './panel'

export const header = {
  template: // html
    `
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,
  script: () => {
    document.querySelector('#vistaHome').addEventListener('click', () => {
      document.querySelector('main').innerHTML = home.template
      home.script()
    })

    document.querySelector('#vistaRanking').addEventListener('click', () => {
      document.querySelector('main').innerHTML = ranking.template
      ranking.script()
    })

    document.querySelector('#vistaJuego').addEventListener('click', () => {
      document.querySelector('main').innerHTML = juego.template
      panel.pintaPanel()
      panel.nuevaPieza = panel.crearNuevaPieza()
      panel.insertarPieza(panel.nuevaPieza)
    })
  }
}
