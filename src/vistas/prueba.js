import { createClient } from '@supabase/supabase-js'

export const Prueba = {
  template: '<h1>Pruebas</h1>',
  script: async () => {
    console.log('Vista pruebas cargada')

    // Conexion con la base de datos supabase

    const supabaseUrl = 'https://xucceinaotexbnfusfpl.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Y2NlaW5hb3RleGJuZnVzZnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MjksImV4cCI6MTk5Mjc1MjYyOX0.ibXE3_mhGDUYKh3ZRqOgokqxkVNQ8VXN9YtROZc9YIg'

    // const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('conexión a supabase: ', supabase)

    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')

      console.log(perfiles)
    }

    const agregarPerfil = async () => {
      // Insert Arrow
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          { nombre: 'ejemplo' }
        ])
    }

    // await leerTodosPerfiles()
    //  await agregarPerfil()
    //  await leerTodosPerfiles()

    // proyectosDetalle a partir de funcion postgresql
    const leerProyectosDetalle = async () => {
      // INVOKE FUNCTION
      const { data, error } = await supabase
        .rpc('proyectosdetalle')

      if (error) console.error(error)
      else console.log('Proyectos con detalle: ', data)
      return data
    }

    const registro = async () => {
      // USER SIGNUP
      const { data, error } = await supabase.auth.signUp({
        email: 'henareshidalgoruben@fpllefia.com',
        password: '123456'
      })
    }

    // registro()

    const login = async () => {
      // USER LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'henareshidalgoruben@fpllefia.com',
        password: '123456'
      })
    }

    const verUsuarioLogeado = async () => {
      // GET USER
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }

    const logout = async () => {
      // USER LOGOUT
      const { error } = await supabase.auth.signOut()
    }
    // 1. Miramos usuario logeado si no hay nadie pues es null
    console.log('Detalle del usuario logeado ', await verUsuarioLogeado())

    // 2. me logeo
    await login()
    // Miramos el usuario logeado
    console.log('Detalle del usuario logeado ', await verUsuarioLogeado())

    await logout()
    // 3. miramos usuario para mirar si no está logeado
    console.log('Detalle del usuario logeado ', await verUsuarioLogeado())
  }
}
