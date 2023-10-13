const question_31=`QUESTION NO: 31 회사가 VPC에서 웹 애플리케이션을 실행하고 있습니다. 웹 애플리케이션은 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스 그룹에서 실행됩니다. ALB는 AWS WAF를 사용하고 있습니다. 외부 고객은 웹 애플리케이션에 연결해야 합니다. 회사는 모든 외부 고객에게 IP 주소를 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. ALB를 NLB(Network Load Balancer)로 교체합니다. NLB에 탄력적 IP 주소를 할당합니다. B. 탄력적 IP 주소를 할당합니다. 탄력적 IP 주소를 ALP에 할당 고객에게 탄력적 IP 주소를 제공합니다. C. AWS Global Accelerator 표준 가속기를 생성합니다. 가속기의 끝점으로 ALB를 지정합니다. 액셀러레이터의 IP 주소를 고객에게 제공합니다. D. Amazon CloudFront 배포를 구성합니다. ALB를 원점으로 설정합니다. 배포의 DNS 이름을 ping하여 배포의 퍼블릭 IP 주소를 확인합니다. 고객에게 IP 주소를 제공합니다. Answer: C Explanation: https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.albaccelerator. html Option A is wrong. AWS WAF does not support associating with NLB. https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html Option B is wrong. An ALB does not support an Elastic IP address. https://aws.amazon.com/elasticloadbalancing/features/
GPT 3.5 says "텍스트에서 제공된 답변은 옳습니다. 최소한의 운영 부담으로 요구 사항을 충족시키기 위한 솔루션은 AWS Global Accelerator 표준 가속기를 생성하고 ALB를 엔드포인트로 지정하는 것입니다. 그런 다음 가속기의 IP 주소를 외부 고객에게 제공할 수 있습니다.

옵션 A는 AWS WAF가 NLB와 연결되지 않기 때문에 올바르지 않습니다.

옵션 B는 ALB가 탄력적 IP 주소를 지원하지 않기 때문에 올바르지 않습니다.

옵션 D는 CloudFront를 사용하여 웹 애플리케이션을 배포할 수는 있지만, 외부 고객에게 IP 주소를 제공하는 솔루션을 제공하지 않기 때문에 올바르지 않습니다."`;