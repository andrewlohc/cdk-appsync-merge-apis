import { describe, it, expect } from 'vitest';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkAppSyncMergeApisStack } from '../lib/cdk-appsync-merge-apis-stack';

describe('CdkAppSyncMergeApisStack', () => {
  const app = new cdk.App();
  const stack = new CdkAppSyncMergeApisStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  it('creates three AppSync APIs', () => {
    template.resourceCountIs('AWS::AppSync::GraphQLApi', 3);
  });

  it('creates API1 with correct properties', () => {
    template.hasResourceProperties('AWS::AppSync::GraphQLApi', {
      Name: 'SimpleApi1',
      AuthenticationType: 'API_KEY'
    });
  });

  it('creates API2 with correct properties', () => {
    template.hasResourceProperties('AWS::AppSync::GraphQLApi', {
      Name: 'SimpleApi2',
      AuthenticationType: 'API_KEY'
    });
  });

  it('creates MergedApi with correct properties', () => {
    template.hasResourceProperties('AWS::AppSync::GraphQLApi', {
      Name: 'MergedApi'
    });
  });

  it('creates CfnOutput for First API', () => {
    template.hasOutput('FirstAPI', {
      Description: 'First API ID'
    });
  });

  it('creates CfnOutput for Second API', () => {
    template.hasOutput('SecondAPI', {
      Description: 'Second API ID'
    });
  });

  it('creates CfnOutput for Merge API', () => {
    template.hasOutput('MergeAPI', {
      Description: 'Merge API ID'
    });
  });
});
