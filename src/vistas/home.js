import { createClient } from '@supabase/supabase-js'
import { formulario } from '../componentes/formulario'

export const home = {
  script: async () => {
    console.log('Vista home cargada')
    // Conexion con la base de datos supabase

    const supabaseUrl = 'https://xucceinaotexbnfusfpl.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Y2NlaW5hb3RleGJuZnVzZnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MjksImV4cCI6MTk5Mjc1MjYyOX0.ibXE3_mhGDUYKh3ZRqOgokqxkVNQ8VXN9YtROZc9YIg'

    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log(supabase)

    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')

      console.log(perfiles)
    }

    const agregarPerfil = async () => {
      // INSERT ARROW
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          { nombre: 'ejemplo' }
        ])
    }

    // await leerTodosPerfiles()
    // await agregarPerfiles()

    const leerProyectosDetalle = async () => {
      // INVOKE FUNCTION
      const { data, error } = await supabase
        .rpc('proyectosdetalle')

      if (error) console.log(error)
      else console.log('Proyectos con detalle: ', data)
    }
    leerProyectosDetalle()
  },
  template: `
        <div class="container-fluid">
            <div class="row">
                <h1>Registro Pokemon</h1>
                ${formulario.template}
            </div>
        </div>
    `
}
