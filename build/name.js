import {name} from '../package.json'

const cases = name.split('-')
let CamelCase = ''
if (cases.length === 1) CamelCase = cases[0]
else cases.map(n => {
  CamelCase += n.replace(/^./, x => x.toUpperCase())
})

export default CamelCase
