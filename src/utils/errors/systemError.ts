const MICRO_SERVICE_ID = 'xxx'
export class SystemError extends Error {
  statusCode = 500

  constructor() {
    super('Unexpected error')

    Object.setPrototypeOf(this, SystemError.prototype)
  }

  serializeErrors() {
    return {
      id: MICRO_SERVICE_ID + this.statusCode,
      code: this.statusCode,
      message: this.message,
      href: 'error_url' + this.statusCode,
    }
  }
}
