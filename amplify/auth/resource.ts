import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'ap-south-1_2PIWk3X1h',
  identityPoolId: 'ap-south-1:d6b690cb-d868-4e63-b5e8-88728b276577',
  authRoleArn: 'arn:aws:iam::705473094944:role/service-role/shaurrik-test-identity-pool-to-user-pool-role',
  unauthRoleArn: 'arn:aws:iam::705473094944:role/service-role/amplify-unauthenticated-role',
  userPoolClientId: '4aaeohsio5mra9g1rcj8asevdl',
});