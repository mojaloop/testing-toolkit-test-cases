# Test suites for Mojaloop Testing Toolkit

This repository is a collection of tests for the Mojaloop testing toolkit

## Contents: 
 - [For Mojaloop **Switch** Implementations](#for-mojaloop-switch-implementations)
   - [Provisioning collection](#provisioning-collection)
   - [Golden Path collection](#golden-path-collection)
   - [Sequence Diagram test collection](#sequence-diagram-test-collection)
   - [Third Party Provisioning collectionn](#third-party-provisioning-collection)
   - [Third Party test collection](#third-party-test-collection)
 - [For Mojaloop **FSP** Implementations](#for-mojaloop-fsp-implementations)
   - [Provisioning collection for Mojaloop Simulator](#provisioning-collection-for-mojaloop-simulator)
   - [DFSP Golden Path collection](#dfsp-golden-path-collection)
 - [Scripts](#scripts)
   - [Compare two TTK environment files](#compare-two-ttk-environment-files)

## For Mojaloop Switch Implementations

### Provisioning Collection:

```
collections/hub/provisioning
```

This collection can be used for setting up the switch after a fresh deployment. And also onboard the required FSPs (payerfsp, payeefsp, testfsp1, testfsp2, testingtoolkitdfsp ..etc) for running golden path tests.

### Golden Path Collection:

```
collections/hub/golden_path
```

This collection contains all the golden path tests to test a switch/hub mojaloop implementation.

The tests include the following scenarios
- Feature Tests
  - P2P Transfer
  - Transfer negative scenarios
  - Duplicate Handling
  - Activie / Inactive Participants
  - Block Transfer
  - Funds In / Funds Out
  - Post scenarios
- Settlement Tests
- Transaction Requests Service
- Quoting Service
- Other API tests

### Sequence Diagram Test Collection

```
collections/hub/sequence
```

Please follow the below standards for naming conventions and structure:
* Test collections for a specific service eg. Account-Lookup-Service should be under its own folder example [collections/hub/sequence/quoting-service](collections/hub/sequence/quoting-service) in the sequence folder [collections/hub/sequence](collections/hub/sequence)
* The name of the collection should be a description of the sequence diagram as well as the file name such as [Create Quote [seq-quote-1.0.0]](collections/hub/sequence/quoting-service/Create%20Quote%20%5Bseq-quote-1.0.0%5D.json)   
* If the sequence diagram has alt's in it then the description of the sequence diagram should contain the title of the alt eg. *Create quote - quote invalid - Missing Date Header - [seq-quote-1.0.0]*


### Third Party Provisioning Collection

```
collections/hub/provisioning_thirdparty
```

This collection adds the necessary participants and parties to
make the Third Party Tests run.

See [collections/hub/provisioning_thirdparty](./collections/hub/provisioning_thirdparty)
for more information.

### Third Party Test Collection

```
collections/hub/thirdparty
```

This collection tests the optional Third Party features that 
enable 3rd Party Payment Initiation (3PPI).

The tests are executed from the perspective of a PISP with a 
participantId of `pisp`, and use the [outbound thirdparty sdk](https://github.com/mojaloop/thirdparty-sdk)
API.

The following scenarios are currently included:
- Account Linking (WEB)
- Account Linking (OTP)
- 3rd Party Transaction Request

## For Mojaloop FSP Implementations

### Provisioning collection for Mojaloop Simulator:

```
collections/provisoning/provision_mojaloop_simulator.json
```

This collection can be used for provisioning party information in the mojaloop simulator to run the DFSP golden path tests against mojaloop simulator.

### DFSP Golden Path collection:

```
collections/golden_path
```

This collection contains all positive and negative scenarios to test against your DFSP implementation.

### Merchant Provisioning
See [Merchant Provisioning](./collections/hub/provisioning_merchant/README.md)

## Scripts

### Compare two TTK environment files:

Usage:
```
node scripts/env-compare.js <first-file> <second-file>
```

You can use the script `env-compare.js` to compare two TTK environment files by each key.

The script can return the following
- Items those exist only in first file
- Items those exist only in second file
- Items which are common but with different values
