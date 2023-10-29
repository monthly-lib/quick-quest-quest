const question_188=`QUESTION NO: 188 회사에 AWS Lambda 함수로 호스팅되는 비동기 HTTP 애플리케이션이 있습니다. 퍼블릭 Amazon API Gateway 엔드포인트는 Lambda 함수를 호출합니다. Lambda 함수와 API 게이트웨이 엔드포인트는 us-east-1 리전에 상주합니다. 솔루션 설계자는 다른 AWS 리전에 대한 장애 조치를 지원하도록 애플리케이션을 재설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. us-west-2 리전에서 API 게이트웨이 엔드포인트를 생성하여 트래픽을 us-east-1의 Lambda 함수로 보냅니다. 장애 조치 라우팅 정책을 사용하여 두 API Gateway 엔드포인트에 대한 트래픽을 라우팅하도록 Amazon Route 53을 구성합니다. B. Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. Lambda 함수 대신 SQS 대기열로 트래픽을 보내도록 API Gateway를 구성합니다. 처리를 위해 대기열에서 메시지를 가져오도록 Lambda 함수를 구성합니다. C. us-west-2 리전에 Lambda 함수를 배포합니다. us-west-2에서 API 게이트웨이 엔드포인트를 생성하여 트래픽을 us-west-2의 Lambda 함수로 보냅니다. 두 API 게이트웨이 엔드포인트에서 트래픽을 관리하도록 AWS Global Accelerator 및 Application Load Balancer를 구성합니다. D. Lambda 함수와 API 게이트웨이 엔드포인트를 us-west-2 리전에 배포합니다. 장애 조치 라우팅 정책을 사용하여 두 API Gateway 엔드포인트에 대한 트래픽을 라우팅하도록 Amazon Route 53을 구성합니다. Answer: B(D인것같음) Explanation: This solution allows for deploying the Lambda function and API Gateway endpoint to another region, providing a failover option in case of any issues in the primary region. Using Route 53's failover routing policy allows for automatic routing of traffic to the healthy endpoint, ensuring that the application is available even in case of issues in one region. This solution provides a cost-effective and simple way to implement failover while minimizing operational overhead.

D가 맞습니다. A는 Lambda가 us-ease-1에 있지만 API 게이트웨이가 us-west-2에 있기 때문이 아닙니다. 지역을 넘을 수 없습니다"`;