const question_66=`QUESTION NO: 66 회사에서 사용자 인증을 위해 온프레미스 Active Directory 서비스를 사용하고 있습니다. 회사는 동일한 인증 서비스를 사용하여 AWS Organizations를 사용하는 회사의 AWS 계정에 로그인하려고 합니다. 온프레미스 환경과 회사의 모든 AWS 계정 간에 AWS Site-to-Site VPN 연결이 이미 존재합니다. 회사의 보안 정책에 따라 사용자 그룹 및 역할에 따라 계정에 대한 조건부 액세스가 필요합니다. 사용자 ID는 단일 위치에서 관리되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? A. SAML 2.0을 사용하여 Active Directory에 연결하도록 AWS Single Sign-On(AWS SSO)을 구성합니다. SCIM(System for Cross-domain Identity Management) v2.0 프로토콜을 사용하여 자동 프로비저닝을 활성화합니다. ABAC(속성 기반 액세스 제어)를 사용하여 AWS 계정에 대한 액세스 권한을 부여합니다. B. AWS SSO를 자격 증명 소스로 사용하여 AWS Single Sign-On(AWS SSO)을 구성합니다. SCIM(System for Cross-domain Identity Management) v2.0 프로토콜을 사용하여 자동 프로비저닝을 활성화합니다. AWS SSO 권한 집합을 사용하여 AWS 계정에 대한 액세스 권한을 부여합니다. C. 회사의 AWS 계정 중 하나에서 SAML 2.0 자격 증명 공급자를 사용하도록 AWS Identity and Access Management(IAM)를 구성합니다. 연동 사용자에 매핑된 IAM 사용자를 프로비저닝합니다. Active Directory의 적절한 그룹에 해당하는 액세스 권한을 부여합니다. 교차 계정 IAM 사용자를 사용하여 필요한 AWS 계정에 대한 액세스 권한을 부여합니다. D. 회사의 AWS 계정 중 하나에서 OIDC(OpenID Connect) 자격 증명 공급자를 사용하도록 AWS Identity and Access Management(IAM)를 구성합니다. Active Directory의 적절한 그룹에 해당하는 연동 사용자의 AWS 계정에 대한 액세스 권한을 부여하는 IAM 역할을 프로비저닝합니다. 교차 계정 IAM 역할을 사용하여 필요한 AWS 계정에 대한 액세스 권한을 부여합니다. Answer: D(A인것 같음) Explanation: https://aws.amazon.com/blogs/aws/new-attributes-based-access-control-with-aws-singlesign-on/
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다. 올바른 답은 D입니다.

설명: 사용자 인증을 위해 온프레미스 Active Directory 서비스를 사용하고 사용자 그룹 및 역할에 기반한 조건부 액세스를 AWS 계정에 활성화하기 위해서는, 솔루션은 AWS Identity and Access Management (IAM)을 구성하여 OIDC (OpenID Connect) 식별 공급자를 사용하는 것이 필요합니다. 이를 통해 Active Directory 그룹의 매핑된 사용자에게 적절한 AWS 계정에 대한 액세스를 부여하는 IAM 역할을 프로비저닝할 수 있습니다. 그런 다음, 교차 계정 IAM 역할을 사용하여 필요한 AWS 계정에 액세스를 부여합니다.

제공된 링크는 올바른 솔루션에 대한 정보를 제공하지 않습니다."`;