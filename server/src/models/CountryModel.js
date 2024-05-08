const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Cliente", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true, 
        unique: true,
      },
    
      nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    
      bandera:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
    
      continente:{
        type: DataTypes.STRING,
        allowNull: false
      },
    
      capital:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    
      subregion:{
        type: DataTypes.STRING,
      },
    
      area:{
        type: DataTypes.INTEGER
      },
    
      poblacion:{
        type: DataTypes.INTEGER
      }, 
    })
  }, {
    noPrimaryKey: true, //! Buscar donde va esto
  }
  

// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },