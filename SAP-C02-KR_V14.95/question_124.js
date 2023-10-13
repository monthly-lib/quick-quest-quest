const question_124=`QUESTION NO: 124 회사는 미국의 AWS 리전에서 판매 보고 애플리케이션을 실행합니다. 이 애플리케이션은 Amazon API Gateway 지역 API 및 AWS Lambda 함수를 사용하여 Amazon RDS for MySQL 데이터베이스의 데이터에서 온디맨드 보고서를 생성합니다. 애플리케이션의 프런트엔드는 Amazon S3에서 호스팅되며 Amazon CloudFront 배포를 통해 사용자가 액세스합니다. 이 회사는 Amazon Route 53을 도메인의 DNS 서비스로 사용하고 있습니다. Route 53은 트래픽을 API Gateway API로 라우팅하는 간단한 라우팅 정책으로 구성됩니다. 향후 6개월 내에 회사는 유럽으로 사업을 확장할 계획입니다. 데이터베이스 트래픽의 90% 이상이 읽기 전용 트래픽입니다. 회사는 이미 새 리전에 API Gateway API 및 Lambda 함수를 배포했습니다. 솔루션 설계자는 보고서를 다운로드하는 사용자의 대기 시간을 최소화하는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 전체 로드가 포함된 AWS Database Migration Service(AWS DMS) 작업을 사용하여 원래 리전의 기본 데이터베이스를 새 리전의 데이터베이스로 복제합니다. Route 53 레코드를 지연 시간 기반 라우팅으로 변경하여 API Gateway API에 연결합니다. B. 전체 로드와 변경 데이터 캡처(CDC)가 포함된 AWS Database Migration Service(AWS DMS) 작업을 사용하여 원래 리전의 기본 데이터베이스를 새 리전의 데이터베이스로 복제합니다. Route 53 레코드를 지리적 위치 라우팅으로 변경하여 API Gateway API에 연결합니다. C. 새 리전의 RDS 데이터베이스에 대한 리전 간 읽기 전용 복제본을 구성합니다. Route 53 레코드를 지연 시간 기반 라우팅으로 변경하여 API Gateway API에 연결합니다. D. 새 리전의 RDS 데이터베이스에 대한 리전 간 읽기 전용 복제본을 구성합니다. Route 53 레코드를 지리적 위치 라우팅으로 변경하여 API에 연결 Answer: C Explanation: The company should configure a cross-Region read replica for the RDS database in the new Region. The company should change the Route 53 record to latency-based routing to connect to the API Gateway API. This solution will meet the requirements because a cross- Region read replica is a feature that enables you to create a MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server read replica in a different Region from the source DB instance. You can use cross-Region read replicas to improve availability and disaster recovery, scale out globally, or migrate an existing database to a new Region1. By creating a cross-Region read replica for the RDS database in the new Region, the company can have a standby copy of its primary database that can serve read-only traffic from users in Europe. A latency-based routing policy is a feature that enables you to route traffic based on the latency between your users and your resources. You can use latency-based routing to route traffic to the resource that provides the best latency2. By changing the Route 53 record to latency-based routing, the company can minimize latency for users who download reports by connecting them to the API Gateway API in the Region that provides the best response time. The other options are not correct because: Using AWS Database Migration Service (AWS DMS) to replicate the primary database in the original Region to the database in the new Region would not be as cost-effective or simple as using a cross-Region read replica. AWS DMS is a service that enables you to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to perform one-time migrations or continuous data replication with high availability and consolidate databases into a petabyte-scale data warehouse3. However, AWS DMS requires more configuration and management than creating a cross-Region read replica, which is fully managed by Amazon RDS. AWS DMS also incurs additional charges for replication instances and tasks. Creating an Amazon API Gateway Data API service integration with Amazon Redshift would not help with disaster recovery or minimizing latency. The Data API is a feature that enables you to query your Amazon Redshift cluster using HTTP requests, without needing a persistent connection or a SQL client. It is useful for building applications that interact with Amazon Redshift, but not for replicating or recovering data from an RDS database. Creating an AWS Data Exchange datashare by connecting AWS Data Exchange to the Redshift cluster would not help with disaster recovery or minimizing latency. AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use AWS Data Exchange to subscribe to a diverse selection of third-party data products or offer your own data products to other AWS customers. A datashare is a feature that enables you to share live and secure access to your Amazon Redshift data across your accounts or with third parties without copying or moving the underlying data. It is useful for sharing query results and views with other users, but not for replicating or recovering data from an RDS database. Reference: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_ DB-eng.Feature.CrossRegionReadReplicas.html https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routingpolicy- latency https://aws.amazon.com/dms/ https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html https://aws.amazon.com/data-exchange/ https://docs.aws.amazon.com/redshift/latest/dg/datashare-overview.html
GPT 3.5 says "텍스트에서 제공된 답변은 옳습니다. 회사는 새로운 지역에 있는 RDS 데이터베이스를 위해 교차 지역 읽기 복제를 구성하고, Route 53 레코드를 지연 시간 기반 라우팅으로 변경하여 API Gateway API에 연결해야 합니다. 이 솔루션은 유럽의 사용자에게 읽기 전용 트래픽을 제공할 수 있는 주 복제 데이터베이스의 대기 복사본을 제공하고, 보고서 다운로드를 위한 사용자의 지연 시간을 최소화하여 요구 사항을 충족시킬 것입니다.

옵션 A는 AWS Database Migration Service (AWS DMS)를 사용하여 주 복제 데이터베이스를 복제하는 것이 교차 지역 읽기 복제를 사용하는 것보다 비용 효율적이거나 간단하지 않을 것입니다. AWS DMS는 마이그레이션이나 지속적인 데이터 복제에 더 적합하며, 읽기 복제를 생성하는 데는 적합하지 않습니다.

옵션 B는 Amazon Redshift와의 Amazon API Gateway Data API 서비스 통합을 생성하거나 AWS Data Exchange를 Redshift 클러스터에 연결하는 것이 재해 복구나 지연 시간 최소화에 도움이 되지 않습니다. 이러한 옵션은 시나리오와 관련이 없습니다.

옵션 D는 교차 지역 읽기 복제를 생성하는 것이 올바른 솔루션이라고 언급하고 있지만, 지리적 라우팅으로 Route 53 레코드를 변경하는 것을 언급하고 있어 옳지 않습니다. 지연 시간을 최소화"`;