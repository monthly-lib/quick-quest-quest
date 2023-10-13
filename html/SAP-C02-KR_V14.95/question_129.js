const question_129=`QUESTION NO: 129 회사에 Amazon CloudFront, Amazon API Gateway 및 AWS Lambda 기능으로 구성된 서버리스 애플리케이션이 있습니다. 애플리케이션 코드의 현재 배포 프로세스는 Lambda 함수의 새 버전 번호를 생성하고 AWS CLI 스크립트를 실행하여 업데이트하는 것입니다. 새 함수 버전에 오류가 있는 경우 다른 CLI 스크립트는 함수의 이전 작업 버전을 배포하여 되돌립니다. 회사는 Lambda 함수에서 제공하는 애플리케이션 로직의 새 버전을 배포하는 시간을 줄이고 오류가 식별되었을 때 이를 감지하고 되돌리는 시간도 줄이고자 합니다. 이것이 어떻게 이루어질 수 있습니까? A. AWS CloudFront 배포 및 API Gateway로 구성된 상위 스택과 Lambda 함수를 포함하는 하위 스택으로 중첩된 AWS CloudFormation 스택을 생성하고 배포합니다. Lambda를 변경하려면 AWS CloudFormation 변경 세트를 생성하고 배포하십시오. 오류가 트리거되면 AWS CloudFormation 변경 세트를 이전 버전으로 되돌립니다. B. AWS SAM 및 기본 제공 AWS CodeDeploy를 사용하여 새 Lambda 버전을 배포하고 트래픽을 새 버전으로 점진적으로 전환하고 트래픽 전 및 트래픽 후 테스트 기능을 사용하여 코드를 확인합니다. Amazon CloudWatch 경보가 트리거되면 롤백합니다. C. AWS CLI 스크립트를 새 Lambda 버전을 배포하는 단일 스크립트로 리팩터링합니다. 배포가 완료되면 스크립트 테스트가 실행됩니다. 오류가 감지되면 이전 Lambda 버전으로 되돌립니다. D. 새 Lambda 버전을 참조하는 새 API 게이트웨이 엔드포인트로 구성된 AWS CloudFormation 스택을 생성하고 배포합니다. CloudFront 오리진을 새 API 게이트웨이 엔드포인트로 변경하고 오류를 모니터링하며 감지된 경우 AWS CloudFront 오리진을 이전 API 게이트웨이 엔드포인트로 변경합니다. Answer: B Explanation: https://aws.amazon.com/about-aws/whats-new/2017/11/aws-lambda-supports-traffic-shiftingand-phased-deployments-with-aws-codedeploy/`;