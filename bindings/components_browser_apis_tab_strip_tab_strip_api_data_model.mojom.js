// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_data_model.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Enum: AlertState
tabs_api.mojom.AlertState = {
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

// Enum: NetworkState
tabs_api.mojom.NetworkState = {
  kNone: 0,
  kWaiting: 1,
  kLoading: 2,
  kError: 3,
};

// Enum: Layout
tabs_api.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};
