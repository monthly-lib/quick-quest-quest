const question_72=`QUESTION NO: 72 회사는 사용자가 문서를 업로드하는 전자 문서 관리 시스템을 구축하고 있습니다. 애플리케이션 스택은 완전히 서버리스이며 eu-central-1 리전의 AWS에서 실행됩니다. 이 시스템에는 Amazon S3를 원본으로 사용하여 Amazon CloudFront 배포를 사용하는 웹 애플리케이션이 포함되어 있습니다. 웹 애플리케이션은 Amazon API Gateway 지역 엔드포인트와 통신합니다. API Gateway API는 Amazon Aurora Serverless 데이터베이스에 메타데이터를 저장하고 문서를 S3 버킷에 저장하는 AWS Lambda 함수를 호출합니다. 이 회사는 꾸준히 성장하고 있으며 가장 큰 고객과 개념 증명을 완료했습니다. 회사는 유럽 밖에서 대기 시간을 개선해야 합니다. 이러한 요구 사항을 충족하는 작업 조합은 무엇입니까? (2개를 선택하세요.) A. S3 버킷에서 S3 Transfer Acceleration을 활성화합니다. 웹 애플리케이션이 Transfer Acceleration 서명 URL을 사용하는지 확인하십시오. B. AWS Global Accelerator에서 액셀러레이터를 생성합니다. 가속기를 CloudFront 배포에 연결합니다. C. API Gateway 지역 엔드포인트를 엣지 최적화 엔드포인트로 변경합니다. D. 전 세계에 흩어져 있는 다른 두 위치에 전체 스택을 프로비저닝합니다. Aurora 서버리스 클러스터에서 글로벌 데이터베이스를 사용하십시오. E. Lambda 함수와 Aurora Serverless 데이터베이스 사이에 Amazon RDS 프록시를 추가합니다. Answer: A,C(A,B인것 같다) Explanation: https://aws.amazon.com/global-accelerator/faqs/
    Option A (S3 Transfer Acceleration): This helps improve upload/download speeds to and from the S3 bucket, potentially reducing latency for users outside the EU-central-1 region.

    Option B (AWS Global Accelerator): This helps optimize global routing to your application, improving performance and reducing latency for users accessing the web application from various locations worldwide.

These options address the requirement of improving latency for users outside Europe.

GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 A와 B입니다.

A. S3 버킷에서 S3 Transfer Acceleration을 활성화합니다. 웹 애플리케이션이 Transfer Acceleration 서명 URL을 사용하는지 확인하십시오.
이 옵션은 올바릅니다. S3 Transfer Acceleration을 활성화함으로써 회사는 문서를 S3 버킷에 업로드하는 속도를 향상시킬 수 있습니다. 웹 애플리케이션은 성능 향상을 위해 Transfer Acceleration 엔드포인트를 사용하도록 구성되어야 합니다.

B. AWS Global Accelerator에서 액셀러레이터를 생성합니다. 가속기를 CloudFront 배포에 연결합니다.
이 옵션도 올바릅니다. AWS Global Accelerator에서 액셀러레이터를 생성하고 CloudFront 배포에 연결함으로써 회사는 웹 애플리케이션의 전역 성능을 향상시킬 수 있습니다. AWS Global Accelerator는 AWS 글로벌 네트워크 인프라를 사용하여 클라이언트 요청의 라우팅을 최적화하고 지연 시간을 줄입니다.

C. API Gateway 지역 엔드포인트를 엣지 최적화 엔드포인트로 변경합니다.
이 옵션은 올바르지 않습니다. API Gateway 지역 엔드포인트를 엣지 최적화 엔드포인트로 변경하는 것은 애플리케이션의 전역 성능을 직접적으로 향상시키지 않습니다. 엣지 최적화 엔드포인트는 API Gateway 엔드"`;