# MCM RBAC Tests

## Overview
Tests for validating Mojaloop Connection Manager (MCM) Role-Based Access Control using Ory Oathkeeper authorization rules.

## For Testing

### Prerequisites
- Deploy MCM with BOF (Business Operations Framework) enabled
- Create test users in Keycloak with different roles:
  - `portal_admin` - Full permissions (default user, password in Vault)
  - `operator` - Limited permissions (view only)
  - DFSP owner user - Member of specific DFSP role

### Required Environment Variables
Apply the MCM RBAC environment variables in your TTK environment file:

```json
{
  "inputValues": {
    "MCM_URL": "https://mcm.<domain>/api",
    "MCM_PM4ML_URL": "https://mcm.<domain>/pm4mlapi",
    "MONETARY_ZONE_ID": "1",
    "DFSP1_ID": "testdfsp1",
    "DFSP1_NAME": "testdfsp1",
    "DFSP2_ID": "testdfsp2",
    "DFSP2_NAME": "testdfsp2",
    "PORTAL_ADMIN_SESSION": "<ory_kratos_session_cookie>",
    "DFSP1_OPERATOR_SESSION": "<dfsp1_operator_session_cookie>",
    "DFSP2_OPERATOR_SESSION": "<dfsp2_operator_session_cookie>",
    "DFSP1_JWT": "<dfsp1_pm4ml_jwt_token>",
    "DFSP2_JWT": "<dfsp2_pm4ml_jwt_token>"
  }
}
```

### Getting Session Cookies
1. Login to MCM portal in browser as the desired user
2. Open browser DevTools > Application/Storage > Cookies
3. Copy the value of `ory_kratos_session` cookie
4. Add to TTK environment file

### Getting JWT Tokens
1. Use Keycloak admin console or API to create machine clients
2. Assign appropriate roles and permissions via Finance Portal
3. Generate JWT tokens using OAuth2 client credentials flow
4. Add tokens to TTK environment file

## Test Collections

- `mcm_rbac_positive.json` - Authorized access tests (200/201 expected)
- `mcm_rbac_negative.json` - Unauthorized access tests (401/403 expected)
- `mcm_pm4ml_api.json` - JWT-based PM4ML API tests

## Running Tests

### Automated (via ArgoCD Deployment)

MCM RBAC tests run automatically after MCM deployment via a Kubernetes Job:
- **Location**: `iac-modules/terraform/gitops/generate-files/templates/mcm/mcm-rbac-test-job.yaml.tpl`
- **Trigger**: PostSync hook (ArgoCD sync wave 5)
- **Downloads**: Test collections from this repo automatically
- **Reports**: Available via TTK UI after job completes

**View job status:**
```bash
kubectl get jobs -n mcm mcm-rbac-validation
kubectl logs -n mcm job/mcm-rbac-validation
```

**Configure test parameters** in `cluster-config.yaml`:
```yaml
app_var_map:
  ttk_cli_version: "v1.10.3"
  ttk_test_cases_version: "17.1.1"
  mcm_test_monetary_zone_id: "1"
  mcm_test_dfsp1_id: "testdfsp1"
  mcm_test_dfsp1_name: "testdfsp1"
  mcm_test_dfsp2_id: "testdfsp2"
  mcm_test_dfsp2_name: "testdfsp2"
```

### Manual (via TTK CLI)

```bash
# Run all MCM RBAC tests
ml-ttk-cli -e mcm-environment.json \
  -i collections/hub/mcm/master.json \
  -u http://ttk-backend:5050

# Run specific collection
ml-ttk-cli -e mcm-environment.json \
  -i collections/hub/mcm/mcm_rbac_positive.json \
  -u http://ttk-backend:5050
```

### Manual (via TTK UI)

1. Access TTK UI: `https://ttk.<domain>`
2. Import collections from `collections/hub/mcm/`
3. Configure environment variables
4. Run test suites

## CI/CD Integration

The MCM RBAC validation job is integrated into the Mojaloop deployment pipeline:

1. **ArgoCD** deploys MCM application
2. **PostSync Hook** triggers `mcm-rbac-validation` job
3. **Job** downloads test collections from this repo
4. **TTK CLI** runs tests against deployed MCM
5. **Results** saved to TTK backend for review

**Note**: Full test coverage requires:
- Session cookies (manual browser login required)
- JWT tokens (machine clients in Keycloak)
- User/role setup via Finance Portal

The automated job validates basic connectivity and test infrastructure.

## References
- [BOF Documentation](https://mojaloop.github.io/business-operations-framework-docs/)
- [MCM Oathkeeper Rules](https://github.com/mojaloop/iac-modules/blob/main/terraform/gitops/generate-files/templates/mcm/rbac.yaml.tpl)
- [Automated Test Job](https://github.com/mojaloop/iac-modules/blob/main/terraform/gitops/generate-files/templates/mcm/mcm-rbac-test-job.yaml.tpl)
