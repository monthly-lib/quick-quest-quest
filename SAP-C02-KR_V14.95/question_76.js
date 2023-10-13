const question_76=`QUESTION NO: 76 회사는 Amazon S3에서 정적 웹 사이트로 새 애플리케이션을 실행합니다. 이 회사는 프로덕션 AWS 계정에 애플리케이션을 배포했으며 Amazon CloudFront를 사용하여 웹 사이트를 제공합니다. 웹사이트는 Amazon API Gateway REST API를 호출합니다. AWS Lambda 함수는 각 API 메서드를 지원합니다. 회사는 2주마다 CSV 보고서를 생성하여 각 API Lambda 함수의 권장 구성 메모리, 권장 비용, 현재 구성과 권장 사항 간의 가격 차이를 표시하려고 합니다. 회사는 보고서를 S3 버킷에 저장합니다. 최소 개발 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 2주 동안 Amazon CloudWatch Logs에서 각 API Lambda 함수에 대한 메트릭 데이터를 추출하는 Lambda 함수를 생성합니다. 데이터를 표 형식으로 수집합니다. 데이터를 S3 버킷에 _csvfile로 저장합니다. Amazon Eventaridge 규칙을 생성하여 Lambda 함수가 2주마다 실행되도록 예약합니다. B. AWS Compute Optimizer에 옵트인합니다. ExportLambdaFunctionRecommendatlons 작업을 호출하는 Lambda 함수를 생성합니다. _csv 파일을 S3 버킷으로 내보냅니다. Amazon Eventaridge 규칙을 생성하여 Lambda 함수가 2주마다 실행되도록 예약합니다. C. AWS Compute Optimizer에 옵트인합니다. 향상된 인프라 메트릭을 설정합니다. Compute Optimizer 콘솔 내에서 Lambda 권장 사항을 _csvfile_로 내보내는 작업을 예약합니다. 파일을 2주마다 S3 버킷에 저장합니다. D. 프로덕션 계정에 대한 AWS Business Support 플랜을 구매합니다. AWS Trusted Advisor 검사를 위해 AWS Compute Optimizer에 옵트인합니다. Trusted Advisor 콘솔에서 비용 최적화 검사를 _csvfile_로 내보내는 작업을 예약합니다. 파일을 2주마다 S3 버킷에 저장합니다. Answer: B Explanation: https://docs.aws.amazon.com/computeoptimizer/ latest/APIReference/API_ExportLambdaFunctionRecommendations.html`;