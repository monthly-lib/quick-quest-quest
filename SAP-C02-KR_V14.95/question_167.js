const question_167=`QUESTION NO: 167 회사에 AWS Organizations의 조직 구성원인 50개의 AWS 계정이 있습니다. 각 계정에는 여러 개의 VPC가 포함되어 있습니다. 회사는 AWS Transit Gateway를 사용하여 각 구성원 계정의 VPC 간에 연결을 설정하려고 합니다. 새 VPC 및 전송 게이트웨이 연결을 생성하는 프로세스를 자동화합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택) A. 마스터 계정에서 AWS Resource Access Manager를 사용하여 회원 계정과 전송 게이트웨이를 공유합니다. B. 마스터 계정 프롬, AWS Organizations SCP를 사용하여 회원 계정과 전송 게이트웨이 공유 C. 멤버 계정에 새 VPC 및 VPC 전송 게이트웨이 연결을 자동으로 생성하는 마스터 계정에서 AWS CloudFormation 스택 세트를 시작합니다. 전송 게이트웨이 ID를 사용하여 마스터 계정의 전송 게이트웨이와 연결을 연결합니다. D. 멤버 계정에 새 VPC와 피어링 전송 게이트웨이 연결을 자동으로 생성하는 마스터 계정에서 AWS CloudFormation 스택 세트를 시작합니다. 전송 게이트웨이 서비스 연결 역할을 사용하여 마스터 계정의 전송 게이트웨이와 연결을 공유합니다. E. 마스터 계정에서 AWS Service Catalog를 사용하여 회원 계정과 전송 게이트웨이를 공유합니다. Answer: A,C Explanation: https://aws.amazon.com/blogs/mt/self-service-vpcs-in-aws-control-tower-using-aws-servicecatalog/ https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2- transitgatewayattachment.html
옵션 A는 마스터 계정이 회원 계정과 리소스를 공유할 수 있도록 허용하는 AWS Resource Access Manager를 사용하여 회원 계정과 전송 게이트웨이를 공유합니다. 옵션 C는 멤버 계정에 새 VPC 및 VPC 전송 게이트웨이 연결을 자동으로 생성하고 전송 게이트웨이 ID를 사용하여 마스터 계정의 전송 게이트웨이와 연결을 연결하는 마스터 계정에서 AWS CloudFormation 스택 세트를 시작합니다. 새 멤버 계정에서 새 VPC 및 Transit Gateway 연결 생성을 자동화하면 프로세스를 간소화하고 운영 노력을 줄이는 데 도움이 될 수 있습니다.`;