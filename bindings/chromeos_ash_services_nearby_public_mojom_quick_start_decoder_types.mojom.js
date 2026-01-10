// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder_types.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.quick_start.mojom = ash.quick_start.quick_start.mojom || {};


// Enum: WifiSecurityType
ash.quick_start.quick_start.mojom.mojom.WifiSecurityType = {
  kPSK: 0,
  kWEP: 1,
  kEAP: 2,
  kOpen: 3,
  kOWE: 4,
  kSAE: 5,
};
ash.quick_start.quick_start.mojom.mojom.WifiSecurityTypeSpec = { $: mojo.internal.Enum() };

// Enum: UserVerificationResult
ash.quick_start.quick_start.mojom.mojom.UserVerificationResult = {
  kUserVerified: 0,
  kUserNotVerified: 1,
  kLSKFNotSet: 2,
};
ash.quick_start.quick_start.mojom.mojom.UserVerificationResultSpec = { $: mojo.internal.Enum() };

// Enum: QuickStartDecoderError
ash.quick_start.quick_start.mojom.mojom.QuickStartDecoderError = {
  kEmptyMessage: 0,
  kUnableToReadAsJSON: 1,
  kMessageDoesNotMatchSchema: 2,
  kUnexpectedMessageType: 3,
  kUnknownPayload: 4,
  kUnableToReadAsBase64: 5,
};
ash.quick_start.quick_start.mojom.mojom.QuickStartDecoderErrorSpec = { $: mojo.internal.Enum() };

// Union: QuickStartMessage
ash.quick_start.quick_start.mojom.mojom.QuickStartMessageSpec = { $: mojo.internal.Union(
    'ash.quick_start.mojom.QuickStartMessage', {
      'bootstrap_configurations': {
        'ordinal': 0,
        'type': ash.quick_start.mojom.BootstrapConfigurationsSpec,
      }},
      'wifi_credentials': {
        'ordinal': 1,
        'type': ash.quick_start.mojom.WifiCredentialsSpec,
      }},
      'notify_source_of_update_response': {
        'ordinal': 2,
        'type': ash.quick_start.mojom.NotifySourceOfUpdateResponseSpec,
      }},
      'fido_assertion_response': {
        'ordinal': 3,
        'type': ash.quick_start.mojom.FidoAssertionResponseSpec,
      }},
      'user_verification_requested': {
        'ordinal': 4,
        'type': ash.quick_start.mojom.UserVerificationRequestedSpec,
      }},
      'user_verification_response': {
        'ordinal': 5,
        'type': ash.quick_start.mojom.UserVerificationResponseSpec,
      }},
      'user_verification_method': {
        'ordinal': 6,
        'type': ash.quick_start.mojom.UserVerificationMethodSpec,
      }},
    })
};

// Struct: BootstrapConfigurations
ash.quick_start.quick_start.mojom.mojom.BootstrapConfigurationsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.BootstrapConfigurations',
      packedSize: 32,
      fields: [
        { name: 'instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_supervised_account', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UserVerificationMethod
ash.quick_start.quick_start.mojom.mojom.UserVerificationMethodSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationMethod',
      packedSize: 16,
      fields: [
        { name: 'use_source_lock_screen_prompt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UserVerificationResponse
ash.quick_start.quick_start.mojom.mojom.UserVerificationResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationResponse',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.quick_start.mojom.UserVerificationResultSpec, nullable: false, minVersion: 0 },
        { name: 'is_first_user_verification', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UserVerificationRequested
ash.quick_start.quick_start.mojom.mojom.UserVerificationRequestedSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.UserVerificationRequested',
      packedSize: 16,
      fields: [
        { name: 'is_awaiting_user_verification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WifiCredentials
ash.quick_start.quick_start.mojom.mojom.WifiCredentialsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.WifiCredentials',
      packedSize: 32,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'security_type', packedOffset: 16, packedBitOffset: 0, type: ash.quick_start.mojom.WifiSecurityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_hidden', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FidoAssertionResponse
ash.quick_start.quick_start.mojom.mojom.FidoAssertionResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.FidoAssertionResponse',
      packedSize: 40,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'credential_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'auth_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: NotifySourceOfUpdateResponse
ash.quick_start.quick_start.mojom.mojom.NotifySourceOfUpdateResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_start.mojom.NotifySourceOfUpdateResponse',
      packedSize: 16,
      fields: [
        { name: 'ack_received', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
