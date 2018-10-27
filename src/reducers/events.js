import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // ↓こっちは配列
      console.log(action.response.data)
      // ↓こっちはオブジェクト lodashを使って上の配列を再配列した
      // idをキーにして
      console.log(_.mapKeys(action.response.data, 'id'))
      return state
    default:
      return state
  }
}
