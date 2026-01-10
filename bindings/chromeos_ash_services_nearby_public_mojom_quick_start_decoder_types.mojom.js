// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/quick_start_decoder_types.mojom
// Module: ash.quick_start.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_start = ash.quick_start || {};
ash.quick_start.mojom = ash.quick_start.mojom || {};

ash.quick_start.mojom.WifiSecurityTypeSpec = { $: mojo.internal.Enum() };
ash.quick_start.mojom.UserVerificationResultSpec = { $: mojo.internal.Enum() };
ash.quick_start.mojom.QuickStartDecoderErrorSpec = { $: mojo.internal.Enum() };
ash.quick_start.mojom.QuickStartMessageSpec = { $: {} };
ash.quick_start.mojom.BootstrapConfigurationsSpec = { $: {} };
ash.quick_start.mojom.UserVerificationMethodSpec = { $: {} };
ash.quick_start.mojom.UserVerificationResponseSpec = { $: {} };
ash.quick_start.mojom.UserVerificationRequestedSpec = { $: {} };
ash.quick_start.mojom.WifiCredentialsSpec = { $: {} };
ash.quick_start.mojom.FidoAssertionResponseSpec = { $: {} };
ash.quick_start.mojom.NotifySourceOfUpdateResponseSpec = { $: {} };

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

// Union: QuickStartMessage
mojo.internal.Union(
    ash.quick_start.mojom.QuickStartMessageSpec, 'ash.quick_start.mojom.QuickStartMessage', {
      'bootstrap_configurations': {
        'ordinal': 0,
        'type': ash.quick_start.mojom.BootstrapConfigurationsSpec.$,
        'nullable': false,
      },
      'wifi_credentials': {
        'ordinal': 1,
        'type': ash.quick_start.mojom.WifiCredentialsSpec.$,
        'nullable': false,
      },
      'notify_source_of_update_response': {
        'ordinal': 2,
        'type': ash.quick_start.mojom.NotifySourceOfUpdateResponseSpec.$,
        'nullable': false,
      },
      'fido_assertion_response': {
        'ordinal': 3,
        'type': ash.quick_start.mojom.FidoAssertionResponseSpec.$,
        'nullable': false,
      },
      'user_verification_requested': {
        'ordinal': 4,
        'type': ash.quick_start.mojom.UserVerificationRequestedSpec.$,
        'nullable': false,
      },
      'user_verification_response': {
        'ordinal': 5,
        'type': ash.quick_start.mojom.UserVerificationResponseSpec.$,
        'nullable': false,
      },
      'user_verification_method': {
        'ordinal': 6,
        'type': ash.quick_start.mojom.UserVerificationMethodSpec.$,
        'nullable': false,
      },
    });

// Struct: BootstrapConfigurations
mojo.internal.Struct(
    ash.quick_start.mojom.BootstrapConfigurationsSpec, 'ash.quick_start.mojom.BootstrapConfigurations', [
      mojo.internal.StructField('instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_supervised_account', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UserVerificationMethod
mojo.internal.Struct(
    ash.quick_start.mojom.UserVerificationMethodSpec, 'ash.quick_start.mojom.UserVerificationMethod', [
      mojo.internal.StructField('use_source_lock_screen_prompt', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UserVerificationResponse
mojo.internal.Struct(
    ash.quick_start.mojom.UserVerificationResponseSpec, 'ash.quick_start.mojom.UserVerificationResponse', [
      mojo.internal.StructField('result', 0, 0, ash.quick_start.mojom.UserVerificationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_first_user_verification', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UserVerificationRequested
mojo.internal.Struct(
    ash.quick_start.mojom.UserVerificationRequestedSpec, 'ash.quick_start.mojom.UserVerificationRequested', [
      mojo.internal.StructField('is_awaiting_user_verification', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiCredentials
mojo.internal.Struct(
    ash.quick_start.mojom.WifiCredentialsSpec, 'ash.quick_start.mojom.WifiCredentials', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security_type', 8, 0, ash.quick_start.mojom.WifiSecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_hidden', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FidoAssertionResponse
mojo.internal.Struct(
    ash.quick_start.mojom.FidoAssertionResponseSpec, 'ash.quick_start.mojom.FidoAssertionResponse', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('credential_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('auth_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NotifySourceOfUpdateResponse
mojo.internal.Struct(
    ash.quick_start.mojom.NotifySourceOfUpdateResponseSpec, 'ash.quick_start.mojom.NotifySourceOfUpdateResponse', [
      mojo.internal.StructField('ack_received', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
