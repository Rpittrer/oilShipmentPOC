# Oil Shipment POC
With the advent of Blockchain technology and Smart Contracts, it is possible now to bring the various stakeholders on one platform and ensure optimal transportation with minimum of congestion and disputes.
Demurrage- a charge payable to the owner of a freight train on failure to load or discharge the train within the time agreed.
Digital demurrage claims calculations make transactions faster by enforcing trust via self-executing contracts that lie on the blockchain, thereby reducing the time in dispute resolution and immensely lowers the time taken between transaction.

### Parties Involved
There are several parties involved in maritime contract. These are:
* Vendor - supplier of crude.
* Shipper - an individual or company buying the crude and arranging for its transport.
* Charter Party - company hired by shipper to transport crude to them.
* Vessel Owner - owner of ship who lends its vessel for a specified period of time to the Charterer.
* Inspector - verifies ship logs for the shipper at loading port
* Loading Port - where crude is loaded onto the vessel
* Discharging Port- where crude is discharged thus relieving vessel

### Working
The charter party contract signed by train owner and the carrier is stored in the Smart Contract. This ensures that neither of the parties can deny to what they agreed upon and no one, intentionally or unintentionally, can change the clauses of the charter party. This ensures trust between the ship owner and the carrier.
The Shipper and Port also come to an agreement regarding cargo details, vessel details ETA, Laytime etc. This agreement is recorded on Blockchain through Smart Contract, hence is immutable and no one has central access to manipulate the agreement.
All parties need to sign a transaction on the Blockchain, when they accept an agreement. This ensures no party can deny their level of involvement and the terms of the contract.
The daily reports logged by vessel captain are stored on Blockchain as Events, making them tamper proof. Anyone can check the report logged by the vessel captain anytime to validate the authenticity.                                           	
The demurrage calculations are done by the Smart Contract therefore, are not prone to human errors.

### Demurrage Calculations

 The purpose of layover calculations is to determine whether on completion of loading and discharge operations despatch is payable to the charterers or demurrage is due to the owners.
Laytime calculation is usually carried out in following steps:
* Read relevant clauses in the charter party.
* Obtain Statement of Facts from agent.
* Determine duration of laytime allowed.
* Establish time of commencement of laytime.
* Allow for interruptions to laytime as per the charter party.
* Establish time of expiry of laytime.
* Calculate despatch or demurrage payable.

## Installation

### Prerequisites

* NodeJs
* Truffle
* Ganache
* Ethereum

Run the development console.
    ```javascript
    truffle develop
    ```

Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

Run the server with
```
node server.js
```
See the instance on localhost:3000

