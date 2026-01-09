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
      packedSize: 16,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'wifi_credentials_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 8,
      fields: [
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
      packedSize: 8,
      fields: [
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
      packedSize: 8,
      fields: [
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'optional_signed_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 8,
      fields: [
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
        { name: 'public_certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'metadata_encryption_key_tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
