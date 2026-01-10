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
network.mojom.TypeSpec = { $: mojo.internal.Enum() };

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
network.mojom.SRIMessageSignatureErrorSpec = { $: mojo.internal.Enum() };

// Struct: SRIMessageSignatureComponentParameter
network.mojom.SRIMessageSignatureComponentParameterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignatureComponentParameter',
      packedSize: 16,
      fields: [
        { name: 'kName', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SRIMessageSignatureComponentParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SRIMessageSignature
network.mojom.SRIMessageSignatureSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SRIMessageSignature',
      packedSize: 88,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'components', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SRIMessageSignatureComponentSpec, false), nullable: false, minVersion: 0 },
        { name: 'created_$flag', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'created_$value', originalFieldName: 'created' } },
        { name: 'created_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'created_$flag', originalFieldName: 'created' } },
        { name: 'expires_$flag', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'expires_$value', originalFieldName: 'expires' } },
        { name: 'expires_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'expires_$flag', originalFieldName: 'expires' } },
        { name: 'keyid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'nonce', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tag', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serialized_signature_params', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
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
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SRIMessageSignatureErrorSpec, nullable: false, minVersion: 0 },
        { name: 'signature_base', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'integrity_assertions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'signatures', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SRIMessageSignatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'issues', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SRIMessageSignatureIssueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
