const question_65=`QUESTION NO: 65 한 회사가 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 애플리케이션의 부하는 하루 종일 달라지며 EC2 인스턴스는 정기적으로 확장 및 축소됩니다. EC2 인스턴스의 로그 파일은 15분마다 중앙 Amazon S3 버킷에 복사됩니다. 보안 팀은 종료된 일부 EC2 인스턴스에서 로그 파일이 누락되었음을 발견했습니다. 로그 파일이 종료된 EC2 인스턴스에서 중앙 S3 버킷으로 복사되도록 하는 일련의 작업은 무엇입니까? A. Amazon S3에 로그 파일을 복사하는 스크립트를 생성하고 스크립트를 EC2 인스턴스의 파일에 저장합니다. Auto Scaling 그룹에서 수명 주기 이벤트를 감지하는 Auto Scaling 수명 주기 후크 및 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. autoscaling:EC2_INSTANCE_TERMINATING 전환 시 AWS Lambda 함수를 호출하여 Auto Scaling 그룹에 ABANDON을 전송하여 종료를 방지하고 스크립트를 실행하여 로그 파일을 복사하고 AWS SDK를 사용하여 인스턴스를 종료합니다. B. 로그 파일을 Amazon S3에 복사하는 스크립트로 AWS Systems Manager 문서를 생성합니다. Auto Scaling 그룹에서 수명 주기 이벤트를 감지하는 Auto Scaling 수명 주기 후크 및 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. autoscaling:EC2_INSTANCE_TERMINATING 전환에서 AWS Lambda 함수를 호출하여 AWS Systems Manager API SendCommand 작업을 호출하여 문서를 실행하여 로그 파일을 복사하고 CONTINUE를 Auto Scaling 그룹에 전송하여 인스턴스를 종료합니다. C. 로그 전송 속도를 5분 간격으로 변경합니다. Amazon S3에 로그 파일을 복사하는 스크립트를 생성하고 EC2 인스턴스 사용자 데이터에 스크립트를 추가합니다. Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성하여 EC2 인스턴스 종료를 감지합니다. AWS CLI를 사용하여 사용자 데이터 스크립트를 실행하여 로그 파일을 복사하고 인스턴스를 종료하는 EventBridge(CloudWatch 이벤트) 규칙에서 AWS Lambda 함수를 호출합니다. D. Amazon S3에 로그 파일을 복사하는 스크립트로 AWS Systems Manager 문서를 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시하는 Auto Scaling 수명 주기 후크를 생성합니다. SNS 알림에서 AWS Systems Manager API SendCommand 작업을 호출하여 문서를 실행하여 로그 파일을 복사하고 ABANDON을 Auto Scaling 그룹에 전송하여 인스턴스를 종료합니다. Answer: B Explanation: https://docs.aws.amazon.com/autoscaling/ec2/userguide/adding-lifecycle-hooks.html - Refer to Default Result section - If the instance is terminating, both abandon and continu e allow the instance to terminate. However, abandon stops any remaining actions, such as other lifecycle hooks, and continue allows any other lifecycle hooks to complete. https://aws.amazon.com/blogs/infrastructure-and-automation/run-code-before-terminating-anec2- auto-scaling-instance/ https://github.com/aws-samples/aws-lambda-lifecycle-hooks-function https://github.com/aws-samples/aws-lambda-lifecycle-hooksfunction/ blob/master/cloudformation/template.yaml`;