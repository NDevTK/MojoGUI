// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/sri_message_signature.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.SRIMessageSignatureErrorSpec = { $: mojo.internal.Enum() };
network.mojom.SRIMessageSignatureComponentParameterSpec = { $: {} };
network.mojom.SRIMessageSignatureComponentSpec = { $: {} };
network.mojom.SRIMessageSignatureSpec = { $: {} };
network.mojom.SRIMessageSignatureIssueSpec = { $: {} };
network.mojom.SRIMessageSignaturesSpec = { $: {} };

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
mojo.internal.Struct(
    network.mojom.SRIMessageSignatureComponentParameterSpec, 'network.mojom.SRIMessageSignatureComponentParameter', [
      mojo.internal.StructField('kName', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SRIMessageSignatureComponent
mojo.internal.Struct(
    network.mojom.SRIMessageSignatureComponentSpec, 'network.mojom.SRIMessageSignatureComponent', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, mojo.internal.Array(network.mojom.SRIMessageSignatureComponentParameterSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SRIMessageSignature
mojo.internal.Struct(
    network.mojom.SRIMessageSignatureSpec, 'network.mojom.SRIMessageSignature', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('components', 16, 0, mojo.internal.Array(network.mojom.SRIMessageSignatureComponentSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('created_$flag', 72, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'created_$value', originalFieldName: 'created' }),
      mojo.internal.StructField('created_$value', 24, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'created_$flag', originalFieldName: 'created' }),
      mojo.internal.StructField('expires_$flag', 72, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'expires_$value', originalFieldName: 'expires' }),
      mojo.internal.StructField('expires_$value', 32, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'expires_$flag', originalFieldName: 'expires' }),
      mojo.internal.StructField('keyid', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('nonce', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tag', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serialized_signature_params', 64, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SRIMessageSignatureIssue
mojo.internal.Struct(
    network.mojom.SRIMessageSignatureIssueSpec, 'network.mojom.SRIMessageSignatureIssue', [
      mojo.internal.StructField('error', 16, 0, network.mojom.SRIMessageSignatureErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('signature_base', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('integrity_assertions', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SRIMessageSignatures
mojo.internal.Struct(
    network.mojom.SRIMessageSignaturesSpec, 'network.mojom.SRIMessageSignatures', [
      mojo.internal.StructField('signatures', 0, 0, mojo.internal.Array(network.mojom.SRIMessageSignatureSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('issues', 8, 0, mojo.internal.Array(network.mojom.SRIMessageSignatureIssueSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
