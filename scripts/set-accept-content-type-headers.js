/**
 * @file set-accept-content-type-headers.js
 * @description Use this file to replace the value of a field based on some search criteria
 * @example:
 *   `node set-accept-content-type-headers.js <file>`
 */

 const fs = require('fs');
 const { exit } = require('process');
 var myArgs = process.argv.slice(2);
 
 if (myArgs.length !== 1) {
     console.log('Usage: node set-accept-content-type-headers.js <file>\n')
     exit(1)
 }
 
 const env1 = fs.readFileSync(myArgs[0])
 let inputJson = JSON.parse(env1)
 
 if (!inputJson.test_cases) {
   console.log('ERROR: No test_cases found in the file\n')
   exit(1)
 }
 const test_cases = inputJson.test_cases
 
 test_cases.forEach(testCaseItem => {
   const requests = testCaseItem.requests
   requests.forEach(requestItem => {
     if (requestItem.apiVersion && requestItem.apiVersion.type === 'fspiop') {
       if (requestItem.operationPath && requestItem.method === 'post' && requestItem.operationPath === '/quotes') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptQuotes}'
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeQuotes}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'post' && requestItem.operationPath === '/transfers') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptTransfers}'
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransfers}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'post' && requestItem.operationPath.startsWith('/participants')) {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptParticipants}'
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParticipants}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'post' && requestItem.operationPath === '/transactionRequests') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptTransactionRequests}'
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransactionRequests}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/parties/{Type}/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptParties}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParties}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/parties/{Type}/{ID}/{SubId}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptParties}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParties}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/participants/{Type}/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptParticipants}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParticipants}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/participants/{Type}/{ID}/{SubId}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptParticipants}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParticipants}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/quotes/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptQuotes}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeQuotes}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/transfers/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptTransfers}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransfers}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/authorizations/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptAuthorizations}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeAuthorizations}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'get' && requestItem.operationPath === '/transactionRequests/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           requestItem.headers.Accept = '{$inputs.acceptTransactionRequests}'
         }
        //  if (requestItem.headers && requestItem.headers['Content-Type']) {
        //    delete requestItem.headers['Content-Type']
        //  }
         if (requestItem.headers) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransactionRequests}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/parties/{Type}/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParties}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/parties/{Type}/{ID}/{SubId}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParties}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/participants/{Type}/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParticipants}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/participants/{Type}/{ID}/{SubId}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeParticipants}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/quotes/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeQuotes}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/transfers/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransfers}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/authorizations/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeAuthorizations}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/transactionRequests/{ID}') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransactionRequests}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/quotes/{ID}/error') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeQuotes}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/transfers/{ID}/error') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransfers}'
         }
       } else if (requestItem.operationPath && requestItem.method === 'put' && requestItem.operationPath === '/transactionRequests/{ID}/error') {
         if (requestItem.headers && requestItem.headers.Accept) {
           delete requestItem.headers.Accept
         }
         if (requestItem.headers && requestItem.headers['Content-Type']) {
           requestItem.headers['Content-Type'] = '{$inputs.contentTypeTransactionRequests}'
         }
       }
     }
   })
 })
 
 const modifiedData = JSON.stringify(inputJson, null, 2)
 fs.writeFileSync(myArgs[0], modifiedData)
 