// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
// Module: new_tab_page.mojom

'use strict';

// Module namespace
var new_tab_page = new_tab_page || {};
new_tab_page.mojom = new_tab_page.mojom || {};


// Enum: NtpBackgroundImageSource
new_tab_page.mojom.NtpBackgroundImageSource = {
};

// Enum: DoodleImageType
new_tab_page.mojom.DoodleImageType = {
};

// Enum: DoodleShareChannel
new_tab_page.mojom.DoodleShareChannel = {
};

// Enum: CustomizeDialogAction
new_tab_page.mojom.CustomizeDialogAction = {
};

// Enum: OptInStatus
new_tab_page.mojom.OptInStatus = {
};

// Struct: BackgroundImage
new_tab_page.mojom.BackgroundImage = class {
  constructor(values = {}) {
    this.image_source = values.image_source !== undefined ? values.image_source : "";
  }
};

// Struct: Theme
new_tab_page.mojom.Theme = class {
  constructor(values = {}) {
    this.most_visited = values.most_visited !== undefined ? values.most_visited : false;
  }
};

// Struct: ImageDoodle
new_tab_page.mojom.ImageDoodle = class {
  constructor(values = {}) {
    this.animation_impression_log_url = values.animation_impression_log_url !== undefined ? values.animation_impression_log_url : 0;
  }
};

// Struct: AllModeImageDoodle
new_tab_page.mojom.AllModeImageDoodle = class {
  constructor(values = {}) {
    this.on_click_url = values.on_click_url !== undefined ? values.on_click_url : null;
    this.share_url = values.share_url !== undefined ? values.share_url : null;
  }
};

// Struct: InteractiveDoodle
new_tab_page.mojom.InteractiveDoodle = class {
  constructor(values = {}) {
    this.height = values.height !== undefined ? values.height : 0;
  }
};

// Struct: Doodle
new_tab_page.mojom.Doodle = class {
  constructor(values = {}) {
    this.description = values.description !== undefined ? values.description : 0;
  }
};

// Struct: PromoImagePart
new_tab_page.mojom.PromoImagePart = class {
  constructor(values = {}) {
    this.target = values.target !== undefined ? values.target : null;
  }
};

// Struct: PromoLinkPart
new_tab_page.mojom.PromoLinkPart = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: PromoTextPart
new_tab_page.mojom.PromoTextPart = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
  }
};

// Struct: Promo
new_tab_page.mojom.Promo = class {
  constructor(values = {}) {
    this.middle_slot_parts = values.middle_slot_parts !== undefined ? values.middle_slot_parts : "";
  }
};

// Struct: ModuleIdName
new_tab_page.mojom.ModuleIdName = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Interface: PageHandlerFactory
new_tab_page.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

new_tab_page.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
new_tab_page.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.PageHandler';
  }

  setMostVisitedSettings(shortcuts_type, shortcuts_visible) {
    // Method: SetMostVisitedSettings
    // Call: SetMostVisitedSettings(shortcuts_type, shortcuts_visible)
  }

  getMostVisitedSettings() {
    // Method: GetMostVisitedSettings
    return new Promise((resolve) => {
      // Call: GetMostVisitedSettings()
      resolve({});
    });
  }

  getDoodle() {
    // Method: GetDoodle
    return new Promise((resolve) => {
      // Call: GetDoodle()
      resolve({});
    });
  }

  updatePromoData() {
    // Method: UpdatePromoData
    // Call: UpdatePromoData()
  }

  blocklistPromo(promo_id) {
    // Method: BlocklistPromo
    // Call: BlocklistPromo(promo_id)
  }

  undoBlocklistPromo(promo_id) {
    // Method: UndoBlocklistPromo
    // Call: UndoBlocklistPromo(promo_id)
  }

  onDismissModule(module_id) {
    // Method: OnDismissModule
    // Call: OnDismissModule(module_id)
  }

  onRestoreModule(module_id) {
    // Method: OnRestoreModule
    // Call: OnRestoreModule(module_id)
  }

  setModulesVisible(visible) {
    // Method: SetModulesVisible
    // Call: SetModulesVisible(visible)
  }

  updateDisabledModules() {
    // Method: UpdateDisabledModules
    // Call: UpdateDisabledModules()
  }

  onModulesLoadedWithData(module_ids) {
    // Method: OnModulesLoadedWithData
    // Call: OnModulesLoadedWithData(module_ids)
  }

  onModuleUsed(module_id) {
    // Method: OnModuleUsed
    // Call: OnModuleUsed(module_id)
  }

  getModulesIdNames() {
    // Method: GetModulesIdNames
    return new Promise((resolve) => {
      // Call: GetModulesIdNames()
      resolve({});
    });
  }

  getModulesEligibleForRemoval() {
    // Method: GetModulesEligibleForRemoval
    return new Promise((resolve) => {
      // Call: GetModulesEligibleForRemoval()
      resolve({});
    });
  }

  setModulesOrder(module_ids) {
    // Method: SetModulesOrder
    // Call: SetModulesOrder(module_ids)
  }

  getModulesOrder() {
    // Method: GetModulesOrder
    return new Promise((resolve) => {
      // Call: GetModulesOrder()
      resolve({});
    });
  }

  updateModulesLoadable() {
    // Method: UpdateModulesLoadable
    // Call: UpdateModulesLoadable()
  }

  setModulesDisabled(module_ids, disabled, is_user_action) {
    // Method: SetModulesDisabled
    // Call: SetModulesDisabled(module_ids, disabled, is_user_action)
  }

  updateActionChipsVisibility() {
    // Method: UpdateActionChipsVisibility
    // Call: UpdateActionChipsVisibility()
  }

  updateFooterVisibility() {
    // Method: UpdateFooterVisibility
    // Call: UpdateFooterVisibility()
  }

  incrementComposeButtonShownCount() {
    // Method: IncrementComposeButtonShownCount
    // Call: IncrementComposeButtonShownCount()
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    // Method: MaybeTriggerAutomaticCustomizeChromePromo
    // Call: MaybeTriggerAutomaticCustomizeChromePromo()
  }

  recordContextMenuClick() {
    // Method: RecordContextMenuClick
    // Call: RecordContextMenuClick()
  }

  onOneGoogleBarRendered(time) {
    // Method: OnOneGoogleBarRendered
    // Call: OnOneGoogleBarRendered(time)
  }

  onPromoRendered(time, log_url) {
    // Method: OnPromoRendered
    // Call: OnPromoRendered(time, log_url)
  }

  onCustomizeDialogAction(action) {
    // Method: OnCustomizeDialogAction
    // Call: OnCustomizeDialogAction(action)
  }

  onDoodleImageClicked(type, log_url) {
    // Method: OnDoodleImageClicked
    // Call: OnDoodleImageClicked(type, log_url)
  }

  onDoodleImageRendered(type, time, log_url) {
    // Method: OnDoodleImageRendered
    return new Promise((resolve) => {
      // Call: OnDoodleImageRendered(type, time, log_url)
      resolve({});
    });
  }

  onDoodleShared(channel, doodle_id, share_id) {
    // Method: OnDoodleShared
    // Call: OnDoodleShared(channel, doodle_id, share_id)
  }

  onPromoLinkClicked() {
    // Method: OnPromoLinkClicked
    // Call: OnPromoLinkClicked()
  }

  onAppRendered(time) {
    // Method: OnAppRendered
    // Call: OnAppRendered(time)
  }

};

new_tab_page.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
new_tab_page.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_page.mojom.Page';
  }

  setTheme(theme) {
    // Method: SetTheme
    // Call: SetTheme(theme)
  }

  setDisabledModules(all, ids) {
    // Method: SetDisabledModules
    // Call: SetDisabledModules(all, ids)
  }

  setModulesLoadable() {
    // Method: SetModulesLoadable
    // Call: SetModulesLoadable()
  }

  setActionChipsVisibility(visible) {
    // Method: SetActionChipsVisibility
    // Call: SetActionChipsVisibility(visible)
  }

  setPromo(promo) {
    // Method: SetPromo
    // Call: SetPromo(promo)
  }

  showWebstoreToast() {
    // Method: ShowWebstoreToast
    // Call: ShowWebstoreToast()
  }

  setWallpaperSearchButtonVisibility(visible) {
    // Method: SetWallpaperSearchButtonVisibility
    // Call: SetWallpaperSearchButtonVisibility(visible)
  }

  footerVisibilityUpdated(visible) {
    // Method: FooterVisibilityUpdated
    // Call: FooterVisibilityUpdated(visible)
  }

  connectToParentDocument(child_untrusted_document_remote) {
    // Method: ConnectToParentDocument
    // Call: ConnectToParentDocument(child_untrusted_document_remote)
  }

};

new_tab_page.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
