const question_114=`QUESTION NO: 114 회사는 AWS 클라우드에서 다중 계정 설정을 위해 AWS Organizations를 사용합니다. 회사의 재무 팀에는 AWS Lambda 및 Amazon DynamoDB를 사용하는 데이터 처리 애플리케이션이 있습니다. 회사의 마케팅 팀은 DynamoDB 테이블에 저장된 데이터에 액세스하려고 합니다. DynamoDB 테이블에는 기밀 데이터가 포함되어 있습니다. 마케팅 팀은 DynamoDB 테이블에 있는 데이터의 특정 속성에만 액세스할 수 있습니다. 재무 팀과 마케팅 팀은 별도의 AWS 계정을 가지고 있습니다. DynamoDB 테이블에 대한 적절한 액세스 권한을 마케팅 팀에 제공하려면 솔루션 설계자가 무엇을 해야 합니까? A. 마케팅 팀의 AWS 계정에 DynamoDB 테이블의 특정 속성에 대한 액세스 권한을 부여하는 SCP를 생성합니다. 재무 팀의 OU에 SCP를 연결합니다. B. 특정 DynamoDB 속성(세밀한 액세스 제어)에 대한 IAM 정책 조건을 사용하여 재무 팀 계정에서 IAM 역할을 생성합니다. 마케팅 팀의 계정과 신뢰를 구축합니다. 마케팅 팀 계정에서 재무 팀 계정의 IAM 역할을 맡을 수 있는 권한이 있는 IAM 역할을 생성합니다. C. 특정 DynamoDB 속성(세분화된 액세스 제어)에 대한 조건을 포함하는 리소스 기반 IAM 정책을 생성합니다. 정책을 DynamoDB 테이블에 연결합니다. 마케팅 팀 계정에서 재무 팀 계정의 DynamoDB 테이블에 액세스할 수 있는 권한이 있는 IAM 역할을 생성합니다. D. DynamoDB 테이블에 액세스하기 위해 재무 팀의 계정에 IAM 역할을 생성합니다. IAM 권한 경계를 사용하여 특정 속성에 대한 액세스를 제한합니다. 마케팅 팀 계정에서 재무 팀 계정의 IAM 역할을 맡을 수 있는 권한이 있는 IAM 역할을 생성합니다. Answer: C(B인것같음) Explanation: The company should create a resource-based IAM policy that includes conditions for specific DynamoDB attributes (fine-grained access control). The company should attach the policy to the DynamoDB table. In the marketing team's account, the company should create an IAM role that has permissions to access the DynamoDB table in the finance team's account. This solution will meet the requirements because a resource-based IAM policy is a policy that you attach to an AWS resource (such as a DynamoDB table) to control who can access that resource and what actions they can perform on it. You can use IAM policy conditions to specify fine-grained access control for DynamoDB items and attributes. For example, you can allow or deny access to specific attributes of all items in a table by matching on attribute names1. By creating a resource-based policy that allows access to only specific attributes of the DynamoDB table and attaching it to the table, the company can restrict access to confidential data. By creating an IAM role in the marketing team's account that has permissions to access the DynamoDB table in the finance team's account, the company can enable cross-account access. The other options are not correct because: Creating an SCP to grant the marketing team's AWS account access to the specific attributes of the DynamoDB table would not work because SCPs are policies that you can use with AWS Organizations to manage permissions in your organization's accounts. SCPs do not grant permissions; instead, they specify the maximum permissions that identities in an account can have2. SCPs cannot be used to specify fine-grained access control for DynamoDB items and attributes. Creating an IAM role in the finance team's account by using IAM policy conditions for specific DynamoDB attributes and establishing trust with the marketing team's account would not work because IAM roles are identities that you can create in your account that have specific permissions. You can use an IAM role to delegate access to users, applications, or services that don't normally have access to your AWS resources3. However, creating an IAM role in the finance team's account would not restrict access to specific attributes of the DynamoDB table; it would only allow cross-account access. The company would still need a resourcebased policy attached to the table to enforce fine-grained access control. Creating an IAM role in the finance team's account to access the DynamoDB table and using an IAM permissions boundary to limit the access to the specific attributes would not work because IAM permissions boundaries are policies that you use to delegate permissions management to other users. You can use permissions boundaries to limit the maximum permissions that an identity-based policy can grant to an IAM entity (user or role)4. Permissions boundaries cannot be used to specify fine-grained access control for DynamoDB items and attributes. Reference: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifyingconditions. html https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html`;