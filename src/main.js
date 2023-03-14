import './scss/styles.scss'

import * as bootstrap from 'bootstrap'

import { home } from './vistas/home';

document.querySelector('main').innerHTML = home.template;
home.script()
