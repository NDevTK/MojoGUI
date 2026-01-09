// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/content/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};


// Interface: SubresourceFilterAgent
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
      subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec.$,
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

// ParamsSpec for ActivateForNextCommittedLoad
subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterAgent.ActivateForNextCommittedLoad_Params',
      packedSize: 24,
      fields: [
        { name: 'activation_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ad_evidence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
subresource_filter.mojom.SubresourceFilterAgentPtr = subresource_filter.mojom.SubresourceFilterAgentRemote;
subresource_filter.mojom.SubresourceFilterAgentRequest = subresource_filter.mojom.SubresourceFilterAgentPendingReceiver;


// Interface: SubresourceFilterHost
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
      subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec.$,
      null,
      []);
  }

  frameIsAd() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec.$,
      null,
      []);
  }

  frameWasCreatedByAdScript() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec.$,
      null,
      []);
  }

  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec.$,
      null,
      [fenced_frame_root_placeholder_token]);
  }

  setDocumentLoadStatistics(statistics) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec.$,
      null,
      [statistics]);
  }

  onAdsViolationTriggered(violation) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec.$,
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

// ParamsSpec for DidDisallowFirstSubresource
subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.DidDisallowFirstSubresource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FrameIsAd
subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.FrameIsAd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FrameWasCreatedByAdScript
subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.FrameWasCreatedByAdScript_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AdScriptDidCreateFencedFrame
subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.AdScriptDidCreateFencedFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'fenced_frame_root_placeholder_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDocumentLoadStatistics
subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.SetDocumentLoadStatistics_Params',
      packedSize: 16,
      fields: [
        { name: 'statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAdsViolationTriggered
subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterHost.OnAdsViolationTriggered_Params',
      packedSize: 16,
      fields: [
        { name: 'violation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
subresource_filter.mojom.SubresourceFilterHostPtr = subresource_filter.mojom.SubresourceFilterHostRemote;
subresource_filter.mojom.SubresourceFilterHostRequest = subresource_filter.mojom.SubresourceFilterHostPendingReceiver;

