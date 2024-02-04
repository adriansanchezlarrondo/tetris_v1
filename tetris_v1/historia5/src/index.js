import { panel } from './componentes/panel'
import { ModeloPieza } from './funciones/clases'

const nuevaPieza = new ModeloPieza()

panel.nuevaPieza = nuevaPieza

panel.insertarPieza(panel.nuevaPieza)

panel.pintaPanel()
