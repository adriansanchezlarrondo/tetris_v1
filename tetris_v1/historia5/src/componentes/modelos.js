export const models = [
  {
    nombre: 'palo',
    color: 'bg-primary bg-gradient',
    matriz: [
      [ // De pie
        [1],
        [1],
        [1],
        [1]
      ],
      [[1, 1, 1, 1]], // Tumbada
      [
        [1],
        [1],
        [1],
        [1]
      ],
      [[1, 1, 1, 1]]
    ]
  },
  {
    nombre: 'eleDer',
    color: 'bg-info bg-gradient',
    matriz: [
      [ // L
        [1, 0],
        [1, 0],
        [1, 1]
      ],
      [ // L tumbada
        [1, 1, 1],
        [1, 0, 0]
      ],
      [ // L girada para abajo
        [1, 1],
        [0, 1],
        [0, 1]
      ],
      [ // L tumbada
        [0, 0, 1],
        [1, 1, 1]
      ]
    ]
  },
  {
    nombre: 'eleIzq',
    color: 'bg-light bg-gradient',
    matriz: [
      [ // L inversa
        [0, 1],
        [0, 1],
        [1, 1]
      ],
      [ // L tumbada
        [1, 0, 0],
        [1, 1, 1]
      ],
      [ // L girada para abajo
        [1, 1],
        [1, 0],
        [1, 0]
      ],
      [ // L tumbada
        [1, 1, 1],
        [0, 0, 1]
      ]
    ]
  },
  {
    nombre: 'piramide',
    color: 'bg-secondary bg-gradient',
    matriz: [
      [ // piramide
        [0, 1, 0],
        [1, 1, 1]
      ],
      [ // piramide izq
        [1, 0],
        [1, 1],
        [1, 0]
      ],
      [ // piramide girada
        [1, 1, 1],
        [0, 1, 0]
      ],
      [ // piramide der
        [0, 1],
        [1, 1],
        [0, 1]
      ]
    ]
  },
  {
    nombre: 'zetaDer',
    color: 'bg-success bg-gradient',
    matriz: [
      [ // zeta der
        [0, 1, 1],
        [1, 1, 0]
      ],
      [ // zeta de pie
        [1, 0],
        [1, 1],
        [0, 1]
      ],
      [
        [0, 1, 1],
        [1, 1, 0]
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1]
      ]
    ]
  },
  {
    nombre: 'zetaIzq',
    color: 'bg-warning bg-gradient',
    matriz: [
      [ // zeta izq
        [1, 1, 0],
        [0, 1, 1]
      ],
      [ // zeta de pie
        [0, 1],
        [1, 1],
        [1, 0]
      ],
      [
        [1, 1, 0],
        [0, 1, 1]
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0]
      ]
    ]
  },
  {
    nombre: 'cuadrao',
    color: 'bg-danger bg-gradient',
    matriz: [
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ]
    ]
  }
]
