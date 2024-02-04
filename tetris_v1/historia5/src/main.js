import { header } from './componentes/header'
import { home } from './vistas/home'
import './estilo.css'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = home.template
home.script()
