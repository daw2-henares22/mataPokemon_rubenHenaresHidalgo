import { supabase } from './supabase.js'

export class Partida {
  constructor (usuarioId = null, puntos = null, tiempo = null) {
    this.usuarioId = usuarioId
    this.puntos = puntos
    this.tiempo = tiempo
  }

  // leer todos en orden descendiente a como se han creado
  static async getAll () {
    const { data: partidas, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return partidas.map(({ usuarioId, puntos, tiempo }) => {
      return new Partida(usuarioId, puntos, tiempo)
    })
  }
}
