// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tabs/tabs.mojom
// Module: tabs.mojom

'use strict';

// Module namespace
var tabs = tabs || {};
tabs.mojom = tabs.mojom || {};


// Enum: TabAlertState
tabs.mojom.TabAlertState = {
  kAudioMuting: 0,
  kAudioRecording: 1,
  kAudioPlaying: 2,
  kBluetoothConnected: 3,
  kBluetoothScanActive: 4,
  kDesktopCapturing: 5,
  kActorAccessing: 6,
  kActorWaitingOnUser: 7,
  kGlicAccessing: 8,
  kGlicSharing: 9,
  kHidConnected: 10,
  kMediaRecording: 11,
  kPipPlaying: 12,
  kSerialConnected: 13,
  kTabCapturing: 14,
  kUsbConnected: 15,
  kVideoRecording: 16,
  kVrPresentingInHeadset: 17,
};
tabs.mojom.TabAlertStateSpec = { $: mojo.internal.Enum() };

// Enum: TabNetworkState
tabs.mojom.TabNetworkState = {
  kNone: 0,
  kWaiting: 1,
  kLoading: 2,
  kError: 3,
};
tabs.mojom.TabNetworkStateSpec = { $: mojo.internal.Enum() };
