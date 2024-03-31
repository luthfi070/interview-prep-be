const ClinicEntities = require("../entities/clinicEntities");

class ClinicController {
  static async getTime(req, res, next) {
    try {
      const { params } = req;

      const time = await ClinicEntities.getTime(params.id);

      res.status(200).json(time);
    } catch (error) {
      throw error;
    }
  }

  static async createClinic(req, res, next) {
    try {
      const { body } = req;

      const createTime = await ClinicEntities.createClinic(body);

      res.status(200).json(createTime);
    } catch (error) {
      throw error;
    }
  }

  static async getAllClinic(req, res, next) {
    try {
      const clinics = await ClinicEntities.getAllClinic();

      res.status(200).json(clinics);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClinicController;
