import { partidas } from '../componentes/bd'

// const partidas = [ // he puesto aquí el array porque me daba error importandolo
//   {
//     avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
//     nick: 'MANUEL',
//     puntos: 520,
//     fecha: '27 SEPTIEMBRE 2023'
//   },
//   {
//     avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
//     nick: 'JOSEMA',
//     puntos: 150,
//     fecha: '2 MARZO 2023'
//   },
//   {
//     avatar: 'https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg',
//     nick: 'MARIA',
//     puntos: 650,
//     fecha: '5 MAYO 2023'
//   }
// ]

export const buscador = (texto) => {
  console.log('Nick a buscar: ', texto)

  texto = texto.toUpperCase()
  const partidasCoincidentes = partidas.filter((partida) => partida.nick.includes(texto))

  let tabla = ''
  if (partidasCoincidentes.length > 0) {
    partidasCoincidentes.forEach(index => {
      tabla +=
          `<tr>
              <td><img width="50" src="${index.avatar}"></td>
              <td>${index.nick}</td>
              <td>${index.puntos}</td>
              <td>${index.fecha}</td>
          </tr>`
    })
  }

  document.querySelector('#tbody').innerHTML = tabla
  return partidasCoincidentes
}

export const orden = (campo, tipo) => {
  let tabla = ''
  switch (campo) {
    case 'nick':
      partidas.sort((a, b) => a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }))
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })

      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        // añadir clase flecha abajo
        document.querySelector('#campoNick').classList.add('bi-arrow-down-square')

        // quitar clase flecha arriba
        document.querySelector('#campoNick').classList.remove('bi-arrow-up-square')

        // quitar clase flecha abajo de los otros campos y añadir flecha arriba
        document.querySelector('#campoPoints').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoPoints').classList.add('bi-arrow-up-square')
        document.querySelector('#campoDate').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoDate').classList.add('bi-arrow-up-square')
      }

      return partidas
    case 'points':
      partidas.sort((a, b) => b.puntos - a.puntos)
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })

      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        // añadir clase flecha abajo
        document.querySelector('#campoPoints').classList.add('bi-arrow-down-square')

        // quitar clase flecha arriba
        document.querySelector('#campoPoints').classList.remove('bi-arrow-up-square')

        // quitar clase flecha abajo de los otros campos y añadir flecha arriba
        document.querySelector('#campoNick').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoNick').classList.add('bi-arrow-up-square')
        document.querySelector('#campoDate').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoDate').classList.add('bi-arrow-up-square')
      }

      return partidas
    default: // campo date
      partidas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })

      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        // añadir clase flecha abajo
        document.querySelector('#campoDate').classList.add('bi-arrow-down-square')

        // quitar clase flecha arriba
        document.querySelector('#campoDate').classList.remove('bi-arrow-up-square')

        // quitar clase flecha abajo de los otros campos y añadir flecha arriba
        document.querySelector('#campoNick').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoNick').classList.add('bi-arrow-up-square')
        document.querySelector('#campoPoints').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoPoints').classList.add('bi-arrow-up-square')
      }

      return partidas
  }
}
