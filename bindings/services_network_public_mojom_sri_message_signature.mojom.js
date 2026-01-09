// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/sri_message_signature.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Type
network.mojom.Type = {
  kName: 0,
  kRequest: 1,
  kStrictStructuredFieldSerialization: 2,
  kBinaryRepresentation: 3,
};

// Enum: SRIMessageSignatureError
network.mojom.SRIMessageSignatureError = {
  kMissingSignatureHeader: 0,
  kMissingSignatureInputHeader: 1,
  kInvalidSignatureHeader: 2,
  kInvalidSignatureInputHeader: 3,
  kSignatureHeaderValueIsNotByteSequence: 4,
  kSignatureHeaderValueIsParameterized: 5,
  kSignatureHeaderValueIsIncorrectLength: 6,
  kSignatureInputHeaderMissingLabel: 7,
  kSignatureInputHeaderValueNotInnerList: 8,
  kSignatureInputHeaderValueMissingComponents: 9,
  kSignatureInputHeaderInvalidComponentType: 10,
  kSignatureInputHeaderInvalidComponentName: 11,
  kSignatureInputHeaderInvalidHeaderComponentParameter: 12,
  kSignatureInputHeaderInvalidDerivedComponentParameter: 13,
  kSignatureInputHeaderKeyIdLength: 14,
  kSignatureInputHeaderInvalidParameter: 15,
  kSignatureInputHeaderMissingRequiredParameters: 16,
  kValidationFailedSignatureExpired: 17,
  kValidationFailedInvalidLength: 18,
  kValidationFailedSignatureMismatch: 19,
  kValidationFailedIntegrityMismatch: 20,
};

// Struct: SRIMessageSignatureComponentParameter
network.mojom.SRIMessageSignatureComponentParameterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignatureComponentParameter',
      packedSize: 16,
      fields: [
        { name: 'kName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SRIMessageSignatureComponent
network.mojom.SRIMessageSignatureComponentSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignatureComponent',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SRIMessageSignature
network.mojom.SRIMessageSignatureSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignature',
      packedSize: 80,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'components', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'created', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'expires', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'keyid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'nonce', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tag', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'serialized_signature_params', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SRIMessageSignatureIssue
network.mojom.SRIMessageSignatureIssueSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignatureIssue',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SRIMessageSignatureErrorSpec, nullable: false },
        { name: 'signature_base', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'integrity_assertions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SRIMessageSignatures
network.mojom.SRIMessageSignaturesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignatures',
      packedSize: 24,
      fields: [
        { name: 'signatures', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'issues', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
