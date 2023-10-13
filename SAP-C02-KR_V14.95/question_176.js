const question_176=`QUESTION NO: 176 회사는 단일 AWS 리전에서 서버리스 애플리케이션을 실행합니다. 애플리케이션은 외부 URL에 액세스하고 해당 사이트에서 메타데이터를 추출합니다. 회사는 Amazon Simple Notification Service(Amazon SNS) 주제를 사용하여 URL을 Amazon Simple Queue Service(Amazon SQS) 대기열에 게시합니다. AWS Lambda 함수는 대기열을 이벤트 소스로 사용하고 대기열의 URL을 처리합니다. 결과는 Amazon S3 버킷 회사는 사이트 현지화의 가능한 차이점을 비교하기 위해 다른 지역의 각 URL을 처리하려고 합니다. URL은 기존 지역에서 게시되어야 합니다. 결과는 현재 리전의 기존 S3 버킷에 기록되어야 합니다. 이러한 요구 사항을 충족하는 다중 리전 배포를 생성하는 변경 조합은 무엇입니까? (2개를 선택하세요.) A. Lambda 함수를 사용하여 SQS 대기열을 다른 지역에 배포합니다. B. 각 지역의 SNS 주제를 SQS 대기열에 구독합니다. C. 각 지역의 SQS 대기열을 각 지역의 SNS 주제에 구독합니다. D. 각 리전의 SNS 주제에 URL을 게시하도록 SQS 대기열을 구성합니다. E. SNS 주제와 Lambda 함수를 다른 지역에 배포합니다. Answer: A,C Explanation: https://docs.aws.amazon.com/sns/latest/dg/sns-cross-region-delivery.html
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 A와 C입니다.

각 URL을 다른 지역에서 처리하고 결과를 현재 지역의 기존 S3 버킷에 저장하기 위해 다음 변경 사항이 필요합니다:

A. 각 지역의 SQS 대기열에 대한 Lambda 함수를 배포합니다. 이렇게 하면 Lambda 함수가 각 지역에 배포되고 각 해당 지역의 SQS 대기열에서 URL을 처리할 수 있습니다.

C. 각 지역의 SQS 대기열을 해당 지역의 SNS 주제에 구독합니다. 이렇게 하면 각 지역에서 SNS 주제에 발행된 URL이 동일한 지역의 SQS 대기열로 전달됩니다.

이러한 변경 사항을 구현함으로써 회사는 다른 지역의 URL을 처리하고 결과를 현재 지역의 기존 S3 버킷에 저장하는 다중 지역 배포를 달성할 수 있습니다."`;