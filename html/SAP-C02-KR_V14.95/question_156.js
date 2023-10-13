const question_156=`QUESTION NO: 156 한 회사가 VPC의 퍼블릭 서브넷에 있는 5개의 Amazon EC2 인스턴스에서 모바일 앱용 모놀리식 REST 기반 API를 호스팅하고 있습니다. 모바일 클라이언트는 Amazon Route 53에서 호스팅되는 도메인 이름을 사용하여 API에 연결합니다. 회사는 모든 EC2 인스턴스의 IP 주소로 Route 53 다중값 응답 라우팅 정책을 생성했습니다. 최근 이 앱은 갑작스러운 대규모 트래픽 증가에 압도당했습니다. 앱이 트래픽을 따라잡지 못했습니다. 솔루션 설계자는 앱이 새롭고 다양한 로드를 처리할 수 있도록 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. API를 개별 AWS Lambda 함수로 분리합니다. 백엔드에 대한 Lambda 통합으로 Amazon API Gateway REST API를 구성합니다. API Gateway API를 가리키도록 Route 53 레코드를 업데이트합니다. B. API 로직을 컨테이너화합니다. Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EC2를 사용하여 클러스터에서 컨테이너를 실행합니다. Kubernetes 인그레스를 만듭니다. Kubernetes 수신을 가리키도록 Route 53 레코드를 업데이트합니다. C. Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹에 모든 EC2 인스턴스를 배치합니다. CPU 사용률을 기반으로 조정 작업을 수행하도록 Auto Scaling 그룹을 구성합니다. Auto Scaling 그룹 변경에 반응하고 Route 53 레코드를 업데이트하는 AWS Lambda 함수를 생성합니다. D. API 앞에 Application Load Balancer(ALB)를 생성합니다. EC2 인스턴스를 VPC의 프라이빗 서브넷으로 이동합니다. ALB의 대상으로 EC2 인스턴스를 추가합니다. ALB를 가리키도록 Route 53 레코드를 업데이트합니다. Answer: D(A인것같다) Explanation: By breaking down the monolithic API into individual Lambda functions and using API Gateway to handle the incoming requests, the solution can automatically scale to handle the new and varying load without the need for manual scaling actions. Additionally, this option will automatically handle the traffic without the need of having EC2 instances running all the time and only pay for the number of requests and the duration of the execution of the Lambda function. By updating the Route 53 record to point to the API Gateway, the solution can handle the traffic and also it will direct the traffic to the correct endpoint.
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 A입니다.

설명: 단일형 API를 개별 Lambda 함수로 분해하고 API Gateway를 사용하여 들어오는 요청을 처리함으로써, 이 솔루션은 수동으로 스케일링 작업을 수행하지 않고도 새로운 및 다양한 부하를 처리할 수 있도록 자동으로 확장될 수 있습니다. 또한, 이 옵션은 EC2 인스턴스를 항상 실행할 필요 없이 트래픽을 자동으로 처리하며, 요청 수와 Lambda 함수의 실행 기간에 대해서만 비용을 지불합니다. Route 53 레코드를 업데이트하여 API Gateway를 가리키도록 설정함으로써, 이 솔루션은 트래픽을 처리하고 트래픽을 올바른 엔드포인트로 전달할 수 있습니다."`;