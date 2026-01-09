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
