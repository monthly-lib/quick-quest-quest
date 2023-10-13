const question_117=`QUESTION NO: 117 금융 회사는 현재 세대의 Linux EC2 인스턴스에서 비즈니스 크리티컬 애플리케이션을 실행하고 있습니다. 애플리케이션에는 많은 I/O 작업을 수행하는 자체 관리형 MySQL 데이터베이스가 포함되어 있습니다. 응용 프로그램은 한 달 동안 적당한 양의 트래픽을 처리할 수 있도록 잘 작동합니다. 그러나 회사가 증가하는 수요를 충족하기 위해 인프라 내에서 Elastic Load Balancer 및 Auto Scaling을 사용하고 있음에도 불구하고 월말 보고로 인해 매달 마지막 3일 동안 속도가 느려집니다. 다음 작업 중 데이터베이스가 성능에 미치는 영향을 최소화하면서 월말 로드를 처리할 수 있는 작업은 무엇입니까? A. 더 큰 인스턴스 유형을 사용하여 모든 Amazon EBS 볼륨을 GP2 볼륨으로 변경하는 Elastic Load Balancer를 사전 준비합니다. B. 데이터베이스 클러스터를 Amazon RDS로 일회성 마이그레이션 수행. 월말에 로드를 처리하기 위해 몇 개의 추가 읽기 복제본 생성 C. AWS Lambda와 함께 Amazon CioudWatch를 사용하여 유형을 변경합니다. 특정 CloudWatch 지표를 기반으로 클러스터에서 Amazon EBS 볼륨의 크기 또는 IOPS D. 월말 이전에 스냅샷을 생성하고 이후에 되돌려 기존의 모든 Amazon EBS 볼륨을 사용 가능한 최대 스토리지 크기 및 초당 I/O가 있는 새 PIOPS 볼륨으로 교체합니다. Answer: B Explanation: In this scenario, the Amazon EC2 instances are in an Auto Scaling group already which means that the database read operations is the possible bottleneck especially during the month-end wherein the reports are generated. This can be solved by creating RDS read replicas.`;