const CrudRepository = require("../repositories/crud-repository");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

module.exports = CityRepository;
