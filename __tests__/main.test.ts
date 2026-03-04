import * as process from 'process'
import fs from 'fs'
import * as path from 'path'
import {annotationsForPath} from '../src/annotations'

beforeAll(() => {
  jest.spyOn(fs, 'existsSync').mockReturnValue(true)
  process.env['GITHUB_WORKSPACE'] = __dirname
})

test('parses file', async () => {
  const spotBugsXml = path.resolve(
    __dirname,
    '..',
    'reports',
    'spotbugsXml.xml'
  )
  const result = annotationsForPath(spotBugsXml)
  expect(result.annotations).toHaveLength(12)
  expect(result.violationCount).toBe(12)
})

test('violationCount reflects total violations even when source files cannot be found', async () => {
  const spotBugsXml = path.resolve(
    __dirname,
    '..',
    'reports',
    'spotbugsXml.xml'
  )
  jest.spyOn(fs, 'existsSync').mockReturnValue(false)
  const result = annotationsForPath(spotBugsXml)
  expect(result.annotations).toHaveLength(0)
  expect(result.violationCount).toBeGreaterThan(0)
})
