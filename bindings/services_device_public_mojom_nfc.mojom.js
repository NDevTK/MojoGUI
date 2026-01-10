// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc.mojom
// Module: device.mojom

'use strict';

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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.NFCClientSpec), null, false, 0, undefined),
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
};

device.mojom.NFCRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.NFC_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  push(message, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.NFC_Push_ParamsSpec,
      device.mojom.NFC_Push_ResponseParamsSpec,
      [message, options],
      false);
  }

  cancelPush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.NFC_CancelPush_ParamsSpec,
      null,
      [],
      false);
  }

  makeReadOnly() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.NFC_MakeReadOnly_ParamsSpec,
      device.mojom.NFC_MakeReadOnly_ResponseParamsSpec,
      [],
      false);
  }

  cancelMakeReadOnly() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.NFC_CancelMakeReadOnly_ParamsSpec,
      null,
      [],
      false);
  }

  watch(id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.NFC_Watch_ParamsSpec,
      device.mojom.NFC_Watch_ResponseParamsSpec,
      [id],
      false);
  }

  cancelWatch(id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.NFC_SetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const params = device.mojom.NFC_Push_ParamsSpec.$.decode(message.payload);
          const result = this.impl.push(params.message, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, device.mojom.NFC_Push_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = device.mojom.NFC_CancelPush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelPush();
          break;
        }
        case 3: {
          const params = device.mojom.NFC_MakeReadOnly_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeReadOnly();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, device.mojom.NFC_MakeReadOnly_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = device.mojom.NFC_CancelMakeReadOnly_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelMakeReadOnly();
          break;
        }
        case 5: {
          const params = device.mojom.NFC_Watch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.watch(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, device.mojom.NFC_Watch_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = device.mojom.NFC_CancelWatch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelWatch(params.id);
          break;
        }
      }
    });
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
};

device.mojom.NFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWatch(watch_ids, serial_number, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.NFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, serial_number, message],
      false);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.NFCClient_OnWatch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWatch(params.watch_ids, params.serial_number, params.message);
          break;
        }
        case 1: {
          const params = device.mojom.NFCClient_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.error);
          break;
        }
      }
    });
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
};

device.mojom.RawNFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWatch(watch_ids, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.RawNFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, message],
      false);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.RawNFCClient_OnWatch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWatch(params.watch_ids, params.message);
          break;
        }
        case 1: {
          const params = device.mojom.RawNFCClient_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.error);
          break;
        }
      }
    });
  }
};

device.mojom.RawNFCClientReceiver = device.mojom.RawNFCClientReceiver;

device.mojom.RawNFCClientPtr = device.mojom.RawNFCClientRemote;
device.mojom.RawNFCClientRequest = device.mojom.RawNFCClientPendingReceiver;

