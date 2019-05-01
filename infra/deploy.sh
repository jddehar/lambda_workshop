#!/usr/bin/env bash

# Configuration
CodeCommitRepoName=imageupload-service
StackName=imageupload-service-infra
BucketName=imageupload-service-infra-jdehart

# Package and deploy
aws cloudformation package \
--template-file service.yaml \
--s3-bucket ${BucketName} \
--output-template-file packaged-${StackName}-template.yaml

aws cloudformation deploy \
--stack-name ${StackName} \
--template-file packaged-${StackName}-template.yaml \
--parameter-overrides \
"CodeCommitRepoName=${CodeCommitRepoName}" \
--s3-bucket ${BucketName} \
--capabilities CAPABILITY_IAM