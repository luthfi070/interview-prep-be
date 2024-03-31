const clinics = require("../schemas/clinic");
const dayjs = require("dayjs");

class ClinicEntities {
  static async getAllClinic() {
    try {
      const clinic = await clinics.find();

      return clinic;
    } catch (error) {
      throw error;
    }
  }

  static async getTime(id) {
    try {
      const clinic = await clinics.findOne({
        _id: id,
      });

      const timeSlot = this.generateSlots(clinic);

      return timeSlot;
    } catch (error) {
      throw error;
    }
  }

  static async generateSlots(clinic) {
    try {
      const { open, close, quota, timeSlot } = clinic;

      let slots = [];
      const openHour = open.split(":")[0];
      const openMinute = open.split(":")[1];

      let openDay = dayjs().hour(openHour).minute(openMinute).second(0);

      let closingHour = close.split(":")[0];
      let closingMinute = close.split(":")[1];
      let closeDay = dayjs().hour(closingHour).minute(closingMinute).second(0);

      while (openDay.isBefore(closeDay.format())) {
        slots.push({
          time: openDay.format("HH:mm"),
          quota: quota,
        });

        openDay = openDay.add(timeSlot, "minute");
      }

      return slots;
    } catch (error) {
      throw error;
    }
  }

  static async createClinic(body) {
    try {
      const clinic = new clinics(body);

      return clinic.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClinicEntities;
