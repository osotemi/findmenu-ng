var mysql = require('mysql'),
connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'osotemi_web',
        password: '0r3t0_mysql',
        database: 'findmeu'
    }
);

var menusModel = {};

// Obtiene todos los objetos Menus de la base de datos
menusModel.getMenus = function (req, res){
  if (connection) {
      connection.query('SELECT * FROM restaurantes ORDER BY id', function(error, rows) {
          if(error){
              throw error;
          }else{
              callback(null, rows);
          }
      });
  }
}

menusModel.getMenu = function(id,callback){
    if (connection) {
        var sql = 'SELECT * FROM restaurantes WHERE id = ' + connection.escape(id);
        connection.query(sql, function(error, row) {
            if(error){
                throw error;
            }else{
                callback(null, row);
            }
        });
    }
}

module.exports = menusModel;
