// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/net_log.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.NetLogCaptureModeSpec = { $: mojo.internal.Enum() };
network.mojom.NetLogEventPhaseSpec = { $: mojo.internal.Enum() };
network.mojom.NetLogExporter = {};
network.mojom.NetLogExporter.$interfaceName = 'network.mojom.NetLogExporter';
network.mojom.NetLogExporter_Start_ParamsSpec = { $: {} };
network.mojom.NetLogExporter_Start_ResponseParamsSpec = { $: {} };
network.mojom.NetLogExporter_Stop_ParamsSpec = { $: {} };
network.mojom.NetLogExporter_Stop_ResponseParamsSpec = { $: {} };
network.mojom.NetLogProxySource = {};
network.mojom.NetLogProxySource.$interfaceName = 'network.mojom.NetLogProxySource';
network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec = { $: {} };
network.mojom.NetLogProxySink = {};
network.mojom.NetLogProxySink.$interfaceName = 'network.mojom.NetLogProxySink';
network.mojom.NetLogProxySink_AddEntry_ParamsSpec = { $: {} };

network.mojom.kUnlimitedFileSize = 0xFFFFFFFFFFFFFFFF;

// Enum: NetLogCaptureMode
network.mojom.NetLogCaptureMode = {
  HEAVILY_REDACTED: 0,
  DEFAULT: 1,
  INCLUDE_PRIVACY_INFO: 2,
  EVERYTHING: 3,
};

// Enum: NetLogEventPhase
network.mojom.NetLogEventPhase = {
  BEGIN: 0,
  END: 1,
  NONE: 2,
};

// Interface: NetLogExporter
mojo.internal.Struct(
    network.mojom.NetLogExporter_Start_ParamsSpec, 'network.mojom.NetLogExporter_Start_Params', [
      mojo.internal.StructField('destination', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra_constants', 8, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_mode', 16, 0, network.mojom.NetLogCaptureModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_file_size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.NetLogExporter_Start_ResponseParamsSpec, 'network.mojom.NetLogExporter_Start_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetLogExporter_Stop_ParamsSpec, 'network.mojom.NetLogExporter_Stop_Params', [
      mojo.internal.StructField('polled_values', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.NetLogExporter_Stop_ResponseParamsSpec, 'network.mojom.NetLogExporter_Stop_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.NetLogExporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogExporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogExporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogExporterPendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogExporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(destination, extra_constants, capture_mode, max_file_size) {
    return this.$.start(destination, extra_constants, capture_mode, max_file_size);
  }
  stop(polled_values) {
    return this.$.stop(polled_values);
  }
};

network.mojom.NetLogExporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetLogExporter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(destination, extra_constants, capture_mode, max_file_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetLogExporter_Start_ParamsSpec,
      network.mojom.NetLogExporter_Start_ResponseParamsSpec,
      [destination, extra_constants, capture_mode, max_file_size],
      false);
  }

  stop(polled_values) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.NetLogExporter_Stop_ParamsSpec,
      network.mojom.NetLogExporter_Stop_ResponseParamsSpec,
      [polled_values],
      false);
  }

};

network.mojom.NetLogExporter.getRemote = function() {
  let remote = new network.mojom.NetLogExporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogExporter',
    'context');
  return remote.$;
};

network.mojom.NetLogExporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetLogExporter', [
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
             decoder.decodeStructInline(network.mojom.NetLogExporter_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.NetLogExporter_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetLogExporter_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.destination, params.extra_constants, params.capture_mode, params.max_file_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetLogExporter_Start_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetLogExporter_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop(params.polled_values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.NetLogExporter_Stop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.NetLogExporterReceiver = network.mojom.NetLogExporterReceiver;

network.mojom.NetLogExporterPtr = network.mojom.NetLogExporterRemote;
network.mojom.NetLogExporterRequest = network.mojom.NetLogExporterPendingReceiver;


// Interface: NetLogProxySource
mojo.internal.Struct(
    network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec, 'network.mojom.NetLogProxySource_UpdateCaptureModes_Params', [
      mojo.internal.StructField('modes', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.NetLogProxySourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogProxySourceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogProxySourcePendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogProxySourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateCaptureModes(modes) {
    return this.$.updateCaptureModes(modes);
  }
};

network.mojom.NetLogProxySourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetLogProxySource', [
      { explicit: null },
    ]);
  }

  updateCaptureModes(modes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec,
      null,
      [modes],
      false);
  }

};

network.mojom.NetLogProxySource.getRemote = function() {
  let remote = new network.mojom.NetLogProxySourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySource',
    'context');
  return remote.$;
};

network.mojom.NetLogProxySourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetLogProxySource', [
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
             decoder.decodeStructInline(network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetLogProxySource_UpdateCaptureModes_ParamsSpec.$.structSpec);
          const result = this.impl.updateCaptureModes(params.modes);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.NetLogProxySourceReceiver = network.mojom.NetLogProxySourceReceiver;

network.mojom.NetLogProxySourcePtr = network.mojom.NetLogProxySourceRemote;
network.mojom.NetLogProxySourceRequest = network.mojom.NetLogProxySourcePendingReceiver;


// Interface: NetLogProxySink
mojo.internal.Struct(
    network.mojom.NetLogProxySink_AddEntry_ParamsSpec, 'network.mojom.NetLogProxySink_AddEntry_Params', [
      mojo.internal.StructField('net_log_source', 0, 0, network.mojom.NetLogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('phase', 8, 0, network.mojom.NetLogEventPhaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.NetLogProxySinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetLogProxySinkRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetLogProxySink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetLogProxySinkPendingReceiver,
      handle);
    this.$ = new network.mojom.NetLogProxySinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addEntry(type, net_log_source, phase, time, params) {
    return this.$.addEntry(type, net_log_source, phase, time, params);
  }
};

network.mojom.NetLogProxySinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetLogProxySink', [
      { explicit: null },
    ]);
  }

  addEntry(type, net_log_source, phase, time, params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetLogProxySink_AddEntry_ParamsSpec,
      null,
      [type, net_log_source, phase, time, params],
      false);
  }

};

network.mojom.NetLogProxySink.getRemote = function() {
  let remote = new network.mojom.NetLogProxySinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetLogProxySink',
    'context');
  return remote.$;
};

network.mojom.NetLogProxySinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetLogProxySink', [
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
             decoder.decodeStructInline(network.mojom.NetLogProxySink_AddEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetLogProxySink_AddEntry_ParamsSpec.$.structSpec);
          const result = this.impl.addEntry(params.type, params.net_log_source, params.phase, params.time, params.params);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.NetLogProxySinkReceiver = network.mojom.NetLogProxySinkReceiver;

network.mojom.NetLogProxySinkPtr = network.mojom.NetLogProxySinkRemote;
network.mojom.NetLogProxySinkRequest = network.mojom.NetLogProxySinkPendingReceiver;

