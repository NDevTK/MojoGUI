// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/assistant_messenger.mojom
// Module: chromecast.mojom

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
  sendMessage(message) {
    return this.$.sendMessage(message);
  }
};

chromecast.mojom.AssistantMessagePipeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssistantMessagePipe', [
      { explicit: null },
    ]);
  }

  sendMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssistantMessagePipe', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.AssistantMessagePipe_SendMessage_ParamsSpec.$.structSpec);
          const result = this.impl.sendMessage(params.message);
          break;
        }
      }
      } catch (err) {}
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
  onMessage(message) {
    return this.$.onMessage(message);
  }
};

chromecast.mojom.AssistantMessageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssistantMessageClient', [
      { explicit: null },
    ]);
  }

  onMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssistantMessageClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.AssistantMessageClient_OnMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.AssistantMessageClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('pipe', 16, 0, mojo.internal.InterfaceRequest(chromecast.mojom.AssistantMessagePipeRemote), null, false, 0, undefined),
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
  createMessagePipe(client_id, client, pipe) {
    return this.$.createMessagePipe(client_id, client, pipe);
  }
};

chromecast.mojom.AssistantMessageServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssistantMessageService', [
      { explicit: null },
    ]);
  }

  createMessagePipe(client_id, client, pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssistantMessageService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.AssistantMessageService_CreateMessagePipe_ParamsSpec.$.structSpec);
          const result = this.impl.createMessagePipe(params.client_id, params.client, params.pipe);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.AssistantMessageServiceReceiver = chromecast.mojom.AssistantMessageServiceReceiver;

chromecast.mojom.AssistantMessageServicePtr = chromecast.mojom.AssistantMessageServiceRemote;
chromecast.mojom.AssistantMessageServiceRequest = chromecast.mojom.AssistantMessageServicePendingReceiver;

