// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/message_port.mojom
// Module: extensions.mojom

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

extensions.mojom.SerializationFormatSpec = { $: mojo.internal.Enum() };
extensions.mojom.ChannelTypeSpec = { $: mojo.internal.Enum() };
extensions.mojom.MessagingEndpointTypeSpec = { $: mojo.internal.Enum() };
extensions.mojom.MessageDataSpec = { $: {} };
extensions.mojom.PortIdSpec = { $: {} };
extensions.mojom.MessagingEndpointSpec = { $: {} };
extensions.mojom.TabConnectionInfoSpec = { $: {} };
extensions.mojom.ExternalConnectionInfoSpec = { $: {} };
extensions.mojom.MessageSpec = { $: {} };
extensions.mojom.MessagePort = {};
extensions.mojom.MessagePort.$interfaceName = 'extensions.mojom.MessagePort';
extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec = { $: {} };
extensions.mojom.MessagePort_DeliverMessage_ParamsSpec = { $: {} };
extensions.mojom.MessagePortHost = {};
extensions.mojom.MessagePortHost.$interfaceName = 'extensions.mojom.MessagePortHost';
extensions.mojom.MessagePortHost_ClosePort_ParamsSpec = { $: {} };
extensions.mojom.MessagePortHost_PostMessage_ParamsSpec = { $: {} };
extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec = { $: {} };

extensions.mojom.kMaxMessageBytes = 67108864;

// Enum: SerializationFormat
extensions.mojom.SerializationFormat = {
  kStructuredClone: 0,
  kJson: 1,
};

// Enum: ChannelType
extensions.mojom.ChannelType = {
  kSendMessage: 0,
  kSendRequest: 1,
  kConnect: 2,
  kNative: 3,
};

// Enum: MessagingEndpointType
extensions.mojom.MessagingEndpointType = {
  kExtension: 0,
  kWebPage: 1,
  kContentScript: 2,
  kUserScript: 3,
  kNativeApp: 4,
};

// Union: MessageData
mojo.internal.Union(
    extensions.mojom.MessageDataSpec, 'extensions.mojom.MessageData', {
      'json': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'structured_clone': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
    });

// Struct: PortId
mojo.internal.Struct(
    extensions.mojom.PortIdSpec, 'extensions.mojom.PortId', [
      mojo.internal.StructField('context_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialization_format', 8, 0, extensions.mojom.SerializationFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_opener', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MessagingEndpoint
mojo.internal.Struct(
    extensions.mojom.MessagingEndpointSpec, 'extensions.mojom.MessagingEndpoint', [
      mojo.internal.StructField('type', 0, 0, extensions.mojom.MessagingEndpointTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('native_app_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabConnectionInfo
mojo.internal.Struct(
    extensions.mojom.TabConnectionInfoSpec, 'extensions.mojom.TabConnectionInfo', [
      mojo.internal.StructField('tab', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_lifecycle', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExternalConnectionInfo
mojo.internal.Struct(
    extensions.mojom.ExternalConnectionInfoSpec, 'extensions.mojom.ExternalConnectionInfo', [
      mojo.internal.StructField('source_endpoint', 0, 0, extensions.mojom.MessagingEndpointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('guest_process_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('guest_render_frame_routing_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Message
mojo.internal.Struct(
    extensions.mojom.MessageSpec, 'extensions.mojom.Message', [
      mojo.internal.StructField('data', 0, 0, extensions.mojom.MessageDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 8, 0, extensions.mojom.SerializationFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_privileged_context', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: MessagePort
mojo.internal.Struct(
    extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec, 'extensions.mojom.MessagePort_DispatchDisconnect_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MessagePort_DeliverMessage_ParamsSpec, 'extensions.mojom.MessagePort_DeliverMessage_Params', [
      mojo.internal.StructField('message', 0, 0, extensions.mojom.MessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.MessagePortPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.MessagePortRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.MessagePort';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.MessagePortPendingReceiver,
      handle);
    this.$ = new extensions.mojom.MessagePortRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dispatchDisconnect(error) {
    return this.$.dispatchDisconnect(error);
  }
  deliverMessage(message) {
    return this.$.deliverMessage(message);
  }
};

extensions.mojom.MessagePortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MessagePort', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchDisconnect(error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec,
      null,
      [error],
      false);
  }

  deliverMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.MessagePort_DeliverMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

extensions.mojom.MessagePort.getRemote = function() {
  let remote = new extensions.mojom.MessagePortRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.MessagePort',
    'context');
  return remote.$;
};

extensions.mojom.MessagePortReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MessagePort', [
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
             decoder.decodeStructInline(extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MessagePort_DeliverMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchDisconnect(params.error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MessagePort_DeliverMessage_ParamsSpec.$.structSpec);
          const result = this.impl.deliverMessage(params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.MessagePortReceiver = extensions.mojom.MessagePortReceiver;

extensions.mojom.MessagePortPtr = extensions.mojom.MessagePortRemote;
extensions.mojom.MessagePortRequest = extensions.mojom.MessagePortPendingReceiver;


// Interface: MessagePortHost
mojo.internal.Struct(
    extensions.mojom.MessagePortHost_ClosePort_ParamsSpec, 'extensions.mojom.MessagePortHost_ClosePort_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('close_channel', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.MessagePortHost_PostMessage_ParamsSpec, 'extensions.mojom.MessagePortHost_PostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, extensions.mojom.MessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec, 'extensions.mojom.MessagePortHost_ResponsePending_Params', [
    ],
    [[0, 8]]);

extensions.mojom.MessagePortHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.MessagePortHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.MessagePortHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.MessagePortHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.MessagePortHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  closePort(close_channel, error_message) {
    return this.$.closePort(close_channel, error_message);
  }
  postMessage(message) {
    return this.$.postMessage(message);
  }
  responsePending() {
    return this.$.responsePending();
  }
};

extensions.mojom.MessagePortHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MessagePortHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  closePort(close_channel, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.MessagePortHost_ClosePort_ParamsSpec,
      null,
      [close_channel, error_message],
      false);
  }

  postMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.MessagePortHost_PostMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  responsePending() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec,
      null,
      [],
      false);
  }

};

extensions.mojom.MessagePortHost.getRemote = function() {
  let remote = new extensions.mojom.MessagePortHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.MessagePortHost',
    'context');
  return remote.$;
};

extensions.mojom.MessagePortHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MessagePortHost', [
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
             decoder.decodeStructInline(extensions.mojom.MessagePortHost_ClosePort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MessagePortHost_PostMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MessagePortHost_ClosePort_ParamsSpec.$.structSpec);
          const result = this.impl.closePort(params.close_channel, params.error_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MessagePortHost_PostMessage_ParamsSpec.$.structSpec);
          const result = this.impl.postMessage(params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec.$.structSpec);
          const result = this.impl.responsePending();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.MessagePortHostReceiver = extensions.mojom.MessagePortHostReceiver;

extensions.mojom.MessagePortHostPtr = extensions.mojom.MessagePortHostRemote;
extensions.mojom.MessagePortHostRequest = extensions.mojom.MessagePortHostPendingReceiver;

