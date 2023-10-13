const question_92=`QUESTION NO: 92 회사가 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 이 애플리케이션은 Amazon S3 버킷에 대량의 비정형 데이터를 수집하고 저장합니다. S3 버킷에는 수 테라바이트의 데이터가 포함되어 있으며 S3 Standard 스토리지 클래스를 사용합니다. 데이터의 크기는 매일 몇 기가바이트씩 증가합니다. 회사는 데이터를 조회하고 분석해야 합니다. 회사는 1년이 지난 데이터에 접근하지 않습니다. 그러나 회사는 규정 준수를 위해 모든 데이터를 무기한 보관해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까? A. S3 Select를 사용하여 데이터를 쿼리합니다. S3 수명 주기 정책을 생성하여 1년 이상 된 데이터를 S3 Glacier Deep Archive로 전환합니다. B. Amazon Redshift Spectrum을 사용하여 데이터를 쿼리합니다. S3 수명 주기 정책을 생성하여 1년 이상 된 데이터를 S3 Glacier Deep Archive로 전환합니다. C. AWS Glue 데이터 카탈로그 및 Amazon Athena를 사용하여 데이터를 쿼리합니다. S3 수명 주기 정책을 생성하여 1년 이상 된 데이터를 S3 Glacier Deep Archive로 전환합니다. D. Amazon Redshift Spectrum을 사용하여 데이터를 쿼리합니다. S3 수명 주기 정책을 생성하여 1년 이상 된 데이터를 S3 Intelligent-Tiering으로 전환합니다. Answer: B(C인것같음) Explanation: Generally, unstructured data should be converted structured data before querying them. AWS Glue can do that. https://docs.aws.amazon.com/glue/latest/dg/schemarelationalize. html https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 C입니다.

회사의 요구 사항을 충족하기 위한 가장 비용 효율적인 솔루션은 AWS Glue 데이터 카탈로그와 Amazon Athena를 사용하여 데이터를 쿼리하는 것입니다.

AWS Glue는 완전히 관리되는 추출, 변환 및 로드(ETL) 서비스로, 비구조화된 데이터를 구조화된 데이터로 변환하는 데 사용할 수 있습니다. S3 버킷의 데이터를 크롤링하고 스키마를 추론하여 Amazon Athena가 쿼리에 사용할 수 있는 데이터 카탈로그를 생성할 수 있습니다.

Amazon Athena는 표준 SQL을 사용하여 S3에서 직접 데이터를 분석할 수 있는 대화형 쿼리 서비스입니다. AWS Glue 데이터 카탈로그를 사용하면 Athena가 구조화된 데이터에 액세스하고 쿼리를 수행할 수 있습니다.

또한, 회사는 1년 이상 된 데이터를 장기 보존 및 규정 준수 목적으로 S3 Glacier Deep Archive 스토리지 클래스로 이전하는 S3 라이프사이클 정책을 생성할 수 있습니다. 이렇게 하면 자주 액세스되지 않는 데이터의 저장 비용을 줄일 수 있습니다.

Amazon Redshift Spectrum(옵션 B)을 사용하는 것은 이 시나리오에서 가장 비용 효율적인 솔루션이 아닙니다. Redshift에 저장된 구조화된 데이터를 쿼리하는 데 주로 사용되는 것이지 S3에 있는 비구조화된 데이터를 쿼리하는 데 사용되지 않습니다.

S3 Select(옵션 A)만 사용하는 것은 충분하지 않습니다. S3 내 개"`;