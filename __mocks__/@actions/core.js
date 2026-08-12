// Manual mock for @actions/core used in jest tests
module.exports = {
  info: jest.fn(),
  debug: jest.fn(),
  warning: jest.fn(),
  error: jest.fn(),
  setFailed: jest.fn(),
  getInput: jest.fn(),
  setOutput: jest.fn(),
  startGroup: jest.fn(),
  endGroup: jest.fn(),
  exportVariable: jest.fn(),
  setSecret: jest.fn(),
  addPath: jest.fn(),
  saveState: jest.fn(),
  getState: jest.fn(),
  group: jest.fn(),
  summary: {write: jest.fn(), addRaw: jest.fn()},
  notice: jest.fn()
}
