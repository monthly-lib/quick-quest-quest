const question_198=`QUESTION NO: 198 회사에는 잠재적 임차인과 구매자에게 부동산 정보를 제공하는 온프레미스 웹 사이트 애플리케이션이 있습니다. 웹 사이트는 Java 백엔드와 NOSQL MongoDB 데이터베이스를 사용하여 구독자 데이터를 저장합니다. 회사는 전체 애플리케이션을 비슷한 구조의 AWS로 마이그레이션해야 합니다. 응용 프로그램은 고가용성을 위해 배포되어야 하며 회사는 응용 프로그램을 변경할 수 없습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? A. Amazon Aurora DB 클러스터를 구독자 데이터의 데이터베이스로 사용합니다. Java 백엔드 애플리케이션을 위해 여러 가용 영역에 걸쳐 Auto Scaling 그룹에 Amazon EC2 인스턴스를 배포합니다. B. Amazon EC2 인스턴스의 MongoDB를 구독자 데이터의 데이터베이스로 사용합니다. Java 백엔드 애플리케이션을 위한 단일 가용 영역의 Auto Scaling 그룹에 EC2 인스턴스를 배포합니다. C. 구독자 데이터용 데이터베이스로 여러 가용 영역에서 적절한 크기의 인스턴스로 Amazon DocumentD3(MongoDB 호환)를 구성합니다. Java 백엔드 애플리케이션을 위해 여러 가용 영역에 걸쳐 Auto Scaling 그룹에 Amazon EC2 인스턴스를 배포합니다. D. 여러 가용 영역에서 온디맨드 용량 모드로 Amazon DocumentDB(MongoDB와 호환)를 구독자 데이터용 데이터베이스로 구성합니다. Java 백엔드 애플리케이션을 위해 여러 가용 영역에 걸쳐 Auto Scaling 그룹에 Amazon EC2 인스턴스를 배포합니다. Answer: C Explanation: On-demand capacity mode is the function of Dynamodb. https://aws.amazon.com/blogs/news/running-spiky-workloads-and-optimizing-costs-by-morethan-90-using-amazon-dynamodb-on-demand-capacity-mode/ Amazon DocumentDB Elastic Clusters https://aws.amazon.com/blogs/news/announcing-amazon-documentdb-elasticclusters/ Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones for the Java backend application. This will provide high availability and scalability, while allowing the company to retain the same database structure as the original application.
GPT 3.5 says "본문에서 제공된 답변은 잘못되었습니다. 올바른 답은 A입니다.

설명:

고가용성 및 응용 프로그램 변경 없이 마이그레이션 요구 사항을 충족하기 위해 회사는 가입자 데이터베이스로 Amazon Aurora DB 클러스터를 사용해야 합니다. Amazon Aurora는 클라우드용으로 구축된 MySQL 및 PostgreSQL 호환 관계형 데이터베이스로 고가용성과 확장성을 제공합니다.

Java 백엔드 응용 프로그램의 경우, 회사는 여러 가용 영역에 걸쳐 Amazon EC2 인스턴스를 Auto Scaling 그룹에 배포해야 합니다. 이렇게 하면 응용 프로그램에 대한 고가용성과 확장성이 제공됩니다.

Amazon DocumentDB (옵션 C)를 사용하는 것은 이 경우에는 최적의 해결책이 아닙니다. 이는 MongoDB 호환 문서 데이터베이스이며, 회사는 현재 NOSQL MongoDB를 사용하고 있습니다.

옵션 D는 요구 사항에는 필요하지 않습니다.

따라서, 올바른 답은 A입니다."`;