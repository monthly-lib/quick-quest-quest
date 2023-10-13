const question_125=`QUESTION NO: 125 회사에는 Amazon DynamoDB를 스토리지 백엔드로 사용하는 지연 시간에 민감한 거래 플랫폼이 있습니다. 회사는 온디맨드 용량 모드를 사용하도록 DynamoDB 테이블을 구성했습니다. 솔루션 설계자는 거래 플랫폼의 성능을 개선하기 위한 솔루션을 설계해야 합니다. 새로운 솔루션은 거래 플랫폼의 고가용성을 보장해야 합니다. 최소 대기 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. 2노드 DynamoDB Accelerator(DAX) 클러스터 생성 DAX를 사용하여 데이터를 읽고 쓰도록 애플리케이션을 구성합니다. B. 3노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DAX를 사용하여 데이터를 읽고 DynamoDB 테이블에 직접 데이터를 쓰도록 애플리케이션을 구성합니다. C. 3노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DynamoDB 테이블에서 직접 데이터를 읽고 DAX를 사용하여 데이터를 쓰도록 애플리케이션을 구성합니다. D. 단일 노드 DynamoD8 Accelerator(DAX) 클러스터를 생성합니다. DAX를 사용하여 데이터를 읽고 DynamoD8 테이블에 직접 데이터를 쓰도록 애플리케이션을 구성합니다. Answer: B Explanation: A DAX cluster can be deployed with one or two nodes for development or test workloads. One- and two-node clusters are not fault-tolerant, and we don't recommend using fewer than three nodes for production use. If a one- or two-node cluster encounters software or hardware errors, the cluster can become unavailable or lose cached data.A DAX cluster can be deployed with one or two nodes for development or test workloads. One- and two-node clusters are not fault-tolerant, and we don't recommend using fewer than three nodes for production use. If a one- or two-node cluster encounters software or hardware errors, the cluster can become unavailable or lose cached data. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 C입니다.

트랜잭션 플랫폼의 성능을 향상시키고 고가용성을 보장하기 위해 솔루션 아키텍트는 3노드 DynamoDB Accelerator (DAX) 클러스터를 생성해야 합니다. 애플리케이션은 DynamoDB 테이블에서 직접 데이터를 읽고 DAX를 사용하여 데이터를 쓰도록 구성되어야 합니다.

3노드 DAX 클러스터를 생성하면 장애 허용성이 제공되며, 하나의 노드가 소프트웨어 또는 하드웨어 오류를 만나더라도 클러스터가 사용 가능한 상태를 유지합니다. 1노드 및 2노드 클러스터는 장애 허용성이 없으므로 프로덕션 환경에서 권장되지 않습니다.

참고: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html"`;