// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/xr_hand_tracking_data.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: XRHandJoint
device.mojom.XRHandJoint = {
  kWrist: 0,
  kThumbMetacarpal: 1,
  kThumbPhalanxProximal: 2,
  kThumbPhalanxDistal: 3,
  kThumbTip: 4,
  kIndexFingerMetacarpal: 5,
  kIndexFingerPhalanxProximal: 6,
  kIndexFingerPhalanxIntermediate: 7,
  kIndexFingerPhalanxDistal: 8,
  kIndexFingerTip: 9,
  kMiddleFingerMetacarpal: 10,
  kMiddleFingerPhalanxProximal: 11,
  kMiddleFingerPhalanxIntermediate: 12,
  kMiddleFingerPhalanxDistal: 13,
  kMiddleFingerTip: 14,
  kRingFingerMetacarpal: 15,
  kRingFingerPhalanxProximal: 16,
  kRingFingerPhalanxIntermediate: 17,
  kRingFingerPhalanxDistal: 18,
  kRingFingerTip: 19,
  kPinkyFingerMetacarpal: 20,
  kPinkyFingerPhalanxProximal: 21,
  kPinkyFingerPhalanxIntermediate: 22,
  kPinkyFingerPhalanxDistal: 23,
  kPinkyFingerTip: 24,
};
device.mojom.XRHandJointSpec = { $: mojo.internal.Enum() };

// Struct: XRHandJointData
device.mojom.XRHandJointDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHandJointData',
      packedSize: 24,
      fields: [
        { name: 'joint', packedOffset: 8, packedBitOffset: 0, type: device.mojom.XRHandJointSpec, nullable: false, minVersion: 0 },
        { name: 'mojo_from_joint', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: true, minVersion: 0 },
        { name: 'radius', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: XRHandTrackingData
device.mojom.XRHandTrackingDataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.XRHandTrackingData',
      packedSize: 16,
      fields: [
        { name: 'hand_joint_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.XRHandJointDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
