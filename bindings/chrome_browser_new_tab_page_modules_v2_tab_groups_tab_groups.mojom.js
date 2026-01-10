// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.tab_groups.mojom = ntp.tab_groups.tab_groups.mojom || {};
var url = url || {};


// Struct: TabGroup
ntp.tab_groups.tab_groups.mojom.mojom.TabGroupSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.TabGroup',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'total_tab_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 44, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false, minVersion: 0 },
        { name: 'favicon_urls', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_shared_tab_group', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: PageHandler
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler = {};

ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.tab_groups.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewTabGroup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_CreateNewTabGroup_ParamsSpec,
      null,
      []);
  }

  getTabGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_GetTabGroups_ParamsSpec,
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_GetTabGroups_ResponseParamsSpec,
      []);
  }

  openTabGroup(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [id]);
  }

  dismissModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      []);
  }

};

ntp.tab_groups.tab_groups.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.tab_groups.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNewTabGroup
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_CreateNewTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.CreateNewTabGroup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetTabGroups
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_GetTabGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.GetTabGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_GetTabGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.GetTabGroups_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'tab_groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ntp.tab_groups.mojom.TabGroupSpec, false), nullable: true, minVersion: 0 },
        { name: 'showZeroState', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenTabGroup
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_OpenTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.OpenTabGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.tab_groups.tab_groups.mojom.mojom.PageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.tab_groups.mojom.PageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerPtr = ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRemote;
ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerRequest = ntp.tab_groups.tab_groups.mojom.mojom.PageHandlerPendingReceiver;

