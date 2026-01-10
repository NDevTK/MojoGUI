// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation_client.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AutomationClient = {};
ax.mojom.AutomationClient.$interfaceName = 'ax.mojom.AutomationClient';
ax.mojom.AutomationClient_Enable_ParamsSpec = { $: {} };
ax.mojom.AutomationClient_Enable_ResponseParamsSpec = { $: {} };
ax.mojom.AutomationClient_Disable_ParamsSpec = { $: {} };
ax.mojom.AutomationClient_EnableChildTree_ParamsSpec = { $: {} };
ax.mojom.AutomationClient_PerformAction_ParamsSpec = { $: {} };

// Interface: AutomationClient
mojo.internal.Struct(
    ax.mojom.AutomationClient_Enable_ParamsSpec, 'ax.mojom.AutomationClient_Enable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.AutomationClient_Enable_ResponseParamsSpec, 'ax.mojom.AutomationClient_Enable_ResponseParams', [
      mojo.internal.StructField('desktop_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AutomationClient_Disable_ParamsSpec, 'ax.mojom.AutomationClient_Disable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.AutomationClient_EnableChildTree_ParamsSpec, 'ax.mojom.AutomationClient_EnableChildTree_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AutomationClient_PerformAction_ParamsSpec, 'ax.mojom.AutomationClient_PerformAction_Params', [
      mojo.internal.StructField('action_data', 0, 0, ax.mojom.AXActionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.AutomationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutomationClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AutomationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutomationClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutomationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutomationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AutomationClient_Enable_ParamsSpec,
      ax.mojom.AutomationClient_Enable_ResponseParamsSpec,
      [],
      false);
  }

  disable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AutomationClient_Disable_ParamsSpec,
      null,
      [],
      false);
  }

  enableChildTree(tree_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AutomationClient_EnableChildTree_ParamsSpec,
      null,
      [tree_id],
      false);
  }

  performAction(action_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.AutomationClient_PerformAction_ParamsSpec,
      null,
      [action_data],
      false);
  }

};

ax.mojom.AutomationClient.getRemote = function() {
  let remote = new ax.mojom.AutomationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AutomationClient',
    'context');
  return remote.$;
};

ax.mojom.AutomationClientReceiver = class {
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
        
        // Try Method 0: Enable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutomationClient_Enable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Enable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Disable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutomationClient_Disable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnableChildTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutomationClient_EnableChildTree_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableChildTree (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PerformAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.AutomationClient_PerformAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformAction (3)');
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
          const params = decoder.decodeStruct(ax.mojom.AutomationClient_Enable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enable');
          const result = this.impl.enable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.AutomationClient_Enable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AutomationClient_Disable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disable');
          const result = this.impl.disable();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AutomationClient_EnableChildTree_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableChildTree');
          const result = this.impl.enableChildTree(params.tree_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.AutomationClient_PerformAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performAction');
          const result = this.impl.performAction(params.action_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.AutomationClientReceiver = ax.mojom.AutomationClientReceiver;

ax.mojom.AutomationClientPtr = ax.mojom.AutomationClientRemote;
ax.mojom.AutomationClientRequest = ax.mojom.AutomationClientPendingReceiver;

