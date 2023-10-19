const question_213=`QUESTION NO: 213 회사에서 여러 Amazon DynamoDB 테이블에 데이터를 저장하고 있습니다. 솔루션 설계자는 서버리스 아키텍처를 사용하여 HTTPS를 통한 간단한 API를 통해 공개적으로 데이터에 액세스할 수 있도록 해야 합니다. 솔루션은 수요에 따라 자동으로 확장되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? (2개 선택하세요.) A. Amazon API Gateway REST API를 생성합니다. API Gateway의 AWS 통합 유형을 사용하여 DynamoDB에 대한 직접 통합으로 이 API를 구성합니다. B. Amazon API Gateway HTTP API를 생성합니다. API Gateway의 AWS 통합 유형을 사용하여 Dynamo DB에 대한 직접 통합으로 이 API를 구성합니다. C. Amazon API Gateway HTTP API를 생성합니다. DynamoDB 테이블에서 데이터를 반환하는 AWS Lambda 함수와의 통합으로 이 API를 구성합니다. D. AWS Global Accelerator에서 액셀러레이터를 생성합니다. DynamoDB 테이블에서 데이터를 반환하는 AWS Lambda@Edge 함수 통합으로 이 액셀러레이터를 구성합니다. E. Network Load Balancer를 생성합니다. 요청을 적절한 AWS Lambda 함수로 전달하도록 리스너 규칙 구성 Answer: A,C Explanation: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-overviewdeveloper-experience.html`;