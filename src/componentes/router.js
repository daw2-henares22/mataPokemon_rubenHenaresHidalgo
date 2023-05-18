import { Home } from '../vistas/Home'
import { Perfil } from '../vistas/Perfil'
import { Error404 } from '../vistas/Error404'
import * as path from 'path'

export const mainRoute = '/'
export const routes = {
  home: '/home',
  perfil: '/perfil',
  prueba: '/prueba'
}

export const AppRouter = ()=>{
    return(
        <routes>
            <route path={mainRoute} element={<Home />}/>
            <route path={routes.home} element={<Home />}/>
            <route path={routes.perfil} element={<Perfil />}/>
            <route path="*" element={<Error404 />}/>
        </routes>
}