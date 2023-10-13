const question_172=`QUESTION NO: 172 회사에서 여러 AWS 계정을 사용하고 있습니다. DNS 레코드는 계정 A의 Amazon Route 53용 프라이빗 호스팅 영역에 저장되어 있습니다. 회사의 애플리케이션과 데이터베이스는 계정 B에서 실행 중입니다. 솔루션 설계자가 새 VPC에서 2네트 애플리케이션을 배포하는 데 성공했습니다. 구성을 단순화하기 위해 Amazon RDS 엔드포인트에 대한 db.example com CNAME 레코드 세트가 Amazon Route 53용 프라이빗 호스팅 영역에 생성되었습니다. 배포 중에 응용 프로그램을 시작하지 못했습니다. 문제 해결 결과 Amazon EC2 인스턴스에서 db.example com을 확인할 수 없음이 밝혀졌습니다. 솔루션 설계자는 Route 53에서 레코드 세트가 올바르게 생성되었음을 확인했습니다. 솔루션 설계자는 이 문제를 해결하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택) A. 새 VPC의 별도 EC2 인스턴스에 데이터베이스 배포 프라이빗 호스팅 영역에서 인스턴스의 프라이빗 IP에 대한 레코드 세트 생성 B. SSH를 사용하여 애플리케이션 계층 EC2 인스턴스에 연결합니다. RDS 엔드포인트 IP 주소를 /eto/resolv.conf 파일 C. 계정 A의 프라이빗 호스팅 영역을 계정 B의 새 VPC와 연결하기 위한 권한 부여 생성 D. example.com 도메인 m 계정 B에 대한 프라이빗 호스팅 영역 생성 AWS 계정 간에 Route 53 복제 구성 E. 계정 B의 새 VPC를 계정 A의 호스팅 영역과 연결합니다. 계정 A에서 연결 승인을 삭제합니다. Answer: C,E Explanation: https://aws.amazon.com/premiumsupport/knowledge-center/private-hosted-zone-differentaccount/`;