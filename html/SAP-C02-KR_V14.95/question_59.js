const question_59=`QUESTION NO: 59 회사는 스트리밍 시장 데이터를 수집하고 처리합니다. 데이터 속도는 일정합니다. 집계 통계를 계산하는 야간 프로세스가 실행되며 각 실행을 완료하는 데 약 4시간이 걸립니다. 통계 분석은 비즈니스에 미션 크리티컬하지 않으며 특정 실행이 실패하면 다음 실행에서 이전 데이터 포인트가 선택됩니다. 현재 아키텍처는 연결된 Amazon EBS 볼륨에 스트리밍 데이터를 수집하고 저장하기 위해 상시 실행되는 1년 예약이 포함된 Amazon EC2 예약 인스턴스 풀을 사용합니다. 온디맨드 EC2 인스턴스는 매일 밤 시작되어 야간 처리를 수행하고, 수집 서버의 NFS 공유에서 저장된 데이터에 액세스하고, 완료되면 야간 처리 서버를 종료합니다. 예약 인스턴스 예약이 만료되며 회사는 새 예약을 구매할지 아니면 새로운 디자인을 구현할지 결정해야 합니다. 가장 비용 효율적인 디자인은 무엇입니까? A. Amazon Kinesis Data Firehose를 사용하여 Amazon S3에 데이터를 저장하도록 수집 프로세스를 업데이트합니다. 예약된 스크립트를 사용하여 매일 밤 EC2 온디맨드 인스턴스 플릿을 시작하여 S3 데이터의 일괄 처리를 수행합니다. 처리가 완료되면 인스턴스를 종료하도록 스크립트를 구성하십시오. B. Amazon Kinesis Data Firehose를 사용하여 데이터를 Amazon S3에 저장하도록 수집 프로세스를 업데이트합니다. 스팟 인스턴스와 함께 AWS Batch를 사용하여 온디맨드 가격의 50%인 최대 스팟 가격으로 야간 처리를 수행합니다. C. 수집 프로세스를 업데이트하여 Network Load Balancer 뒤에 3년 예약된 EC2 예약 인스턴스 플릿을 사용합니다. 스팟 인스턴스와 함께 AWS Batch를 사용하여 온디맨드 가격의 50%인 최대 스팟 가격으로 야간 처리를 수행합니다. D. Amazon Kinesis Data Firehose를 사용하여 데이터를 Amazon Redshift에 저장하도록 수집 프로세스를 업데이트합니다. Amazon EventBridge를 사용하여 AWS Lambda 함수가 매일 밤 실행되도록 예약하고 Amazon Redshift를 쿼리하여 일일 통계를 생성합니다. Answer: B Explanation: Updating the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3 will reduce the need for EC2 instances and EBS volumes for data storage1. Using AWS Batch with Spot Instances to perform nightly processing will leverage the cost savings of Spot Instances, which are up to 90% cheaper than On-Demand Instances2. AWS Batch will also handle the scheduling and scaling of the processing jobs. Setting the maximum Spot price to 50% of the On-Demand price will reduce the chances of interruption and ensure that the processing is cost-effective.`;