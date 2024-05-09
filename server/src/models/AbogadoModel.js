const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Se define el modelo

sequelize.define("Abogado",{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
     },
  
    apellido:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    imagen:{
      type: DataTypes.STRING
    },
  
    matricula:{
      type: DataTypes.STRING,
      unique: true
    }, 
    calle:{
      type: DataTypes.STRING,
      
    }, 
    numero:{
      type: DataTypes.STRING,
    }, 
    codigo_postal:{
      type: DataTypes.INTEGER,
      
    }, 
    ciudad:{
      type: DataTypes.STRING,
      
    }, 
    pais:{
      type: DataTypes.STRING,
      
    }, 
    telefono:{
      type: DataTypes.INTEGER,
      unique: true
    }, 
  
    email:{
      type: DataTypes.STRING,
      unique: true
    }
  })
}