### Front

- **Next.js**: React 기반의 프레임워크, 클라이언트 사이드 렌더링 및 서버 사이드 렌더링을 지원.

### Back

- **데이터베이스**: MySQL
- **ORM (Object-Relational Mapping)**: Prisma를 통한 객체와 관계형 데이터 연결.
  <br>
  - **Prisma 설치**:
    ```bash
    npm install prisma --save-dev
    ```
  - **초기화**:
    ```bash
    npx prisma init
    ```
  - **데이터베이스 테이블 생성**:
    ```bash
    npx prisma migrate dev --name init
    ```
  - **데이터베이스 편집 GUI 실행**:
    ```bash
    npx prisma studio
    ```
  - **환경 변수 (env)**:
    ```env
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```

### style

- **Tailwind CSS**: 클래스 기반의 CSS 프레임워크.
- **Lucide Icons**: 미리 디자인된 아이콘 라이브러리 ([lucide.dev](https://lucide.dev/)).
- **Daisy UI**: Tailwind UI 플러그인 ([daisyui.com](https://daisyui.com/)).

### 상태 관리

- **React Query (@tanstack/react-query)**:
  - 데이터 관리, 비동기 작업 처리를 위한 라이브러리.
  - `useQuery` 훅을 통해 데이터를 가져오고 캐시하며, `useMutation` 훅을 통해 데이터를 업데이트.
  - 서버에서 데이터를 비동기적으로 로드하고 캐싱하여 컴포넌트 간 데이터 공유를 용이하게 함.

### HTTP 클라이언트

- **axios**: JavaScript 및 TypeScript 환경에서 사용되는 HTTP 클라이언트 라이브러리.
  - 서버와의 HTTP 요청을 쉽게 생성하고 처리할 수 있음.
  - API와의 통신, 데이터 요청, 응답 처리 등에 주로 사용됨.
