// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/content/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ActivateForNextCommittedLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateForNextCommittedLoad (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterAgent_ActivateForNextCommittedLoad_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activateForNextCommittedLoad');
          const result = this.impl.activateForNextCommittedLoad(params.activation_state, params.ad_evidence);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [],
      false);
  }

  frameIsAd() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec,
      null,
      [],
      false);
  }

  frameWasCreatedByAdScript() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec,
      null,
      [],
      false);
  }

  adScriptDidCreateFencedFrame(fenced_frame_root_placeholder_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec,
      null,
      [fenced_frame_root_placeholder_token],
      false);
  }

  setDocumentLoadStatistics(statistics) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec,
      null,
      [statistics],
      false);
  }

  onAdsViolationTriggered(violation) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidDisallowFirstSubresource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDisallowFirstSubresource (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FrameIsAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameIsAd (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FrameWasCreatedByAdScript
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameWasCreatedByAdScript (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AdScriptDidCreateFencedFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdScriptDidCreateFencedFrame (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetDocumentLoadStatistics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDocumentLoadStatistics (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnAdsViolationTriggered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAdsViolationTriggered (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_DidDisallowFirstSubresource_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didDisallowFirstSubresource');
          const result = this.impl.didDisallowFirstSubresource();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_FrameIsAd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.frameIsAd');
          const result = this.impl.frameIsAd();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_FrameWasCreatedByAdScript_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.frameWasCreatedByAdScript');
          const result = this.impl.frameWasCreatedByAdScript();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_AdScriptDidCreateFencedFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.adScriptDidCreateFencedFrame');
          const result = this.impl.adScriptDidCreateFencedFrame(params.fenced_frame_root_placeholder_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_SetDocumentLoadStatistics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDocumentLoadStatistics');
          const result = this.impl.setDocumentLoadStatistics(params.statistics);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(subresource_filter.mojom.SubresourceFilterHost_OnAdsViolationTriggered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAdsViolationTriggered');
          const result = this.impl.onAdsViolationTriggered(params.violation);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

subresource_filter.mojom.SubresourceFilterHostReceiver = subresource_filter.mojom.SubresourceFilterHostReceiver;

subresource_filter.mojom.SubresourceFilterHostPtr = subresource_filter.mojom.SubresourceFilterHostRemote;
subresource_filter.mojom.SubresourceFilterHostRequest = subresource_filter.mojom.SubresourceFilterHostPendingReceiver;

