const question_165=`QUESTION NO: 165 회사는 하이브리드 DNS 솔루션을 설계해야 합니다. 이 솔루션은 VPC 내에 저장된 리소스에 대해 도메인 cloud.example.com에 대해 Amazon Route 53 프라이빗 호스팅 영역을 사용합니다. 회사에는 다음과 같은 DNS 확인 요구 사항이 있습니다. * 온프레미스 시스템은 cloud.example.com을 확인하고 연결할 수 있어야 합니다. * 모든 VPC는 cloud.example.com을 확인할 수 있어야 합니다. 온프레미스 회사 네트워크와 AWS Transit Gateway 사이에 이미 AWS Direct Connect 연결이 있습니다. 회사는 최고의 성능으로 이러한 요구 사항을 충족하기 위해 어떤 아키텍처를 사용해야 합니까? A. 프라이빗 호스팅 영역을 모든 VPC에 연결합니다. 공유 서비스 VPC에서 Route 53 인바운드 해석기를 생성합니다. 모든 VPC를 전송 게이트웨이에 연결하고 인바운드 해석기를 가리키는 cloud.example.com에 대한 온프레미스 DNS 서버에서 전달 규칙을 생성합니다. B. 프라이빗 호스팅 영역을 모든 VPC에 연결합니다. 공유 서비스 VPC에 Amazon EC2 조건부 전달자를 배포합니다. 모든 VPC를 transit gateway에 연결하고 조건부 전달자를 가리키는 cloud.example.com에 대한 온프레미스 DNS 서버에서 전달 규칙을 생성합니다. C. 프라이빗 호스팅 영역을 공유 서비스 VPC에 연결합니다. 공유 서비스 VPC에서 Route 53 아웃바운드 해석기를 생성합니다. 모든 VPC를 전송 게이트웨이에 연결하고 아웃바운드 해석기를 가리키는 cloud.example.com에 대한 온프레미스 DNS 서버에서 전달 규칙을 생성합니다. D. 프라이빗 호스팅 영역을 공유 서비스 VPC에 연결합니다. 공유 서비스 VPC에서 Route 53 인바운드 해석기를 생성합니다. 공유 서비스 VPC를 transit gateway에 연결하고 인바운드 해석기를 가리키는 cloud.example.com에 대한 온프레미스 DNS 서버에서 전달 규칙을 생성합니다. Answer: A Explanation: Amazon Route 53 Resolver is a managed DNS resolver service from Route 53 that helps to create conditional forwarding rules to redirect query traffic1. By associating the private hosted zone to all the VPCs, the solutions architect can enable DNS resolution for cloud.example.com within the VPCs. By creating a Route 53 inbound resolver in the shared services VPC, the solutions architect can enable DNS resolution for cloud.example.com from on-premises systems. By attaching all VPCs to the transit gateway, the solutions architect can enable connectivity between the VPCs and the on-premises network through AWS Direct Connect. By creating forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver, the solutions architect can direct DNS queries for cloud.example.com to the Route 53 Resolver endpoint in AWS. This solution will provide the highest performance as it leverages Route 53 Resolver's optimized routing and caching capabilities.`;