// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/ntp_promo/ntp_promo.mojom
// Module: ntp_promo.mojom

'use strict';

// Module namespace
var ntp_promo = ntp_promo || {};
ntp_promo.mojom = ntp_promo.mojom || {};


// Enum: ShowNtpPromosResult
ntp_promo.mojom.ShowNtpPromosResult = {
  kShown: 0,
  kNotShownNoPromos: 1,
  kNotShownDueToPolicy: 2,
};

// Struct: PromosShown
ntp_promo.mojom.PromosShownSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.PromosShown',
      packedSize: 16,
      fields: [
        { name: 'completed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Promo
ntp_promo.mojom.PromoSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.Promo',
      packedSize: 16,
      fields: [
        { name: 'button_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NtpPromoHandler
ntp_promo.mojom.NtpPromoHandler = {};

ntp_promo.mojom.NtpPromoHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoHandlerPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPromos() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec,
      null,
      []);
  }

  onPromosShown(eligible_shown, completed_shown) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec,
      null,
      [eligible_shown, completed_shown]);
  }

  onPromoClicked(promo_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec,
      null,
      [promo_id]);
  }

  snoozeSetupList() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec,
      null,
      []);
  }

  unsnoozeSetupList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec,
      null,
      []);
  }

  disableSetupList() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec,
      null,
      []);
  }

  undisableSetupList() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec,
      null,
      []);
  }

};

ntp_promo.mojom.NtpPromoHandler.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RequestPromos
ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.RequestPromos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPromosShown
ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.OnPromosShown_Params',
      packedSize: 24,
      fields: [
        { name: 'eligible_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'completed_shown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPromoClicked
ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.OnPromoClicked_Params',
      packedSize: 16,
      fields: [
        { name: 'promo_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SnoozeSetupList
ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.SnoozeSetupList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnsnoozeSetupList
ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.UnsnoozeSetupList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableSetupList
ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.DisableSetupList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UndisableSetupList
ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandler.UndisableSetupList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ntp_promo.mojom.NtpPromoHandlerPtr = ntp_promo.mojom.NtpPromoHandlerRemote;
ntp_promo.mojom.NtpPromoHandlerRequest = ntp_promo.mojom.NtpPromoHandlerPendingReceiver;


// Interface: NtpPromoClient
ntp_promo.mojom.NtpPromoClient = {};

ntp_promo.mojom.NtpPromoClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoClientRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoClientPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPromos(eligible, completed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec,
      null,
      [eligible, completed]);
  }

};

ntp_promo.mojom.NtpPromoClient.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetPromos
ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoClient.SetPromos_Params',
      packedSize: 24,
      fields: [
        { name: 'eligible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'completed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ntp_promo.mojom.NtpPromoClientPtr = ntp_promo.mojom.NtpPromoClientRemote;
ntp_promo.mojom.NtpPromoClientRequest = ntp_promo.mojom.NtpPromoClientPendingReceiver;


// Interface: NtpPromoHandlerFactory
ntp_promo.mojom.NtpPromoHandlerFactory = {};

ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNtpPromoHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec,
      null,
      [client, handler]);
  }

};

ntp_promo.mojom.NtpPromoHandlerFactory.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNtpPromoHandler
ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp_promo.mojom.NtpPromoHandlerFactory.CreateNtpPromoHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ntp_promo.mojom.NtpPromoHandlerFactoryPtr = ntp_promo.mojom.NtpPromoHandlerFactoryRemote;
ntp_promo.mojom.NtpPromoHandlerFactoryRequest = ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver;

