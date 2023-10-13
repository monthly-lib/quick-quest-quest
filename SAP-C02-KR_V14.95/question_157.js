const question_157=`QUESTION NO: 157 회사가 온프레미스에서 AWS로 애플리케이션을 마이그레이션했습니다. 애플리케이션 프런트엔드는 Application Load Balancer(ALB) 뒤에 있는 두 개의 Amazon EC2 인스턴스에서 실행되는 정적 웹 사이트입니다. 애플리케이션 백엔드는 다른 ALB 뒤에 있는 3개의 EC2 인스턴스에서 실행되는 Python 애플리케이션입니다. EC2 인스턴스는 애플리케이션의 최대 사용량에 대한 온프레미스 사양을 충족하도록 크기가 조정된 대형 범용 온디맨드 인스턴스입니다. 애플리케이션은 매월 평균 수십만 건의 요청을 처리합니다. 그러나 애플리케이션은 주로 점심 시간에 사용되며 나머지 시간에는 트래픽이 최소화됩니다. 솔루션 설계자는 애플리케이션 가용성에 부정적인 영향을 미치지 않으면서 애플리케이션의 인프라 비용을 최적화해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택하세요.) A. 모든 EC2 인스턴스를 기존 EC2 인스턴스와 동일한 수의 코어가 있는 컴퓨팅 최적화 인스턴스로 변경합니다. B. 애플리케이션 프런트엔드를 Amazon S3에서 호스팅되는 정적 웹사이트로 이동합니다. C. AWS Elastic Beanstalk를 사용하여 애플리케이션 프런트엔드를 배포합니다. 노드에 대해 동일한 인스턴스 유형을 사용하십시오. D. 모든 백엔드 EC2 인스턴스를 스팟 인스턴스로 변경합니다. E. 백엔드 Python 애플리케이션을 기존 EC2 인스턴스와 동일한 수의 코어가 있는 버스트 가능한 범용 EC2 인스턴스에 배포합니다. Answer: B,D(B,E인것같음) Explanation: Moving the application frontend to a static website that is hosted on Amazon S3 will save cost as S3 is cheaper than running EC2 instances. Using Spot instances for the backend EC2 instances will also save cost, as they are significantly cheaper than On-Demand instances. This will be suitable for the application, as it has minimal traffic during the rest of the day, and the availability of spot instances will not negatively affect the application's availability. Reference: Amazon S3 pricing: https://aws.amazon.com/s3/pricing/ Amazon EC2 Spot Instances documentation: https://aws.amazon.com/ec2/spot/ AWS Elastic Beanstalk documentation: https://aws.amazon.com/elasticbeanstalk/ Amazon Elastic Compute Cloud (EC2) pricing: https://aws.amazon.com/ec2/pricing/`;