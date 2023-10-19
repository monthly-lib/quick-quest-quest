const question_53=`QUESTION NO: 53 신생 회사는 최신 Amazon Linux 2 AMI를 사용하여 프라이빗 서브넷에서 Amazon EC2 인스턴스 플릿을 호스팅합니다. 회사의 엔지니어는 문제 해결을 위해 인스턴스에 대한 SSH 액세스에 크게 의존합니다. 회사의 기존 아키텍처에는 다음이 포함됩니다. * 프라이빗 및 퍼블릭 서브넷이 있는 VPC와 NAT 게이트웨이 * 온프레미스 환경과의 연결을 위한 사이트 간 VPN * 온프레미스 환경에서 직접 SSH에 액세스하는 EC2 보안 그룹 회사는 SSH 액세스에 대한 보안 제어를 강화하고 엔지니어가 실행하는 명령에 대한 감사를 제공해야 합니다. 솔루션 설계자는 어떤 전략을 사용해야 합니까? A. EC2 인스턴스 플릿에 EC2 Instance Connect를 설치하고 구성합니다. 포트 22에서 인바운드 TCP를 허용하는 EC2 인스턴스에 연결된 모든 보안 그룹 규칙을 제거합니다. 엔지니어에게 EC2 Instance Connect CLI를 사용하여 인스턴스에 원격으로 액세스하도록 조언합니다. B. 포트 22에서 엔지니어 장치의 IP 주소에 대한 인바운드 TCP만 허용하도록 EC2 보안 그룹을 업데이트합니다. 모든 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치하고 운영 체제 감사 로그를 CloudWatch Logs로 보냅니다. C. EC2 보안 그룹을 업데이트하여 엔지니어 장치의 IP 주소에 대한 포트 22의 인바운드 TCP만 허용합니다. EC2 보안 그룹 리소스 변경에 대해 AWS Config를 활성화합니다. AWS Firewall Manager를 활성화하고 규칙 변경 사항을 자동으로 수정하는 보안 그룹 정책을 적용합니다. D. AmazonSSMManagedInstanceCore 관리형 정책이 연결된 IAM 역할을 생성합니다. 모든 EC2 인스턴스에 IAM 역할을 연결합니다. 포트 22에서 인바운드 TCP를 허용하는 EC2 인스턴스에 연결된 모든 보안 그룹 규칙을 제거합니다. 엔지니어가 디바이스에 AWS Systems Manager Session Manager 플러그인을 설치하고 Systems Manager에서 시작 세션 API 호출을 사용하여 인스턴스에 원격으로 액세스하도록 합니다. Answer: D Explanation: Allows client machines to be able to connect to Session Manager using the AWS CLI instead of going through the AWS EC2 or AWS Server Manager console. https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-workingwith-install-plugin.html https://docs.aws.amazon.com/systemsmanager/ latest/userguide/session-manager-working-with-installplugin.html#:~:text=aws%20ssm%20start%2Dsession%20%2D%2Dtarget%20instance%2Di d
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 D입니다.

설명:

SSH 액세스의 보안 제어를 강화하고 엔지니어가 실행한 명령에 대한 감사를 제공하기 위해 솔루션 아키텍트는 AWS Systems Manager Session Manager를 사용해야 합니다.

전략을 구현하는 방법은 다음과 같습니다:

1. AmazonSSMManagedInstanceCore 관리 정책이 첨부된 IAM 역할을 생성합니다. 이 역할은 EC2 인스턴스가 Systems Manager와 통신할 수 있도록 합니다.

2. IAM 역할을 모든 EC2 인스턴스에 연결합니다.

3. EC2 인스턴스에 대한 포트 22의 인바운드 TCP 트래픽을 허용하는 모든 보안 그룹 규칙을 제거합니다. 이렇게 하면 인스턴스에 대한 직접적인 SSH 액세스가 방지됩니다.

4. 엔지니어에게 기기에 AWS Systems Manager Session Manager 플러그인을 설치하도록 안내합니다.

5. Systems Manager Start Session API 호출을 사용하여 엔지니어에게 인스턴스 액세스 권한을 부여합니다. 이렇게 하면 SSH가 필요하지 않고 원격으로 인스턴스에 액세스할 수 있습니다.

Systems Manager Session Manager를 사용하면 전통적인 SSH 액세스에 비해 EC2 인스턴스에 안전하고 감사 가능한 방식으로 액세스할 수 있습니다."`;