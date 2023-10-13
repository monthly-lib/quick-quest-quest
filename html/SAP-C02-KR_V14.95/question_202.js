const question_202=`QUESTION NO: 202 회사에서 비즈니스 크리티컬 애플리케이션을 온프레미스 데이터 센터에서 AWS로 마이그레이션할 계획입니다. 회사에는 Microsoft SQL Server Always On 클러스터의 온프레미스 설치가 있습니다. 회사는 AWS 관리형 데이터베이스 서비스로 마이그레이션하려고 합니다. 솔루션 설계자는 AWS에서 이기종 데이터베이스 마이그레이션을 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 백업 및 복원 유틸리티를 사용하여 SQL Server 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다. B. AWS Snowball Edge Storage Optimized 장치를 사용하여 데이터를 Amazon S3로 전송합니다. MySQL용 Amazon RDS를 설정합니다. BULK INSERT와 같은 SQL Server 기능과 S3 통합을 사용합니다. C. AWS Schema Conversion Tool을 사용하여 데이터베이스 스키마를 MeSQL용 Amazon RDS로 변환합니다. 그런 다음 AWS Database Migration Service(AWS DMS)를 사용하여 온프레미스 데이터베이스에서 Amazon RDS로 데이터를 마이그레이션합니다. D. AWS DataSync를 사용하여 온프레미스 스토리지와 Amazon S3 간에 네트워크를 통해 데이터를 마이그레이션합니다. MySQL용 Amazon RDS를 설정합니다. BULK INSERT와 같은 SQL Server 기능과 S3 통합을 사용합니다. Answer: C Explanation: https://aws.amazon.com/dms/schema-conversion-tool/ AWS Schema Conversion Tool (SCT) can automatically convert the database schema from Microsoft SQL Server to Amazon RDS for MySQL. This allows for a smooth transition of the database schema without any manual intervention. AWS DMS can then be used to migrate the data from the on-premises databases to the newly created Amazon RDS for MySQL instance. This service can perform a one-time migration of the data or can set up ongoing replication of data changes to keep the on-premises and AWS databases in sync.`;