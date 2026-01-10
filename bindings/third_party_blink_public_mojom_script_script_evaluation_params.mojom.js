// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/script/script_evaluation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: UserActivationOption
blink.mojom.mojom.UserActivationOption = {
  kDoNotActivate: 0,
  kActivate: 1,
};
blink.mojom.mojom.UserActivationOptionSpec = { $: mojo.internal.Enum() };

// Enum: WantResultOption
blink.mojom.mojom.WantResultOption = {
  kNoResult: 0,
  kWantResult: 1,
  kWantResultDateAndRegExpAllowed: 2,
};
blink.mojom.mojom.WantResultOptionSpec = { $: mojo.internal.Enum() };

// Enum: PromiseResultOption
blink.mojom.mojom.PromiseResultOption = {
  kAwait: 0,
  kDoNotWait: 1,
};
blink.mojom.mojom.PromiseResultOptionSpec = { $: mojo.internal.Enum() };

// Enum: EvaluationTiming
blink.mojom.mojom.EvaluationTiming = {
  kAsynchronous: 0,
  kSynchronous: 1,
};
blink.mojom.mojom.EvaluationTimingSpec = { $: mojo.internal.Enum() };

// Enum: LoadEventBlockingOption
blink.mojom.mojom.LoadEventBlockingOption = {
  kDoNotBlock: 0,
  kBlock: 1,
};
blink.mojom.mojom.LoadEventBlockingOptionSpec = { $: mojo.internal.Enum() };
