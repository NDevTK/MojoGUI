// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/content/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};
var components = components || {};
var blink = blink || {};
var blink = blink || {};

subresource_filter.mojom.SubresourceFilterAgent = {};
subresource_filter.mojom.SubresourceFilterAgent.$interfaceName = 'subresource_filter.mojom.SubresourceFilterAgent';
subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost = {};
subresource_filter.mojom.SubresourceFilterHost.$interfaceName = 'subresource_filter.mojom.SubresourceFilterHost';
subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec = { $: {} };

// Interface: SubresourceFilterAgent
mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_Params', [
      mojo.internal.StructField('activation_state', 0, 0, subresource_filter.mojom.ActivationStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('ad_evidence', 8, 0, blink.mojom.FrameAdEvidenceSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

subresource_filter.mojom.SubresourceFilterAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

subresource_filter.mojom.SubresourceFilterAgentRemote = class {
  static get $interfaceName() {
    return 'subresource_filter.mojom.SubresourceFilterAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      subresource_filter.mojom.SubresourceFilterAgentPendingReceiver,
      handle);
    this.$ = new subresource_filter.mojom.SubresourceFilterAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

subresource_filter.mojom.SubresourceFilterAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activateForNextCommittedLoad(activation_state, ad_evidence) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec,
      null,
      [activation_state, ad_evidence]);
  }

};

subresource_filter.mojom.SubresourceFilterAgent.getRemote = function() {
  let remote = new subresource_filter.mojom.SubresourceFilterAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'subresource_filter.mojom.SubresourceFilterAgent',
    'context');
  return remote.$;
};

subresource_filter.mojom.SubresourceFilterAgentPtr = subresource_filter.mojom.SubresourceFilterAgentRemote;
subresource_filter.mojom.SubresourceFilterAgentRequest = subresource_filter.mojom.SubresourceFilterAgentPendingReceiver;


// Interface: SubresourceFilterHost
mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_Params', [
      mojo.internal.StructField('fenced_frame_root_placeholder_token', 0, 0, blink.mojom.RemoteFrameTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_Params', [
      mojo.internal.StructField('statistics', 0, 0, subresource_filter.mojom.DocumentLoadStatisticsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_Params', [
      mojo.internal.StructField('violation', 0, 0, subresource_filter.mojom.AdsViolationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

subresource_filter.mojom.SubresourceFilterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

subresource_filter.mojom.SubresourceFilterHostRemote = class {
  static get $interfaceName() {
    return 'subresource_filter.mojom.SubresourceFilterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      subresource_filter.mojom.SubresourceFilterHostPendingReceiver,
      handle);
    this.$ = new subresource_filter.mojom.SubresourceFilterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

subresource_filter.mojom.SubresourceFilterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didDisallowFirstSubresource() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec,
      null,
      []);
  }

  frameIsAd() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec,
      null,
      []);
  }

  frameWasCreatedByAdScript() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec,
      null,
      []);
  }

  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec,
      null,
      [fenced_frame_root_placeholder_token]);
  }

  setDocumentLoadStatistics(statistics) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec,
      null,
      [statistics]);
  }

  onAdsViolationTriggered(violation) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec,
      null,
      [violation]);
  }

};

subresource_filter.mojom.SubresourceFilterHost.getRemote = function() {
  let remote = new subresource_filter.mojom.SubresourceFilterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'subresource_filter.mojom.SubresourceFilterHost',
    'context');
  return remote.$;
};

subresource_filter.mojom.SubresourceFilterHostPtr = subresource_filter.mojom.SubresourceFilterHostRemote;
subresource_filter.mojom.SubresourceFilterHostRequest = subresource_filter.mojom.SubresourceFilterHostPendingReceiver;

