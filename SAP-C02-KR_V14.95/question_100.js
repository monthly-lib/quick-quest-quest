const question_100=`QUESTION NO: 100 한 회사가 최근 AWS에 애플리케이션을 배포했습니다. 애플리케이션은 Amazon DynamoDB를 사용합니다. 회사는 애플리케이션 부하를 측정하고 DynamoDB 테이블의 RCU 및 WCU를 예상 최대 부하와 일치하도록 구성했습니다. 최대 부하는 4시간 동안 일주일에 한 번 발생하며 평균 부하의 두 배입니다. 애플리케이션 로드는 나머지 주의 평균 로드에 가깝습니다. 액세스 패턴에는 테이블 읽기보다 테이블에 대한 쓰기가 더 많이 포함됩니다. 솔루션 설계자는 테이블 비용을 최소화하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. AWS Application Auto Scaling을 사용하여 피크 기간 동안 용량을 늘립니다. 예약된 RCU 및 WCU를 구매하여 평균 부하에 맞춥니다. B. 테이블에 대한 온디맨드 용량 모드를 구성합니다. C. 테이블 앞에서 DynamoDB Accelerator(DAX)를 구성합니다. 프로비저닝된 읽기 용량을 테이블의 새로운 최대 로드와 일치하도록 줄입니다. D. 테이블 앞에 DynamoDB Accelerator(DAX)를 구성합니다. 테이블에 대한 온디맨드 용량 모드를 구성합니다. Answer: D(A인것같다) Explanation: This solution meets the requirements by using Application Auto Scaling to automatically increase capacity during the peak period, which will handle the double the average load. And by purchasing reserved RCUs and WCUs to match the average load, it will minimize the cost of the table for the rest of the week when the load is close to the average. 
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 A입니다.

설명:

요구 사항을 충족하면서 테이블의 비용을 최소화하기 위해 솔루션은 AWS Application Auto Scaling을 사용하여 피크 기간 동안 자동으로 용량을 증가시켜야 합니다. 이렇게 하면 평균 부하의 두 배를 처리할 수 있습니다. 평균 부하와 일치하는 예약된 RCUs와 WCUs를 구매하여 나머지 주에 테이블의 비용을 최소화할 수 있습니다.

테이블에 대한 온디맨드 용량 모드를 구성하는 옵션 B는 피크 기간 동안 자동으로 확장할 수 있는 기능을 제공하지 않으며 더 높은 비용을 초래할 수 있습니다.

DynamoDB Accelerator (DAX)를 구성하는 옵션 C는 테이블의 비용을 최소화하는 요구 사항을 충족시키지 않습니다. DAX는 읽기 중심 워크로드의 성능을 향상시키는 데 사용되지만 용량 프로비저닝 비용을 줄이지는 않습니다.

따라서 올바른 답은 A입니다."`;