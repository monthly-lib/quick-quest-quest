const question_64=`QUESTION NO: 64 회사에는 각각 AWS에 별도의 계정이 있는 여러 비즈니스 단위가 있습니다. 각 사업부는 CIDR 범위가 겹치는 여러 VPC로 자체 네트워크를 관리합니다. 회사의 마케팅 팀은 새로운 내부 응용 프로그램을 만들었고 다른 모든 비즈니스 단위에서 응용 프로그램에 액세스할 수 있도록 하려고 합니다. 솔루션은 사설 IP 주소만 사용해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 각 사업부에 지시하여 사업부의 VPC에 고유한 보조 CIDR 범위를 추가합니다. VPC를 피어링하고 보조 범위의 프라이빗 NAT 게이트웨이를 사용하여 트래픽을 마케팅 팀으로 라우팅합니다. B. 마케팅 계정의 VPC에서 가상 어플라이언스 역할을 할 Amazon EC2 인스턴스를 생성합니다. 마케팅 팀과 각 사업부의 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다. 필요한 경우 NAT를 수행합니다. C. 마케팅 애플리케이션을 공유할 AWS PrivateLink 엔드포인트 서비스를 생성합니다. 서비스에 연결할 수 있도록 특정 AWS 계정에 권한을 부여합니다. 프라이빗 IP 주소를 사용하여 애플리케이션에 액세스하려면 다른 계정에 인터페이스 VPC 엔드포인트를 생성합니다. D. 프라이빗 서브넷의 마케팅 애플리케이션 앞에 NLB(Network Load Balancer)를 생성합니다. API 게이트웨이 API를 생성합니다. Amazon API Gateway 프라이빗 통합을 사용하여 API를 NLB에 연결합니다. API에 대한 IAM 승인을 활성화합니다. 다른 사업부의 계정에 대한 액세스 권한을 부여합니다. Answer: C Explanation: With AWS PrivateLink, the marketing team can create an endpoint service to share their internal application with other accounts securely using private IP addresses. They can grant permission to specific AWS accounts to connect to the service and create interface VPC endpoints in the other accounts to access the application by using private IP addresses. This option does not require any changes to the network of the other business units, and it does not require peering or NATing. This solution is both scalable and secure. https://aws.amazon.com/blogs/networking-and-content-delivery/connecting-networks-withoverlapping- ip-ranges/`;