const question_3=`QUESTION NO: 3 엔터프라이즈 회사는 개발자가 AWS Marketplace를 통해 타사 소프트웨어를 구매할 수 있도록 허용하려고 합니다. 이 회사는 모든 기능이 활성화된 AWS Organizations 계정 구조를 사용하고 조달 관리자가 사용할 각 조직 단위(OU)에 공유 서비스 계정을 가지고 있습니다. 조달 팀의 정책에 따르면 개발자는 승인된 목록에서만 타사 소프트웨어를 얻을 수 있어야 하며 AWS Marketplace에서 Private Marketplace를 사용하여 이 요구 사항을 충족해야 합니다. 조달 팀은 Private Marketplace의 관리가 조달 관리자가 맡을 수 있는 procurementmanager- role이라는 역할로 제한되기를 원합니다. 기타 IAM 사용자 그룹, 역할, A. 조직의 모든 AWS 계정에서 procurement-manager-role이라는 IAM 역할을 생성합니다. PowerUserAccess 관리형 정책을 역할에 추가합니다. 인라인 정책을 모든 AWS 계정의 모든 IAM 사용자 및 역할에 적용하여 AWSPrivateMarketplaceAdminFullAccess 관리형에 대한 권한을 거부합니다. 수단. B. 조직의 모든 AWS 계정에서 procurement-manager-role이라는 IAM 역할을 생성합니다. AdministratorAccess 관리형 정책을 역할에 추가합니다. AWSPrivateMarketplaceAdminFullAccess 관리형 정책으로 권한 경계를 정의하고 모든 개발자 역할에 연결합니다. C. 조직의 모든 공유 서비스 계정에 procurement-manager-role이라는 IAM 역할을 생성합니다. 역할에 AWSPrivateMarketplaceAdminFullAccess 관리형 정책을 추가합니다. 조직 루트 수준 SCP를 생성하여 역할을 제외한 모든 사람에게 Private Marketplace를 관리할 수 있는 권한을 거부합니다. procurement-manager-role이라는 조직의 모든 사람에게 procurement-manager-role이라는 IAM 역할을 생성할 수 있는 권한을 거부하려면 다른 조직 루트 수준 SCP를 생성합니다. D. 개발자가 사용할 모든 AWS 계정에서 procurement-manager-role이라는 IAM 역할을 생성합니다. 역할에 AWSPrivateMarketplaceAdminFullAccess 관리형 정책을 추가합니다. 조직에서 SCP를 생성하여 procurement-manager-role이라는 역할을 제외한 모든 사람에게 Private Marketplace를 관리할 수 있는 권한을 거부합니다. 조직의 모든 공유 서비스 계정에 SCP를 적용합니다. Answer: C Explanation: SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. https://aws.amazon.com/blogs/awsmarketplace/controlling-access-to-a-well-architectedprivate- marketplace-using-iam-and-aws-organizations/ This approach allows the procurement managers to assume the procurement-manager-role in shared services accounts, which have the AWSPrivateMarketplaceAdminFullAccess managed policy attached to it and can then manage the Private Marketplace. The organization root-level SCP denies the permission to administer Private Marketplace to everyone except the role named procurement-manager-role and another SCP denies the permission to create an IAM role named procurement-manager-role to everyone in the organization, ensuring that only the procurement team can assume the role and manage the Private Marketplace. This approach provides a centralized way to manage and restrict access to Private Marketplace while maintaining a high level of security.`;