// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/content/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};
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
      mojo.internal.StructField('activation_state', 0, 0, subresource_filter.mojom.ActivationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ad_evidence', 8, 0, blink.mojom.FrameAdEvidenceSpec.$, null, true, 0, undefined),
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
  activateForNextCommittedLoad(activation_state, ad_evidence) {
    return this.$.activateForNextCommittedLoad(activation_state, ad_evidence);
  }
};

subresource_filter.mojom.SubresourceFilterAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SubresourceFilterAgent', [
      { explicit: null },
    ]);
  }

  activateForNextCommittedLoad(activation_state, ad_evidence) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec,
      null,
      [activation_state, ad_evidence],
      false);
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

subresource_filter.mojom.SubresourceFilterAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SubresourceFilterAgent', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec.$.structSpec);
          const result = this.impl.activateForNextCommittedLoad(params.activation_state, params.ad_evidence);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

subresource_filter.mojom.SubresourceFilterAgentReceiver = subresource_filter.mojom.SubresourceFilterAgentReceiver;

subresource_filter.mojom.SubresourceFilterAgentPtr = subresource_filter.mojom.SubresourceFilterAgentRemote;
subresource_filter.mojom.SubresourceFilterAgentRequest = subresource_filter.mojom.SubresourceFilterAgentPendingReceiver;


// Interface: SubresourceFilterHost
mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_Params', [
      mojo.internal.StructField('fenced_frame_root_placeholder_token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_Params', [
      mojo.internal.StructField('statistics', 0, 0, subresource_filter.mojom.DocumentLoadStatisticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_Params', [
      mojo.internal.StructField('violation', 0, 0, subresource_filter.mojom.AdsViolationSpec.$, null, false, 0, undefined),
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
  didDisallowFirstSubresource() {
    return this.$.didDisallowFirstSubresource();
  }
  frameIsAd() {
    return this.$.frameIsAd();
  }
  frameWasCreatedByAdScript() {
    return this.$.frameWasCreatedByAdScript();
  }
  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    return this.$.adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token);
  }
  setDocumentLoadStatistics(statistics) {
    return this.$.setDocumentLoadStatistics(statistics);
  }
  onAdsViolationTriggered(violation) {
    return this.$.onAdsViolationTriggered(violation);
  }
};

subresource_filter.mojom.SubresourceFilterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SubresourceFilterHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didDisallowFirstSubresource() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec,
      null,
      [],
      false);
  }

  frameIsAd() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec,
      null,
      [],
      false);
  }

  frameWasCreatedByAdScript() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec,
      null,
      [],
      false);
  }

  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec,
      null,
      [fenced_frame_root_placeholder_token],
      false);
  }

  setDocumentLoadStatistics(statistics) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec,
      null,
      [statistics],
      false);
  }

  onAdsViolationTriggered(violation) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec,
      null,
      [violation],
      false);
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

subresource_filter.mojom.SubresourceFilterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SubresourceFilterHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec.$.structSpec);
          const result = this.impl.didDisallowFirstSubresource();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec.$.structSpec);
          const result = this.impl.frameIsAd();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec.$.structSpec);
          const result = this.impl.frameWasCreatedByAdScript();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec.$.structSpec);
          const result = this.impl.adScriptDidCreateFencedFrame(params.fenced_frame_root_placeholder_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec.$.structSpec);
          const result = this.impl.setDocumentLoadStatistics(params.statistics);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec.$.structSpec);
          const result = this.impl.onAdsViolationTriggered(params.violation);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

subresource_filter.mojom.SubresourceFilterHostReceiver = subresource_filter.mojom.SubresourceFilterHostReceiver;

subresource_filter.mojom.SubresourceFilterHostPtr = subresource_filter.mojom.SubresourceFilterHostRemote;
subresource_filter.mojom.SubresourceFilterHostRequest = subresource_filter.mojom.SubresourceFilterHostPendingReceiver;

