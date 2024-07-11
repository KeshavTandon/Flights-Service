const CrudRepository = require("../repositories/crud-repository");
const { Airport } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
