// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder_types.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};


// Enum: WifiSecurityType
ash.quick_start.mojom.WifiSecurityType = {
  kPSK: 0,
  kWEP: 1,
  kEAP: 2,
  kOpen: 3,
  kOWE: 4,
  kSAE: 5,
};

// Enum: UserVerificationResult
ash.quick_start.mojom.UserVerificationResult = {
  kUserVerified: 0,
  kUserNotVerified: 1,
  kLSKFNotSet: 2,
};

// Enum: QuickStartDecoderError
ash.quick_start.mojom.QuickStartDecoderError = {
  kEmptyMessage: 0,
  kUnableToReadAsJSON: 1,
  kMessageDoesNotMatchSchema: 2,
  kUnexpectedMessageType: 3,
  kUnknownPayload: 4,
  kUnableToReadAsBase64: 5,
};

// Struct: BootstrapConfigurations
ash.quick_start.mojom.BootstrapConfigurationsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.BootstrapConfigurations',
      packedSize: 32,
      fields: [
        { name: 'instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_supervised_account', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserVerificationMethod
ash.quick_start.mojom.UserVerificationMethodSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationMethod',
      packedSize: 16,
      fields: [
        { name: 'use_source_lock_screen_prompt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserVerificationResponse
ash.quick_start.mojom.UserVerificationResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationResponse',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.quick_start.mojom.UserVerificationResultSpec, nullable: false },
        { name: 'is_first_user_verification', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserVerificationRequested
ash.quick_start.mojom.UserVerificationRequestedSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationRequested',
      packedSize: 16,
      fields: [
        { name: 'is_awaiting_user_verification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiCredentials
ash.quick_start.mojom.WifiCredentialsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.WifiCredentials',
      packedSize: 40,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'security_type', packedOffset: 8, packedBitOffset: 0, type: ash.quick_start.mojom.WifiSecurityTypeSpec, nullable: false },
        { name: 'is_hidden', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FidoAssertionResponse
ash.quick_start.mojom.FidoAssertionResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.FidoAssertionResponse',
      packedSize: 40,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'credential_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'auth_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NotifySourceOfUpdateResponse
ash.quick_start.mojom.NotifySourceOfUpdateResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.NotifySourceOfUpdateResponse',
      packedSize: 16,
      fields: [
        { name: 'ack_received', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
