// Auto-generated MojoJS binding
// Source: chromium_src/components/device_signals/core/common/mojom/system_signals.mojom
// Module: device_signals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device_signals = device_signals || {};
device_signals.mojom = device_signals.mojom || {};
var sandbox = sandbox || {};
var mojo_base = mojo_base || {};

device_signals.mojom.PresenceValueSpec = { $: mojo.internal.Enum() };
device_signals.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };
device_signals.mojom.ExecutableMetadataSpec = { $: {} };
device_signals.mojom.FileSystemItemSpec = { $: {} };
device_signals.mojom.FileSystemItemRequestSpec = { $: {} };
device_signals.mojom.AntiVirusSignalSpec = { $: {} };
device_signals.mojom.HotfixSignalSpec = { $: {} };
device_signals.mojom.SystemSignalsService = {};
device_signals.mojom.SystemSignalsService.$interfaceName = 'device_signals.mojom.SystemSignalsService';
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec = { $: {} };
device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec = { $: {} };

// Enum: PresenceValue
device_signals.mojom.PresenceValue = {
  kUnspecified: 0,
  kAccessDenied: 1,
  kNotFound: 2,
  kFound: 3,
};

// Enum: AntiVirusProductState
device_signals.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};

// Struct: ExecutableMetadata
mojo.internal.Struct(
    device_signals.mojom.ExecutableMetadataSpec, 'device_signals.mojom.ExecutableMetadata', [
      mojo.internal.StructField('public_keys_hashes', 0, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('product_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subject_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_running', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_os_verified', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FileSystemItem
mojo.internal.Struct(
    device_signals.mojom.FileSystemItemSpec, 'device_signals.mojom.FileSystemItem', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presence', 8, 0, device_signals.mojom.PresenceValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('executable_metadata', 24, 0, device_signals.mojom.ExecutableMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FileSystemItemRequest
mojo.internal.Struct(
    device_signals.mojom.FileSystemItemRequestSpec, 'device_signals.mojom.FileSystemItemRequest', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('compute_sha256', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('compute_executable_metadata', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AntiVirusSignal
mojo.internal.Struct(
    device_signals.mojom.AntiVirusSignalSpec, 'device_signals.mojom.AntiVirusSignal', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, device_signals.mojom.AntiVirusProductStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HotfixSignal
mojo.internal.Struct(
    device_signals.mojom.HotfixSignalSpec, 'device_signals.mojom.HotfixSignal', [
      mojo.internal.StructField('hotfix_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SystemSignalsService
mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetFileSystemSignals_Params', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(device_signals.mojom.FileSystemItemRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParams', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(device_signals.mojom.FileSystemItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParams', [
      mojo.internal.StructField('av_signals', 0, 0, mojo.internal.Array(device_signals.mojom.AntiVirusSignalSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec, 'device_signals.mojom.SystemSignalsService_GetHotfixSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec, 'device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParams', [
      mojo.internal.StructField('hotfix_signals', 0, 0, mojo.internal.Array(device_signals.mojom.HotfixSignalSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device_signals.mojom.SystemSignalsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device_signals.mojom.SystemSignalsServiceRemote = class {
  static get $interfaceName() {
    return 'device_signals.mojom.SystemSignalsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device_signals.mojom.SystemSignalsServicePendingReceiver,
      handle);
    this.$ = new device_signals.mojom.SystemSignalsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFileSystemSignals(requests) {
    return this.$.getFileSystemSignals(requests);
  }
  getAntiVirusSignals() {
    return this.$.getAntiVirusSignals();
  }
  getHotfixSignals() {
    return this.$.getHotfixSignals();
  }
};

device_signals.mojom.SystemSignalsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemSignalsService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFileSystemSignals(requests) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec,
      [requests],
      false);
  }

  getAntiVirusSignals() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec,
      [],
      false);
  }

  getHotfixSignals() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec,
      device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec,
      [],
      false);
  }

};

device_signals.mojom.SystemSignalsService.getRemote = function() {
  let remote = new device_signals.mojom.SystemSignalsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_signals.mojom.SystemSignalsService',
    'context');
  return remote.$;
};

device_signals.mojom.SystemSignalsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemSignalsService', [
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
             decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ParamsSpec.$.structSpec);
          const result = this.impl.getFileSystemSignals(params.requests);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_signals.mojom.SystemSignalsService_GetFileSystemSignals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ParamsSpec.$.structSpec);
          const result = this.impl.getAntiVirusSignals();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_signals.mojom.SystemSignalsService_GetAntiVirusSignals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device_signals.mojom.SystemSignalsService_GetHotfixSignals_ParamsSpec.$.structSpec);
          const result = this.impl.getHotfixSignals();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_signals.mojom.SystemSignalsService_GetHotfixSignals_ResponseParamsSpec);
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

device_signals.mojom.SystemSignalsServiceReceiver = device_signals.mojom.SystemSignalsServiceReceiver;

device_signals.mojom.SystemSignalsServicePtr = device_signals.mojom.SystemSignalsServiceRemote;
device_signals.mojom.SystemSignalsServiceRequest = device_signals.mojom.SystemSignalsServicePendingReceiver;

