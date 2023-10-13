const question_74=`QUESTION NO: 74 비디오 처리 회사는 회사의 온프레미스 네트워크 연결 스토리지 시스템에 수천 개의 파일로 저장된 600TB의 압축 데이터를 사용하여 기계 학습(ML) 모델을 구축하려고 합니다. 이 회사는 ML 실험에 필요한 컴퓨팅 리소스가 온프레미스에 없으며 AWS를 사용하려고 합니다. 회사는 3주 이내에 AWS로 데이터 전송을 완료해야 합니다. 데이터 전송은 일회성 전송입니다. 데이터는 전송 중에 암호화되어야 합니다. 회사 인터넷 연결의 측정된 업로드 속도는 100Mbps이며 여러 부서에서 연결을 공유합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까? A. AWS Management Console을 사용하여 여러 AWS Snowball Edge Storage Optimized 장치를 주문하십시오. 대상 S3 버킷으로 디바이스를 구성합니다. 데이터를 장치에 복사합니다. 기기를 AWS로 반송합니다. B. 회사 위치와 가장 가까운 AWS 리전 간에 10Gbps AWS Direct Connect 연결을 설정합니다. VPN 연결을 통해 데이터를 리전으로 전송하여 Amazon S3에 데이터를 저장합니다. C. 온프레미스 네트워크 스토리지와 가장 가까운 AWS 리전 간에 VPN 연결을 생성합니다. VPN 연결을 통해 데이터를 전송합니다. D. 온프레미스에 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 대상 S3 버킷으로 파일 게이트웨이를 구성합니다. 파일 게이트웨이에 데이터를 복사합니다. Answer: A Explanation: This solution will meet the requirements of the company as it provides a secure, costeffective and fast way of transferring large data sets from on-premises to AWS. Snowball Edge devices encrypt the data during transfer, and the devices are shipped back to AWS for import into S3. This option is more cost effective than using Direct Connect or VPN connections as it does not require the company to pay for long-term dedicated connections.`;