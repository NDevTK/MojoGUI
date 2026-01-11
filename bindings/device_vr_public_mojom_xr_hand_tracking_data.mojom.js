// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/xr_hand_tracking_data.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var gfx = gfx || {};

device.mojom.XRHandJointSpec = { $: mojo.internal.Enum() };
device.mojom.XRHandJointDataSpec = { $: {} };
device.mojom.XRHandTrackingDataSpec = { $: {} };

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

// Struct: XRHandJointData
mojo.internal.Struct(
    device.mojom.XRHandJointDataSpec, 'device.mojom.XRHandJointData', [
      mojo.internal.StructField('joint', 0, 0, device.mojom.XRHandJointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mojo_from_joint', 8, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('radius', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: XRHandTrackingData
mojo.internal.Struct(
    device.mojom.XRHandTrackingDataSpec, 'device.mojom.XRHandTrackingData', [
      mojo.internal.StructField('hand_joint_data', 0, 0, mojo.internal.Array(device.mojom.XRHandJointDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
