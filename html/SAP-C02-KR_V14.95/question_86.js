const question_86=`QUESTION NO: 86 소매 회사는 유럽에 온프레미스 데이터 센터가 있습니다. 이 회사는 또한 eu-west-1 및 useast- 1 리전을 포함하는 다중 리전 AWS를 보유하고 있습니다. 회사는 온프레미스 인프라에서 해당 리전 중 하나의 VPC로 네트워크 트래픽을 라우팅할 수 있기를 원합니다. 또한 회사는 해당 리전의 VPC 간에 직접 라우팅되는 트래픽을 지원해야 합니다. 네트워크에는 단일 장애 지점이 존재할 수 없습니다. 이 회사는 이미 온프레미스 데이터 센터에서 2개의 1Gbps AWS Direct Connect 연결을 생성했습니다. 각 연결은 고가용성을 위해 유럽의 별도 Direct Connect 위치로 이동합니다. 이 두 위치는 각각 DX-A 및 DX-B로 명명됩니다. 각 리전에는 해당 리전 내의 모든 VPC 간 트래픽을 라우팅하도록 구성된 단일 AWS Transit Gateway가 있습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. DX-A 연결에서 Direct Connect 게이트웨이로 개인 VIF를 만듭니다. 고가용성을 위해 DX-B 연결에서 동일한 Direct Connect 게이트웨이로 프라이빗 VIF를 생성합니다. eu-west-1 및 useast- 1 전송 게이트웨이를 모두 Direct Connect 게이트웨이와 연결합니다. 교차 리전 라우팅을 지원하기 위해 전송 게이트웨이를 서로 피어링합니다. B. DX-A 연결에서 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. eu-west-1 전송 게이트웨이를 이 Direct Connect 게이트웨이와 연결합니다. DX-B 연결에서 별도의 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. us-east-1 전송 게이트웨이를 이 별도의 Direct Connect 게이트웨이와 연결합니다. Direct Connect 게이트웨이를 서로 피어링하여 고가용성 및 리전 간 라우팅을 지원합니다. C. DX-A 연결에서 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. 고가용성을 위해 DXB 연결에서 동일한 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. eu-west-1 및 useast- 1 전송 게이트웨이를 모두 이 Direct Connect 게이트웨이와 연결합니다. 전송 게이트웨이 간에 트래픽을 라우팅하도록 Direct Connect 게이트웨이를 구성합니다. D. DX-A 연결에서 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. 고가용성을 위해 DX-B 연결에서 동일한 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. eu-west-1 및 us-east-1 전송 게이트웨이를 모두 이 Direct Connect 게이트웨이와 연결합니다. 교차 리전 라우팅을 지원하기 위해 전송 게이트웨이를 서로 피어링합니다. Answer: D Explanation: in this solution, two transit VIFs are created - one from the DX-A connection and one from the DX-B connection - into the same Direct Connect gateway for high availability. Both the eu -west-1 and us-east-1 transit gateways are then associated with this Direct Connect gateway. The transit gateways are then peered with each other to support cross-Region routing. This solution meets the requirements of the company by creating a highly available connection between the on-premises data center and the VPCs in both the eu-west-1 and us-east-1 regions, and by enabling direct traffic routing between VPCs in those regions.`;