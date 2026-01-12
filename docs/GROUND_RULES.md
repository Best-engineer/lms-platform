# 📋 Team Ground Rules

## 1. Commit Message Rule
**Conventional Commits** 구조를 준수합니다.

### 구조
```text
Type: Subject (50자 내외, 동사 원형 시작, 마침표 X)

Body (선택사항, '무엇을', '왜' 변경했는지 상세 기술)

Footer (이슈 번호 필수)
```

### Type (Header)
| 태그 | 설명 |
| :--- | :--- |
| `Feat` | 새로운 기능 추가 |
| `Fix` | 버그 수정 |
| `Docs` | 문서 수정 (README, Swagger 등) |
| `Test` | 테스트 코드 추가/수정 |
| `Refactor` | 코드 리팩토링 (기능 변경 없음) |
| `Style` | 코드 포맷팅, 세미콜론 누락 등 |
| `Chore` | 빌드 스크립트 수정, 패키지 매니저 설정 등 |
| `Ci` | CI 설정 파일 수정 (GitHub Actions) |

### 작성 예시
```text
Feat: Implement member login API

Spring Security 필터 체인 설정 및 JWT 발급 로직 구현
Refresh Token 저장을 위해 Redis 설정 추가

Resolves: #12
```

---

## 2. Branch Strategy
**Git Flow** 전략을 기반으로 운영합니다.

| 브랜치 | 설명 | 명명 규칙 |
| :--- | :--- | :--- |
| **main** | 운영 서버 배포용 (Production) | `main` |
| **develop** | 개발 서버 배포용 (Staging) | `develop` |
| **feature** | 단위 기능 개발 | `feature/이슈번호-기능명` (ex: `feature/10-login`) |
| **hotfix** | 운영 이슈 긴급 수정 | `hotfix/이슈번호-버그명` |

* **Feature 병합**: `feature` -> `develop` (Squash and Merge 권장)
* **Release**: `develop` -> `main`
* **Delete**: 병합이 완료된 feature 브랜치는 삭제합니다.

---

## 3. Code Style & Naming (Java 17 & Spring Boot)

### General
* **Formatter**: IntelliJ 기본 포맷터 혹은 `Spotless` 플러그인을 사용하여 빌드 시 자동 정렬합니다.
* **Lombok**: `@Data` 사용을 지양합니다. (`@Getter`, `@Builder`, `@RequiredArgsConstructor` 권장)
* **DI (의존성 주입)**: 생성자 주입 방식을 사용합니다. (`@Autowired` 필드 주입 X)

### Naming Convention
* **Class**: `PascalCase`
* **Method/Variable**: `camelCase`
* **Constant**: `UPPER_SNAKE_CASE`
* **DB Table/Column**: `snake_case` (MySQL 기준)
* **Package**: `lowercase`

### Layer Rules
* **Controller**: Entity를 직접 반환하지 않습니다. 반드시 `Request/Response DTO`를 사용합니다.
* **Entity**: Setter 사용을 금지합니다. 명확한 의도를 가진 메서드를 생성합니다. (ex: `updateProfile()` O, `setName()` X)
* **Repository**:
    * JPA: 기본 CRUD
    * Querydsl: 동적 쿼리 및 복잡한 조회 (`CustomRepository` 패턴 적용)
    * MyBatis: 통계성 쿼리나 대량 배치 처리가 필요할 때 제한적으로 사용

---

## 4. PR (Pull Request) Rule
기능 개발 완료 시 PR을 생성하고, 동료의 리뷰를 받은 후 Merge 합니다.

### PR Process
1. PR 제목: `[Type] 제목` (ex: `[Feat] 회원가입 기능 구현`)
2. PR 본문: `.github/PULL_REQUEST_TEMPLATE.md` 양식 준수
3. 리뷰어 지정: 팀원 전체 혹은 파트장 지정
4. Merge 조건: **최소 1명 이상의 Approve** + CI 빌드 통과

### PR Template 예시
```markdown
## 📌 개요
- 관련 이슈: #12
- 작업 내용: JWT 로그인 기능 구현 및 Security 설정

## 🛠 작업 상세
- [x] SecurityConfig 설정
- [x] JwtProvider 구현
- [x] LoginController 테스트 코드 작성

## 📸 테스트 결과 (Swagger/Postman)
(이미지 첨부)
```

---

## 5. Issue Management
작업 시작 전 Issue를 생성하여 작업 내용을 공유합니다.

* **제목**: `[Type] 제목`
* **라벨**: `backend`, `bug`, `enhancement` 등 적절히 부여
* **Assignees**: 담당자 지정

---

## 6. Development Environment
* **JDK**: 17 (Temurin or Corretto 권장)
* **Encoding**: UTF-8 (File, Console 모두)
* **Build**: `./gradlew build` (Gradle Wrapper 사용 필수)
* **Database**: MySQL 8.4.7 (Local은 Docker Compose 사용 권장)