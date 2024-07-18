# CDK AppSync Merge APIs

This project demonstrates how to merge multiple AppSync APIs using AWS CDK with TypeScript.

## Project Overview

This CDK application creates and merges two simple AppSync APIs. It showcases how to:

1. Define multiple GraphQL schemas
2. Create separate AppSync APIs
3. Merge these APIs into a single endpoint

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. Deploy the stack:
   ```
   npx cdk deploy
   ```

## Useful Commands

* `npm run build`   Compile TypeScript to JavaScript
* `npm run watch`   Watch for changes and compile
* `npm run test`    Perform the Jest unit tests
* `npx cdk deploy`  Deploy this stack to your default AWS account/region
* `npx cdk diff`    Compare deployed stack with current state
* `npx cdk synth`   Emit the synthesized CloudFormation template

## Project Structure

- `lib/cdk-appsync-merge-apis-stack.ts`: Main stack definition
- `graphql/schema1.graphql`: GraphQL schema for the first API
- `graphql/schema2.graphql`: GraphQL schema for the second API

## Learn More

For more information on AWS AppSync and CDK, check out:
- [AWS AppSync Documentation](https://docs.aws.amazon.com/appsync/)
- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/)
