// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation_client.mojom
// Module: ax.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  enable() {
    return this.$.enable();
  }
  disable() {
    return this.$.disable();
  }
  enableChildTree(tree_id) {
    return this.$.enableChildTree(tree_id);
  }
  performAction(action_data) {
    return this.$.performAction(action_data);
  }
};

ax.mojom.AutomationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AutomationClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.AutomationClient_Enable_ParamsSpec,
      ax.mojom.AutomationClient_Enable_ResponseParamsSpec,
      [],
      false);
  }

  disable() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ax.mojom.AutomationClient_Disable_ParamsSpec,
      null,
      [],
      false);
  }

  enableChildTree(tree_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ax.mojom.AutomationClient_EnableChildTree_ParamsSpec,
      null,
      [tree_id],
      false);
  }

  performAction(action_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AutomationClient', [
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
             decoder.decodeStructInline(ax.mojom.AutomationClient_Enable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AutomationClient_Disable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AutomationClient_EnableChildTree_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.AutomationClient_PerformAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AutomationClient_Enable_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ax.mojom.AutomationClient_Disable_ParamsSpec.$.structSpec);
          const result = this.impl.disable();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AutomationClient_EnableChildTree_ParamsSpec.$.structSpec);
          const result = this.impl.enableChildTree(params.tree_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.AutomationClient_PerformAction_ParamsSpec.$.structSpec);
          const result = this.impl.performAction(params.action_data);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ax.mojom.AutomationClientReceiver = ax.mojom.AutomationClientReceiver;

ax.mojom.AutomationClientPtr = ax.mojom.AutomationClientRemote;
ax.mojom.AutomationClientRequest = ax.mojom.AutomationClientPendingReceiver;

