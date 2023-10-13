const question_103=`QUESTION NO: 103 회사는 AWS 클라우드에서 웹 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon EC2 인스턴스 세트에서 생성되는 동적 콘텐츠로 구성됩니다. EC2 인스턴스는 Application Load Balancer(ALB)의 대상 그룹으로 구성된 Auto Scaling 그룹에서 실행됩니다. 이 회사는 Amazon CloudFront 배포를 사용하여 애플리케이션을 전 세계에 배포하고 있습니다. CloudFront 배포는 ALB를 오리진으로 사용합니다. 이 회사는 DNS에 Amazon Route 53을 사용하고 CloudFront 배포를 위해 www.example.com의 A 레코드를 생성했습니다. 솔루션 설계자는 가용성이 높고 내결함성이 있도록 애플리케이션을 구성해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? A. 다른 AWS 리전에서 전체 보조 애플리케이션 배포를 프로비저닝합니다. 장애 조치 레코드가 되도록 Route 53 A 레코드를 업데이트합니다. 두 CloudFront 배포를 모두 값으로 추가합니다. Route 53 상태 확인을 생성합니다. B. 다른 AWS 리전에서 ALB, Auto Scaling 그룹 및 EC2 인스턴스를 프로비저닝합니다. CloudFront 배포를 업데이트하고 새 ALB에 대한 두 번째 오리진을 생성합니다. 두 오리진에 대한 오리진 그룹을 생성합니다. 하나의 오리진을 기본으로, 하나의 오리진을 보조로 구성하십시오. C. 다른 AWS 리전에서 Auto Scaling 그룹 및 EC2 인스턴스를 프로비저닝합니다. ALB에서 새 Auto Scaling 그룹에 대한 두 번째 대상을 생성합니다. ALB에서 장애 조치 라우팅 알고리즘을 설정합니다. D. 다른 AWS 리전에서 전체 보조 애플리케이션 배포를 프로비저닝합니다. 두 번째 CloudFront 배포를 생성하고 새 애플리케이션 설정을 오리진으로 추가합니다. AWS Global Accelerator 액셀러레이터를 생성합니다. 두 CloudFront 배포를 엔드포인트로 추가합니다. Answer: B Explanation: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3An dCustomOrigins.html https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_ori gin_failover.html You can set up CloudFront with origin failover for scenarios that require high availability. To get started, you create an origin group with two origins: a primary and a secondary. If the primary origin is unavailable, or returns specific HTTP response status codes that indicate a failure, CloudFront automatically switches to the secondary origin.`;