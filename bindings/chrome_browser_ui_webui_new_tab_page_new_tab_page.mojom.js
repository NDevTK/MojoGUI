// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Enum: NtpBackgroundImageSource
new_tab_page.mojom.NtpBackgroundImageSource = {
  kNoImage: 0,
  kFirstPartyThemeWithoutDailyRefresh: 1,
  kFirstPartyThemeWithDailyRefresh: 2,
  kThirdPartyTheme: 3,
  kUploadedImage: 4,
  kWallpaperSearch: 5,
  kWallpaperSearchInspiration: 6,
};

// Enum: DoodleImageType
new_tab_page.mojom.DoodleImageType = {
  kAnimation: 0,
  kCta: 1,
  kStatic: 2,
};

// Enum: DoodleShareChannel
new_tab_page.mojom.DoodleShareChannel = {
  kFacebook: 0,
  kTwitter: 1,
  kEmail: 2,
  kLinkCopy: 3,
};

// Enum: CustomizeDialogAction
new_tab_page.mojom.CustomizeDialogAction = {
  kCancelClicked: 0,
  kDoneClicked: 1,
  kOpenClicked: 2,
  kBackgroundsBackClicked: 3,
  kBackgroundsNoBackgroundSelected: 4,
  kBackgroundsCollectionOpened: 5,
  kBackgroundsRefreshToggleClicked: 6,
  kBackgroundsImageSelected: 7,
  kBackgroundsUploadFromDeviceClicked: 8,
  kShortcutsCustomLinksClicked: 9,
  kShortcutsMostVisitedClicked: 10,
  kShortcutsVisibilityToggleClicked: 11,
};

// Enum: OptInStatus
new_tab_page.mojom.OptInStatus = {
  kExplicitOptIn: 0,
  kImplicitOptIn: 1,
  kOptOut: 2,
};

// Interface: PageHandlerFactory
new_tab_page.mojom.PageHandlerFactory = {};

new_tab_page.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      null,
      [page, handler],
      undefined,
      undefined
    );
  }

};

new_tab_page.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new new_tab_page.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PageHandlerFactoryPtr = new_tab_page.mojom.PageHandlerFactoryRemote;
new_tab_page.mojom.PageHandlerFactoryRequest = new_tab_page.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
new_tab_page.mojom.PageHandler = {};

new_tab_page.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMostVisitedSettings(shortcuts_type, shortcuts_visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      null,
      [shortcuts_type, shortcuts_visible],
      undefined,
      undefined
    );
  }

  getMostVisitedSettings() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDoodle() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  updatePromoData() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  blocklistPromo(promo_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      null,
      [promo_id],
      undefined,
      undefined
    );
  }

  undoBlocklistPromo(promo_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      null,
      [promo_id],
      undefined,
      undefined
    );
  }

  onDismissModule(module_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      null,
      [module_id],
      undefined,
      undefined
    );
  }

  onRestoreModule(module_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      null,
      [module_id],
      undefined,
      undefined
    );
  }

  setModulesVisible(visible) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      null,
      [visible],
      undefined,
      undefined
    );
  }

  updateDisabledModules() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onModulesLoadedWithData(module_ids) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      null,
      [module_ids],
      undefined,
      undefined
    );
  }

  onModuleUsed(module_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      null,
      [module_id],
      undefined,
      undefined
    );
  }

  getModulesIdNames() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getModulesEligibleForRemoval() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setModulesOrder(module_ids) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      null,
      [module_ids],
      undefined,
      undefined
    );
  }

  getModulesOrder() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  updateModulesLoadable() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setModulesDisabled(module_ids, disabled, is_user_action) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      null,
      [module_ids, disabled, is_user_action],
      undefined,
      undefined
    );
  }

  updateActionChipsVisibility() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateFooterVisibility() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  incrementComposeButtonShownCount() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  recordContextMenuClick() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onOneGoogleBarRendered(time) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      null,
      [time],
      undefined,
      undefined
    );
  }

  onPromoRendered(time, log_url) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      null,
      [time, log_url],
      undefined,
      undefined
    );
  }

  onCustomizeDialogAction(action) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      null,
      [action],
      undefined,
      undefined
    );
  }

  onDoodleImageClicked(type, log_url) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      null,
      [type, log_url],
      undefined,
      undefined
    );
  }

  onDoodleImageRendered(type, time, log_url) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [type, time, log_url],
      undefined,
      undefined
    );
  }

  onDoodleShared(channel, doodle_id, share_id) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      null,
      [channel, doodle_id, share_id],
      undefined,
      undefined
    );
  }

  onPromoLinkClicked() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onAppRendered(time) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec,
      null,
      null,
      [time],
      undefined,
      undefined
    );
  }

};

new_tab_page.mojom.PageHandler.getRemote = function() {
  let remote = new new_tab_page.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetMostVisitedSettings
new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetMostVisitedSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'shortcuts_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shortcuts_visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetMostVisitedSettings
new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetMostVisitedSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetMostVisitedSettings_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shortcuts_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shortcuts_visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetDoodle
new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetDoodle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetDoodle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'doodle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdatePromoData
new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdatePromoData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BlocklistPromo
new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.BlocklistPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UndoBlocklistPromo
new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UndoBlocklistPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDismissModule
new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDismissModule_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRestoreModule
new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnRestoreModule_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetModulesVisible
new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDisabledModules
new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateDisabledModules_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnModulesLoadedWithData
new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnModulesLoadedWithData_Params',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnModuleUsed
new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnModuleUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'module_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetModulesIdNames
new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesIdNames_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesIdNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetModulesEligibleForRemoval
new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesEligibleForRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesEligibleForRemoval_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetModulesOrder
new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesOrder_Params',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetModulesOrder
new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesOrder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.GetModulesOrder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateModulesLoadable
new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateModulesLoadable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetModulesDisabled
new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.SetModulesDisabled_Params',
      packedSize: 24,
      fields: [
        { name: 'module_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_user_action', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateActionChipsVisibility
new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateActionChipsVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateFooterVisibility
new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.UpdateFooterVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IncrementComposeButtonShownCount
new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.IncrementComposeButtonShownCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MaybeTriggerAutomaticCustomizeChromePromo
new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.MaybeTriggerAutomaticCustomizeChromePromo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordContextMenuClick
new_tab_page.mojom.PageHandler_RecordContextMenuClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.RecordContextMenuClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOneGoogleBarRendered
new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnOneGoogleBarRendered_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPromoRendered
new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnPromoRendered_Params',
      packedSize: 24,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'log_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCustomizeDialogAction
new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnCustomizeDialogAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDoodleImageClicked
new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'log_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDoodleImageRendered
new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageRendered_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'log_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleImageRendered_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'image_click_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interaction_log_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'share_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnDoodleShared
new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnDoodleShared_Params',
      packedSize: 32,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'doodle_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'share_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnPromoLinkClicked
new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnPromoLinkClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAppRendered
new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.PageHandler.OnAppRendered_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PageHandlerPtr = new_tab_page.mojom.PageHandlerRemote;
new_tab_page.mojom.PageHandlerRequest = new_tab_page.mojom.PageHandlerPendingReceiver;


// Interface: Page
new_tab_page.mojom.Page = {};

new_tab_page.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page.mojom.PagePendingReceiver,
      handle);
    this.$ = new new_tab_page.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page.mojom.Page_SetTheme_ParamsSpec,
      null,
      null,
      [theme],
      undefined,
      undefined
    );
  }

  setDisabledModules(all, ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      null,
      [all, ids],
      undefined,
      undefined
    );
  }

  setModulesLoadable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setActionChipsVisibility(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      null,
      [visible],
      undefined,
      undefined
    );
  }

  setPromo(promo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      null,
      [promo],
      undefined,
      undefined
    );
  }

  showWebstoreToast() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setWallpaperSearchButtonVisibility(visible) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      null,
      [visible],
      undefined,
      undefined
    );
  }

  footerVisibilityUpdated(visible) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      null,
      [visible],
      undefined,
      undefined
    );
  }

  connectToParentDocument(child_untrusted_document_remote) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec,
      null,
      null,
      [child_untrusted_document_remote],
      undefined,
      undefined
    );
  }

};

new_tab_page.mojom.Page.getRemote = function() {
  let remote = new new_tab_page.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetTheme
new_tab_page.mojom.Page_SetTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisabledModules
new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetDisabledModules_Params',
      packedSize: 24,
      fields: [
        { name: 'all', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetModulesLoadable
new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetModulesLoadable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetActionChipsVisibility
new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetActionChipsVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPromo
new_tab_page.mojom.Page_SetPromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetPromo_Params',
      packedSize: 16,
      fields: [
        { name: 'promo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowWebstoreToast
new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.ShowWebstoreToast_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetWallpaperSearchButtonVisibility
new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.SetWallpaperSearchButtonVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FooterVisibilityUpdated
new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.FooterVisibilityUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConnectToParentDocument
new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_page.mojom.Page.ConnectToParentDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'child_untrusted_document_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_page.mojom.PagePtr = new_tab_page.mojom.PageRemote;
new_tab_page.mojom.PageRequest = new_tab_page.mojom.PagePendingReceiver;

