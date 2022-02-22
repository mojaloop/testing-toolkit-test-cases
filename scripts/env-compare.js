/**
 * @file env-compare.js
 * @description Use this file to compare the keys and values in two TTK environment files
 * @example:
 *   `node env-compare.js <first-file> <second-file>`
 */

const fs = require('fs');
const { exit } = require('process');
var myArgs = process.argv.slice(2);

if (myArgs.length !== 2) {
    console.log('Usage: node env-compare.js <first-file> <second-file>\n')
    exit(1)
}

const env1 = fs.readFileSync(myArgs[0])
const env2 = fs.readFileSync(myArgs[1])
let env1Json = JSON.parse(env1)
let env2Json = JSON.parse(env2)

const onlyInEnv1 = Object.entries(env1Json.inputValues).filter(item1 => {
  return env2Json.inputValues[item1[0]] === undefined
})

const onlyInEnv2 = Object.entries(env2Json.inputValues).filter(item1 => {
  return env1Json.inputValues[item1[0]] === undefined
})

const commonKeys = Object.entries(env1Json.inputValues).filter(item1 => {
  return env2Json.inputValues[item1[0]] !== undefined
})

const commonKeysWithDifferentValues = Object.entries(env1Json.inputValues).filter(item1 => {
  return env2Json.inputValues[item1[0]] !== undefined && env2Json.inputValues[item1[0]] !== item1[1]
})

// console.log('Items those exist only in first file', JSON.stringify(onlyInEnv1.map(item => item[0]), null, 2))
// console.log('Items those exist only in second file', JSON.stringify(onlyInEnv2.map(item => item[0]), null ,2))
console.log('Items those exist only in first file', JSON.stringify(onlyInEnv1.reduce((a, v) => ({ ...a, [v[0]]: v[1]}), {}) , null ,2))
console.log('Items those exist only in second file', JSON.stringify(onlyInEnv2.reduce((a, v) => ({ ...a, [v[0]]: v[1]}), {}) , null ,2))
// console.log('Items those exist in both files', JSON.stringify(commonKeys.map(item => item[0]), null, 2))

const commonKeysWithDifferentValuesComparison = commonKeysWithDifferentValues.map(item => {
    return {
        'key': item[0],
        'value1': item[1],
        'value2': env2Json.inputValues[item[0]]
    }
})

console.log('Items which are common but with different values', JSON.stringify(commonKeysWithDifferentValuesComparison, null, 2) )