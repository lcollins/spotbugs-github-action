// Manual mock for @actions/glob used in jest tests
module.exports = {
  create: jest.fn(async () => ({
    glob: jest.fn(async () => []),
    globGenerator: jest.fn()
  }))
}
