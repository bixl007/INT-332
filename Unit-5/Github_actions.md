## What is GitHub Actions?

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) platform that allows you to automate your build, test, and deployment pipeline. It is a powerful tool that can help you automate your workflow and save time.

## What is a Workflow?

- A workflow is an automated process defined in a YAML file.
- Stored inside the `.github/workflows` directory.
- Contains one or more jobs that can run sequentially or in parallel.
- Each job has steps (commands/actions) that are executed in order.

## Basic structure of a workflow file

```yaml
name: Workflow Name
on: [event]
jobs:
  job_name:
    runs-on: ubuntu-latest
    steps:
      - name: Step Name
        uses: action_name@version
        with:
          input_name: input_value
```

## Components of a Workflow
1. **name**: The name of the workflow.
2. **on**: The event that triggers the workflow (e.g., push, pull_request, schedule).
3. **jobs**: A collection of jobs that define the tasks to be performed.
4. **runs-on**: The type of runner (environment) the job will run on (e.g., ubuntu-latest, windows-latest).
5. **steps**: A series of commands or actions that are executed as part of the job.

## Events in GitHub Actions
Eventws are activities that trigger a workflow.

- **push**: Triggered when code is pushed to a repository.
- **pull_request**: Triggered when a pull request is opened, synchronized, or closed.
- **schedule**: Triggered at scheduled times using cron syntax.
- **workflow_dispatch**: Triggered manually from the GitHub UI.
- **release**: Triggered when a release is published, edited, or deleted.
- **issue**: Triggered when an issue is opened, edited, or closed.

## Triggers in GitHub Actions
A trigger is the condition that starts a workflow. It can be based on events, schedules, or manual triggers.

### Types of Triggers:
1. **Branch-based triggers**: Triggered when changes are made to specific branches.
2. **Tag-based triggers**: Triggered when a new tag is created.
3. **Path-based triggers**: Triggered when changes are made to specific files or directories
4. **Time-based triggers**: Triggered at specific times using cron syntax.

## Workflow Directory Structure:
```
.github/
  workflows/
    build.yml
    deploy.yml
```

## Jobs and Steps
- **Jobs**: A job is a set of steps that execute on the same runner.
- **Steps**: A step is an individual task that can run commands or use actions.

## Actions(Reusable components)
- Reusable units of code that can be used in workflows.
- Example: `actions/checkout` for checking out code, `actions/setup-node` for setting up Node.js environment.

## Runners
A server that runs your workflows.
### Types of runners:
1. **Github-hosted runners**: Managed by GitHub, available in various operating systems (Ubuntu, Windows, macOS).
2. **Self-hosted runners**: Managed by you, can run on your own infrastructure

## Workflow Example
```yaml
name: Java CI Pipeline
on: push:
  branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
        -use: actions/checkout@v2
        -name: Set up JDK 11
         uses: actions/setup-java@v2
         with:
           java-version: '11'
        -name: Build with Gradle
         run: ./gradlew build
```
## Github Actions Workflow
- **Push Trigger**: The workflow is triggered when code is pushed to the `main` branch.
- **Pull Request Trigger**: The workflow is triggered when a pull request is opened, synchronized, or closed against the `main` branch.
- **Scheduled Trigger**: The workflow is triggered at scheduled times using cron syntax.
- **Manual Trigger**: The workflow can be triggered manually from the GitHub UI using the `workflow_dispatch` event.

## Job & Matrix Strategy
- **Job**: A job is a set of steps that execute on the same runner.
- **Matrix Strategy**: A matrix strategy allows you to run a job with different configurations (e.g., different operating systems, versions of a language, etc.) in parallel.

## Steps & Shell Commands
- **Steps**: A step is an individual task that can run commands or use actions.
- **Shell Commands**: You can run shell commands directly in a step using the `run` keyword.