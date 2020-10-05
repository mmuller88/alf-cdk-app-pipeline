import { App, Stack, StackProps, Construct } from '@aws-cdk/core';
import { Account } from './accountConfig';
import { CustomStack } from './custom-stack';
export interface PipelineStackProps extends StackProps {
    customStack: (scope: Construct, account: Account) => CustomStack;
    branch: string;
    repositoryName: string;
    commands: string[];
}
export declare class PipelineStack extends Stack {
    constructor(app: App, id: string, props: PipelineStackProps);
}