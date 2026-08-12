// Manual mock for @actions/github used in jest tests
module.exports = {
  context: {
    repo: {owner: 'owner', repo: 'repo'},
    sha: 'abc123',
    ref: 'refs/heads/main',
    payload: {}
  },
  getOctokit: jest.fn(() => ({
    rest: {
      checks: {
        create: jest.fn(),
        update: jest.fn()
      }
    }
  }))
}
