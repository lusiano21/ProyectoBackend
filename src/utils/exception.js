class Exception extends Error {
    constructor(message, status) {
      super(message)
      this.status = status
    }
  }
export default Exception

export class NotFoundException extends Exception {
  constructor(message = 'Not found entity') {
    super(message, 404)
  }
}