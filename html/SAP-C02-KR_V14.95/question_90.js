const question_90=`QUESTION NO: 90 한 회사가 AWS 클라우드에서 여러 프로젝트를 개발하고 호스팅하고 있습니다. 프로젝트는 AWS Organizations의 동일한 조직에 있는 여러 AWS 계정에서 개발됩니다. 회사는 비용 또는 클라우드 인프라를 소유 프로젝트에 할당해야 합니다. 모든 AWS 계정을 담당하는 팀은 여러 Amazon EC2 인스턴스에 비용 할당에 사용되는 프로젝트 태그가 없음을 발견했습니다. 솔루션 설계자는 문제를 해결하고 향후 문제가 발생하지 않도록 하기 위해 어떤 조치를 취해야 합니까? (3개를 선택하세요.) A. 태그가 누락된 리소스를 찾기 위해 각 계정에서 AWS Config 규칙을 생성합니다. B. 프로젝트 태그가 누락된 경우 조직에서 ec2:Runlnstances에 대한 거부 작업으로 SCP를 생성합니다. C. 조직에서 Amazon Inspector를 사용하여 태그가 누락된 리소스를 찾습니다. D. 프로젝트 태그가 누락된 경우 ec2:RunInstances에 대한 거부 작업으로 각 계정에 IAM 정책을 생성합니다. E. 조직에서 프로젝트 태그가 누락된 EC2 인스턴스 목록을 수집할 AWS Config 집계자를 생성합니다. F. AWS Security Hub를 사용하여 프로젝트 태그가 누락된 EC2 인스턴스 목록을 집계합니다. Answer: A,B,E Explanation: https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-accountdeployment. html https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_ex amples_tagging.html`;