import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';

export class CdkAppSyncMergeApisStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the first simple AppSync API
    const api1 = new appsync.GraphqlApi(this, 'Api1', {
      name: 'SimpleApi1',
      definition: appsync.Definition.fromFile('graphql/schema1.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
    });

    // Create the second simple AppSync API
    const api2 = new appsync.GraphqlApi(this, 'Api2', {
      name: 'SimpleApi2',
      definition: appsync.Definition.fromFile('graphql/schema2.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
    });

    // Create the merged API
    const mergedApi = new appsync.GraphqlApi(this, 'MergedApi', {
      name: 'MergedApi',
      definition: appsync.Definition.fromSourceApis({
        sourceApis: [
          {
            sourceApi: api1,
            mergeType: appsync.MergeType.AUTO_MERGE,
          },
          {
            sourceApi: api2,
            mergeType: appsync.MergeType.AUTO_MERGE,
          }
        ]
      })
    });

    new cdk.CfnOutput(this, "FirstAPI", {
      value: api1.apiId,
      description: "First API ID",
    });

    new cdk.CfnOutput(this, "SecondAPI", {
      value: api2.apiId,
      description: "Second API ID",
    });

    new cdk.CfnOutput(this, "MergeAPI", {
      value: mergedApi.apiId,
      description: "Merge API ID",
    });
  }
}
