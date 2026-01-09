// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

'use strict';

// Module namespace
var new_tab_footer = new_tab_footer || {};
new_tab_footer.mojom = new_tab_footer.mojom || {};


// Enum: NewTabPageType
new_tab_footer.mojom.NewTabPageType = {
};

// Struct: ManagementNotice
new_tab_footer.mojom.ManagementNotice = class {
  constructor(values = {}) {
    this.custom_bitmap_data_url = values.custom_bitmap_data_url !== undefined ? values.custom_bitmap_data_url : "";
  }
};

// Struct: BackgroundAttribution
new_tab_footer.mojom.BackgroundAttribution = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Interface: NewTabFooterHandlerFactory
new_tab_footer.mojom.NewTabFooterHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
  }

  createNewTabFooterHandler(document, handler) {
    // Method: CreateNewTabFooterHandler
    // Call: CreateNewTabFooterHandler(document, handler)
  }

};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NewTabFooterHandler
new_tab_footer.mojom.NewTabFooterHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_footer.mojom.NewTabFooterHandler';
  }

  updateNtpExtensionName() {
    // Method: UpdateNtpExtensionName
    // Call: UpdateNtpExtensionName()
  }

  updateManagementNotice() {
    // Method: UpdateManagementNotice
    // Call: UpdateManagementNotice()
  }

  updateAttachedTabState() {
    // Method: UpdateAttachedTabState
    // Call: UpdateAttachedTabState()
  }

  updateBackgroundAttribution() {
    // Method: UpdateBackgroundAttribution
    // Call: UpdateBackgroundAttribution()
  }

  openExtensionOptionsPageWithFallback() {
    // Method: OpenExtensionOptionsPageWithFallback
    // Call: OpenExtensionOptionsPageWithFallback()
  }

  openManagementPage() {
    // Method: OpenManagementPage
    // Call: OpenManagementPage()
  }

  openUrlInCurrentTab(url) {
    // Method: OpenUrlInCurrentTab
    // Call: OpenUrlInCurrentTab(url)
  }

  showContextMenu(point) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(point)
  }

  notifyCustomizationButtonVisible() {
    // Method: NotifyCustomizationButtonVisible
    // Call: NotifyCustomizationButtonVisible()
  }

};

new_tab_footer.mojom.NewTabFooterHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NewTabFooterDocument
new_tab_footer.mojom.NewTabFooterDocumentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'new_tab_footer.mojom.NewTabFooterDocument';
  }

  setNtpExtensionName(name) {
    // Method: SetNtpExtensionName
    // Call: SetNtpExtensionName(name)
  }

  setManagementNotice(notice) {
    // Method: SetManagementNotice
    // Call: SetManagementNotice(notice)
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    // Method: AttachedTabStateUpdated
    // Call: AttachedTabStateUpdated(ntp_type, can_customize_chrome)
  }

  setBackgroundAttribution(background_image_attribution) {
    // Method: SetBackgroundAttribution
    // Call: SetBackgroundAttribution(background_image_attribution)
  }

};

new_tab_footer.mojom.NewTabFooterDocumentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
