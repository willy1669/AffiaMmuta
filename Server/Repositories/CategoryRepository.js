var model = require ('../Models/Category');
var BaseRepository = require ('../repositories/BaseRepository');

function CategoryRepository(){

};

CategoryRepository.prototype = BaseRepository(model);
module.exports = new CategoryRepository();