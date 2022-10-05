const mongoose = require('mongoose')
const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url,{
})
.then(()=>console.log("CONECTADO A MONGO DB"))
.catch((e)=>console.log("El error de conexión es: " + e) )


//Primero creamos el esquema
const personaSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
},{versionKey:false})

//Ahora creamos el modelo
const PersonaModel = mongoose.model('personas',personaSchema)


//---------------------------CRUD DATABASE-----------------------------

//Mostrar
const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas)
}

//Crear
const crear = async ()=>{
    const persona = await PersonaModel({
        nombre:"Piero Benites",
        edad:23,
        pais:"Perú"
    })
    const resultado = await persona.save()
    console.log(resultado)
}

//Actualizar
const actualizar = async (id)=>{
    const persona = await  PersonaModel.updateOne({_id:id},
        {
            $set:{
                nombre: 'UPDATE 1',
                pais: 'PAIS UPDATE 1'
            }
        }
    )
}

//Eliminar
const eliminar = async (id)=>{
    const persona = await PersonaModel.deleteOne({_id:id})
    console.log(persona)
}

//Llamar a los procedimientos
// crear()
// mostrar()
// actualizar('6330e8fbf9b84376186960b6')
// eliminar('6330e8fbf9b84376186960b6')