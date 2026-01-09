// Auto-generated MojoJS binding
// Source: chromium_src/components/account_id/mojom/account_id.mojom
// Module: signin.mojom

'use strict';

// Module namespace
var signin = signin || {};
signin.mojom = signin.mojom || {};


// Enum: AccountType
signin.mojom.AccountType = {
  UNKNOWN: 0,
  GOOGLE: 1,
};

// Struct: AccountId
signin.mojom.AccountIdSpec = {
  $: {
    structSpec: {
      name: 'signin.mojom.AccountId',
      packedSize: 32,
      fields: [
        { name: 'account_type', packedOffset: 0, packedBitOffset: 0, type: signin.mojom.AccountTypeSpec, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
