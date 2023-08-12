import DomicilioModel from "../models/domicilio.js";

class DomiciliosControllers {
    // CREATE
    static async create(req, res) {
      const { body } = req
      const result = await DomicilioModel.create(body)
      res.status(201).json(result)
    }
    // READ
    static async get(req, res) {
      const result = await DomicilioModel.find()
      res.status(200).json(result)
    }
    static async getById(req, res) {
      const { params: { id } } = req
      const result = await DomicilioModel.findById(id)
      if (!result) {
        return res.status(404).end()
      }
      res.status(200).json(result)
    }
    // UPDATE
    static async updateById(req, res) {
      const { params: { id }, body } = req
      await DomicilioModel.updateOne({ _id: id }, { $set: body })
      res.status(204).end()
    }
    // DELETE
    static async deleteById(req, res) {
      const { params: { id } } = req
      await DomicilioModel.deleteOne({ _id: id })
      res.status(204).end()
    }
  }
  export default DomiciliosControllers;