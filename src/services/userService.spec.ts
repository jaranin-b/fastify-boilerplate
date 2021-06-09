import userService from './userService'
import { User } from '../entities/User'
import * as typeorm from 'typeorm'
import { createSandbox, SinonSandbox, createStubInstance } from 'sinon'

describe('User services', () => {
  describe('getUser service', () => {
    let sandbox: SinonSandbox

    beforeEach(() => {
      sandbox = createSandbox()
    })

    afterEach(() => {
      sandbox.restore()
    })

    test('success case - should returns users data', async () => {
      const fakeRepository = createStubInstance(typeorm.Repository)
      fakeRepository.findOne.resolves('user_data')
      sandbox
        .stub(typeorm, 'getRepository')
        .withArgs(User)
        .returns(fakeRepository as any)

      const expected = 'user_data'
      const result = await userService.getUser('1')
      expect(expected).toEqual(result)
    })
  })
})
