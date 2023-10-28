const question_180=`QUESTION NO: 180 소매 회사는 비즈니스 파트너인 다른 회사에 일련의 데이터 파일을 제공해야 합니다. 이 파일은 소매 회사에 속한 계정 A의 Amazon S3 버킷에 저장됩니다. 비즈니스 파트너 회사는 오전 1시 사용자 중 한 명을 원합니다. User_DataProcessor. 자신의 AWS 계정(계정 B)에서 파일에 액세스합니다. User_DataProcessor가 S3 버킷에 성공적으로 액세스할 수 있도록 회사에서 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.) 
A. 계정에서 S3 버킷에 대한 교차 출처 리소스 공유(CORS) 기능을 켭니다. 
B. 계정 A에서 S3 버킷 정책을 다음과 같이 설정합니다. 
{
    "Effect": "Allow",
    "Action": [
        "s3:GetOjbect",
        "s3:ListBucket""
    ],
    "Resource": "arn:aws:s3:::AccountABucketName/*"
}
C. 계정 A에서 S3 버킷 정책을 다음과 같이 설정합니다. 
{
    "Effect": "Allow",
    "Pricipal": {
        "AWS": "arn:aws:iam::AccountB:user/User_DataProcessr"
    ],
    "Action": [
        "s3:GetObject",
        "s3:ListBuecket"
    ],
    "Resource": [
        "arn:aws:s3:::AccountABucketName/*"
    ]
}
D. 계정 B에서 User_DataProcessor의 권한을 다음과 같이 설정합니다. 
{
    "Effect": "Allow",
    "Action": [
        "s3:GetObject",
        "s3:ListBuecket"
    ],
    "Resource": "arn:aws:s3:::AccountABucketName/*"
}
E. 계정 B에서 User_DataProcessor의 권한을 다음과 같이 설정합니다. 
{
    "Effect": "Allow",
    "Pricipal": {
        "AWS": "arn:aws:iam::AccountB:user/User_DataProcessr"
    ],
    "Action": [
        "s3:GetObject",
        "s3:ListBuecket"
    ],
    "Resource": [
        "arn:aws:s3:::AccountABucketName/*"
    ]
}
Answer: C,D Explanation: https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/
GPT 3.5 says "텍스트에서 제공된 답변은 잘못되었습니다.

Account B의 User_DataProcessor가 Account A가 소유한 S3 버킷의 데이터 파일에 액세스할 수 있도록 하려면 다음 단계를 수행해야 합니다:

1. Account A에서 S3 버킷 정책을 설정하여 Account B에서의 액세스를 허용합니다. 올바른 정책은 다음과 같습니다:

{
    ""Version"": ""2012-10-17"",
    ""Statement"": [
        {
            ""Effect"": ""Allow"",
            ""Principal"": {
                ""AWS"": ""arn:aws:iam::AccountBID:user/User_DataProcessor""
            },
            ""Action"": ""s3:GetObject"",
            ""Resource"": ""arn:aws:s3:::bucket-name/*""
        }
    ]
}

""AccountBID""를 Account B의 실제 AWS 계정 ID로, ""bucket-name""을 Account A의 S3 버킷 이름으로 대체하세요.

2. Account B에서 Account A의 S3 버킷에 User_DataProcessor가 액세스할 수 있는 IAM 정책을 생성합니다. 올바른 정책은 다음과 같습니다:

{
    ""Version"": ""2012-10-17"",
    ""Statement"": [
        {
            ""Effect"": ""Allow"",
            ""Action"": ""s3:GetObject"",
            ""Resource"": ""arn:aws:s3:::bucket-name/*""
        }
    ]
}

""bucket-name""을 Account A의 S3 버킷 이름으로 대체하세요.

3. Account B의 IAM 사용자 User_DataProcessor에 step 2에서 생성한 IAM 정책을 연결합니다.

따라서, 올바른 답은 C와 D입니다."`;