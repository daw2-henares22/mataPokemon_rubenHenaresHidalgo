import './scss/styles.scss'

import * as bootstrap from 'bootstrap'

import { Home } from './vistas/Home'

document.querySelector('main').innerHTML = Home.template
Home.script()
