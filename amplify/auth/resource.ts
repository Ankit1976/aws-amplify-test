import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'ap-south-1_aHG9IodaE',
  identityPoolId: 'ap-south-1:42948012-e1f1-450d-a72a-026b5eebe567',
  authRoleArn: 'arn:aws:iam::705473094944:role/service-role/shaurrik-test-identity-pool-to-user-pool-role',
  unauthRoleArn: 'arn:aws:iam::705473094944:role/service-role/amplify-unauthenticated-role',
  userPoolClientId: '77o32986hjhdlc2j8ti9ekr8fb',
});