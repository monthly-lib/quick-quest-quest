const question_168=`QUESTION NO: 168 회사에서 문서 처리 워크로드를 AWS로 마이그레이션하고 있습니다. 이 회사는 기본적으로 Amazon S3 API를 사용하여 처리 서버가 초당 약 5개의 문서 속도로 생성하는 문서를 저장, 검색 및 수정하도록 많은 애플리케이션을 업데이트했습니다. 문서 처리가 완료되면 고객은 Amazon S3에서 직접 문서를 다운로드할 수 있습니다. 마이그레이션 과정에서 회사는 S3 API를 지원하기 위해 많은 문서를 생성하는 처리 서버를 즉시 업데이트할 수 없음을 발견했습니다. 서버는 Linux에서 실행되며 서버가 생성하고 수정하는 파일에 대한 빠른 로컬 액세스가 필요합니다. 서버가 처리를 마치면 파일을 30분 이내에 다운로드할 수 있도록 대중이 사용할 수 있어야 합니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 애플리케이션을 AWS Lambda 함수로 마이그레이션합니다. Java용 AWS SDK를 사용하여 회사에서 Amazon S3에 직접 저장하는 파일을 생성, 수정 및 액세스합니다. B. Amazon S3 파일 게이트웨이를 설정하고 문서 저장소에 연결된 파일 공유를 구성합니다. NFS를 사용하여 Amazon EC2 인스턴스에 파일 공유를 탑재합니다. Amazon S3에서 변경 사항이 발생하면 RefreshCache API 호출을 시작하여 S3 파일 게이트웨이를 업데이트합니다. C. 가져오기 및 내보내기 정책으로 Amazon FSx for Lustre를 구성합니다. 새 파일 시스템을 S3 버킷에 연결합니다. NFS를 사용하여 Lustre 클라이언트를 설치하고 문서 저장소를 Amazon EC2 인스턴스에 마운트합니다. D. Amazon EC2 인스턴스에 연결하도록 AWS DataSync를 구성합니다. 생성된 파일을 Amazon S3와 동기화하도록 작업을 구성합니다. Answer: C Explanation: Amazon FSx for Lustre is a fully managed service that provides cost-effective, highperformance, scalable storage for compute workloads. Powered by Lustre, the world's most popular high-performance file system, FSx for Lustre offers shared storage with sub-ms latencies, up to terabytes per second of throughput, and millions of IOPS. FSx for Lustre file systems can also be linked to Amazon Simple Storage Service (S3) buckets, allowing you to access and process data concurrently from both a high-performance file system and from the S3 API.`;