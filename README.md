# 서비스 이름

오시내시

# 서비스 소개

오늘의 X발이 내일의 시발이 될 수 있게 하는 서비스입니다.
일상에서의 기분 나쁜 감정과 좋은 감정의 정도를 금액으로 환산해서 입력하면 감정에 대한 영수증을 만들어줍니다.
그 영수증은 나중에 가계부로 만들어줍니다.
감정의 기록을 보면서 나의 시발(시작)을 위해 어떤 행동을 할 수 있을지, 나만의 감정 참고서가 될 수 있습니다.

# 개발 담당 부분

* 유저 total record 조회: 김소령
* 유저 record list 조회: 영권
* 유저 record 추가: 김소령

# 코드 컨벤션

* 스키마 변수명은 카멜 케이스로 작성
* 모델, 테이블 이름은 파스칼케이스로 작성
* 타입: 파스칼 케이스로 작성
* 타스 파일 내 변수/함수명은 모두 카멜케이스로 작성

변수명 지정법

* 유저: user
* 비용, 가격: price
* 내용: content
* 시발비용인가?: isXibal

# 브랜치 전략

* deploy: 배포를 위한 브랜치로 검증이 모든 끝난 최종 코드들이 올라갑니다. (직접 수정 불가)
* develop: 기능개발이 완료된 코드를 모으는 브랜치입니다.
* feature: 기능 개발을 위한 브랜치로 `feature/#이슈번호`의 형식으로 작성합니다.

# 프로젝트 폴더링

```
📦 config                    // port, mongoURI 등 설정
 ┗ 📜 index.ts

📦 controllers               // service에서 처리된 로직들을 전달 받아 클라이언트로 뿌려줌
 ┣ 📜 index.ts
 ┗ 📜 BlahController.ts

📦 interfaces                // type interface 모아두기 - 폴더로 분기하지 않고 한 파일별로 해도 될 듯?!
 ┗ 📂 common
 ┃ ┣ 📜 PostBaseResponseDto.ts
 ┃ ┣ 📜 JwtPayloadInfo.ts
 ┃ ┗ 📜 index.ts
 ┗ 📂 user
   ┣ 📜 UserInfo.ts
   ┣ 📜 UserCreateDto.ts
   ┗ 📜 index.ts

📦 loaders                   // db loader를 정의
 ┗ 📜 db.ts

📦 middlewares               // middleware가 필요하다면 이곳에 추가
 ┗ 📜 auth.ts                // auth 검사 등이 들어갈 수 있음

📦 models                    // mongoose.Schema를 모아두는 곳
 ┣ 📜 User.ts
 ┣ 📜 Movie.ts
 ┗ 📜 index.ts

📦 modules                   // statusCode, message, handler 등 전역적으로 필요한 각종 utils들을 모아두기
 ┗ 📜 utils.ts

📦 routes                    // endpoint 정의
 ┣ 📜 UserRouter.ts
 ┗ 📜 index.ts

📦 services                  // 클라이언트의 요청을 처리할 곳 -> controller로 전달 됨
 ┣ 📜 UserService.ts
 ┗ 📜 index.ts
```
