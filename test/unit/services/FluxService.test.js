'use strict'
/* global describe, it */

const assert = require('assert')

describe('FluxService', () => {
  it('should exist', () => {
    assert(global.app.api.services['FluxService'])
  })
})
