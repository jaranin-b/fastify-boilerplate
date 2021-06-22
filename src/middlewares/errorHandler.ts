import { FastifyRequest, FastifyReply } from 'fastify'

export const errorHandler = (
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
): void => {
  reply.status(500).send({ error: true })
}
