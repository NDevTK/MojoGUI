// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/message_port.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var url = url || {};
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
        'type': mojo_base.mojom.BigBufferSpec,
        'nullable': false,
      },
    });

// Struct: PortId
mojo.internal.Struct(
    extensions.mojom.PortIdSpec, 'extensions.mojom.PortId', [
      mojo.internal.StructField('context_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('port_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_opener', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('serialization_format', 16, 0, extensions.mojom.SerializationFormatSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MessagingEndpoint
mojo.internal.Struct(
    extensions.mojom.MessagingEndpointSpec, 'extensions.mojom.MessagingEndpoint', [
      mojo.internal.StructField('type', 0, 0, extensions.mojom.MessagingEndpointTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('native_app_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabConnectionInfo
mojo.internal.Struct(
    extensions.mojom.TabConnectionInfoSpec, 'extensions.mojom.TabConnectionInfo', [
      mojo.internal.StructField('tab', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('document_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('document_lifecycle', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExternalConnectionInfo
mojo.internal.Struct(
    extensions.mojom.ExternalConnectionInfoSpec, 'extensions.mojom.ExternalConnectionInfo', [
      mojo.internal.StructField('source_endpoint', 0, 0, extensions.mojom.MessagingEndpointSpec, null, false, 0, undefined),
      mojo.internal.StructField('target_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 24, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('guest_process_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('guest_render_frame_routing_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Message
mojo.internal.Struct(
    extensions.mojom.MessageSpec, 'extensions.mojom.Message', [
      mojo.internal.StructField('data', 0, 0, extensions.mojom.MessageDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, extensions.mojom.SerializationFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_privileged_context', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('message', 0, 0, extensions.mojom.MessageSpec, null, false, 0, undefined),
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
};

extensions.mojom.MessagePortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchDisconnect(error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec,
      null,
      [error]);
  }

  deliverMessage(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.MessagePort_DeliverMessage_ParamsSpec,
      null,
      [message]);
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

extensions.mojom.MessagePortPtr = extensions.mojom.MessagePortRemote;
extensions.mojom.MessagePortRequest = extensions.mojom.MessagePortPendingReceiver;


// Interface: MessagePortHost
mojo.internal.Struct(
    extensions.mojom.MessagePortHost_ClosePort_ParamsSpec, 'extensions.mojom.MessagePortHost_ClosePort_Params', [
      mojo.internal.StructField('close_channel', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.MessagePortHost_PostMessage_ParamsSpec, 'extensions.mojom.MessagePortHost_PostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, extensions.mojom.MessageSpec, null, false, 0, undefined),
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
};

extensions.mojom.MessagePortHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  closePort(close_channel, error_message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.MessagePortHost_ClosePort_ParamsSpec,
      null,
      [close_channel, error_message]);
  }

  postMessage(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.MessagePortHost_PostMessage_ParamsSpec,
      null,
      [message]);
  }

  responsePending() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec,
      null,
      []);
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

extensions.mojom.MessagePortHostPtr = extensions.mojom.MessagePortHostRemote;
extensions.mojom.MessagePortHostRequest = extensions.mojom.MessagePortHostPendingReceiver;

