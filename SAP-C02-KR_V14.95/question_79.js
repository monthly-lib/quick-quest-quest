const question_79=`QUESTION NO: 79 여러 AWS 계정이 있는 회사에서 AWS Organizations 및 서비스 제어 정책(SCP)을 사용하고 있습니다. 관리자가 다음 SCP를 생성하여 AWS 계정 1111-1111-1111이 포함된 조직 단위(OU)에 연결했습니다. 계정 1111-1111-1111에서 작업하는 개발자는 Amazon S3 버킷을 생성할 수 없다고 불평합니다. 관리자는 이 문제를 어떻게 해결해야 합니까? A. SCP에 "허용" 효과가 있는 s3:CreateBucket을 추가합니다. B. OU에서 계정을 제거하고 SCP를 계정 1111-1111-1111에 직접 연결합니다. C. 개발자에게 IAM 엔터티에 Amazon S3 권한을 추가하도록 지시합니다. D. 계정 1111-1111-1111에서 SCP를 제거합니다. Answer: C Explanation: However A's explanation is incorrect - https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html "SCPs are similar to AWS Identity and Access Management (IAM) permission policies and use almost the same syntax. However, an SCP never grants permissions." SCPs alone are not sufficient to granting permissions to the accounts in your organization. No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts. The administrator must still attach identity-based or resource-based policies to IAM users or roles, or to the resources in your accounts to actually grant permissions. The effective permissions are the logical intersection between what is allowed by the SCP and what is allowed by the IAM and resource-based policies.`;