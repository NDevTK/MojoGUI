// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: NDEFErrorType
device.mojom.mojom.NDEFErrorType = {
  NOT_ALLOWED: 0,
  NOT_SUPPORTED: 1,
  NOT_READABLE: 2,
  INVALID_MESSAGE: 3,
  OPERATION_CANCELLED: 4,
  IO_ERROR: 5,
};
device.mojom.mojom.NDEFErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: NDEFRecordTypeCategory
device.mojom.mojom.NDEFRecordTypeCategory = {
  kStandardized: 0,
  kExternal: 1,
  kLocal: 2,
};
device.mojom.mojom.NDEFRecordTypeCategorySpec = { $: mojo.internal.Enum() };

// Enum: NSRawTypeNameFormat
device.mojom.mojom.NSRawTypeNameFormat = {
  kAbsoluteURI: 0,
  kEmpty: 1,
  kMedia: 2,
  kExternal: 3,
  kWellKnown: 4,
  kUnchanged: 5,
  kUnknown: 6,
};
device.mojom.mojom.NSRawTypeNameFormatSpec = { $: mojo.internal.Enum() };

// Struct: NDEFError
device.mojom.mojom.NDEFErrorSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFError',
      packedSize: 24,
      fields: [
        { name: 'error_type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.NDEFErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NDEFRecord
device.mojom.mojom.NDEFRecordSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFRecord',
      packedSize: 72,
      fields: [
        { name: 'category', packedOffset: 56, packedBitOffset: 0, type: device.mojom.NDEFRecordTypeCategorySpec, nullable: false, minVersion: 0 },
        { name: 'record_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'encoding', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'lang', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'payload_message', packedOffset: 48, packedBitOffset: 0, type: device.mojom.NDEFMessageSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: NDEFMessage
device.mojom.mojom.NDEFMessageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFMessage',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.NDEFRecordSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NDEFRawRecord
device.mojom.mojom.NDEFRawRecordSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFRawRecord',
      packedSize: 40,
      fields: [
        { name: 'identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'payload', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'type_name_format', packedOffset: 24, packedBitOffset: 0, type: device.mojom.NSRawTypeNameFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: NDEFRawMessage
device.mojom.mojom.NDEFRawMessageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFRawMessage',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.NDEFRawRecordSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NDEFWriteOptions
device.mojom.mojom.NDEFWriteOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NDEFWriteOptions',
      packedSize: 16,
      fields: [
        { name: 'overwrite', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: NFC
device.mojom.mojom.NFC = {};

device.mojom.mojom.NFCPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.NFCRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFC';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.NFCPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.NFCRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.NFCRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.NFC_SetClient_ParamsSpec,
      null,
      [client]);
  }

  push(message, options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.NFC_Push_ParamsSpec,
      device.mojom.mojom.NFC_Push_ResponseParamsSpec,
      [message, options]);
  }

  cancelPush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.NFC_CancelPush_ParamsSpec,
      null,
      []);
  }

  makeReadOnly() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.NFC_MakeReadOnly_ParamsSpec,
      device.mojom.mojom.NFC_MakeReadOnly_ResponseParamsSpec,
      []);
  }

  cancelMakeReadOnly() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.mojom.NFC_CancelMakeReadOnly_ParamsSpec,
      null,
      []);
  }

  watch(id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.mojom.NFC_Watch_ParamsSpec,
      device.mojom.mojom.NFC_Watch_ResponseParamsSpec,
      [id]);
  }

  cancelWatch(id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.mojom.NFC_CancelWatch_ParamsSpec,
      null,
      [id]);
  }

};

device.mojom.mojom.NFC.getRemote = function() {
  let remote = new device.mojom.mojom.NFCRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFC',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
device.mojom.mojom.NFC_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.NFCClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Push
device.mojom.mojom.NFC_Push_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.Push_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFMessageSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: device.mojom.NDEFWriteOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.NFC_Push_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.Push_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelPush
device.mojom.mojom.NFC_CancelPush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.CancelPush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MakeReadOnly
device.mojom.mojom.NFC_MakeReadOnly_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.MakeReadOnly_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.NFC_MakeReadOnly_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.MakeReadOnly_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelMakeReadOnly
device.mojom.mojom.NFC_CancelMakeReadOnly_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.CancelMakeReadOnly_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Watch
device.mojom.mojom.NFC_Watch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.Watch_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.NFC_Watch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.Watch_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelWatch
device.mojom.mojom.NFC_CancelWatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFC.CancelWatch_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.NFCPtr = device.mojom.mojom.NFCRemote;
device.mojom.mojom.NFCRequest = device.mojom.mojom.NFCPendingReceiver;


// Interface: NFCClient
device.mojom.mojom.NFCClient = {};

device.mojom.mojom.NFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.NFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.NFCClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.NFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.NFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWatch(watch_ids, serial_number, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.NFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, serial_number, message]);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.NFCClient_OnError_ParamsSpec,
      null,
      [error]);
  }

};

device.mojom.mojom.NFCClient.getRemote = function() {
  let remote = new device.mojom.mojom.NFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnWatch
device.mojom.mojom.NFCClient_OnWatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCClient.OnWatch_Params',
      packedSize: 32,
      fields: [
        { name: 'watch_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'serial_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: device.mojom.NDEFMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnError
device.mojom.mojom.NFCClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.NFCClientPtr = device.mojom.mojom.NFCClientRemote;
device.mojom.mojom.NFCClientRequest = device.mojom.mojom.NFCClientPendingReceiver;


// Interface: RawNFCClient
device.mojom.mojom.RawNFCClient = {};

device.mojom.mojom.RawNFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.RawNFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.RawNFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.RawNFCClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.RawNFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.RawNFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWatch(watch_ids, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.RawNFCClient_OnWatch_ParamsSpec,
      null,
      [watch_ids, message]);
  }

  onError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.RawNFCClient_OnError_ParamsSpec,
      null,
      [error]);
  }

};

device.mojom.mojom.RawNFCClient.getRemote = function() {
  let remote = new device.mojom.mojom.RawNFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.RawNFCClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnWatch
device.mojom.mojom.RawNFCClient_OnWatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.RawNFCClient.OnWatch_Params',
      packedSize: 24,
      fields: [
        { name: 'watch_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: device.mojom.NDEFRawMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnError
device.mojom.mojom.RawNFCClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.RawNFCClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.NDEFErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.RawNFCClientPtr = device.mojom.mojom.RawNFCClientRemote;
device.mojom.mojom.RawNFCClientRequest = device.mojom.mojom.RawNFCClientPendingReceiver;

