// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/supervised_user_commands.mojom
// Module: supervised_user.mojom

'use strict';

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
};

supervised_user.mojom.SupervisedUserCommandsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  goBack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec,
      null,
      [],
      false);
  }

  requestUrlAccessRemote() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec,
      [],
      false);
  }

  requestUrlAccessLocal() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec,
      [],
      false);
  }

  learnMore() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GoBack (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestUrlAccessRemote
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestUrlAccessRemote (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestUrlAccessLocal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestUrlAccessLocal (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LearnMore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LearnMore (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.goBack');
          const result = this.impl.goBack();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestUrlAccessRemote');
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
          const params = decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestUrlAccessLocal');
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
          const params = decoder.decodeStruct(supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.learnMore');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

supervised_user.mojom.SupervisedUserCommandsReceiver = supervised_user.mojom.SupervisedUserCommandsReceiver;

supervised_user.mojom.SupervisedUserCommandsPtr = supervised_user.mojom.SupervisedUserCommandsRemote;
supervised_user.mojom.SupervisedUserCommandsRequest = supervised_user.mojom.SupervisedUserCommandsPendingReceiver;

