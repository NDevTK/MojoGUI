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
ntp_promo.mojom.PromosShown = class {
  constructor(values = {}) {
    this.completed = values.completed !== undefined ? values.completed : "";
  }
};

// Struct: Promo
ntp_promo.mojom.Promo = class {
  constructor(values = {}) {
    this.button_text = values.button_text !== undefined ? values.button_text : "";
  }
};

// Interface: NtpPromoHandler
ntp_promo.mojom.NtpPromoHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp_promo.mojom.NtpPromoHandler';
  }

  requestPromos() {
    // Method: RequestPromos
    // Call: RequestPromos()
  }

  onPromosShown(eligible_shown, completed_shown) {
    // Method: OnPromosShown
    // Call: OnPromosShown(eligible_shown, completed_shown)
  }

  onPromoClicked(promo_id) {
    // Method: OnPromoClicked
    // Call: OnPromoClicked(promo_id)
  }

  snoozeSetupList() {
    // Method: SnoozeSetupList
    // Call: SnoozeSetupList()
  }

  unsnoozeSetupList() {
    // Method: UnsnoozeSetupList
    // Call: UnsnoozeSetupList()
  }

  disableSetupList() {
    // Method: DisableSetupList
    // Call: DisableSetupList()
  }

  undisableSetupList() {
    // Method: UndisableSetupList
    // Call: UndisableSetupList()
  }

};

ntp_promo.mojom.NtpPromoHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NtpPromoClient
ntp_promo.mojom.NtpPromoClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp_promo.mojom.NtpPromoClient';
  }

  setPromos(eligible, completed) {
    // Method: SetPromos
    // Call: SetPromos(eligible, completed)
  }

};

ntp_promo.mojom.NtpPromoClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NtpPromoHandlerFactory
ntp_promo.mojom.NtpPromoHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp_promo.mojom.NtpPromoHandlerFactory';
  }

  createNtpPromoHandler(client, handler) {
    // Method: CreateNtpPromoHandler
    // Call: CreateNtpPromoHandler(client, handler)
  }

};

ntp_promo.mojom.NtpPromoHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
