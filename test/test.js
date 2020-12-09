'use strict'
var expect = require('chai').expect
var index = require('../dist/index')

describe('replaceAll function test', () => {
  it('should return abcd', () => {
    var result = index.replaceAll('a b c d', ' ', '')
    expect(result).to.equal('abcd')
  })
  it('should return a test c d', () => {
    var result = index.replaceAll('a b c d', 'b', 'test')
    expect(result).to.equal('a test c d')
  })
})
