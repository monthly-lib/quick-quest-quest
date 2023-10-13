const question_9=`QUESTION NO: 9 배송 회사는 타사 경로 계획 애플리케이션을 AWS로 마이그레이션해야 합니다. 타사는 공용 레지스트리에서 지원되는 Docker 이미지를 제공합니다. 경로 맵을 생성하는 데 필요한 만큼의 컨테이너에서 이미지를 실행할 수 있습니다. 회사는 배송 기사가 허브에서 고객까지 최단 거리를 이동할 수 있도록 배송 영역을 공급 허브가 있는 구역으로 구분했습니다. 경로 맵을 생성하는 데 필요한 시간을 줄이기 위해 각 섹션은 섹션 영역에서만 주문을 처리하는 사용자 지정 구성과 함께 고유한 Docker 컨테이너 집합을 사용합니다. 회사는 실행 중인 컨테이너 수에 따라 리소스를 비용 효율적으로 할당할 수 있는 기능이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. Amazon EC2에서 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EKS CLI를 사용하여 -tags 옵션을 사용하여 포드에 사용자 지정 태그를 할당함으로써 포드에서 계획 애플리케이션을 시작합니다. B. AWS Fargate에서 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EKS CLI를 사용하여 계획 애플리케이션을 시작합니다. AWS CLI tag- resource API 호출을 사용하여 포드에 사용자 지정 태그를 할당합니다. C. Amazon EC2에서 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. run-tasks가 true로 설정된 AWS CLI를 사용하여 -tags 옵션을 사용하여 작업에 사용자 지정 태그를 할당함으로써 계획 애플리케이션을 시작합니다. D. AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. AWS CLI run-task 명령을 사용하고 enableECSManagedTags를 true로 설정하여 계획 애플리케이션을 시작합니다. --tags 옵션을 사용하여 작업에 사용자 지정 태그를 할당합니다. Answer: D Explanation: Amazon Elastic Container Service (ECS) on AWS Fargate is a fully managed service that allows you to run containers without having to manage the underlying infrastructure. When you launch tasks on Fargate, resources are automatically allocated based on the number of tasks running, which reduces the operational overhead. Using ECS on Fargate allows you to assign custom tags to tasks using the --tags option in the run-task command, as described in the documentation: https://docs.aws.amazon.com/cli/latest/reference/ecs/run-task.html You can also set enableECSManagedTags to true, which allows the service to automatically add the cluster name and service name as tags. https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placementconstraints. html#tag-based-scheduling`;