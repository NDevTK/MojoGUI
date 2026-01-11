// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/supervised_user_commands.mojom
// Module: supervised_user.mojom

// Module namespace
var supervised_user = supervised_user || {};
supervised_user.mojom = supervised_user.mojom || {};

supervised_user.mojom.SupervisedUserCommands = {};
supervised_user.mojom.SupervisedUserCommands.$interfaceName = 'supervised_user.mojom.SupervisedUserCommands';
supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec = { $: {} };

// Interface: SupervisedUserCommands
mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_GoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParams', [
      mojo.internal.StructField('request_issued', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParams', [
      mojo.internal.StructField('request_issued', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_LearnMore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParams', [
    ],
    [[0, 8]]);

supervised_user.mojom.SupervisedUserCommandsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

supervised_user.mojom.SupervisedUserCommandsRemote = class {
  static get $interfaceName() {
    return 'supervised_user.mojom.SupervisedUserCommands';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      supervised_user.mojom.SupervisedUserCommandsPendingReceiver,
      handle);
    this.$ = new supervised_user.mojom.SupervisedUserCommandsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  goBack() {
    return this.$.goBack();
  }
  requestUrlAccessRemote() {
    return this.$.requestUrlAccessRemote();
  }
  requestUrlAccessLocal() {
    return this.$.requestUrlAccessLocal();
  }
  learnMore() {
    return this.$.learnMore();
  }
};

supervised_user.mojom.SupervisedUserCommandsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SupervisedUserCommands', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  goBack() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec,
      null,
      [],
      false);
  }

  requestUrlAccessRemote() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec,
      [],
      false);
  }

  requestUrlAccessLocal() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec,
      [],
      false);
  }

  learnMore() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec,
      [],
      false);
  }

};

supervised_user.mojom.SupervisedUserCommands.getRemote = function() {
  let remote = new supervised_user.mojom.SupervisedUserCommandsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'supervised_user.mojom.SupervisedUserCommands',
    'context');
  return remote.$;
};

supervised_user.mojom.SupervisedUserCommandsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SupervisedUserCommands', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec.$.structSpec);
          const result = this.impl.goBack();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec.$.structSpec);
          const result = this.impl.requestUrlAccessRemote();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec.$.structSpec);
          const result = this.impl.requestUrlAccessLocal();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec.$.structSpec);
          const result = this.impl.learnMore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

supervised_user.mojom.SupervisedUserCommandsReceiver = supervised_user.mojom.SupervisedUserCommandsReceiver;

supervised_user.mojom.SupervisedUserCommandsPtr = supervised_user.mojom.SupervisedUserCommandsRemote;
supervised_user.mojom.SupervisedUserCommandsRequest = supervised_user.mojom.SupervisedUserCommandsPendingReceiver;

