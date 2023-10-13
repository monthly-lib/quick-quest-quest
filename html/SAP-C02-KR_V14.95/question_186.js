const question_186=`QUESTION NO: 186 북미의 한 금융 서비스 회사는 AWS에서 고객에게 새로운 온라인 웹 애플리케이션을 출시할 계획입니다. 회사는 Amazon EC2 인스턴스의 us-east-1 지역에서 애플리케이션을 시작할 것입니다. 애플리케이션은 가용성이 높아야 하며 사용자 트래픽을 충족하도록 동적으로 확장되어야 합니다. 회사는 또한 활성-수동 장애 조치를 사용하여 us-west-1 지역의 애플리케이션에 대한 재해 복구 환경을 구현하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. us-east-1에 VPC를 생성하고 us-west-1에 VPC를 생성합니다. us-east-1 VPC에서 VPC 피어링을 구성합니다. 두 VPC의 여러 가용 영역에 걸쳐 확장되는 Application Load Balancer(ALB) 생성 두 VPC의 여러 가용 영역에 걸쳐 EC2 인스턴스를 배포하는 Auto Scaling 그룹 생성 Auto Scaling 그룹을 ALB 뒤에 배치합니다. B. us-east-1에 VPC를 생성하고 us-west-1에 VPC를 생성합니다. us-east-1 VPC에서. 해당 VPC의 여러 가용 영역에 걸쳐 확장되는 Application Load Balancer(ALB)를 생성합니다. useast- 1 VPC의 여러 가용 영역에 걸쳐 EC2 인스턴스를 배포하는 Auto Scaling 그룹을 생성합니다. ALB 뒤에 Auto Scaling 그룹을 배치합니다. us-west-1 VPC에서 동일한 구성을 설정합니다. Amazon Route 53 호스팅 영역 생성 각 ALB에 대해 별도의 레코드 생성 상태 확인을 활성화하여 리전 간 고가용성을 보장합니다. C. us-east-1에 VPC를 생성하고 us-west-1에 VPC를 생성합니다. 해당 VPC의 여러 가용 영역에 걸쳐 확장되는 Application Load Balancer(ALB) 생성 us-east-1 VPC의 여러 가용 영역에 걸쳐 EC2 인스턴스를 배포하는 Auto Scaling 그룹 생성 ALB 설정 뒤에 Auto Scaling 그룹 배치 us-west-1 VPC에서 동일한 구성 Amazon Route 53 호스팅 영역을 생성합니다. 각 ALB에 대해 별도의 레코드를 생성합니다. 상태 확인을 활성화하고 각 레코드에 대한 장애 조치 라우팅 정책을 구성합니다. D. us-east-1에 VPC를 생성하고 us-west-1에 VPC를 생성합니다. us-east-1 VPC에서 VPC 피어링을 구성합니다. 두 VPC의 여러 가용 영역에 걸쳐 EC2 인스턴스를 배포하는 Auto Scaling 그룹 생성에서 여러 가용 영역에 걸쳐 확장되는 Application Load Balancer(ALB) 생성 ALB 뒤에 Auto Scaling 그룹 배치 Amazon Route 53 호스트 생성. 생성 ALB에 대한 기록. Answer: C Explanation: it's the one that handles failover while B (the one shown as the answer today) it almost the same but does not handle failover.
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 C 옵션입니다.

C 옵션은 us-east-1 및 us-west-1 지역에 VPC를 생성하고, us-east-1 VPC에서 여러 가용 영역에 걸친 Application Load Balancer (ALB)를 생성하며, us-east-1 VPC에서 Auto Scaling 그룹을 사용하여 여러 가용 영역에 EC2 인스턴스를 배포하고, Auto Scaling 그룹을 ALB 뒤에 배치하며, us-west-1 VPC에서도 동일한 구성을 설정하고, Amazon Route 53 호스팅 영역을 생성하고, 각 ALB에 대해 별도의 레코드를 생성하고, 헬스 체크를 활성화하고, 각 레코드에 대해 장애 조치 라우팅 정책을 구성합니다.

이 솔루션은 고가용성과 동적 확장성 요구 사항을 충족합니다. ALB와 Auto Scaling을 사용하여 사용자 트래픽을 처리하고 응용 프로그램이 동적으로 확장될 수 있도록 보장합니다. 또한 Route 53 장애 조치 라우팅 정책을 사용하여 us-west-1 지역에서 액티브-패시브 장애 조치 환경을 구현합니다.

설명에서 언급된 B 옵션은 C 옵션과 유사하지만 장애 조치를 처리하지 않습니다. 따라서 주어진 요구 사항에 대한 올바른 솔루션은 C 옵션입니다."`;