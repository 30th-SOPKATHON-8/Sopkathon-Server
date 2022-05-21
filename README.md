## 🪙 오시내시

> 오늘의 시발이 내일의 시발이 될 수 있게 하는 서비스입니다. <br>
> 일상에서의 기분 나쁜 감정과 좋은 감정의 정도를 금액으로 환산해서 입력하면 감정에 대한 영수증을 만들어줍니다. <br>
> 그 영수증은 나중에 가계부로 만들어줍니다. <br>
> 감정의 기록을 보면서 나의 시발(시작)을 위해 어떤 행동을 할 수 있을지, 나만의 감정 참고서가 될 수 있습니다. <br>

<br>

## 🌟 Server Developer

| [영권](https://github.com/youngkwon02) | [소령](https://github.com/soryeongk) |
| :----------------------------------------: | :---------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/39653584?v=4" width="300px"> | <img src="https://avatars.githubusercontent.com/u/40630964?v=4" width="300px"> |
|              기록 전체조회 API 구현            |         Total 기록 조회, 기록 추가 API 구현          |

<br>

## 🎟 Collection

```typescript
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
});
```

```typescript
const recordSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    isXibal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);
```

<br>

## 📑 코드 컨벤션

* 스키마 변수명은 카멜 케이스로 작성
* 모델, 테이블 이름은 파스칼케이스로 작성
* 타입: 파스칼 케이스로 작성
* 타스 파일 내 변수/함수명은 모두 카멜케이스로 작성

<br>

## 🪃 브랜치 전략

* deploy: 배포를 위한 브랜치로 검증이 모든 끝난 최종 코드들이 올라갑니다. (직접 수정 불가)
* develop: 기능개발이 완료된 코드를 모으는 브랜치입니다.
* feature: 기능 개발을 위한 브랜치로 `feature/#이슈번호`의 형식으로 작성합니다.

<br>

## 📁 프로젝트 폴더링

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

<br>

## 👾 package.json
```json
{
  "name": "server-29m",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "lint": "yarn run lint-prettier && yarn run lint-eslint",
    "lint-eslint": "eslint --ignore-path .gitignore src/**/*ts --fix",
    "lint-prettier": "prettier --write \"src/**/*.(ts|tsx)\""
  },
  "lint-staged": {
    "src/**/*.(ts|tsx)": [
      "yarn lint"
    ]
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "eslint": "^8.16.0",
    "nodemon": "^2.0.15",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "bcryptjs": "^2.4.3",
    "dayjs": "^1.11.2",
    "dotenv": "^16.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "lint-staged": "^12.1.5",
    "mongoose": "^6.3.1",
    "prettier": "^2.5.1"
  }
}
```

<br>

## 🕍 Server Architecture

<img width="596" alt="스크린샷 2022-05-22 오전 6 42 46" src="https://user-images.githubusercontent.com/39653584/169669882-92889003-6d98-49b4-894a-49933a87b653.png">
