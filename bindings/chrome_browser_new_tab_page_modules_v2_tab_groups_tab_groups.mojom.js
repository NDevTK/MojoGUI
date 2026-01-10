// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.mojom = ntp.tab_groups.mojom || {};
var components = components || {};
var url = url || {};

ntp.tab_groups.mojom.TabGroupSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler = {};
ntp.tab_groups.mojom.PageHandler.$interfaceName = 'ntp.tab_groups.mojom.PageHandler';
ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec = { $: {} };

// Struct: TabGroup
mojo.internal.Struct(
    ntp.tab_groups.mojom.TabGroupSpec, 'ntp.tab_groups.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('total_tab_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('color', 40, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_urls', 48, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_shared_tab_group', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: PageHandler
mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParams', [
      mojo.internal.StructField('tab_groups', 0, 0, mojo.internal.Array(ntp.tab_groups.mojom.TabGroupSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('showZeroState', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_OpenTabGroup_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

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
      ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec,
      null,
      [],
      false);
  }

  getTabGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec,
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec,
      [],
      false);
  }

  openTabGroup(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [id],
      false);
  }

  dismissModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
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

ntp.tab_groups.mojom.PageHandlerPtr = ntp.tab_groups.mojom.PageHandlerRemote;
ntp.tab_groups.mojom.PageHandlerRequest = ntp.tab_groups.mojom.PageHandlerPendingReceiver;

