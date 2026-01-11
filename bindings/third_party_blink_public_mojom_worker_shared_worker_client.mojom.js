// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_client.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SharedWorkerClient = {};
blink.mojom.SharedWorkerClient.$interfaceName = 'blink.mojom.SharedWorkerClient';
blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec = { $: {} };

// Interface: SharedWorkerClient
mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnCreated_Params', [
      mojo.internal.StructField('creation_context_type', 0, 0, blink.mojom.SharedWorkerCreationContextTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnConnected_Params', [
      mojo.internal.StructField('features_used', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnScriptLoadFailed_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnReportException_Params', [
      mojo.internal.StructField('details', 0, 0, blink.mojom.SharedWorkerExceptionDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedWorkerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCreated(creation_context_type) {
    return this.$.onCreated(creation_context_type);
  }
  onConnected(features_used) {
    return this.$.onConnected(features_used);
  }
  onScriptLoadFailed(error_message) {
    return this.$.onScriptLoadFailed(error_message);
  }
  onReportException(details) {
    return this.$.onReportException(details);
  }
  onFeatureUsed(feature) {
    return this.$.onFeatureUsed(feature);
  }
};

blink.mojom.SharedWorkerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedWorkerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCreated(creation_context_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec,
      null,
      [creation_context_type],
      false);
  }

  onConnected(features_used) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec,
      null,
      [features_used],
      false);
  }

  onScriptLoadFailed(error_message) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec,
      null,
      [error_message],
      false);
  }

  onReportException(details) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec,
      null,
      [details],
      false);
  }

  onFeatureUsed(feature) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec,
      null,
      [feature],
      false);
  }

};

blink.mojom.SharedWorkerClient.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerClient',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedWorkerClient', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onCreated(params.creation_context_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec.$.structSpec);
          const result = this.impl.onConnected(params.features_used);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onScriptLoadFailed(params.error_message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec.$.structSpec);
          const result = this.impl.onReportException(params.details);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec.$.structSpec);
          const result = this.impl.onFeatureUsed(params.feature);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.SharedWorkerClientReceiver = blink.mojom.SharedWorkerClientReceiver;

blink.mojom.SharedWorkerClientPtr = blink.mojom.SharedWorkerClientRemote;
blink.mojom.SharedWorkerClientRequest = blink.mojom.SharedWorkerClientPendingReceiver;

