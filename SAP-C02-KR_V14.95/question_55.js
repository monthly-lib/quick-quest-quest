const question_55=`QUESTION NO: 55 솔루션 설계자가 회사의 AWS Lambda 함수 보안 설정을 감사하고 있습니다. Lambda 함수는 Amazon Aurora 데이터베이스에서 최신 변경 사항을 검색합니다. Lambda 함수와 데이터베이스는 동일한 VPC에서 실행됩니다. Lambda 환경 변수는 Lambda 함수에 데이터베이스 자격 증명을 제공합니다. Lambda 함수는 데이터를 집계하고 AWS KMS 관리형 암호화 키(SSE-KMS)를 사용한 서버 측 암호화용으로 구성된 Amazon S3 버킷에서 데이터를 사용할 수 있도록 합니다. 데이터는 인터넷을 통해 이동하면 안 됩니다. 데이터베이스 자격 증명이 손상되면 회사는 손상의 영향을 최소화하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까? A. Aurora DB 클러스터에서 IAM 데이터베이스 인증을 활성화합니다. 함수가 IAM 데이터베이스 인증을 사용하여 데이터베이스에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. VPC에서 Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다. B. Aurora DB 클러스터에서 IAM 데이터베이스 인증을 활성화합니다. 함수가 IAM 데이터베이스 인증을 사용하여 데이터베이스에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. 데이터 전송 중 Amazon S3 연결에 HTTPS를 적용합니다. C. AWS Systems Manager Parameter Store에 데이터베이스 자격 증명을 저장합니다. Parameter Store의 자격 증명에 대한 암호 교체를 설정합니다. 함수가 Parameter Store에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. Parameter Store에서 자격 증명을 검색하도록 Lambda 함수를 수정합니다. VPC에서 Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다. D. AWS Secrets Manager에 데이터베이스 자격 증명을 저장합니다. Secrets Manager에서 자격 증명에 대한 암호 교체를 설정합니다. 함수가 Secrets Manager에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. Om Secrets Manager 자격 증명을 검색하도록 Lambda 함수를 수정합니다. 데이터 전송 중 Amazon S3 연결에 HTTPS를 적용합니다. Answer: A Explanation: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBA uth.html
GPT 3.5 says "제공된 답변은 잘못되었습니다. 올바른 답은 D입니다.

요구 사항을 충족하기 위해 솔루션 아키텍트는 다음을 권장해야 합니다:

1. 데이터베이스 자격 증명을 AWS Secrets Manager에 저장합니다.
2. Secrets Manager에서 자격 증명의 회전을 활성화합니다.
3. Lambda 함수의 IAM 역할을 수정하여 Secrets Manager에 액세스할 수 있도록 합니다.
4. Lambda 함수를 업데이트하여 Secrets Manager에서 자격 증명을 검색하도록 합니다.
5. 데이터 전송 중에 Amazon S3 연결에 HTTPS를 적용합니다.

Secrets Manager에 데이터베이스 자격 증명을 저장하면 민감한 정보를 안전하고 중앙 집중식으로 관리할 수 있습니다. 회전을 활성화하면 자격 증명이 정기적으로 업데이트되어 자격 증명이 노출되었을 때의 영향을 줄일 수 있습니다. Lambda 함수의 IAM 역할을 수정하고 함수를 업데이트하여 Secrets Manager에서 자격 증명을 검색하도록 함으로써 함수가 데이터베이스에 안전하게 액세스할 수 있습니다. 마지막으로, Amazon S3 연결에 HTTPS를 적용하여 데이터가 전송 중에 암호화되고 무단 액세스를 방지할 수 있습니다."`;