## 프로젝트 세팅하기

```
npx create-next-app@latest
```

## 폴더구조

public
사이트에서 쓰일 이미지는 public폴더에 넣어두자.
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

## 🤚 여기서 잠깐 정리~

### 주소창에 안 뜨는 폴더

- 1.  그룹폴더 (폴더) -> 레이아웃
- 2.  Parallel Routing ,@폴더 -> 한 화면의 두개의 페이지를 동시에 보여줌
- 3.  private folder , \_폴더 -> 폴더 정리용
