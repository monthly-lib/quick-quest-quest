const question_91=`QUESTION NO: 91 회사는 회사의 기본 온프레미스 애플리케이션이 실패하는 경우 AWS를 사용하여 비즈니스 연속성 솔루션을 생성하려고 합니다. 애플리케이션은 다른 애플리케이션도 실행하는 물리적 서버에서 실행됩니다. 회사에서 마이그레이션할 계획인 온프레미스 애플리케이션은 MySQL 데이터베이스를 데이터 저장소로 사용합니다. 회사의 모든 온프레미스 애플리케이션은 Amazon EC2와 호환되는 운영 체제를 사용합니다. 최소한의 운영 오버헤드로 회사의 목표를 달성할 수 있는 솔루션은 무엇입니까? A. MySQL 서버를 포함하여 소스 서버에 AWS Replication Agent를 설치합니다. 모든 서버에 대한 복제를 설정합니다. 일반 훈련을 위한 테스트 인스턴스를 시작합니다. 실패 이벤트의 경우 워크로드를 장애 조치하기 위해 테스트 인스턴스로 컷오버합니다. B. MySQL 서버를 포함하여 소스 서버에 AWS Replication Agent를 설치합니다. 대상 AWS 리전에서 AWS Elastic Disaster Recovery를 초기화합니다. 시작 설정을 정의합니다. 가장 최근 시점부터 장애 조치(failover) 및 폴백(fallback)을 자주 수행합니다. C. 데이터베이스를 호스팅할 AWS DMS(AWS Database Migration Service) 복제 서버 및 대상 Amazon Aurora MySQL DB 클러스터를 생성합니다. DMS 복제 작업을 생성하여 기존 데이터를 대상 DB 클러스터에 복사합니다. 데이터 동기화를 유지하기 위해 로컬 AWS Schema Conversion Tool(AWS SCT) 변경 데이터 캡처(CDC) 작업을 생성합니다. 호환되는 기본 AMI로 시작하여 나머지 소프트웨어를 EC2 인스턴스에 설치합니다. D. 온프레미스에 AWS Storage Gateway Volume Gateway를 배포합니다. 모든 온프레미스 서버에 볼륨을 탑재합니다. 애플리케이션과 MySQL 데이터베이스를 새 볼륨에 설치합니다. 정기적으로 스냅샷을 찍습니다. 호환되는 기본 AMI로 시작하여 EC2 인스턴스에 모든 소프트웨어를 설치합니다. EC2 인스턴스에서 볼륨 게이트웨이를 시작합니다. 최신 스냅샷에서 볼륨을 복원합니다. 실패 이벤트의 경우 EC2 인스턴스에 새 볼륨을 탑재합니다. Answer: B Explanation: https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html https://docs.aws.amazon.com/drs/latest/userguide/recovery-workflow-gs.html
GPT 3.5 says "정답은 B입니다.

설명: 회사의 목표를 최소한의 운영 오버헤드로 달성할 수 있는 솔루션은 소스 서버에 AWS 복제 에이전트를 설치하고 MySQL 서버를 포함합니다. 그런 다음 대상 AWS 지역에서 AWS Elastic Disaster Recovery를 초기화하고 시작 설정을 정의합니다. 가장 최근의 시점에서 자주 장애 조치 및 롤백을 수행합니다. 이 솔루션은 운영 오버헤드를 최소화하면서 온프레미스 애플리케이션을 AWS로 복제하여 업무 연속성을 제공합니다.

옵션 A는 모든 서버에 대해 AWS 복제 에이전트를 설치하고 MySQL 서버를 포함하여 복제를 설정하는 것을 제안합니다. 그러나 AWS Elastic Disaster Recovery를 초기화하거나 장애 조치 및 롤백을 수행하는 것을 언급하지 않습니다.

옵션 C는 AWS Database Migration Service (DMS)를 사용하여 복제 서버를 생성하고 대상 Amazon Aurora MySQL DB 클러스터를 생성하는 것을 제안합니다. 이 솔루션은 데이터베이스를 복제할 수는 있지만 전체 애플리케이션의 업무 연속성에 대한 요구를 해결하지 않습니다.

옵션 D는 온프레미스에 AWS Storage Gateway 볼륨 게이트웨이를 배포하고 모든 온프레미스 서버에 볼륨을 마운트하는 것을 제안합니다. 이 솔루션은 데이터 저장 및 스냅샷을 제공할 수는 있지만 전체 애플리케이션의 업무 연속성에 대한 요구를 해결하지 않습니다"`;