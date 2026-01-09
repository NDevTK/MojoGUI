// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/privacy_sandbox/notice/notice.mojom
// Module: privacy_sandbox.notice.mojom

'use strict';

// Module namespace
var privacy_sandbox = privacy_sandbox || {};
privacy_sandbox.notice = privacy_sandbox.notice || {};
privacy_sandbox.notice.mojom = privacy_sandbox.notice.mojom || {};


// Enum: PrivacySandboxNoticeEvent
privacy_sandbox.notice.mojom.PrivacySandboxNoticeEvent = {
  kAck: 0,
  kClosed: 1,
  kOptIn: 2,
  kOptOut: 3,
  kSettings: 4,
  kShown: 5,
};
privacy_sandbox.notice.mojom.PrivacySandboxNoticeEventSpec = { $: mojo.internal.Enum() };

// Enum: PrivacySandboxNotice
privacy_sandbox.notice.mojom.PrivacySandboxNotice = {
  kTopicsConsentNotice: 0,
  kProtectedAudienceMeasurementNotice: 1,
  kThreeAdsApisNotice: 2,
  kMeasurementNotice: 3,
};
privacy_sandbox.notice.mojom.PrivacySandboxNoticeSpec = { $: mojo.internal.Enum() };
