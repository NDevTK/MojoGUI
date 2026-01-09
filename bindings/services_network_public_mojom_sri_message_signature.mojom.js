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
