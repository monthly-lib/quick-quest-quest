const question_26=`QUESTION NO: 26 한 회사에 여러 AWS 계정이 있습니다. 개발 팀은 클라우드 거버넌스 및 문제 해결 프로세스를 위한 자동화 프레임워크를 구축하고 있습니다. 자동화 프레임워크는 중앙 집중식 계정에서 AWS Lambda 함수를 사용합니다. 솔루션 설계자는 Lambda 함수가 회사의 각 AWS 계정에서 실행될 수 있도록 허용하는 최소 권한 정책을 구현해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택하세요.) A. 중앙 집중식 계정에서 Lambda 서비스를 신뢰할 수 있는 엔터티로 포함하는 IAM 역할을 생성합니다. 다른 AWS 계정의 역할을 맡도록 인라인 정책을 추가합니다. B. 다른 AWS 계정에서 최소 권한을 가진 IAM 역할을 생성합니다. 중앙 집중식 계정의 Lambda IAM 역할을 신뢰할 수 있는 엔터티로 추가합니다. C. 중앙 집중식 계정에서 다른 계정의 역할을 신뢰할 수 있는 엔터티로 갖는 IAM 역할을 생성합니다. 최소한의 권한을 제공합니다. D. 다른 AWS 계정에서 중앙 집중식 계정의 역할을 맡을 수 있는 권한이 있는 IAM 역할을 생성합니다. Lambda 서비스를 신뢰할 수 있는 엔터티로 추가합니다. E. 다른 AWS 계정에서 최소 권한이 있는 IAM 역할을 생성합니다. Lambda 서비스를 신뢰할 수 있는 엔터티로 추가합니다. Answer: A,B Explanation: https://medium.com/@it.melnichenko/invoke-a-lambda-across-multiple-aws-accounts- 8c094b2e70be`;