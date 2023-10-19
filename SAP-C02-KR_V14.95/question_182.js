const question_182=`QUESTION NO: 182 회사는 개발용 AWS 계정이 몇 개 있고 프로덕션 애플리케이션을 AWS로 이동하려고 합니다. 회사는 유휴 상태의 Amazon Elastic Block Store(Amazon EBS) 암호화를 현재 프로덕션 계정과 향후 프로덕션 계정에만 적용해야 합니다. 이 회사는 빌트인 청사진과 가드레일을 포함하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.) A. AWS CloudFormation StackSets를 사용하여 프로덕션 계정에 AWS Config 규칙을 배포합니다. B. 기존 개발자 계정에서 새 AWS Control Tower 랜딩 존을 생성합니다. 계정에 대한 OU를 만듭니다. 프로덕션 및 개발 OU에 각각 프로덕션 및 개발 계정을 추가합니다. C. 회사의 마스터 계정에서 새로운 AWS Control Tower 랜딩 존을 생성합니다. 프로덕션 및 개발 OU에 프로덕션 및 개발 계정을 추가합니다. 각기. D. AWS Organizations에서 조직에 가입하도록 기존 계정을 초대합니다. 준수를 보장하기 위해 SCP를 생성합니다. E. 마스터 계정에서 가드레일을 생성하여 EBS 암호화를 감지합니다. F. 프로덕션 OU에 대한 가드레일을 생성하여 EBS 암호화를 감지합니다. Answer: C,D,F Explanation: https://docs.aws.amazon.com/controltower/latest/userguide/controls.html https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommendedcontrols.html#ebs-enable-encryption AWS is now transitioning the previous term 'guardrail' new term 'control'.
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 질문에서 언급된 요구 사항을 충족하기 위한 올바른 단계 조합은 다음과 같습니다:

C. 마스터 계정에서 새로운 AWS Control Tower 랜딩 존을 생성합니다. 프로덕션 계정과 개발 계정을 각각 프로덕션 OU와 개발 OU에 추가합니다.

D. 기존 계정을 AWS Organizations에서 조직에 가입하도록 초대합니다. SCP(서비스 제어 정책)를 생성하여 규정 준수를 보장합니다.

F. 프로덕션 OU에 EBS 암호화를 감지하기 위한 가드레일을 생성합니다.

텍스트에서 제공된 설명은 올바릅니다. ""가드레일"" 용어는 AWS Control Tower에서 ""컨트롤""로 전환되었습니다."`;