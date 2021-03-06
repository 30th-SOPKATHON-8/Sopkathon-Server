## ๐ช ์ค์๋ด์

> ์ค๋์ ์๋ฐ์ด ๋ด์ผ์ ์๋ฐ์ด ๋  ์ ์๊ฒ ํ๋ ์๋น์ค์๋๋ค. <br>
> ์ผ์์์์ ๊ธฐ๋ถ ๋์ ๊ฐ์ ๊ณผ ์ข์ ๊ฐ์ ์ ์ ๋๋ฅผ ๊ธ์ก์ผ๋ก ํ์ฐํด์ ์๋ ฅํ๋ฉด ๊ฐ์ ์ ๋ํ ์์์ฆ์ ๋ง๋ค์ด์ค๋๋ค. <br>
> ๊ทธ ์์์ฆ์ ๋์ค์ ๊ฐ๊ณ๋ถ๋ก ๋ง๋ค์ด์ค๋๋ค. <br>
> ๊ฐ์ ์ ๊ธฐ๋ก์ ๋ณด๋ฉด์ ๋์ ์๋ฐ(์์)์ ์ํด ์ด๋ค ํ๋์ ํ  ์ ์์์ง, ๋๋ง์ ๊ฐ์  ์ฐธ๊ณ ์๊ฐ ๋  ์ ์์ต๋๋ค. <br>

![แแณแแณแแตแซแแฃแบ 2022-05-22 แแฉแแฎ 8 52 11](https://user-images.githubusercontent.com/39653584/169704024-7bd98865-76fa-4f5f-bd4a-7379707543eb.png)

<br>

## ๐ Server Developer

| [์๊ถ](https://github.com/youngkwon02) | [์๋ น](https://github.com/soryeongk) |
| :----------------------------------------: | :---------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/39653584?v=4" width="300px"> | <img src="https://avatars.githubusercontent.com/u/40630964?v=4" width="300px"> |

<br>

## ๐ Collection

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

## ๐ ์ฝ๋ ์ปจ๋ฒค์

* ์คํค๋ง ๋ณ์๋ช์ ์นด๋ฉ ์ผ์ด์ค๋ก ์์ฑ
* ๋ชจ๋ธ, ํ์ด๋ธ ์ด๋ฆ์ ํ์ค์นผ์ผ์ด์ค๋ก ์์ฑ
* ํ์: ํ์ค์นผ ์ผ์ด์ค๋ก ์์ฑ
* ํ์ค ํ์ผ ๋ด ๋ณ์/ํจ์๋ช์ ๋ชจ๋ ์นด๋ฉ์ผ์ด์ค๋ก ์์ฑ

<br>

## ๐ช ๋ธ๋์น ์ ๋ต

* deploy: ๋ฐฐํฌ๋ฅผ ์ํ ๋ธ๋์น๋ก ๊ฒ์ฆ์ด ๋ชจ๋  ๋๋ ์ต์ข ์ฝ๋๋ค์ด ์ฌ๋ผ๊ฐ๋๋ค. (์ง์  ์์  ๋ถ๊ฐ)
* develop: ๊ธฐ๋ฅ๊ฐ๋ฐ์ด ์๋ฃ๋ ์ฝ๋๋ฅผ ๋ชจ์ผ๋ ๋ธ๋์น์๋๋ค.
* feature: ๊ธฐ๋ฅ ๊ฐ๋ฐ์ ์ํ ๋ธ๋์น๋ก `feature/#์ด์๋ฒํธ`์ ํ์์ผ๋ก ์์ฑํฉ๋๋ค.

<br>

## ๐ ํ๋ก์ ํธ ํด๋๋ง

```
๐ฆ config                    // port, mongoURI ๋ฑ ์ค์ 
 โ ๐ index.ts

๐ฆ controllers               // service์์ ์ฒ๋ฆฌ๋ ๋ก์ง๋ค์ ์ ๋ฌ ๋ฐ์ ํด๋ผ์ด์ธํธ๋ก ๋ฟ๋ ค์ค
 โฃ ๐ index.ts
 โ ๐ BlahController.ts

๐ฆ interfaces                // type interface ๋ชจ์๋๊ธฐ - ํด๋๋ก ๋ถ๊ธฐํ์ง ์๊ณ  ํ ํ์ผ๋ณ๋ก ํด๋ ๋  ๋ฏ?!
 โ ๐ common
 โ โฃ ๐ PostBaseResponseDto.ts
 โ โฃ ๐ JwtPayloadInfo.ts
 โ โ ๐ index.ts
 โ ๐ user
   โฃ ๐ UserInfo.ts
   โฃ ๐ UserCreateDto.ts
   โ ๐ index.ts

๐ฆ loaders                   // db loader๋ฅผ ์ ์
 โ ๐ db.ts

๐ฆ middlewares               // middleware๊ฐ ํ์ํ๋ค๋ฉด ์ด๊ณณ์ ์ถ๊ฐ
 โ ๐ auth.ts                // auth ๊ฒ์ฌ ๋ฑ์ด ๋ค์ด๊ฐ ์ ์์

๐ฆ models                    // mongoose.Schema๋ฅผ ๋ชจ์๋๋ ๊ณณ
 โฃ ๐ User.ts
 โฃ ๐ Movie.ts
 โ ๐ index.ts

๐ฆ modules                   // statusCode, message, handler ๋ฑ ์ ์ญ์ ์ผ๋ก ํ์ํ ๊ฐ์ข utils๋ค์ ๋ชจ์๋๊ธฐ
 โ ๐ utils.ts

๐ฆ routes                    // endpoint ์ ์
 โฃ ๐ UserRouter.ts
 โ ๐ index.ts

๐ฆ services                  // ํด๋ผ์ด์ธํธ์ ์์ฒญ์ ์ฒ๋ฆฌํ  ๊ณณ -> controller๋ก ์ ๋ฌ ๋จ
 โฃ ๐ UserService.ts
 โ ๐ index.ts
```

<br>

## ๐พ package.json
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

## ๐ Server Architecture

<img width="596" alt="แแณแแณแแตแซแแฃแบ 2022-05-22 แแฉแแฅแซ 6 42 46" src="https://user-images.githubusercontent.com/39653584/169669882-92889003-6d98-49b4-894a-49933a87b653.png">
