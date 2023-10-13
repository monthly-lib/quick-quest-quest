const question_189=`QUESTION NO: 189 회사는 AWS 클라우드에서 loT 애플리케이션을 실행합니다. 이 회사는 미국의 주택에서 데이터를 수집하는 수백만 개의 센서를 보유하고 있습니다. 센서는 MOTT 프로토콜을 사용하여 사용자 지정 MQTT 브로커에 연결하고 데이터를 보냅니다. MQTT 브로커는 단일 Amazon EC2 인스턴스에 데이터를 저장합니다. 센서는 iot.example.com이라는 도메인을 통해 브로커에 연결됩니다. 이 회사는 Amazon Route 53을 DNS 서비스로 사용합니다. 회사는 데이터를 Amazon DynamoDB에 저장합니다. 여러 경우에 데이터 양이 MOTT 브로커에 과부하를 일으켜 센서 데이터 a가 손실되었습니다. 회사는 솔루션의 신뢰성을 향상시켜야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. MOTT 브로커를 위한 ALB(Application Load Balancer) 및 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 ALB의 대상으로 사용합니다. Route 53의 DNS 레코드를 별칭 레코드로 업데이트합니다. 별칭 레코드가 ALB를 가리키도록 합니다. MQTT 브로커를 사용하여 데이터를 저장합니다. B. 센서 데이터를 수신하도록 AWS loT Core를 설정합니다. AWS loT Core에 연결할 사용자 지정 도메인을 생성하고 구성합니다. AWS loT Core Data-ATS 엔드포인트를 가리키도록 Route 53의 DNS 레코드를 업데이트합니다. 데이터를 저장하도록 AWS loT 규칙을 구성합니다. C. NLB(Network Load Balancer)를 생성합니다. MQTT 브로커를 대상으로 설정합니다. AWS Global Accelerator 액셀러레이터를 생성합니다. NLB를 액셀러레이터의 끝점으로 설정합니다. Route 53의 DNS 레코드를 다중값 응답 레코드로 업데이트합니다. Global Accelerator IP 주소를 값으로 설정합니다. MQTT 브로커를 사용하여 데이터를 저장합니다. D. 센서 데이터를 수신하도록 AWS loT Greengrass를 설정합니다. AWS loT Greengrass 엔드포인트를 가리키도록 Route 53의 DNS 레코드를 업데이트합니다. 데이터를 저장하기 위해 AWS Lambda 함수를 호출하도록 AWS loT 규칙을 구성합니다. Answer: A(B인것같음) Explanation: it describes a solution that uses an Application Load Balancer (ALB) and an Auto Scaling group for the MQTT broker. The ALB distributes incoming traffic across the instances in the Auto Scaling group and allows for automatic scaling based on incoming traffic. The use of an alias record in Route 53 allows for easy updates to the DNS record without changing the IP address. This solution improves the reliability of the MQTT broker by allowing it to automatically scale based on incoming traffic, reducing the likelihood of lost data due to broker overload. Reference: https://aws.amazon.com/elasticloadbalancing/applicationloadbalancer/ https://aws.amazon.com/autoscaling/ https://aws.amazon.com/route53/`;