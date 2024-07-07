const express = require("express");
const {CityControlller } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityControlller.createCity
);

router.get("/", CityControlller.getCities);

router.get("/:id",CityControlller.getCity);

router.delete("/:id", CityControlller.destroyCity);

router.patch("/:id", CityControlller.updateCity);

module.exports = router;
