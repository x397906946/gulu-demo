const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
})