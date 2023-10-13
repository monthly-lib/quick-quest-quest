const question_131=`QUESTION NO: 131 회사에는 사용자가 짧은 동영상을 업로드할 수 있는 웹 애플리케이션이 있습니다. 동영상은 Amazon EBS 볼륨에 저장되며 분류를 위해 사용자 정의 인식 소프트웨어로 분석됩니다. 이 웹사이트에는 특정 달에 피크가 있는 가변 트래픽이 있는 static 콘텐츠가 포함되어 있습니다. 아키텍처는 웹 애플리케이션용 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스와 Amazon SQS 대기열을 처리하기 위해 Auto Scaling 그룹에서 실행되는 EC2 인스턴스로 구성됩니다. 가능하고 타사 소프트웨어에 대한 종속성을 제거합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 웹 애플리케이션에는 Amazon ECS 컨테이너를 사용하고 SQS 대기열을 처리하는 Auto Scaling 그룹에는 스팟 인스턴스를 사용합니다. 사용자 지정 소프트웨어를 Amazon Recognition으로 교체하여 비디오를 분류합니다. B. 업로드된 비디오를 Amazon EFS에 저장하고 웹 애플리케이션용 EC2 인스턴스에 파일 시스템을 탑재합니다. 비디오를 분류하기 위해 Amazon Rekognition API를 호출하는 AWS Lambda 함수로 SQS 대기열을 처리합니다. C. Amazon S3에서 웹 애플리케이션을 호스팅합니다. 업로드된 동영상을 Amazon S3에 저장합니다. S3 이벤트 알림을 사용하여 이벤트를 SQS 대기열에 게시합니다. 비디오를 분류하기 위해 Amazon Rekognition API를 호출하는 AWS Lambda 함수로 SQS 대기열을 처리합니다. D. AWS Elastic Beanstalk를 사용하여 웹 애플리케이션용 Auto Scaling 그룹에서 EC2 인스턴스를 시작하고 작업자 환경을 시작하여 SQS 대기열을 처리합니다. 사용자 지정 소프트웨어를 Amazon Rekognition으로 교체하여 비디오를 분류합니다. Answer: C Explanation: Option C is correct because hosting the web application in Amazon S3, storing the uploaded videos in Amazon S3, and using S3 event notifications to publish events to the SQS queue reduces the operational overhead of managing EC2 instances and EBS volumes. Amazon S3 can serve static content such as HTML, CSS, JavaScript, and media files directly from S3 buckets. Amazon S3 can also trigger AWS Lambda functions through S3 event notifications when new objects are created or existing objects are updated or deleted. AWS Lambda can process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos. This solution eliminates the need for custom recognition software and third-party dependencies345`;