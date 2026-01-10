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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.AutomationClient_Enable_ParamsSpec.$.decode(message.payload);
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
          const params = ax.mojom.AutomationClient_Disable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disable();
          break;
        }
        case 2: {
          const params = ax.mojom.AutomationClient_EnableChildTree_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableChildTree(params.tree_id);
          break;
        }
        case 3: {
          const params = ax.mojom.AutomationClient_PerformAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.performAction(params.action_data);
          break;
        }
      }
    });
  }
};

ax.mojom.AutomationClientReceiver = ax.mojom.AutomationClientReceiver;

ax.mojom.AutomationClientPtr = ax.mojom.AutomationClientRemote;
ax.mojom.AutomationClientRequest = ax.mojom.AutomationClientPendingReceiver;

