import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { firstBucket, secondBucket } from './storage/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  firstBucket,
  secondBucket
});
