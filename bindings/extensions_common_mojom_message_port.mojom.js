// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/message_port.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var url = url || {};
var url = url || {};


extensions.mojom.kMaxMessageBytes = 67108864;

// Enum: SerializationFormat
extensions.mojom.SerializationFormat = {
  kStructuredClone: 0,
  kJson: 1,
};
extensions.mojom.SerializationFormatSpec = { $: mojo.internal.Enum() };

// Enum: ChannelType
extensions.mojom.ChannelType = {
  kSendMessage: 0,
  kSendRequest: 1,
  kConnect: 2,
  kNative: 3,
};
extensions.mojom.ChannelTypeSpec = { $: mojo.internal.Enum() };

// Enum: MessagingEndpointType
extensions.mojom.MessagingEndpointType = {
  kExtension: 0,
  kWebPage: 1,
  kContentScript: 2,
  kUserScript: 3,
  kNativeApp: 4,
};
extensions.mojom.MessagingEndpointTypeSpec = { $: mojo.internal.Enum() };

// Union: MessageData
extensions.mojom.MessageDataSpec = { $: mojo.internal.Union(
    'extensions.mojom.MessageData', {
      'json': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'structured_clone': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec,
      }},
    })
};

// Struct: PortId
extensions.mojom.PortIdSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.PortId',
      packedSize: 32,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'port_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_opener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'serialization_format', packedOffset: 12, packedBitOffset: 0, type: extensions.mojom.SerializationFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MessagingEndpoint
extensions.mojom.MessagingEndpointSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagingEndpoint',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.MessagingEndpointTypeSpec, nullable: false, minVersion: 0 },
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'native_app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TabConnectionInfo
extensions.mojom.TabConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.TabConnectionInfo',
      packedSize: 40,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'document_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_lifecycle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ExternalConnectionInfo
extensions.mojom.ExternalConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ExternalConnectionInfo',
      packedSize: 48,
      fields: [
        { name: 'source_endpoint', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessagingEndpointSpec, nullable: false, minVersion: 0 },
        { name: 'target_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'source_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'guest_process_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'guest_render_frame_routing_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Message
extensions.mojom.MessageSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Message',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessageDataSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.SerializationFormatSpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'from_privileged_context', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: MessagePort
extensions.mojom.MessagePort = {};

extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePort_DispatchDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.MessagePort_DeliverMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePort_DeliverMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for DispatchDisconnect
extensions.mojom.MessagePort_DispatchDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePort.DispatchDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeliverMessage
extensions.mojom.MessagePort_DeliverMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePort.DeliverMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.MessagePortPtr = extensions.mojom.MessagePortRemote;
extensions.mojom.MessagePortRequest = extensions.mojom.MessagePortPendingReceiver;


// Interface: MessagePortHost
extensions.mojom.MessagePortHost = {};

extensions.mojom.MessagePortHost_ClosePort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost_ClosePort_Params',
      packedSize: 24,
      fields: [
        { name: 'close_channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

extensions.mojom.MessagePortHost_PostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost_PostMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost_ResponsePending_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

// ParamsSpec for ClosePort
extensions.mojom.MessagePortHost_ClosePort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost.ClosePort_Params',
      packedSize: 24,
      fields: [
        { name: 'close_channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PostMessage
extensions.mojom.MessagePortHost_PostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost.PostMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.MessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResponsePending
extensions.mojom.MessagePortHost_ResponsePending_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.MessagePortHost.ResponsePending_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
extensions.mojom.MessagePortHostPtr = extensions.mojom.MessagePortHostRemote;
extensions.mojom.MessagePortHostRequest = extensions.mojom.MessagePortHostPendingReceiver;

