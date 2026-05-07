## What is maven?
Maven is a build automation tool used primarily for Java projects. It helps manage project dependencies, build processes, and project documentation. Maven uses a Project Object Model (POM) file to define the project's structure, dependencies, and build configurations. It simplifies the build process by providing a standardized way to manage and automate tasks such as compiling code, running tests, and packaging applications. Maven also allows developers to easily share and reuse code through its dependency management system.

## Why build tools exist?
- Manual compilation pain
- Dependency management
- Inconsistent builds
- Repetitive Tasks

## Project Object Model (POM)
- Group ID: A unique identifier for the project group (e.g., com.example).
- Artifact ID: A unique identifier for the project artifact (e.g., my-app).
- Version: The version of the project (e.g., 1.0.0).
- Packaging: The type of artifact to be produced (e.g., jar, war).
- Dependencies: A list of external libraries or modules that the project depends on.
- Build: Plugins and configurations for the build process.
- Profiles: Different configurations for different environments (e.g., development, production).

## Directory Structure

```
my-app/                                    # Root project directory
│
├── pom.xml                                # Project Object Model (Maven configuration file)
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── demo/
│   │   │               ├── Application.java
│   │   │               ├── service/
│   │   │               │   └── UserService.java
│   │   │               ├── controller/
│   │   │               │   └── UserController.java
│   │   │               └── model/
│   │   │                   └── User.java
│   │   │
│   │   ├── resources/
│   │   │   ├── application.properties
│   │   │   └── application.yml
│   │   │
│   │   └── webapp/                       # For web applications (WAR packaging)
│   │       ├── WEB-INF/
│   │       │   └── web.xml
│   │       └── index.html
│   │
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── example/
│       │           └── demo/
│       │               ├── ApplicationTest.java
│       │               └── service/
│       │                   └── UserServiceTest.java
│       │
│       └── resources/
│           └── test-config.properties
│
├── target/                               # Auto-generated directory (build output)
│   ├── classes/                          # Compiled main classes
│   ├── test-classes/                     # Compiled test classes
│   ├── my-app-1.0.0.jar                 # Generated JAR file
│   └── ...
│
├── .gitignore
└── README.md                             # Project documentation

```

## Standard Maven Directory Layout

| Directory | Purpose |
|-----------|---------|
| `src/main/java` | Main source code (Java classes) |
| `src/main/resources` | Configuration files and resources |
| `src/main/webapp` | Web application files (if WAR packaging) |
| `src/test/java` | Test source code (Unit tests) |
| `src/test/resources` | Test configuration files |
| `target` | Build output directory (compiled classes, JARs, etc.) |

## Key Maven Files

- **pom.xml**: Contains project metadata, dependencies, build plugins, and configurations
- **pom.xml** structure typically includes:
  - Project coordinates (groupId, artifactId, version)
  - Dependencies section
  - Build configuration
  - Plugin management
  - Profiles for different environments


## Parent POM
A parent POM is a POM file that can be inherited by multiple child projects. It allows you to centralize common configurations, dependencies, and build settings that can be shared across multiple projects. This promotes consistency and reduces duplication in your Maven projects. Child projects can override or extend the configurations defined in the parent POM as needed.

## Transitive Dependencies and Version Conflicts
Transitive dependencies are dependencies that are not directly declared in your project but are required by the dependencies you have declared. For example, if your project depends on Library A, and Library A depends on Library B, then Library B is a transitive dependency of your project.

Version conflicts can occur when different dependencies require different versions of the same transitive dependency. Maven resolves these conflicts using a nearest-wins strategy, where the version of the dependency that is closest to the project in the dependency tree is chosen. However, this can lead to unexpected behavior if not managed properly. To resolve version conflicts, you can use the `<dependencyManagement>` section in your POM to specify the version of the dependency you want to use, ensuring that all dependencies use the same version.

## Shade Plugin - Creating an Uber JAR
The Maven Shade Plugin is used to create an "uber JAR" (also known as a fat JAR) that packages all the dependencies of a project into a single executable JAR file. This is particularly useful for applications that need to be distributed as a single file, such as command-line applications or microservices. The Shade Plugin can also be used to relocate classes to avoid conflicts between dependencies, and to create a manifest file that specifies the main class to be executed when the JAR is run. To use the Shade Plugin, you need to add it to your POM file and configure it to include the necessary dependencies and specify the main class for execution.

## Maven Wrapper(mvnw)
The Maven Wrapper (mvnw) is a script that allows you to run Maven commands without requiring users to have Maven installed on their system. It provides a way to ensure that everyone working on the project uses the same version of Maven, which can help avoid compatibility issues.