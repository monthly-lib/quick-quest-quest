const question_158=`QUESTION NO: 158 한 회사가 AWS에서 SaaS(Software-as-a-Service) 솔루션을 구축하고 있습니다. 이 회사는 여러 AWS 리전과 동일한 프로덕션 계정에 AWS Lambda 통합과 함께 Amazon API Gateway REST API를 배포했습니다. 이 회사는 고객이 초당 특정 수의 API 호출을 할 수 있는 용량에 대해 비용을 지불할 수 있는 계층형 가격을 제공합니다. 프리미엄 계층은 초당 최대 3,000개의 호출을 제공하며 고객은 고유한 API 키로 식별됩니다. 다양한 리전의 여러 프리미엄 계층 고객은 사용량이 가장 많은 시간 동안 여러 API 메서드에서 429개의 너무 많은 요청 오류 응답을 받았다고 보고합니다. 로그는 Lambda 함수가 호출되지 않았음을 나타냅니다. 이러한 고객에게 표시되는 오류 메시지의 원인은 무엇입니까? A. Lambda 함수가 동시성 제한에 도달했습니다. B. Lambda는 동시성에 대한 리전 제한 기능을 합니다. C. 회사가 API 게이트웨이 계정의 초당 호출 한도에 도달했습니다. D. 회사는 초당 호출에 대한 API 게이트웨이 기본 메서드별 제한에 도달했습니다. Answer: C Explanation: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-requestthrottling.html#apig-request-throttling-account-level-limits
GPT 3.5 says "정답은 C입니다. 이 고객들에게 표시된 오류 메시지의 원인은 회사가 API Gateway 계정의 초당 호출 제한에 도달했기 때문입니다.

이는 고객들이 429 Too Many Requests 오류 응답을 받고 있다는 것을 나타내며, 이는 초당 API 호출 수용량을 초과했음을 나타냅니다. 이 제한은 API Gateway의 계정 수준에서 설정되며, 회사에서 조정할 수 있습니다.

A 옵션은 시나리오에서 언급되지 않은 Lambda 함수의 동시성 제한에 도달한다고 언급하고 있으므로 올바르지 않습니다.

B 옵션은 Lambda가 지역별로 동시성에 대한 제한을 가지고 있다고 시사하고 있으며, 이는 설명된 문제와 관련이 없습니다.

D 옵션은 오류의 원인으로 언급되지 않은 API Gateway의 기본 메서드별 제한을 언급하고 있으므로 올바르지 않습니다."`;