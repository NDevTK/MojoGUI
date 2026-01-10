// Auto-generated MojoJS binding
// Source: chromium_src/components/account_id/mojom/account_id.mojom
// Module: signin.mojom

'use strict';

// Module namespace
var signin = signin || {};
signin.mojom = signin.mojom || {};

signin.mojom.AccountTypeSpec = { $: mojo.internal.Enum() };
signin.mojom.AccountIdSpec = { $: {} };

// Enum: AccountType
signin.mojom.AccountType = {
  UNKNOWN: 0,
  GOOGLE: 1,
};

// Struct: AccountId
mojo.internal.Struct(
    signin.mojom.AccountIdSpec, 'signin.mojom.AccountId', [
      mojo.internal.StructField('account_type', 0, 0, signin.mojom.AccountTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_email', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);
