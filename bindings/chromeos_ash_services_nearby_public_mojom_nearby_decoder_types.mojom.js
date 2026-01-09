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

// Struct: Advertisement
sharing.mojom.AdvertisementSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.Advertisement',
      packedSize: 40,
      fields: [
        { name: 'salt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encrypted_metadata_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'device_type', packedOffset: 24, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetTypeSpec, nullable: false },
        { name: 'device_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'file_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'text_metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'required_package', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wifi_credentials_metadata', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnknownSecurityType', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'signed_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'secret_id_hash', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'optional_signed_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'public_certificate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'secret_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'authenticity_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'public_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'start_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'end_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'encrypted_metadata_bytes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'metadata_encryption_key_tag', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};
