// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.mojom = ntp.tab_groups.mojom || {};


// Interface: PageHandler
ntp.tab_groups.mojom.PageHandler = {};

ntp.tab_groups.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.tab_groups.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.tab_groups.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.tab_groups.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.tab_groups.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.tab_groups.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewTabGroup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec.$,
      null,
      []);
  }

  getTabGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec.$,
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec.$,
      []);
  }

  openTabGroup(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec.$,
      null,
      [id]);
  }

  dismissModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec.$,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec.$,
      null,
      []);
  }

};

ntp.tab_groups.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.tab_groups.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.tab_groups.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNewTabGroup
ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.CreateNewTabGroup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTabGroups
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.GetTabGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.GetTabGroups_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'tab_groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'showZeroState', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenTabGroup
ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.OpenTabGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ntp.tab_groups.mojom.PageHandlerPtr = ntp.tab_groups.mojom.PageHandlerRemote;
ntp.tab_groups.mojom.PageHandlerRequest = ntp.tab_groups.mojom.PageHandlerPendingReceiver;

