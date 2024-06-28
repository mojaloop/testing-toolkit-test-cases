* Negative-scenarios
    * Fxp-error
        * Put /fxQuotes/ID/error - amount 501 - SDK bug. Sending PUT /fxQuotes/undefined/error instead of id
        * Put /fxTransfers/ID/error - amount 502
            * Check that FXP DFSP Position is reversed - Taking an error
        * Put /transfers/ID/error - amount XXX
            * FxpTransfer is successful
            * Once transfer is errored, check that position for FXP is reversed - Position not getting reversed 
    * Timeout scenarios
        * Not getting timeout from quoting service for POST /fxQuotes - amount 503 - Bug, SDK timing out instead of Switch sending timeout error
        * POST /fxTransfers creates a timeout scenario.  - amount 504 - Not getting timeout for fxTransfers
        * POST /fxTransfers works fine, but POST /transfers timeout.  - amount 505EUR/728CAD
    * Fx-non-success-states
        * fxTransfer PUT ABORTED state - amount 506
    * ConversionID different between /fxQuotes and /fxTransfers