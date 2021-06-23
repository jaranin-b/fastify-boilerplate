import { FastifyRequest, FastifyReply } from 'fastify'
import { ApiError } from '../utils/errors/apiError'
import { SystemError } from '../utils/errors/systemError'

export const errorHandler = (
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
): any => {
  if (error instanceof ApiError) {
    return reply
      .status(error.statusCode)
      .send({ error: error.serializeErrors() })
  }

  // else 500
  const systemError = new SystemError()
  return reply
    .status(systemError.statusCode)
    .send({ error: systemError.serializeErrors() })
}
