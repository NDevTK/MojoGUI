// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.NDEFErrorTypeSpec = { $: mojo.internal.Enum() };
device.mojom.NDEFRecordTypeCategorySpec = { $: mojo.internal.Enum() };
device.mojom.NSRawTypeNameFormatSpec = { $: mojo.internal.Enum() };
device.mojom.NDEFErrorSpec = { $: {} };
device.mojom.NDEFRecordSpec = { $: {} };
device.mojom.NDEFMessageSpec = { $: {} };
device.mojom.NDEFRawRecordSpec = { $: {} };
device.mojom.NDEFRawMessageSpec = { $: {} };
device.mojom.NDEFWriteOptionsSpec = { $: {} };
device.mojom.NFC = {};
device.mojom.NFC.$interfaceName = 'device.mojom.NFC';
device.mojom.NFC_SetClient_ParamsSpec = { $: {} };
device.mojom.NFC_Push_ParamsSpec = { $: {} };
device.mojom.NFC_Push_ResponseParamsSpec = { $: {} };
device.mojom.NFC_CancelPush_ParamsSpec = { $: {} };
device.mojom.NFC_MakeReadOnly_ParamsSpec = { $: {} };
device.mojom.NFC_MakeReadOnly_ResponseParamsSpec = { $: {} };
device.mojom.NFC_CancelMakeReadOnly_ParamsSpec = { $: {} };
device.mojom.NFC_Watch_ParamsSpec = { $: {} };
device.mojom.NFC_Watch_ResponseParamsSpec = { $: {} };
device.mojom.NFC_CancelWatch_ParamsSpec = { $: {} };
device.mojom.NFCClient = {};
device.mojom.NFCClient.$interfaceName = 'device.mojom.NFCClient';
device.mojom.NFCClient_OnWatch_ParamsSpec = { $: {} };
device.mojom.NFCClient_OnError_ParamsSpec = { $: {} };
device.mojom.RawNFCClient = {};
device.mojom.RawNFCClient.$interfaceName = 'device.mojom.RawNFCClient';
device.mojom.RawNFCClient_OnWatch_ParamsSpec = { $: {} };
device.mojom.RawNFCClient_OnError_ParamsSpec = { $: {} };

// Enum: NDEFErrorType
device.mojom.NDEFErrorType = {
  NOT_ALLOWED: 0,
  NOT_SUPPORTED: 1,
  NOT_READABLE: 2,
  INVALID_MESSAGE: 3,
  OPERATION_CANCELLED: 4,
  IO_ERROR: 5,
};

// Enum: NDEFRecordTypeCategory
device.mojom.NDEFRecordTypeCategory = {
  kStandardized: 0,
  kExternal: 1,
  kLocal: 2,
};

// Enum: NSRawTypeNameFormat
device.mojom.NSRawTypeNameFormat = {
  kAbsoluteURI: 0,
  kEmpty: 1,
  kMedia: 2,
  kExternal: 3,
  kWellKnown: 4,
  kUnchanged: 5,
  kUnknown: 6,
};

// Struct: NDEFError
mojo.internal.Struct(
    device.mojom.NDEFErrorSpec, 'device.mojom.NDEFError', [
      mojo.internal.StructField('error_type', 0, 0, device.mojom.NDEFErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NDEFRecord
mojo.internal.Struct(
    device.mojom.NDEFRecordSpec, 'device.mojom.NDEFRecord', [
      mojo.internal.StructField('category', 0, 0, device.mojom.NDEFRecordTypeCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('record_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('encoding', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lang', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('data', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('payload_message', 56, 0, device.mojom.NDEFMessageSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: NDEFMessage
mojo.internal.Struct(
    device.mojom.NDEFMessageSpec, 'device.mojom.NDEFMessage', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(device.mojom.NDEFRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NDEFRawRecord
mojo.internal.Struct(
    device.mojom.NDEFRawRecordSpec, 'device.mojom.NDEFRawRecord', [
      mojo.internal.StructField('identifier', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('payload', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('type_name_format', 24, 0, device.mojom.NSRawTypeNameFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NDEFRawMessage
mojo.internal.Struct(
    device.mojom.NDEFRawMessageSpec, 'device.mojom.NDEFRawMessage', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(device.mojom.NDEFRawRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NDEFWriteOptions
mojo.internal.Struct(
    device.mojom.NDEFWriteOptionsSpec, 'device.mojom.NDEFWriteOptions', [
      mojo.internal.StructField('overwrite', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: NFC
mojo.internal.Struct(
    device.mojom.NFC_SetClient_ParamsSpec, 'device.mojom.NFC_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.NFCClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.NFC_Push_ParamsSpec, 'device.mojom.NFC_Push_Params', [
      mojo.internal.StructField('message', 0, 0, device.mojom.NDEFMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, device.mojom.NDEFWriteOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.NFC_Push_ResponseParamsSpec, 'device.mojom.NFC_Push_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.NFC_CancelPush_ParamsSpec, 'device.mojom.NFC_CancelPush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.NFC_MakeReadOnly_ParamsSpec, 'device.mojom.NFC_MakeReadOnly_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.NFC_MakeReadOnly_ResponseParamsSpec, 'device.mojom.NFC_MakeReadOnly_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.NFC_CancelMakeReadOnly_ParamsSpec, 'device.mojom.NFC_CancelMakeReadOnly_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.NFC_Watch_ParamsSpec, 'device.mojom.NFC_Watch_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.NFC_Watch_ResponseParamsSpec, 'device.mojom.NFC_Watch_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.NFC_CancelWatch_ParamsSpec, 'device.mojom.NFC_CancelWatch_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.NFCPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.NFCRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFC';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.NFCPendingReceiver,
      handle);
    this.$ = new device.mojom.NFCRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(client) {
    return this.$.setClient(client);
  }
  push(message, options) {
    return this.$.push(message, options);
  }
  cancelPush() {
    return this.$.cancelPush();
  }
  makeReadOnly() {
    return this.$.makeReadOnly();
  }
  cancelMakeReadOnly() {
    return this.$.cancelMakeReadOnly();
  }
  watch(id) {
    return this.$.watch(id);
  }
  cancelWatch(id) {
    return this.$.cancelWatch(id);
  }
};

device.mojom.NFCRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NFC', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.NFC_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  push(message, options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.NFC_Push_ParamsSpec,
      device.mojom.NFC_Push_ResponseParamsSpec,
      [message, options],
      false);
  }

  cancelPush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.NFC_CancelPush_ParamsSpec,
      null,
      [],
      false);
  }

  makeReadOnly() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.NFC_MakeReadOnly_ParamsSpec,
      device.mojom.NFC_MakeReadOnly_ResponseParamsSpec,
      [],
      false);
  }

  cancelMakeReadOnly() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.NFC_CancelMakeReadOnly_ParamsSpec,
      null,
      [],
      false);
  }

  watch(id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.NFC_Watch_ParamsSpec,
      device.mojom.NFC_Watch_ResponseParamsSpec,
      [id],
      false);
  }

  cancelWatch(id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.NFC_CancelWatch_ParamsSpec,
      null,
      [id],
      false);
  }

};

device.mojom.NFC.getRemote = function() {
  let remote = new device.mojom.NFCRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFC',
    'context');
  return remote.$;
};

device.mojom.NFCReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NFC', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(device.mojom.NFC_SetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_Push_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_CancelPush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_MakeReadOnly_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_CancelMakeReadOnly_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_Watch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFC_CancelWatch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_SetClient_ParamsSpec.$.structSpec);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_Push_ParamsSpec.$.structSpec);
          const result = this.impl.push(params.message, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.NFC_Push_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_CancelPush_ParamsSpec.$.structSpec);
          const result = this.impl.cancelPush();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_MakeReadOnly_ParamsSpec.$.structSpec);
          const result = this.impl.makeReadOnly();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.NFC_MakeReadOnly_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_CancelMakeReadOnly_ParamsSpec.$.structSpec);
          const result = this.impl.cancelMakeReadOnly();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_Watch_ParamsSpec.$.structSpec);
          const result = this.impl.watch(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.NFC_Watch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFC_CancelWatch_ParamsSpec.$.structSpec);
          const result = this.impl.cancelWatch(params.id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.NFCReceiver = device.mojom.NFCReceiver;

device.mojom.NFCPtr = device.mojom.NFCRemote;
device.mojom.NFCRequest = device.mojom.NFCPendingReceiver;


// Interface: NFCClient
mojo.internal.Struct(
    device.mojom.NFCClient_OnWatch_ParamsSpec, 'device.mojom.NFCClient_OnWatch_Params', [
      mojo.internal.StructField('watch_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('message', 16, 0, device.mojom.NDEFMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.NFCClient_OnError_ParamsSpec, 'device.mojom.NFCClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, device.mojom.NDEFErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.NFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.NFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.NFCClientPendingReceiver,
      handle);
    this.$ = new device.mojom.NFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWatch(watch_ids, serial_number, message) {
    return this.$.onWatch(watch_ids, serial_number, message);
  }
  onError(error) {
    return this.$.onError(error);
  }
};

device.mojom.NFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NFCClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWatch(watch_ids, serial_number, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.NFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, serial_number, message],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.NFCClient_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

device.mojom.NFCClient.getRemote = function() {
  let remote = new device.mojom.NFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCClient',
    'context');
  return remote.$;
};

device.mojom.NFCClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NFCClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(device.mojom.NFCClient_OnWatch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFCClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFCClient_OnWatch_ParamsSpec.$.structSpec);
          const result = this.impl.onWatch(params.watch_ids, params.serial_number, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFCClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.NFCClientReceiver = device.mojom.NFCClientReceiver;

device.mojom.NFCClientPtr = device.mojom.NFCClientRemote;
device.mojom.NFCClientRequest = device.mojom.NFCClientPendingReceiver;


// Interface: RawNFCClient
mojo.internal.Struct(
    device.mojom.RawNFCClient_OnWatch_ParamsSpec, 'device.mojom.RawNFCClient_OnWatch_Params', [
      mojo.internal.StructField('watch_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, device.mojom.NDEFRawMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.RawNFCClient_OnError_ParamsSpec, 'device.mojom.RawNFCClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, device.mojom.NDEFErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.RawNFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.RawNFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.RawNFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.RawNFCClientPendingReceiver,
      handle);
    this.$ = new device.mojom.RawNFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWatch(watch_ids, message) {
    return this.$.onWatch(watch_ids, message);
  }
  onError(error) {
    return this.$.onError(error);
  }
};

device.mojom.RawNFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RawNFCClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWatch(watch_ids, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.RawNFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, message],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.RawNFCClient_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

device.mojom.RawNFCClient.getRemote = function() {
  let remote = new device.mojom.RawNFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.RawNFCClient',
    'context');
  return remote.$;
};

device.mojom.RawNFCClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RawNFCClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(device.mojom.RawNFCClient_OnWatch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.RawNFCClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.RawNFCClient_OnWatch_ParamsSpec.$.structSpec);
          const result = this.impl.onWatch(params.watch_ids, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.RawNFCClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.RawNFCClientReceiver = device.mojom.RawNFCClientReceiver;

device.mojom.RawNFCClientPtr = device.mojom.RawNFCClientRemote;
device.mojom.RawNFCClientRequest = device.mojom.RawNFCClientPendingReceiver;

