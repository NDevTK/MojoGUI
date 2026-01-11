// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder_types.mojom
// Module: sharing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var nearby_share = nearby_share || {};
var mojo_base = mojo_base || {};

sharing.mojom.TypeSpec = { $: mojo.internal.Enum() };
sharing.mojom.TypeSpec = { $: mojo.internal.Enum() };
sharing.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
sharing.mojom.StatusSpec = { $: mojo.internal.Enum() };
sharing.mojom.StatusSpec = { $: mojo.internal.Enum() };
sharing.mojom.FrameSpec = { $: {} };
sharing.mojom.V1FrameSpec = { $: {} };
sharing.mojom.AdvertisementSpec = { $: {} };
sharing.mojom.IntroductionFrameSpec = { $: {} };
sharing.mojom.FileMetadataSpec = { $: {} };
sharing.mojom.TextMetadataSpec = { $: {} };
sharing.mojom.WifiCredentialsMetadataSpec = { $: {} };
sharing.mojom.ConnectionResponseFrameSpec = { $: {} };
sharing.mojom.PairedKeyEncryptionFrameSpec = { $: {} };
sharing.mojom.PairedKeyResultFrameSpec = { $: {} };
sharing.mojom.CertificateInfoFrameSpec = { $: {} };
sharing.mojom.PublicCertificateSpec = { $: {} };
sharing.mojom.CancelFrameSpec = { $: {} };

// Enum: Type
sharing.mojom.Type = {
  kUnknown: 0,
  kImage: 1,
  kVideo: 2,
  kApp: 3,
  kAudio: 4,
};

// Enum: Type
sharing.mojom.Type = {
  kUnknown: 0,
  kText: 1,
  kUrl: 2,
  kAddress: 3,
  kPhoneNumber: 4,
};

// Enum: SecurityType
sharing.mojom.SecurityType = {
  kUnknownSecurityType: 0,
  kOpen: 1,
  kWpaPsk: 2,
  kWep: 3,
};

// Enum: Status
sharing.mojom.Status = {
  kUnknown: 0,
  kAccept: 1,
  kReject: 2,
  kNotEnoughSpace: 3,
  kUnsupportedAttachmentType: 4,
  kTimedOut: 5,
};

// Enum: Status
sharing.mojom.Status = {
  kUnknown: 0,
  kSuccess: 1,
  kFail: 2,
  kUnable: 3,
};

// Union: Frame
mojo.internal.Union(
    sharing.mojom.FrameSpec, 'sharing.mojom.Frame', {
      'v1': {
        'ordinal': 0,
        'type': sharing.mojom.V1FrameSpec.$,
        'nullable': false,
      },
    });

// Union: V1Frame
mojo.internal.Union(
    sharing.mojom.V1FrameSpec, 'sharing.mojom.V1Frame', {
      'introduction': {
        'ordinal': 0,
        'type': sharing.mojom.IntroductionFrameSpec.$,
        'nullable': false,
      },
      'connection_response': {
        'ordinal': 1,
        'type': sharing.mojom.ConnectionResponseFrameSpec.$,
        'nullable': false,
      },
      'paired_key_encryption': {
        'ordinal': 2,
        'type': sharing.mojom.PairedKeyEncryptionFrameSpec.$,
        'nullable': false,
      },
      'paired_key_result': {
        'ordinal': 3,
        'type': sharing.mojom.PairedKeyResultFrameSpec.$,
        'nullable': false,
      },
      'certificate_info': {
        'ordinal': 4,
        'type': sharing.mojom.CertificateInfoFrameSpec.$,
        'nullable': false,
      },
      'cancel_frame': {
        'ordinal': 5,
        'type': sharing.mojom.CancelFrameSpec.$,
        'nullable': false,
      },
    });

// Struct: Advertisement
mojo.internal.Struct(
    sharing.mojom.AdvertisementSpec, 'sharing.mojom.Advertisement', [
      mojo.internal.StructField('salt', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('encrypted_metadata_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('device_type', 16, 0, nearby_share.mojom.ShareTargetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IntroductionFrame
mojo.internal.Struct(
    sharing.mojom.IntroductionFrameSpec, 'sharing.mojom.IntroductionFrame', [
      mojo.internal.StructField('file_metadata', 0, 0, mojo.internal.Array(sharing.mojom.FileMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('text_metadata', 8, 0, mojo.internal.Array(sharing.mojom.TextMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('required_package', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('wifi_credentials_metadata', 24, 0, mojo.internal.Array(sharing.mojom.WifiCredentialsMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileMetadata
mojo.internal.Struct(
    sharing.mojom.FileMetadataSpec, 'sharing.mojom.FileMetadata', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextMetadata
mojo.internal.Struct(
    sharing.mojom.TextMetadataSpec, 'sharing.mojom.TextMetadata', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiCredentialsMetadata
mojo.internal.Struct(
    sharing.mojom.WifiCredentialsMetadataSpec, 'sharing.mojom.WifiCredentialsMetadata', [
      mojo.internal.StructField('kUnknownSecurityType', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConnectionResponseFrame
mojo.internal.Struct(
    sharing.mojom.ConnectionResponseFrameSpec, 'sharing.mojom.ConnectionResponseFrame', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PairedKeyEncryptionFrame
mojo.internal.Struct(
    sharing.mojom.PairedKeyEncryptionFrameSpec, 'sharing.mojom.PairedKeyEncryptionFrame', [
      mojo.internal.StructField('signed_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('secret_id_hash', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('optional_signed_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PairedKeyResultFrame
mojo.internal.Struct(
    sharing.mojom.PairedKeyResultFrameSpec, 'sharing.mojom.PairedKeyResultFrame', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CertificateInfoFrame
mojo.internal.Struct(
    sharing.mojom.CertificateInfoFrameSpec, 'sharing.mojom.CertificateInfoFrame', [
      mojo.internal.StructField('public_certificate', 0, 0, mojo.internal.Array(sharing.mojom.PublicCertificateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PublicCertificate
mojo.internal.Struct(
    sharing.mojom.PublicCertificateSpec, 'sharing.mojom.PublicCertificate', [
      mojo.internal.StructField('secret_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('authenticity_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('public_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('start_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted_metadata_bytes', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('metadata_encryption_key_tag', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: CancelFrame
mojo.internal.Struct(
    sharing.mojom.CancelFrameSpec, 'sharing.mojom.CancelFrame', [
    ],
    [[0, 8]]);
