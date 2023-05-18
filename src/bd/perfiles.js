import { supabase } from './supabase.js'

export class Perfil {
  constructor (userId = null, nombre = null, apellidos = null, nick = null, avatar = null) {
    this.userId = userId
    this.nombre = nombre
    this.apellidos = apellidos
    this.nick = nick
    this.avatar = avatar
  }

  // leer todos en orden descendiente a como se han creado
  static async getAll () {
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return perfiles.map(({ userId, nombre, apellidos, nick, avatar }) => {
      return new Perfil(userId, nombre, apellidos, nick, avatar)
    })
  }
}
