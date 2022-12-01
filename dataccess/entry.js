const { Auto, Fabricadeautos } = require('../models/')
   


const getAll = async (filter) => { 
  let options = {
    attributes: ['id', 'nombre', 'anio'], 
    include: [
      {model: Fabricadeautos, required: false}
    ]
  }

  if (filter.fabricadeautos_id)
    options = {
      ...options, where: {
        ...options.where,
        fabricadeautosId: filter.fabricadeautos_id
      }
    }
  
    if (filter.nombre)
    options = {
      ...options, where: {
        ...options.where,
        nombre: filter.nombre
      }
    }
  
  const datos = await Auto.findAll(options) 
  return datos
};

const getOne = async (id) => {
  return await Auto.findByPk(id, {
    include: [
      {model: Fabricadeautos, required: false}
  ]
});}


const save = async (body) => {
  const data = { ...body}
  const auto = await Auto.create(data);
  if (body.fabricadeauto) { 
    let fabricadeauto = {}
    if (body.fabricadeauto.id) {
      fabricadeauto = await Fabricadeautos.findByPk(body.fabricadeauto.id)
    } else { 
      fabricadeauto = await Fabricadeautos.create(body.fabricadeauto)
    }
    auto.fabricasdeautoId = fabricadeauto.id
    await auto.save()
  }
  return auto
}

const borrar = async (id) => {
  await Auto.destroy({
    where: {
      id
    }
  }) 
}

const update = async (id, body) => { 
  const data = await getOne(id)
  data.nombre = body.nombre
  data.anio = body.anio
  if (body.fabricadeauto) { 
    let fabricadeauto = {}
    if (body.fabricadeauto.id) {
      fabricadeauto = await Fabricadeautos.findByPk(body.fabricadeauto.id)
    } else { 
      fabricadeauto = await Fabricadeautos.create(body.fabricadeauto)
    }
    data.fabricadeautoId = fabricadeauto.id 
  }
  await data.save()
  return data
}

module.exports = { getAll, getOne, save, borrar, update};
