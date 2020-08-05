# Testing Toolkit test cases

This repository is a collection of tests for the Mojaloop testing toolkit

## Contents: 
 - [Sequence Diagram test collection](#sequence-diagrams)

## Sequence Diagrams
Please follow the below standards for naming conventions and structure:
* Test collections for a specific service eg. Account-Lookup-Service should be under its own folder example [collections/hub/sequence/quoting-service](collections/hub/sequence/quoting-service) in the sequence folder [collections/hub/sequence](collections/hub/sequence)
* The name of the collection should be a description of the sequence diagram as well as the file name such as [Create Quote [seq-quote-1.0.0]](collections/hub/sequence/quoting-service/Create%20Quote%20%5Bseq-quote-1.0.0%5D.json)   
* If the sequence diagram has alt's in it then the description of the sequence diagram should contain the title of the alt eg. *Create quote - quote invalid - Missing Date Header - [seq-quote-1.0.0]*

