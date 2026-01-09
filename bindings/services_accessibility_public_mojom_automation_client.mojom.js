// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation_client.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AutomationClient
ax.mojom.AutomationClient = {};

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
      []);
  }

  disable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AutomationClient_Disable_ParamsSpec,
      null,
      []);
  }

  enableChildTree(tree_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.AutomationClient_EnableChildTree_ParamsSpec,
      null,
      [tree_id]);
  }

  performAction(action_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.AutomationClient_PerformAction_ParamsSpec,
      null,
      [action_data]);
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

// ParamsSpec for Enable
ax.mojom.AutomationClient_Enable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutomationClient.Enable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.AutomationClient_Enable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutomationClient.Enable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'desktop_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Disable
ax.mojom.AutomationClient_Disable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutomationClient.Disable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableChildTree
ax.mojom.AutomationClient_EnableChildTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutomationClient.EnableChildTree_Params',
      packedSize: 16,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformAction
ax.mojom.AutomationClient_PerformAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutomationClient.PerformAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXActionDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.AutomationClientPtr = ax.mojom.AutomationClientRemote;
ax.mojom.AutomationClientRequest = ax.mojom.AutomationClientPendingReceiver;

