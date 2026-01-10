// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel_types.mojom
// Module: ash.secure_channel.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.secure_channel = ash.secure_channel || {};
ash.secure_channel.mojom = ash.secure_channel.mojom || {};
var mojo_base = mojo_base || {};

ash.secure_channel.mojom.FileTransferStatusSpec = { $: mojo.internal.Enum() };
ash.secure_channel.mojom.PayloadFilesSpec = { $: {} };
ash.secure_channel.mojom.FileTransferUpdateSpec = { $: {} };
ash.secure_channel.mojom.FilePayloadListener = {};
ash.secure_channel.mojom.FilePayloadListener.$interfaceName = 'ash.secure_channel.mojom.FilePayloadListener';
ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec = { $: {} };

// Enum: FileTransferStatus
ash.secure_channel.mojom.FileTransferStatus = {
  kSuccess: 0,
  kFailure: 1,
  kInProgress: 2,
  kCanceled: 3,
};

// Struct: PayloadFiles
mojo.internal.Struct(
    ash.secure_channel.mojom.PayloadFilesSpec, 'ash.secure_channel.mojom.PayloadFiles', [
      mojo.internal.StructField('input_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileTransferUpdate
mojo.internal.Struct(
    ash.secure_channel.mojom.FileTransferUpdateSpec, 'ash.secure_channel.mojom.FileTransferUpdate', [
      mojo.internal.StructField('payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, ash.secure_channel.mojom.FileTransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_transferred', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FilePayloadListener
mojo.internal.Struct(
    ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec, 'ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_Params', [
      mojo.internal.StructField('update', 0, 0, ash.secure_channel.mojom.FileTransferUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.secure_channel.mojom.FilePayloadListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.secure_channel.mojom.FilePayloadListenerRemote = class {
  static get $interfaceName() {
    return 'ash.secure_channel.mojom.FilePayloadListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.secure_channel.mojom.FilePayloadListenerPendingReceiver,
      handle);
    this.$ = new ash.secure_channel.mojom.FilePayloadListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.secure_channel.mojom.FilePayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileTransferUpdate(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec,
      null,
      [update],
      false);
  }

};

ash.secure_channel.mojom.FilePayloadListener.getRemote = function() {
  let remote = new ash.secure_channel.mojom.FilePayloadListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.secure_channel.mojom.FilePayloadListener',
    'context');
  return remote.$;
};

ash.secure_channel.mojom.FilePayloadListenerReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFileTransferUpdate');
          const result = this.impl.onFileTransferUpdate(params.update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.secure_channel.mojom.FilePayloadListenerReceiver = ash.secure_channel.mojom.FilePayloadListenerReceiver;

ash.secure_channel.mojom.FilePayloadListenerPtr = ash.secure_channel.mojom.FilePayloadListenerRemote;
ash.secure_channel.mojom.FilePayloadListenerRequest = ash.secure_channel.mojom.FilePayloadListenerPendingReceiver;

