import { supabase } from './supabase.js'

export class Pokemon {
  constructor (pokedex = null, nombre = null, tipo = null, imagen = null) {
    this.pokedex = pokedex
    this.nombre = nombre
    this.tipo = tipo
    this.imagen = imagen
  }

  // leer todos en orden descendiente a como se han creado
  static async getAll () {
    const { data: pokemons, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return pokemons.map(({ pokedex, nombre, tipo, imagen }) => {
      return new Pokemon(pokedex, nombre, tipo, imagen)
    })
  }
}
