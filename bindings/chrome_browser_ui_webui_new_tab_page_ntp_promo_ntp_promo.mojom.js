// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/ntp_promo/ntp_promo.mojom
// Module: ntp_promo.mojom

'use strict';

// Module namespace
var ntp_promo = ntp_promo || {};
ntp_promo.mojom = ntp_promo.mojom || {};

ntp_promo.mojom.ShowNtpPromosResultSpec = { $: mojo.internal.Enum() };
ntp_promo.mojom.PromosShownSpec = { $: {} };
ntp_promo.mojom.PromoSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler = {};
ntp_promo.mojom.NtpPromoHandler.$interfaceName = 'ntp_promo.mojom.NtpPromoHandler';
ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoClient = {};
ntp_promo.mojom.NtpPromoClient.$interfaceName = 'ntp_promo.mojom.NtpPromoClient';
ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandlerFactory = {};
ntp_promo.mojom.NtpPromoHandlerFactory.$interfaceName = 'ntp_promo.mojom.NtpPromoHandlerFactory';
ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec = { $: {} };

// Enum: ShowNtpPromosResult
ntp_promo.mojom.ShowNtpPromosResult = {
  kShown: 0,
  kNotShownNoPromos: 1,
  kNotShownDueToPolicy: 2,
};

// Struct: PromosShown
mojo.internal.Struct(
    ntp_promo.mojom.PromosShownSpec, 'ntp_promo.mojom.PromosShown', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('completed', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Promo
mojo.internal.Struct(
    ntp_promo.mojom.PromoSpec, 'ntp_promo.mojom.Promo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('body_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('button_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NtpPromoHandler
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_RequestPromos_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_OnPromosShown_Params', [
      mojo.internal.StructField('eligible_shown', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('completed_shown', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_Params', [
      mojo.internal.StructField('promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_DisableSetupList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

ntp_promo.mojom.NtpPromoHandlerPtr = ntp_promo.mojom.NtpPromoHandlerRemote;
ntp_promo.mojom.NtpPromoHandlerRequest = ntp_promo.mojom.NtpPromoHandlerPendingReceiver;


// Interface: NtpPromoClient
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec, 'ntp_promo.mojom.NtpPromoClient_SetPromos_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Array(ntp_promo.mojom.PromoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('completed', 8, 0, mojo.internal.Array(ntp_promo.mojom.PromoSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

ntp_promo.mojom.NtpPromoClientPtr = ntp_promo.mojom.NtpPromoClientRemote;
ntp_promo.mojom.NtpPromoClientRequest = ntp_promo.mojom.NtpPromoClientPendingReceiver;


// Interface: NtpPromoHandlerFactory
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(ntp_promo.mojom.NtpPromoClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ntp_promo.mojom.NtpPromoHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

ntp_promo.mojom.NtpPromoHandlerFactoryPtr = ntp_promo.mojom.NtpPromoHandlerFactoryRemote;
ntp_promo.mojom.NtpPromoHandlerFactoryRequest = ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver;

