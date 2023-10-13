const question_61=`QUESTION NO: 61 회사에서 일부 애플리케이션을 AWS로 마이그레이션하고 있습니다. 이 회사는 네트워킹 및 보안 전략을 확정한 후 신속하게 애플리케이션을 마이그레이션하고 현대화하려고 합니다. 회사는 중앙 네트워크 계정에서 AWS Direct Connection 연결을 설정했습니다. 이 회사는 가까운 장래에 수백 개의 AWS 계정과 VPC를 갖게 될 것으로 예상합니다. 회사 네트워크는 AWS의 리소스에 원활하게 액세스할 수 있어야 하며 모든 VPC와 통신할 수 있어야 합니다. 회사는 또한 온프레미스 데이터 센터를 통해 클라우드 리소스를 인터넷으로 라우팅하려고 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.) A. 중앙 계정에 Direct Connect 게이트웨이를 생성합니다. 각 계정에서 Direct Connect 게이트웨이와 모든 가상 프라이빗 게이트웨이의 계정 ID를 사용하여 연결 제안을 생성합니다. B. 중앙 네트워크 계정에서 Direct Connect 게이트웨이 및 전송 게이트웨이를 생성합니다. 전송 VIF를 사용하여 전송 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. C. 인터넷 게이트웨이를 프로비저닝합니다. 인터넷 게이트웨이를 서브넷에 연결합니다. 게이트웨이를 통한 인터넷 트래픽을 허용합니다. D. 전송 게이트웨이를 다른 계정과 공유합니다. Transit Gateway에 VPC를 연결합니다. E. 필요에 따라 VPC 피어링을 프로비저닝합니다. F. 프라이빗 서브넷만 프로비저닝합니다. 전송 게이트웨이 및 고객 게이트웨이에서 필요한 경로를 열어 AWS의 아웃바운드 인터넷 트래픽이 데이터 센터에서 실행되는 NAT 서비스를 통해 흐를 수 있도록 합니다. Answer: B,D,F Explanation: Option A is incorrect because creating a Direct Connect gateway in the central account and creating an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway does not enable active-passive failover between the regions. A Direct Connect gateway is a globally available resource that enables you to connect your AWS Direct Connect connection over a private virtual interface (VIF) to one or more VPCs in any AWS Region. A virtual private gateway is the VPN concentrator on the Amazon side of a VPN connection. You can associate a Direct Connect gateway with either a transit gateway or a virtual private gateway. However, a Direct Connect gateway does not provide any load balancing or failover capabilities by itself1 Option B is correct because creating a Direct Connect gateway and a transit gateway in the central network account and attaching the transit gateway to the Direct Connect gateway by using a transit VIF meets the requirement of enabling the corporate network to access the resources on AWS seamlessly and also to communicate with all the VPCs. A transit VIF is a type of private VIF that you can use to connect your AWS Direct Connect connection to a transit gateway or a Direct Connect gateway. A transit gateway is a network transit hub that you can use to interconnect your VPCs and on-premises networks. By using a transit VIF, you can route traffic between your on-premises network and multiple VPCs across different AWS accounts and Regions through a single connection23 Option C is incorrect because provisioning an internet gateway, attaching the internet gateway to subnets, and allowing internet traffic through the gateway does not meet the requirement of routing cloud resources to the internet through its onpremises data center. An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. An internet gateway serves two purposes: to provide a target in your VPC route tables for internet-routable traffic, and to perform network address translation (NAT) for instances that have been assigned public IPv4 addresses. By using an internet gateway, you are routing cloud resources directly to the internet, not through your on-premises data center. Option D is correct because sharing the transit gateway with other accounts and attaching VPCs to the transit gateway meets the requirement of enabling the corporate network to access the resources on AWS seamlessly and also to communicate with all the VPCs. You can share your transit gateway with other AWS accounts within the same organization by using AWS Resource Access Manager (AWS RAM). This allows you to centrally manage connectivity from multiple accounts without having to create individual peering connections between VPCs or duplicate network appliances in each account. You can attach VPCs from different accounts and Regions to your shared transit gateway and enable routing between them. Option E is incorrect because provisioning VPC peering as necessary does not meet the requirement of enabling the corporate network to access the resources on AWS seamlessly and also to communicate with all the VPCs. VPC peering is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account within a single Region. However, VPC peering does not allow you to route traffic from your on-premises network to your VPCs or between multiple Regions. You would need to create multiple VPN connections or Direct Connect connections for each VPC peering connection, which increases operational complexity and costs. Option F is correct because provisioning only private subnets, opening the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center meets the requirement of routing cloud resources to the internet through its on-premises data center. A private subnet is a subnet that's associated with a route table that has no route to an internet gateway. Instances in a private subnet can communicate with other instances in the same VPC but cannot access resources on the internet directly. To enable outbound internet access from instances in private subnets, you can use NAT devices such as NAT gateways or NAT instances that are deployed in public subnets. A public subnet is a subnet that's associated with a route table that has a route to an internet gateway. Alternatively, you can use your on-premises data center as a NAT device by configuring routes on your transit gateway and customer gateway that direct outbound internet traffic from your private subnets through your VPN connection or Direct Connect connection. This way, you can route cloud resources to the internet through your on-premises data center instead of using an internet gateway.`;