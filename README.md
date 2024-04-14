# 회원가입 멀티폼 구현

그룹웨어 프로젝트를 진행하며 '사원 등록' 페이지를 디자인 모듈 및 유효성 검사 라이브러리(yup)를 사용해 만든 적이 있습니다.
라이브러리 없이 직접 로직을 작성하며 학습하고자 본 프로젝트를 진행했으며, 타 기업 과제 예시를 참고했습니다.

[배포 링크](https://kayoungkimjs.github.io/sign-in-up/)

## 개발 환경

- node.js v20.10.0
- React + TypeScript + vite v18.2.66

## 선정 이유

- React v18.2.66: 프론트엔드 라이브러리로 컴포넌트 기반 개발과 가독성 있는 코드 작성을 위해 선택했습니다.
- recoil v0.7.7: 리액트 전역 상태관리 라이브러리로 컴포넌트 간 일관성 있는 데이터 흐름을 유지하기 위해 선택했습니다.
- emotion/styled v11.11: JavaScript를 사용한 CSS-in-JS 라이브러리로, 디자인 모듈 제작 및 스타일링을 유연하게 처리하기 위해 선택했습니다.
- vite v5.2.0: 빠른 개발 환경을 제공하는 빌드 도구로, 개발 효율성을 높이고 개발 시간을 단축하기 위해 선택했습니다.

## 설치 및 실행

### 의존성 패키지 설치

```bash
npm install
```

### 개발 환경 실행

```bash
npm run dev
```

기본 <http://localhost:5173/sign-in-up> 로 접속

### 프로덕션 환경 실행

```bash
### 빌드
npm run build

## 실행
npm run preview
```

기본 <http://localhost:4173/sign-in-up> 로 접속

### 주요 디렉토리 구조

```bash
src
 ┣ components
 ┃ ┣ Button
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┣ ErrorInfo
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┗ Input
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┣ hooks
 ┃ ┗ useErrorMessage.ts
 ┣ pages
 ┃ ┗ Signup
 ┃ ┃ ┣ Signup.styles.ts
 ┃ ┃ ┣ SignupResult.tsx
 ┃ ┃ ┣ SignupStep1.tsx
 ┃ ┃ ┣ SignupStep2.tsx
 ┃ ┃ ┗ SignupStep3.tsx
 ┣ recoil
 ┃ ┗ atoms
 ┃ ┃ ┣ errorState.ts
 ┃ ┃ ┣ stepState.ts
 ┃ ┃ ┗ userInfoState.ts
 ┣ styles
 ┃ ┣ utils
 ┃ ┃ ┣ a11y.ts
 ┃ ┃ ┣ flexbox.ts
 ┃ ┃ ┣ media.ts
 ┃ ┃ ┣ position.ts
 ┃ ┃ ┗ typography.ts
 ┃ ┗ index.ts
 ┣ types
 ┃ ┣ emotion.d.ts
 ┃ ┗ errorMessage.d.ts
 ┣ utils
 ┃ ┗ validation.tsx
 ┣ App.tsx
 ┣ globalStyle.ts
 ┣ main.tsx
 ┗ vite-env.d.ts
```

### 주요 기능

- 다음 및 이전 단계 이동
- 경고 메시지 출력
- 이름 입력 및 유효성 체크
- 주소 입력 및 유효성 체크
- 연락처 입력 및 유효성 체크
- 이메일 주소 입력 및 유효성 체크
- 비밀번호 입력 및 유효성 체크
- 비밀번호 확인 입력 및 유효성 체크
- 카드정보 입력 및 유효성 체크
- 회원가입 완료 페이지

### 구현 내용

- PC와 Mobile에서 호환되도록 반응형으로 제작했습니다.
- 화면 컴포넌트는 `SignupStep1`, `SignupStep2`, `SignupStep3`, `SignupStep4`, `SignupStepResult` 으로 구성되어 있으며, `App.tsx`에서 한 화면에서 단계별로 실행되도록 처리했습니다.
- 공통 컴포넌트로 `Button`, `Input`, `ErrorInfo`로 구성해 코드 재사용성을 높였습니다.
- 프로젝트 전체에 영향을 미치는 에러 관리(`errorState`), 단계별 페이지 이동(`stepState`), 사용자 입력 정보(`userInfoState`)는 recoil을 통해 상태를 관리하고 업데이트합니다.
- `useErrorMessage`를 커스텀 훅으로 모듈화했습니다. 각 폼 항목별 유효성 검사를 수행한 후 메시지를 띄우는 역할을 일괄 수행합니다.
- 자주 사용하는 스타일 및 로직관련 코드는 `utils`로 별도 분리해 재사용성 및 유지보수가 용이하도록 만들었습니다.
