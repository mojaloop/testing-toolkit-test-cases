# Merchant Provisioning

## For Testing
- Deploy [Merchant](https://github.com/mojaloop/merchant-registry-svc)
  - Set the Following Environment Variables During Deployment of `Acquirer Backend`
    - `SENDGRID_API_KEY=<Replace with SendGrid API Key>`
    - `SENDER_EMAIL=<Replace with Sender Email>`

    - `RECAPTCHA_ENABLED=false` - For User Authentication via API easier

    - `SEED_DEFAULT_DFSP_USERS=true` - For populating the DFSP like greenbankfsp
    - `SEED_DEFAULT_HUB_USERS=true` - For populating Hub Users like hubuser1

    - `GENERAL_RATE_LIMIT_MAX=99999` - Disable Rate Limit for General Usage
    - `GENERAL_RATE_LIMIT_WINDOW=1m` 

    - `AUTH_RATE_LIMIT_MAX=99999` - Disable Rate Limit for Auth Usage
    - `AUTH_RATE_LIMIT_WINDOW=1m`


- Apply the merchant related environments variables
  - [Merchant Provisioning Env](../../../environments/provisioning_merchant.json)
  - Change the `MERCHANT_ACQUIRER_ENDPOINT_BASE_URL` to the Acquirer Backend URL accessible from the TTK
  - Change the `MERCHANT_ORACLE_ENDPOINT_BASE_URL` to the Oracle Backend URL accessible from the TTK

- Import and Run Merchant [Provisioning](./merchant_setup.json)
- Import and Run Merchant [ALS Lookup Test](../other_tests/merchant/merchant-lookup.json)
