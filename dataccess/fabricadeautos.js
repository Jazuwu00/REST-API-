const { Fabricadeautos } = require('../models')
   


const getAll = async (filter) => { 
  const datos = await Fabricadeautos.findAll() 
  return datos
};

const getOne = async (id) => {
  
   return await Fabricadeautos.findByPk(id);
  }


const save = async (body) => {
  const data = { ...body}
  const post = await Fabricadeautos.create(data); 
  return post
}

const borrar = async (id) => {
  await Fabricadeautos.destroy({
    where: {
      id
    }
  }) 
}

const update = async (id, body) => { 
  const data = await getOne(id)
  data.nombre = body.nombre 
  await data.save()
  return data
}

module.exports = { getAll, getOne, save, borrar, update};
