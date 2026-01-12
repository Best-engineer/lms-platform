# 🚀 [LMS-PLATFORM] Service

> Learning Management System for Education

## 🛠 Tech Stack

### Backend
| 구분 | 스택 | 비고 |
| :--- | :--- | :--- |
| **Language** | Java 17 | LTS |
| **Framework** | Spring Boot 3.3.x | |
| **Build** | Gradle | |
| **Database** | MySQL 8.4.7 | |
| **ORM** | Spring Data JPA, Querydsl | MyBatis(통계용) |
| **Infra** | AWS, Docker, K8s(EKS) | Terraform |
| **Docs** | SpringDoc OpenAPI | Swagger |

---

## 📜 Ground Rules (Team Culture)
저희 팀은 효율적인 협업을 위해 아래 규칙을 준수합니다.  
상세한 내용은 **[팀 그라운드 룰 보러가기](./docs/GROUND_RULES.md)** 를 클릭하세요.

* **Commit Rule**: Conventional Commits 규격을 따릅니다.
* **Branch Strategy**: Git Flow (Main/Develop/Feature/Hotfix)를 사용합니다.
* **Code Style**: Google Java Style + Spotless 포맷터를 사용합니다.

---

## 🏃 Getting Started

### Prerequisites
* Java 17+
* Docker & Docker Compose (for Local DB)

### Build & Run
```bash
# Clone the repository
$ git clone [https://github.com/organization/project.git](https://github.com/organization/project.git)

# Build
$ ./gradlew clean build

# Run
$ java -jar build/libs/app.jar