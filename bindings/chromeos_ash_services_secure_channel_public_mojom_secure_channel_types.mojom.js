// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/secure_channel/public/mojom/secure_channel_types.mojom
// Module: ash.secure_channel.mojom

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
  onFileTransferUpdate(update) {
    return this.$.onFileTransferUpdate(update);
  }
};

ash.secure_channel.mojom.FilePayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FilePayloadListener', [
      { explicit: null },
    ]);
  }

  onFileTransferUpdate(update) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FilePayloadListener', [
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
             decoder.decodeStructInline(ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.secure_channel.mojom.FilePayloadListener_OnFileTransferUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onFileTransferUpdate(params.update);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.secure_channel.mojom.FilePayloadListenerReceiver = ash.secure_channel.mojom.FilePayloadListenerReceiver;

ash.secure_channel.mojom.FilePayloadListenerPtr = ash.secure_channel.mojom.FilePayloadListenerRemote;
ash.secure_channel.mojom.FilePayloadListenerRequest = ash.secure_channel.mojom.FilePayloadListenerPendingReceiver;

