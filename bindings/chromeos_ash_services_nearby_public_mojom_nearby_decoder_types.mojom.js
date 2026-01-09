// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_decoder_types.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Enum: Type
sharing.mojom.Type = {
  kUnknown: 0,
  kImage: 1,
  kVideo: 2,
  kApp: 3,
  kAudio: 4,
};
sharing.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Type
sharing.mojom.Type = {
  kUnknown: 0,
  kText: 1,
  kUrl: 2,
  kAddress: 3,
  kPhoneNumber: 4,
};
sharing.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: SecurityType
sharing.mojom.SecurityType = {
  kUnknownSecurityType: 0,
  kOpen: 1,
  kWpaPsk: 2,
  kWep: 3,
};
sharing.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };

// Enum: Status
sharing.mojom.Status = {
  kUnknown: 0,
  kAccept: 1,
  kReject: 2,
  kNotEnoughSpace: 3,
  kUnsupportedAttachmentType: 4,
  kTimedOut: 5,
};
sharing.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: Status
sharing.mojom.Status = {
  kUnknown: 0,
  kSuccess: 1,
  kFail: 2,
  kUnable: 3,
};
sharing.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Union: Frame
sharing.mojom.FrameSpec = { $: mojo.internal.Union(
    'sharing.mojom.Frame', {
      'v1': {
        'ordinal': 0,
        'type': sharing.mojom.V1FrameSpec,
      }},
    })
};

// Union: V1Frame
sharing.mojom.V1FrameSpec = { $: mojo.internal.Union(
    'sharing.mojom.V1Frame', {
      'introduction': {
        'ordinal': 0,
        'type': sharing.mojom.IntroductionFrameSpec,
      }},
      'connection_response': {
        'ordinal': 1,
        'type': sharing.mojom.ConnectionResponseFrameSpec,
      }},
      'paired_key_encryption': {
        'ordinal': 2,
        'type': sharing.mojom.PairedKeyEncryptionFrameSpec,
      }},
      'paired_key_result': {
        'ordinal': 3,
        'type': sharing.mojom.PairedKeyResultFrameSpec,
      }},
      'certificate_info': {
        'ordinal': 4,
        'type': sharing.mojom.CertificateInfoFrameSpec,
      }},
      'cancel_frame': {
        'ordinal': 5,
        'type': sharing.mojom.CancelFrameSpec,
      }},
    })
};

// Struct: Advertisement
sharing.mojom.AdvertisementSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Advertisement',
      packedSize: 40,
      fields: [
        { name: 'salt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'encrypted_metadata_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 16, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetTypeSpec, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IntroductionFrame
sharing.mojom.IntroductionFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.IntroductionFrame',
      packedSize: 40,
      fields: [
        { name: 'file_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(sharing.mojom.FileMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'text_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(sharing.mojom.TextMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'required_package', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'wifi_credentials_metadata', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(sharing.mojom.WifiCredentialsMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FileMetadata
sharing.mojom.FileMetadataSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.FileMetadata',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TextMetadata
sharing.mojom.TextMetadataSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TextMetadata',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WifiCredentialsMetadata
sharing.mojom.WifiCredentialsMetadataSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.WifiCredentialsMetadata',
      packedSize: 16,
      fields: [
        { name: 'kUnknownSecurityType', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ConnectionResponseFrame
sharing.mojom.ConnectionResponseFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.ConnectionResponseFrame',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PairedKeyEncryptionFrame
sharing.mojom.PairedKeyEncryptionFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.PairedKeyEncryptionFrame',
      packedSize: 32,
      fields: [
        { name: 'signed_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'secret_id_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'optional_signed_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PairedKeyResultFrame
sharing.mojom.PairedKeyResultFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.PairedKeyResultFrame',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CertificateInfoFrame
sharing.mojom.CertificateInfoFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.CertificateInfoFrame',
      packedSize: 16,
      fields: [
        { name: 'public_certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(sharing.mojom.PublicCertificateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PublicCertificate
sharing.mojom.PublicCertificateSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.PublicCertificate',
      packedSize: 64,
      fields: [
        { name: 'secret_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'authenticity_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'end_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'encrypted_metadata_bytes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'metadata_encryption_key_tag', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: CancelFrame
sharing.mojom.CancelFrameSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.CancelFrame',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};
