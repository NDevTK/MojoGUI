// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/assistant_messenger.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: AssistantMessagePipe
chromecast.mojom.AssistantMessagePipe = {};

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
      null,
      [message],
      undefined,
      undefined
    );
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

// ParamsSpec for SendMessage
chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessagePipe.SendMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.AssistantMessagePipePtr = chromecast.mojom.AssistantMessagePipeRemote;
chromecast.mojom.AssistantMessagePipeRequest = chromecast.mojom.AssistantMessagePipePendingReceiver;


// Interface: AssistantMessageClient
chromecast.mojom.AssistantMessageClient = {};

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
      null,
      [message],
      undefined,
      undefined
    );
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

// ParamsSpec for OnMessage
chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessageClient.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.AssistantMessageClientPtr = chromecast.mojom.AssistantMessageClientRemote;
chromecast.mojom.AssistantMessageClientRequest = chromecast.mojom.AssistantMessageClientPendingReceiver;


// Interface: AssistantMessageService
chromecast.mojom.AssistantMessageService = {};

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
      null,
      [client_id, client, pipe],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateMessagePipe
chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessageService.CreateMessagePipe_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.AssistantMessageServicePtr = chromecast.mojom.AssistantMessageServiceRemote;
chromecast.mojom.AssistantMessageServiceRequest = chromecast.mojom.AssistantMessageServicePendingReceiver;

