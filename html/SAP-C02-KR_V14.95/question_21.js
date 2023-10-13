const question_21=`QUESTION NO: 21 생명 과학 회사는 오픈 소스 도구의 조합을 사용하여 데이터 분석 워크플로를 관리하고 온프레미스 데이터 센터의 서버에서 실행되는 Docker 컨테이너를 사용하여 게놈 데이터를 처리합니다. 시퀀싱 데이터가 생성되어 로컬 SAN(Storage Area Network)에 저장됩니다. 그런 다음 데이터가 처리됩니다. 연구 및 개발 팀은 용량 문제에 직면해 워크로드 수요에 따라 확장하고 처리 시간을 몇 주에서 며칠로 단축하기 위해 AWS에서 게놈 분석 플랫폼을 재설계하기로 결정했습니다. 회사에는 고속 AWS Direct Connect 연결 시퀀서가 있습니다. 각 게놈에 대해 약 200GB의 데이터를 생성하며 개별 작업은 이상적인 컴퓨팅 용량으로 데이터를 처리하는 데 몇 시간이 걸릴 수 있습니다. 최종 결과는 Amazon S3에 저장됩니다. A. 정기적으로 예약된 AWS Snowball Edge 장치를 사용하여 시퀀싱 데이터를 AWS로 전송합니다. AWS가 Snowball Edge 장치를 수신하고 데이터가 Amazon S3에 로드되면 S3 이벤트를 사용하여 데이터를 처리하는 AWS Lambda 함수를 트리거합니다. B. AWS Data Pipeline을 사용하여 시퀀싱 데이터를 Amazon S3로 전송합니다. S3 이벤트를 사용하여 Amazon EC2 Auto Scaling 그룹을 트리거하여 Docker 컨테이너를 실행하는 사용자 지정 AMI EC2 인스턴스를 시작하여 데이터를 처리합니다. C. AWS DataSync를 사용하여 시퀀싱 데이터를 Amazon S3로 전송합니다. S3 이벤트를 사용하여 AWS Step Functions 워크플로를 시작하는 AWS Lambda 함수를 트리거합니다. Docker 이미지를 Amazon Elastic Container Registry(Amazon ECR)에 저장하고 AWS Batch를 실행하도록 트리거합니다. 컨테이너 및 시퀀싱 데이터 처리 D. AWS Storage Gateway 파일 게이트웨이를 사용하여 시퀀싱 데이터를 Amazon S3로 전송합니다. S3 이벤트를 사용하여 Docker 컨테이너를 실행하는 Amazon EC2 인스턴스에서 실행되는 AWS Batch 작업을 트리거하여 데이터를 처리합니다. Answer: C Explanation: AWS DataSync can be used to transfer the sequencing data to Amazon S3, which is a more efficient and faster method than using Snowball Edge devices. Once the data is in S3, S3 events can trigger an AWS Lambda function that starts an AWS Step Functions workflow. The Docker images can be stored in Amazon Elastic Container Registry (Amazon ECR) and AWS Batch can be used to run the container and process the sequencing data.`;