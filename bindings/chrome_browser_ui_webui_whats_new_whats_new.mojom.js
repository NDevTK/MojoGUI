// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/whats_new/whats_new.mojom
// Module: whats_new.mojom

'use strict';

// Module namespace
var whats_new = whats_new || {};
whats_new.mojom = whats_new.mojom || {};


// Enum: ScrollDepth
whats_new.mojom.ScrollDepth = {
};

// Enum: ModulePosition
whats_new.mojom.ModulePosition = {
};

// Interface: PageHandlerFactory
whats_new.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'whats_new.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

whats_new.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
whats_new.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'whats_new.mojom.PageHandler';
  }

  getServerUrl(is_staging) {
    // Method: GetServerUrl
    return new Promise((resolve) => {
      // Call: GetServerUrl(is_staging)
      resolve({});
    });
  }

  recordTimeToLoadContent(time) {
    // Method: RecordTimeToLoadContent
    // Call: RecordTimeToLoadContent(time)
  }

  recordVersionPageLoaded(is_auto_open) {
    // Method: RecordVersionPageLoaded
    // Call: RecordVersionPageLoaded(is_auto_open)
  }

  recordEditionPageLoaded(page_uid, is_auto_open) {
    // Method: RecordEditionPageLoaded
    // Call: RecordEditionPageLoaded(page_uid, is_auto_open)
  }

  recordModuleImpression(module_name, position) {
    // Method: RecordModuleImpression
    // Call: RecordModuleImpression(module_name, position)
  }

  recordExploreMoreToggled(expanded) {
    // Method: RecordExploreMoreToggled
    // Call: RecordExploreMoreToggled(expanded)
  }

  recordScrollDepth(depth) {
    // Method: RecordScrollDepth
    // Call: RecordScrollDepth(depth)
  }

  recordTimeOnPage(time) {
    // Method: RecordTimeOnPage
    // Call: RecordTimeOnPage(time)
  }

  recordModuleLinkClicked(module_name, position) {
    // Method: RecordModuleLinkClicked
    // Call: RecordModuleLinkClicked(module_name, position)
  }

  recordModuleVideoStarted(module_name, position) {
    // Method: RecordModuleVideoStarted
    // Call: RecordModuleVideoStarted(module_name, position)
  }

  recordModuleVideoEnded(module_name, position) {
    // Method: RecordModuleVideoEnded
    // Call: RecordModuleVideoEnded(module_name, position)
  }

  recordModulePlayClicked(module_name, position) {
    // Method: RecordModulePlayClicked
    // Call: RecordModulePlayClicked(module_name, position)
  }

  recordModulePauseClicked(module_name, position) {
    // Method: RecordModulePauseClicked
    // Call: RecordModulePauseClicked(module_name, position)
  }

  recordModuleRestartClicked(module_name, position) {
    // Method: RecordModuleRestartClicked
    // Call: RecordModuleRestartClicked(module_name, position)
  }

  recordBrowserCommandExecuted() {
    // Method: RecordBrowserCommandExecuted
    // Call: RecordBrowserCommandExecuted()
  }

  recordQrCodeToggled(expanded) {
    // Method: RecordQrCodeToggled
    // Call: RecordQrCodeToggled(expanded)
  }

  recordNavClick() {
    // Method: RecordNavClick
    // Call: RecordNavClick()
  }

  recordFeatureTileNavigation() {
    // Method: RecordFeatureTileNavigation
    // Call: RecordFeatureTileNavigation()
  }

  recordCarouselScrollButtonClick() {
    // Method: RecordCarouselScrollButtonClick
    // Call: RecordCarouselScrollButtonClick()
  }

  recordExpandMediaToggled(module_name, expanded) {
    // Method: RecordExpandMediaToggled
    // Call: RecordExpandMediaToggled(module_name, expanded)
  }

  recordCtaClick() {
    // Method: RecordCtaClick
    // Call: RecordCtaClick()
  }

  recordNextButtonClick() {
    // Method: RecordNextButtonClick
    // Call: RecordNextButtonClick()
  }

};

whats_new.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
whats_new.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'whats_new.mojom.Page';
  }

};

whats_new.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
