// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_manager.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.PressureManagerAddClientResultSpec = { $: mojo.internal.Enum() };
device.mojom.VirtualPressureSourceMetadataSpec = { $: {} };
device.mojom.PressureManager = {};
device.mojom.PressureManager.$interfaceName = 'device.mojom.PressureManager';
device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec = { $: {} };
device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec = { $: {} };
device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec = { $: {} };
device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec = { $: {} };
device.mojom.PressureManager_AddClient_ParamsSpec = { $: {} };
device.mojom.PressureManager_AddClient_ResponseParamsSpec = { $: {} };
device.mojom.PressureClient = {};
device.mojom.PressureClient.$interfaceName = 'device.mojom.PressureClient';
device.mojom.PressureClient_OnPressureUpdated_ParamsSpec = { $: {} };

// Enum: PressureManagerAddClientResult
device.mojom.PressureManagerAddClientResult = {
  kNotSupported: 0,
  kOk: 1,
};

// Struct: VirtualPressureSourceMetadata
mojo.internal.Struct(
    device.mojom.VirtualPressureSourceMetadataSpec, 'device.mojom.VirtualPressureSourceMetadata', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PressureManager
mojo.internal.Struct(
    device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec, 'device.mojom.PressureManager_AddVirtualPressureSource_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 16, 0, device.mojom.VirtualPressureSourceMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec, 'device.mojom.PressureManager_AddVirtualPressureSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec, 'device.mojom.PressureManager_RemoveVirtualPressureSource_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec, 'device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec, 'device.mojom.PressureManager_UpdateVirtualPressureSourceData_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, device.mojom.PressureStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('own_contribution_estimate', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec, 'device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddClient_ParamsSpec, 'device.mojom.PressureManager_AddClient_Params', [
      mojo.internal.StructField('source', 0, 0, device.mojom.PressureSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client', 16, 0, pending_associated_remote<device.mojom.PressureClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.PressureManager_AddClient_ResponseParamsSpec, 'device.mojom.PressureManager_AddClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.PressureManagerAddClientResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.PressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addVirtualPressureSource(token, source, metadata) {
    return this.$.addVirtualPressureSource(token, source, metadata);
  }
  removeVirtualPressureSource(token, source) {
    return this.$.removeVirtualPressureSource(token, source);
  }
  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    return this.$.updateVirtualPressureSourceData(token, source, state, own_contribution_estimate);
  }
  addClient(source, token, client) {
    return this.$.addClient(source, token, client);
  }
};

device.mojom.PressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PressureManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addVirtualPressureSource(token, source, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec,
      device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec,
      [token, source, metadata],
      false);
  }

  removeVirtualPressureSource(token, source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec,
      device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec,
      [token, source],
      false);
  }

  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec,
      device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec,
      [token, source, state, own_contribution_estimate],
      false);
  }

  addClient(source, token, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.PressureManager_AddClient_ParamsSpec,
      device.mojom.PressureManager_AddClient_ResponseParamsSpec,
      [source, token, client],
      false);
  }

};

device.mojom.PressureManager.getRemote = function() {
  let remote = new device.mojom.PressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureManager',
    'context');
  return remote.$;
};

device.mojom.PressureManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PressureManager', [
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
             decoder.decodeStructInline(device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PressureManager_AddClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec.$.structSpec);
          const result = this.impl.addVirtualPressureSource(params.token, params.source, params.metadata);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_AddVirtualPressureSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec.$.structSpec);
          const result = this.impl.removeVirtualPressureSource(params.token, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_RemoveVirtualPressureSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec.$.structSpec);
          const result = this.impl.updateVirtualPressureSourceData(params.token, params.source, params.state, params.own_contribution_estimate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_UpdateVirtualPressureSourceData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureManager_AddClient_ParamsSpec.$.structSpec);
          const result = this.impl.addClient(params.source, params.token, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.PressureManager_AddClient_ResponseParamsSpec);
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

device.mojom.PressureManagerReceiver = device.mojom.PressureManagerReceiver;

device.mojom.PressureManagerPtr = device.mojom.PressureManagerRemote;
device.mojom.PressureManagerRequest = device.mojom.PressureManagerPendingReceiver;


// Interface: PressureClient
mojo.internal.Struct(
    device.mojom.PressureClient_OnPressureUpdated_ParamsSpec, 'device.mojom.PressureClient_OnPressureUpdated_Params', [
      mojo.internal.StructField('update', 0, 0, device.mojom.PressureUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.PressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureClientPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPressureUpdated(update) {
    return this.$.onPressureUpdated(update);
  }
};

device.mojom.PressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PressureClient', [
      { explicit: null },
    ]);
  }

  onPressureUpdated(update) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update],
      false);
  }

};

device.mojom.PressureClient.getRemote = function() {
  let remote = new device.mojom.PressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureClient',
    'context');
  return remote.$;
};

device.mojom.PressureClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PressureClient', [
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
             decoder.decodeStructInline(device.mojom.PressureClient_OnPressureUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PressureClient_OnPressureUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onPressureUpdated(params.update);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.PressureClientReceiver = device.mojom.PressureClientReceiver;

device.mojom.PressureClientPtr = device.mojom.PressureClientRemote;
device.mojom.PressureClientRequest = device.mojom.PressureClientPendingReceiver;

