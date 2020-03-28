const connection = require('../database/connection'),
      crypto = require('crypto');

module.exports = {
  async  index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create( request, response ) {
    const { name, email, whatsapp, city, uf } = request.body;

  //create id
  const id = crypto.randomBytes(4).toString('HEX');

  // conexao com o banco
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return response.json({ id });
  } 
};