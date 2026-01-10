// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/scheduler/web_scheduler_tracked_feature.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.WebSchedulerTrackedFeatureSpec = { $: mojo.internal.Enum() };

// Enum: WebSchedulerTrackedFeature
blink.mojom.WebSchedulerTrackedFeature = {
  kWebSocket: 0,
  kWebRTC: 1,
  kMainResourceHasCacheControlNoCache: 2,
  kMainResourceHasCacheControlNoStore: 3,
  kSubresourceHasCacheControlNoCache: 4,
  kSubresourceHasCacheControlNoStore: 5,
  kContainsPlugins: 12,
  kDocumentLoaded: 13,
  kOutstandingNetworkRequestOthers: 15,
  kRequestedMIDIPermission: 21,
  kRequestedAudioCapturePermission: 22,
  kRequestedVideoCapturePermission: 23,
  kRequestedBackForwardCacheBlockedSensors: 24,
  kWebTransportSticky: 25,
  kRequestedBackgroundWorkPermission: 26,
  kBroadcastChannel: 27,
  kWebXR: 31,
  kSharedWorker: 32,
  kWebLocks: 33,
  kWebHID: 34,
  kWebShare: 36,
  kRequestedStorageAccessGrant: 37,
  kWebNfc: 38,
  kOutstandingNetworkRequestFetch: 40,
  kOutstandingNetworkRequestXHR: 41,
  kPrinting: 43,
  kPictureInPicture: 45,
  kSpeechRecognizer: 47,
  kIdleManager: 48,
  kPaymentManager: 49,
  kKeyboardLock: 51,
  kWebOTPService: 52,
  kOutstandingNetworkRequestDirectSocket: 53,
  kInjectedJavascript: 54,
  kInjectedStyleSheet: 55,
  kWebTransport: 57,
  kDummy: 58,
  kKeepaliveRequest: 59,
  kJsNetworkRequestReceivedCacheControlNoStoreResource: 60,
  kIndexedDBEvent: 61,
  kWebSerial: 62,
  kWebSocketSticky: 63,
  kWebRTCSticky: 64,
  kSmartCard: 65,
  kLiveMediaStreamTrack: 66,
  kUnloadHandler: 67,
  kParserAborted: 68,
  kWebBluetooth: 69,
  kWebAuthentication: 70,
  kSharedWorkerMessage: 71,
};
