const question_106=`QUESTION NO: 106 국제 배송 회사는 AWS에서 배송 관리 시스템을 호스팅합니다. 드라이버는 시스템을 사용하여 배송 확인을 업로드합니다. 확인에는 수령인의 서명 또는 수령인과 함께 패키지 사진이 포함됩니다. 운전자의 핸드헬드 장치는 FTP를 통해 서명과 사진을 단일 Amazon EC2 인스턴스에 업로드합니다. 각 핸드헬드 장치는 로그인한 사용자를 기반으로 디렉토리에 파일을 저장하며 파일 이름은 배송 번호와 일치합니다. 그런 다음 EC2 인스턴스는 배달 정보를 가져오기 위해 중앙 데이터베이스를 쿼리한 후 파일에 메타데이터를 추가합니다. 그런 다음 파일은 보관을 위해 Amazon S3에 배치됩니다. 회사가 확장됨에 따라 운전자는 시스템이 연결을 거부하고 있다고 보고합니다. 연결 끊김 및 메모리 문제로 인해 FTP 서버에 문제가 있습니다. 이러한 문제에 대응하여 시스템 엔지니어는 30분마다 EC2 인스턴스를 재부팅하도록 cron 작업을 예약합니다. 청구 팀은 파일이 아카이브에 항상 있는 것은 아니며 중앙 시스템이 항상 업데이트되는 것은 아니라고 보고합니다. 솔루션 설계자는 아카이브가 항상 파일을 수신하고 시스템이 항상 업데이트되도록 확장성을 최대화하는 솔루션을 설계해야 합니다. 핸드헬드 장치는 수정할 수 없으므로 회사에서 새 애플리케이션을 배포할 수 없습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 기존 EC2 인스턴스의 AMI를 생성합니다. Application Load Balancer 뒤에 EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 최소 3개의 인스턴스를 포함하도록 Auto Scaling 그룹을 구성합니다. B. AWS Transfer Family를 사용하여 파일을 Amazon Elastic File System(Amazon EFS)에 배치하는 FTP 서버를 생성합니다. EFS 볼륨을 기존 EC2 인스턴스에 마운트합니다. EC2 인스턴스가 파일 처리를 위한 새 경로를 가리킵니다. C. AWS Transfer Family를 사용하여 파일을 Amazon S3에 배치하는 FTP 서버를 생성합니다. Amazon Simple Notification Service(Amazon SNS)를 통해 S3 이벤트 알림을 사용하여 AWS Lambda 함수를 호출합니다. 메타데이터를 추가하고 전달 시스템을 업데이트하도록 Lambda 함수를 구성합니다. D. 파일을 Amazon S3에 직접 배치하도록 핸드헬드 장치를 업데이트합니다. Amazon Simple Queue Service(Amazon SQS)를 통해 S3 이벤트 알림을 사용하여 AWS Lambda 함수를 호출합니다. 메타데이터를 추가하고 전달 시스템을 업데이트하도록 Lambda 함수를 구성합니다. Answer: C Explanation: Using AWS Transfer Family to create an FTP server that places the files in Amazon S3 and using S3 event notifications through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function will ensure that the archive always receives the files and that the central system is always updated. This solution maximizes scalability and eliminates the need for manual intervention, such as rebooting the EC2 instance.`;