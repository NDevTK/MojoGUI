// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/assistant_messenger.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.AssistantMessagePipe = {};
chromecast.mojom.AssistantMessagePipe.$interfaceName = 'chromecast.mojom.AssistantMessagePipe';
chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec = { $: {} };
chromecast.mojom.AssistantMessageClient = {};
chromecast.mojom.AssistantMessageClient.$interfaceName = 'chromecast.mojom.AssistantMessageClient';
chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec = { $: {} };
chromecast.mojom.AssistantMessageService = {};
chromecast.mojom.AssistantMessageService.$interfaceName = 'chromecast.mojom.AssistantMessageService';
chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec = { $: {} };

// Interface: AssistantMessagePipe
mojo.internal.Struct(
    chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec, 'chromecast.mojom.AssistantMessagePipe_SendMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.AssistantMessagePipePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.AssistantMessagePipeRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessagePipe';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.AssistantMessagePipePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.AssistantMessagePipeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.AssistantMessagePipeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

chromecast.mojom.AssistantMessagePipe.getRemote = function() {
  let remote = new chromecast.mojom.AssistantMessagePipeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessagePipe',
    'context');
  return remote.$;
};

chromecast.mojom.AssistantMessagePipeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendMessage(params.message);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.AssistantMessagePipeReceiver = chromecast.mojom.AssistantMessagePipeReceiver;

chromecast.mojom.AssistantMessagePipePtr = chromecast.mojom.AssistantMessagePipeRemote;
chromecast.mojom.AssistantMessagePipeRequest = chromecast.mojom.AssistantMessagePipePendingReceiver;


// Interface: AssistantMessageClient
mojo.internal.Struct(
    chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec, 'chromecast.mojom.AssistantMessageClient_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.AssistantMessageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.AssistantMessageClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.AssistantMessageClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.AssistantMessageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.AssistantMessageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

chromecast.mojom.AssistantMessageClient.getRemote = function() {
  let remote = new chromecast.mojom.AssistantMessageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessageClient',
    'context');
  return remote.$;
};

chromecast.mojom.AssistantMessageClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.AssistantMessageClientReceiver = chromecast.mojom.AssistantMessageClientReceiver;

chromecast.mojom.AssistantMessageClientPtr = chromecast.mojom.AssistantMessageClientRemote;
chromecast.mojom.AssistantMessageClientRequest = chromecast.mojom.AssistantMessageClientPendingReceiver;


// Interface: AssistantMessageService
mojo.internal.Struct(
    chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec, 'chromecast.mojom.AssistantMessageService_CreateMessagePipe_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.AssistantMessageClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('pipe', 16, 0, mojo.internal.InterfaceRequest(chromecast.mojom.AssistantMessagePipeSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

chromecast.mojom.AssistantMessageServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.AssistantMessageServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessageService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.AssistantMessageServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.AssistantMessageServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.AssistantMessageServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMessagePipe(client_id, client, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec,
      null,
      [client_id, client, pipe],
      false);
  }

};

chromecast.mojom.AssistantMessageService.getRemote = function() {
  let remote = new chromecast.mojom.AssistantMessageServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessageService',
    'context');
  return remote.$;
};

chromecast.mojom.AssistantMessageServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createMessagePipe(params.client_id, params.client, params.pipe);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.AssistantMessageServiceReceiver = chromecast.mojom.AssistantMessageServiceReceiver;

chromecast.mojom.AssistantMessageServicePtr = chromecast.mojom.AssistantMessageServiceRemote;
chromecast.mojom.AssistantMessageServiceRequest = chromecast.mojom.AssistantMessageServicePendingReceiver;

