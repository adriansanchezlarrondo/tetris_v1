import { ModeloPieza } from '../funciones/clases'
import { models } from '../componentes/modelos'

export const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  pintaPanel: () => {
    const IDpanel = document.querySelector('#panel')
    IDpanel.innerHTML = ''

    for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'

      for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
        let divCeldas = ''
        if (panel.matriz[fila][columna] === 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        } else if (panel.matriz[fila][columna] === 1) {
          divCeldas += '<div class="celda bg-primary border-white"></div>'
        }
        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)

    let ancho = models[aleatorioModelo].matriz[0]
    ancho = ancho[0].length
    console.log('ancho pieza', ancho)

    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1
        console.log('aleatorioX', aleatorioX)
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1
        console.log('aleatorioX', aleatorioX)
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1
        console.log('aleatorioX', aleatorioX)
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1
        console.log('aleatorioX', aleatorioX)
        break
    }

    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)
    console.log('pieza ', pieza)

    return pieza
  },
  nuevaPieza: null,
  insertarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = panel.nuevaPieza.matriz[y][x]
        }
      }
    }

    panel.pintaPanel()
  },
  controlTeclas: () => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          panel.moverDra()
          break
        case 'ArrowLeft':
          panel.moverIzq()
          break
        case 'ArrowDown':
          panel.bajar()
          break
        case 'ArrowUp':
          panel.borrarPieza()
          panel.nuevaPieza.girar()
          panel.insertarPieza()
          break
      }
    })
  },
  borrarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0
        }
      }
    }
  },
  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if ((panel.nuevaPieza.x + panel.nuevaPieza.longitud) <= 10) {
        panel.nuevaPieza.x++
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if (panel.nuevaPieza.x > 1) {
        panel.nuevaPieza.x--
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  bajar: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
        panel.nuevaPieza.y++
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  iniciarMovimiento: () => {
    setInterval(() => {
      panel.bajar()
    }, 1000)
  }

}
