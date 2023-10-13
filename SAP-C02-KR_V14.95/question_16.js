const question_16=`QUESTION NO: 16 글로벌 사무소가 있는 회사에는 단일 AWS 리전에 대한 단일 1Gbps AWS Direct Connect 연결이 있습니다. 회사의 온프레미스 네트워크는 연결을 사용하여 AWS 클라우드에 있는 회사 리소스와 통신합니다. 연결에는 단일 VPC에 연결되는 단일 프라이빗 가상 인터페이스가 있습니다. 솔루션 설계자는 동일한 리전에서 중복 Direct Connect 연결을 추가하는 솔루션을 구현해야 합니다. 솔루션은 또한 회사가 다른 지역으로 확장함에 따라 동일한 Direct Connect 연결 쌍을 통해 다른 지역에 대한 연결을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. Direct Connect 게이트웨이를 프로비저닝합니다. 기존 연결에서 기존 프라이빗 가상 인터페이스를 삭제합니다. 두 번째 Direct Connect 연결을 만듭니다. 각 연결에서 새 프라이빗 가상 인터레이스를 생성하고 두 프라이빗 가상 인터페이스를 Direct Connect 게이트웨이에 연결합니다. Direct Connect 게이트웨이를 단일 VPC에 연결합니다. B. 기존 개인 가상 인터페이스를 유지합니다. 두 번째 Direct Connect 연결을 만듭니다. 새 연결에서 새 프라이빗 가상 인터페이스를 생성하고 새 프라이빗 가상 인터페이스를 단일 VPC에 연결합니다. C. 기존 프라이빗 가상 인터페이스를 유지합니다. 두 번째 Direct Connect 연결을 만듭니다. 새 연결에서 새 퍼블릭 가상 인터페이스를 생성하고 새 퍼블릭 가상 인터페이스를 단일 VPC에 연결합니다. D. 전송 게이트웨이를 프로비저닝합니다. 기존 연결에서 기존 프라이빗 가상 인터페이스를 삭제합니다. 두 번째 Direct Connect 연결을 만듭니다. 각 연결에서 새 프라이빗 가상 인터페이스를 생성하고 두 프라이빗 가상 인터페이스를 전송 게이트웨이에 연결합니다. 전송 게이트웨이를 단일 VPC와 연결합니다. Answer: A Explanation: A Direct Connect gateway is a globally available resource. You can create the Direct Connect gateway in any Region and access it from all other Regions. The following describe scenarios where you can use a Direct Connect gateway. https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gatewaysintro. html`;