// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/assistant_messenger.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: AssistantMessagePipe
chromecast.mojom.mojom.AssistantMessagePipe = {};

chromecast.mojom.mojom.AssistantMessagePipePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.AssistantMessagePipeRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessagePipe';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.AssistantMessagePipePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.AssistantMessagePipeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.AssistantMessagePipeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.AssistantMessagePipe_SendMessage_ParamsSpec,
      null,
      [message]);
  }

};

chromecast.mojom.mojom.AssistantMessagePipe.getRemote = function() {
  let remote = new chromecast.mojom.mojom.AssistantMessagePipeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessagePipe',
    'context');
  return remote.$;
};

// ParamsSpec for SendMessage
chromecast.mojom.mojom.AssistantMessagePipe_SendMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessagePipe.SendMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.AssistantMessagePipePtr = chromecast.mojom.mojom.AssistantMessagePipeRemote;
chromecast.mojom.mojom.AssistantMessagePipeRequest = chromecast.mojom.mojom.AssistantMessagePipePendingReceiver;


// Interface: AssistantMessageClient
chromecast.mojom.mojom.AssistantMessageClient = {};

chromecast.mojom.mojom.AssistantMessageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.AssistantMessageClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.AssistantMessageClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.AssistantMessageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.AssistantMessageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.AssistantMessageClient_OnMessage_ParamsSpec,
      null,
      [message]);
  }

};

chromecast.mojom.mojom.AssistantMessageClient.getRemote = function() {
  let remote = new chromecast.mojom.mojom.AssistantMessageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessageClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessage
chromecast.mojom.mojom.AssistantMessageClient_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessageClient.OnMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.AssistantMessageClientPtr = chromecast.mojom.mojom.AssistantMessageClientRemote;
chromecast.mojom.mojom.AssistantMessageClientRequest = chromecast.mojom.mojom.AssistantMessageClientPendingReceiver;


// Interface: AssistantMessageService
chromecast.mojom.mojom.AssistantMessageService = {};

chromecast.mojom.mojom.AssistantMessageServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.AssistantMessageServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AssistantMessageService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.AssistantMessageServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.AssistantMessageServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.AssistantMessageServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMessagePipe(client_id, client, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec,
      null,
      [client_id, client, pipe]);
  }

};

chromecast.mojom.mojom.AssistantMessageService.getRemote = function() {
  let remote = new chromecast.mojom.mojom.AssistantMessageServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AssistantMessageService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateMessagePipe
chromecast.mojom.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.AssistantMessageService.CreateMessagePipe_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.AssistantMessageServicePtr = chromecast.mojom.mojom.AssistantMessageServiceRemote;
chromecast.mojom.mojom.AssistantMessageServiceRequest = chromecast.mojom.mojom.AssistantMessageServicePendingReceiver;

