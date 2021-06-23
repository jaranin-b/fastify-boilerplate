import { CustomError } from './customError'

const MICRO_SERVICE_ID = 'xxx'

export class ApiError extends CustomError {
  statusCode: number
  businessCode: number

  constructor(statusCode: number, message: string, businessCode: number) {
    super(statusCode, message)
    this.statusCode = statusCode
    this.businessCode = businessCode

    Object.setPrototypeOf(this, ApiError.prototype)
  }

  serializeErrors() {
    return {
      id: MICRO_SERVICE_ID + this.businessCode,
      code: this.businessCode,
      message: this.message,
      href: 'error_url' + this.businessCode,
    }
  }
}
