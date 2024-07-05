## Next.js

리액트 위에서 돌아가는 프레임워크, 서버가 없을 때도 next 서버를 실행 할 순 있지만,
원칙적으로는 백엔드를 따로 두는것을 추천한다.

## 프로젝트 세팅하기

```bash
npx create-next-app@latest
```

- app router - 폴더 구조가 달라짐, layout 기능이 생김, page별로 권한체크가 미들웨어로 쉽게 가능하다. 서버 컴포넌트 적극 활용, next 서버에서 리액트를 미리 렌더링해서 완성된
  html를 전송시켜준다. 여러모로 이점이 많음 ,서버 쪽에서 캐시를 적극 활용해야 한다. 서버 부담 줄여줌
- page router - layout 기능이 없다.

## 폴더구조

public
사이트에서 쓰일 이미지는 public 폴더에 넣어두자.
모든 사람이 접근가능

src - app
src 폴더의 경로가 @ , 예시) @/app/layout
app - 주소와 관련있는 파일들, 라우팅
next.config.js - next에 대한 설정
tsconfig.json - ts설정파일

## app

- layout.tsx

```ts
export default function RootLayout({
  // 최상위 레이아웃
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

page컴포넌트가 children안으로 들어감, 레이아웃이 페이지를 포함하고있다.
로그인 유무에 따른 레이아웃이 다름

- 로그인 경로

  > https://twitter.com/i/flow/login

- 회원가입 경로

> https://twitter.com/i/flow/signup

src > app > i > flow > login/signup

- 회원일 때
- 홈
  > https://twitter.com/home
- 탐색하기
  > https://twitter.com/explore
- 쪽지

  > https://twitter.com/messages

- 프로필 (user의 페이지)

  > https://twitter.com/[username]

  <img width="325" alt="스크린샷 2023-12-25 오후 4 13 04" src="https://github.com/cocorig/Next.js/assets/95855640/8ae96268-1579-43d0-9fc8-b8d741c74206">

- 게시물 상세보기 (user의 게시글)

  > https://twitter.com/NetflixKR/status/1730074174016647415 > https://twitter.com/[username]/status/[id]

  <img width="401" alt="스크린샷 2023-12-25 오후 4 09 56" src="https://github.com/cocorig/Next.js/assets/95855640/52bb07a9-2dee-4e4a-b98b-563299d87fb9">

- 포스트 쓰기

  > https://twitter.com/compose/tweet

- 검색
  > https://twitter.com/search?q=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&src=typed_query > https://twitter.com/search

## layout.tsx

RootLayout -> HomeLayout -> HomePage
모든 페이지의 레이아웃이 공통 RootLayout이 되기때문에 따로 만들고 싶으면 폴더안에 layout.tsx 따로만듬

#### 트위터에선 로그인 후/전으로 레이아웃이 다름

src > app > i > flow > login/signup 일때만 다르게 하면됨
이럴땐 소괄호(주소창에 관여를 안하지만 그룹을 만듬)를 써서 나눠준다

- 폴더구조 : app/(afterLogin)/home -> 레이아웃은 만들 수 있음
- 브라우저 주소: /home

## template.tsx

- 컴포넌트는 각 페이지에 해당하는 컴포넌트들을 렌더링하는 역할
- 페이지마다 다른 컨텐츠를 담기 위해 Template을 이용하여 레이아웃을 적용할 수 있다.

## 이미지

```tsx
import Link from "next/link";
import Image from "next/image"; // next/image를 사용하면 이미지를 불러오고 최적화할 수 있다.
import x from "../../public/x.jpg"; // 이미지 불러오기

export default function Home() {
  return (
    <main>
      <div>
        <Image src={x} alt="로고" />
      </div>
    </main>
  );
}
```

## 모달

### 병렬 라우팅(Parallel Routing)

- 동시에 또는 조건에 따라 동일한 레이아웃에서 하나 이상의 페이지를 렌더링할 수 있게 해준다.
- 페이지를 옮겨도 뒤에 화면에 남아있어야함, 두가지 페이지를 한 페이지에 같이 띄워줄 수 있음
- 같은 폴더에 있고, Parallel Routes는 layout에서 쓸 수 있음

- 기본값 (default.tsx) : Parallel Routing가 필요 없을 때

### Intercepting Routes

- 서버 컴포넌트 : 데이터와 관련이 있음
- 클라이언트 컴포넌트
  - "use client"; 위에 써줘야 react hook사용가능

### private folder(\_폴더)

- 중복코드 파일
- 공통부모에 \_폴더명 생성 -> 그 안에 중복코드 파일

## 여기서 잠깐 정리~

### 주소창에 안 뜨는 폴더

- 1.  그룹폴더 (폴더) -> 레이아웃
- 2.  Parallel Routing ,@폴더 -> 한 화면의 두개의 페이지를 동시에 보여줌
- 3.  private folder , \_폴더 -> 폴더 정리용
