import { buscador, orden } from '../src/funciones/funciones.js'

import { expect } from 'chai'

describe('buscador', () => {
  it('debería devolver un array que coincida con el texto', () => {
    const texto = 'MANUEL'
    const resultado = buscador(texto)
    expect(resultado).to.deep.equal([
      {
        avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
        nick: 'MANUEL',
        puntos: 520,
        fecha: '27 SEPTIEMBRE 2023'
      }
    ])
  })

  it('debería devolver un array vacío si no hay coincidencias', () => {
    const resultados = buscador('otro')
    expect(resultados).to.deep.equal([])
  })
})

describe('orden', () => {
  it('debería devolver un array ordenado por nick y down', () => {
    const campo = 'nick'
    const tipo = 'down'
    const resultado = orden(campo, tipo)
    expect(resultado).to.to.deep.equal([
      {
        avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
        nick: 'JOSEMA',
        puntos: 150,
        fecha: '2 MARZO 2023'
      },
      {
        avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
        nick: 'MANUEL',
        puntos: 520,
        fecha: '27 SEPTIEMBRE 2023'
      },
      {
        avatar: 'https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg',
        nick: 'MARIA',
        puntos: 650,
        fecha: '5 MAYO 2023'
      }
    ])
  })
})
