const question_148=`QUESTION NO: 148 한 회사에서 AWS CloudFormation 스택에 배포된 AWS Lambda를 기반으로 애플리케이션을 구축했습니다. 웹 애플리케이션의 마지막 프로덕션 릴리스에서 몇 분 동안 중단되는 문제가 발생했습니다. 솔루션 설계자는 카나리아 릴리스를 지원하도록 배포 프로세스를 조정해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 새로 배포된 Lambda 함수 버전마다 별칭을 만듭니다. 라우팅 구성 파라미터와 함께 AWS CLI update-alias 명령을 사용하여 로드를 분산합니다. B. 애플리케이션을 새 CloudFormation 스택에 배포합니다. Amazon Route 53 가중 라우팅 정책을 사용하여 로드를 분산합니다. C. 새로 배포된 모든 Lambda 함수에 대한 버전을 생성합니다. 라우팅 구성 파라미터와 함께 AWS CLI update-function-configuration 명령을 사용하여 로드를 분산합니다. D. AWS CodeDeploy를 구성하고 배포 구성에서 CodeDeployDefault.OneAtATime을 사용하여 로드를 분산합니다. Answer: A Explanation: https://aws.amazon.com/blogs/compute/implementing-canary-deployments-of-aws-lambdafunctions-with-alias-traffic-shifting/ https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html
GPT 3.5 says "정답은 A입니다.

카나리아 릴리스를 지원하기 위한 솔루션은 각 새로 배포된 람다 함수 버전에 대해 별칭을 생성하고 AWS CLI의 update-alias 명령을 사용하여 라우팅 구성 매개변수를 사용하여 부하를 분산하는 것입니다. 이를 통해 전체 애플리케이션에 영향을 주지 않고 새 버전을 점진적으로 배포하고 테스트할 수 있습니다.

B 옵션은 새로운 CloudFormation 스택에 애플리케이션을 배포하고 Amazon Route 53 가중치 라우팅 정책을 사용하여 부하를 분산하지만, 새 버전을 점진적으로 배포하는 기능을 제공하지 않습니다.

C 옵션은 모든 새로 배포된 람다 함수에 대해 버전을 생성하고 AWS CLI의 update-function-configuration 명령을 사용하여 라우팅 구성 매개변수를 사용하여 부하를 분산하지만, 새 버전을 점진적으로 배포하는 기능을 제공하지 않습니다.

D 옵션은 AWS CodeDeploy를 구성하고 CodeDeployDefault.OneAtATime 배포 구성을 사용하여 부하를 분산하는 것은 애플리케이션을 배포하는 데는 작동하지만, 명시적으로 AWS 람다 함수의 카나리아 릴리스를 지원하는 요구 사항을 다루지 않습니다."`;