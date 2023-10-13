const question_166=`QUESTION NO: 166 AWS 파트너 회사는 org라는 조직을 사용하여 AWS Organizations에서 서비스를 구축하고 있습니다. 이 서비스를 사용하려면 파트너 회사가 org2라는 별도의 조직에 있는 고객 계정의 AWS 리소스에 액세스할 수 있어야 합니다. 회사는 API 또는 명령줄 도구를 사용하여 고객 계정에 대한 최소 권한 보안 액세스를 설정해야 합니다. 가장 안전한 방법은 무엇입니까? org1이 리소스 h org2에 액세스하도록 허용하려면? A. 고객은 로그인하여 필요한 작업을 수행하기 위해 파트너사에 AWS 계정 액세스 키를 제공해야 합니다. B. 고객은 IAM 사용자를 생성하고 필요한 권한을 IAM 사용자에게 할당해야 합니다. 그런 다음 고객은 파트너 회사에 자격 증명을 제공하여 로그인하고 필요한 작업을 수행해야 합니다. C. 고객은 IAM 역할을 생성하고 IAM 역할에 필요한 권한을 할당해야 합니다. 그런 다음 파트너 회사는 필요한 작업을 수행하기 위해 액세스를 요청할 때 IAM 로테의 Amazon 리소스 이름(ARN)을 사용해야 합니다. D. 고객은 IAM 로트를 생성하고 필요한 권한을 IAM 로트에 할당해야 합니다. 그런 다음 파트너 회사는 IAM 로테의 Amazon 리소스 이름(ARN)을 사용해야 합니다. 필요한 작업을 수행하기 위해 액세스 권한을 요청할 때 IAM 역할의 trust pokey에 외부 ID 포함 Answer: C(D인것같음) Explanation: https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html This is the most secure way to allow org1 to access resources in org2 because it allows for least privilege security access. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) and include the external ID in the IAM role's trust policy when requesting access to perform the required tasks. This ensures that the partner company can only access the resources that it needs and only from the specific customer account.`;