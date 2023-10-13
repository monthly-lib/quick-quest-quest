const question_80=`QUESTION NO: 80 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 실행되는 웹 사이트가 있는 회사가 있습니다. 인스턴스는 Auto Scaling 그룹에 있습니다. ALB는 AWS WAF 웹 ACL과 연결됩니다. 웹 사이트는 종종 응용 프로그램 계층에서 공격에 직면합니다. 공격으로 인해 응용 프로그램 서버의 트래픽이 갑자기 크게 증가합니다. 액세스 로그는 각 공격이 서로 다른 IP 주소에서 시작되었음을 보여줍니다. 솔루션 설계자는 이러한 공격을 완화하기 위한 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 서버 액세스를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. IP 주소별 액세스를 기반으로 임계값을 설정합니다. 웹 ACL의 거부 목록에 IP 주소를 추가하는 경보 동작을 구성합니다. B. AWS WAF 외에 AWS Shield Advanced를 배포합니다. ALB를 보호 리소스로 추가합니다. C. 사용자 IP 주소를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. IP 주소별 액세스를 기반으로 임계값을 설정합니다. 경보를 활성화하는 모든 IP 주소에 대해 애플리케이션 서버의 서브넷 라우팅 테이블에 거부 규칙을 추가하도록 AWS Lambda 함수를 호출하도록 경보를 구성합니다. D. 액세스 로그를 검사하여 공격을 시작한 IP 주소의 패턴을 찾습니다. Amazon Route 53 지리적 위치 라우팅 정책을 사용하여 해당 IP 주소를 호스팅하는 국가에서 오는 트래픽을 거부합니다. Answer: C(B인것같음) Explanation: "The AWS WAF API supports security automation such as blacklisting IP addresses that exceed request limits, which can be useful for mitigating HTTP flood attacks." > https://aws.amazon.com/blogs/security/how-to-protect-dynamic-web-applications-againstddos- attacks-by-using-amazon-cloudfront-and-amazon-route-53/
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 B입니다.

작업 부담을 최소화하면서 공격을 완화하기 위한 해결책은 AWS WAF에 추가로 AWS Shield Advanced를 배포하는 것입니다. AWS Shield Advanced는 ALB와 같은 리소스에 대한 고급 DDoS 보호를 제공합니다. 이는 기계 학습 알고리즘과 실시간 위협 인텔리전스를 사용하여 DDoS 공격을 감지하고 완화합니다. ALB를 보호 대상 리소스로 추가함으로써, AWS Shield Advanced가 제공하는 DDoS 보호의 혜택을 자동으로 받을 수 있습니다. 이 해결책은 공격으로 인한 트래픽의 급증을 완화하는 데 도움이 될 것입니다."`;