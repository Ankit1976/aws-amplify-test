import { defineStorage } from '@aws-amplify/backend';

export const firstBucket = defineStorage({
  name: 'shauriik-products',
  isDefault: true, // identify your default storage bucket (required)
});

export const secondBucket = defineStorage({
  name: 'shauriik-profileimages',
  access: (allow) => ({
    'profile-pictures/*': [
      allow.authenticated.to(['read','write']),
    ],
  })
})