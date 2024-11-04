const Sequelize=require('sequelize');

const sequelize= new Sequelize('attendence','root','F1@mysql',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;