const question_50=`QUESTION NO: 50 회사에서 Amazon EC2 인스턴스를 사용하여 블로그 사이트를 호스팅하기 위해 웹 집합을 배포했습니다. EC2 인스턴스는 ALB(Application Load Balancer) 뒤에 있으며 Auto Scaling 그룹에 구성됩니다. 웹 애플리케이션은 모든 블로그 콘텐츠를 Amazon EFS 볼륨에 저장합니다. 이 회사는 최근 자신의 게시물에 동영상을 추가하는 'Moggers' 기능을 추가하여 하루 중 피크 시간에 이전 사용자 트래픽의 10배를 끌어들였습니다. 사용자가 사이트에 접속하거나 비디오를 시청하려고 시도하는 동안 버퍼링 및 시간 초과 문제를 보고합니다. 사용자의 문제를 해결하는 가장 비용 효율적이고 확장 가능한 배포는 무엇입니까? A. 최대 I/O를 활성화하도록 Amazon EFS를 재구성합니다. B. 인스턴스 스토어 볼륨을 스토리지로 사용하도록 Nog 사이트를 업데이트합니다. 시작할 때 사이트 콘텐츠를 볼륨에 복사하고 Amazon S3 종료 시에 복사합니다. C. Amazon CloudFront 배포를 구성합니다. 배포를 S3 버킷으로 지정하고 비디오를 EFS에서 Amazon S3로 마이그레이션합니다. D. 모든 사이트 콘텐츠에 대해 Amazon CloudFront 배포를 설정하고 배포가 ALB를 가리키도록 합니다. Answer: C Explanation: https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-connection-fails/ Using an Amazon S3 bucket Using a MediaStore container or a MediaPackage channel Using an Application Load Balancer Using a Lambda function URL Using Amazon EC2 (or another custom origin) Using CloudFront origin groups https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-toload-balancer.html
GPT 3.5 says "정답은 C입니다.

설명: 사용자의 버퍼링 및 타임아웃 문제를 해결하기 위한 가장 비용 효율적이고 확장 가능한 배포 방법은 Amazon CloudFront 배포를 구성하는 것입니다. 배포는 S3 버킷을 가리키도록 구성되어야 하며, EFS에서 비디오를 Amazon S3로 마이그레이션해야 합니다. CloudFront를 사용하면 콘텐츠가 엣지 위치에 캐시되어 EC2 인스턴스의 부하가 줄어들고 사용자 경험이 향상됩니다.

옵션 A는 Amazon EFS의 최대 I/O를 활성화하는 것만으로는 버퍼링 및 타임아웃 문제를 해결할 수 없으므로 올바르지 않습니다.

옵션 B는 Nog 사이트의 저장소로 인스턴스 스토어 볼륨을 사용하는 것은 증가한 트래픽을 처리하기 위해 필요한 확장성과 성능을 제공하지 않으므로 올바르지 않습니다.

옵션 D는 모든 사이트 콘텐츠에 대해 CloudFront 배포를 설정하고 ALB를 가리키도록 하는 것은 특히 비디오 콘텐츠와 관련된 버퍼링 및 타임아웃 문제를 해결하지 못하므로 올바르지 않습니다."`;