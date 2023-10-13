const question_68=`QUESTION NO: 68 한 회사에서 AWS Organizations의 조직을 사용하여 수백 개의 AWS 계정을 관리하고 있습니다. 솔루션 설계자는 OWASP(Open Web Application Security Project) 상위 10개 웹 애플리케이션 취약성에 대한 기본 보호를 제공하는 솔루션을 개발하고 있습니다. 솔루션 설계자는 조직 내에 배포된 모든 기존 및 신규 Amazon CloudFront 배포에 AWS WAF를 사용하고 있습니다. 솔루션 설계자가 기본 보호를 제공하기 위해 수행해야 하는 단계의 조합은 무엇입니까? (3개를 선택하세요.) A. 모든 계정에서 AWS Config를 활성화합니다. B. 모든 계정에서 Amazon GuardDuty를 활성화합니다. C. 조직의 모든 기능을 활성화합니다. D. AWS Firewall Manager를 사용하여 모든 CloudFront 배포의 모든 계정에 AWS WAF 규칙을 배포합니다. E. AWS Shield Advanced를 사용하여 모든 CloudFront 배포의 모든 계정에 AWS WAF 규칙을 배포합니다. F. AWS Security Hub를 사용하여 모든 CloudFront 배포의 모든 계정에 AWS WAF 규칙을 배포합니다. Answer: C,D,E(A,C,D인것같음) Explanation: Enabling all features for the organization will enable using AWS Firewall Manager to centrally configure and manage firewall rules across multiple AWS accounts1. Using AWS Firewall Manager to deploy AWS WAF rules in all accounts for all CloudFront distributions will enable providing baseline protection for the OWASP top 10 web application vulnerabilities2. AWS Firewall Manager supports AWS WAF rules that can help protect against common web exploits such as SQL injection and cross-site scripting3. Configuring redirection of HTTP requests to HTTPS requests in CloudFront will enable encrypting the data in transit using SSL/TLS.
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다.

솔루션 아키텍트가 AWS Organizations 및 AWS WAF를 사용하여 OWASP 상위 10개 웹 애플리케이션 취약점에 대한 기준선 보호를 제공하기 위해 취해야 할 올바른 단계 조합은 다음과 같습니다:

A. 조직에 대해 모든 기능을 활성화합니다.
D. AWS Firewall Manager를 사용하여 모든 계정의 모든 CloudFront 배포에 AWS WAF 규칙을 배포합니다.
E. AWS Shield Advanced를 사용하여 모든 계정의 모든 CloudFront 배포에 AWS WAF 규칙을 배포합니다.

설명:
조직에 대해 모든 기능을 활성화하면 여러 AWS 계정에서 방화벽 규칙의 중앙 집중 관리와 구성이 가능합니다.
AWS Firewall Manager를 사용하여 모든 계정의 모든 CloudFront 배포에 AWS WAF 규칙을 배포하면 기준선 보호가 일관되게 적용됩니다.
AWS Shield Advanced를 사용하면 DDoS 공격에 대한 추가적인 보호가 제공됩니다.

따라서 올바른 단계 조합은 A, D, E입니다."`;