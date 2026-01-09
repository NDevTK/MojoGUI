// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/script/script_evaluation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: UserActivationOption
blink.mojom.UserActivationOption = {
  kDoNotActivate: 0,
  kActivate: 1,
};

// Enum: WantResultOption
blink.mojom.WantResultOption = {
  kNoResult: 0,
  kWantResult: 1,
  kWantResultDateAndRegExpAllowed: 2,
};

// Enum: PromiseResultOption
blink.mojom.PromiseResultOption = {
  kAwait: 0,
  kDoNotWait: 1,
};

// Enum: EvaluationTiming
blink.mojom.EvaluationTiming = {
  kAsynchronous: 0,
  kSynchronous: 1,
};

// Enum: LoadEventBlockingOption
blink.mojom.LoadEventBlockingOption = {
  kDoNotBlock: 0,
  kBlock: 1,
};
