// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_chrome.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};


// Enum: CustomizeChromeSection
side_panel.mojom.CustomizeChromeSection = {
  kUnspecified: 0,
  kAppearance: 1,
  kShortcuts: 2,
  kModules: 3,
  kWallpaperSearch: 4,
  kToolbar: 5,
  kFooter: 6,
};

// Enum: ChromeWebStoreCollection
side_panel.mojom.ChromeWebStoreCollection = {
  kWritingEssentials: 0,
};

// Enum: ChromeWebStoreCategory
side_panel.mojom.ChromeWebStoreCategory = {
  kWorkflowPlanning: 0,
  kShopping: 1,
};

// Enum: NewTabPageType
side_panel.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kThirdPartyWebUI: 1,
  kThirdPartyRemote: 2,
  kExtension: 3,
  kIncognito: 4,
  kGuestMode: 5,
  kNone: 6,
};

// Struct: BackgroundImage
side_panel.mojom.BackgroundImage = class {
  constructor(values = {}) {
    this.daily_refresh_enabled = values.daily_refresh_enabled !== undefined ? values.daily_refresh_enabled : false;
  }
};

// Struct: ThirdPartyThemeInfo
side_panel.mojom.ThirdPartyThemeInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: Theme
side_panel.mojom.Theme = class {
  constructor(values = {}) {
    this.background_color = values.background_color !== undefined ? values.background_color : null;
    this.follow_device_theme = values.follow_device_theme !== undefined ? values.follow_device_theme : false;
  }
};

// Struct: BackgroundCollection
side_panel.mojom.BackgroundCollection = class {
  constructor(values = {}) {
    this.image_verified = values.image_verified !== undefined ? values.image_verified : false;
  }
};

// Struct: CollectionImage
side_panel.mojom.CollectionImage = class {
  constructor(values = {}) {
    this.image_verified = values.image_verified !== undefined ? values.image_verified : false;
  }
};

// Struct: ModuleSettings
side_panel.mojom.ModuleSettings = class {
  constructor(values = {}) {
    this.visible = values.visible !== undefined ? values.visible : false;
  }
};

// Struct: ManagementNoticeState
side_panel.mojom.ManagementNoticeState = class {
  constructor(values = {}) {
    this.enabled_by_policy = values.enabled_by_policy !== undefined ? values.enabled_by_policy : false;
  }
};

// Interface: CustomizeChromePageHandlerFactory
side_panel.mojom.CustomizeChromePageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.CustomizeChromePageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

side_panel.mojom.CustomizeChromePageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeChromePageHandler
side_panel.mojom.CustomizeChromePageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.CustomizeChromePageHandler';
  }

  setMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible) {
    // Method: SetMostVisitedSettings
    // Call: SetMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible)
  }

  updateMostVisitedSettings() {
    // Method: UpdateMostVisitedSettings
    // Call: UpdateMostVisitedSettings()
  }

  getBackgroundCollections() {
    // Method: GetBackgroundCollections
    return new Promise((resolve) => {
      // Call: GetBackgroundCollections()
      resolve({});
    });
  }

  getReplacementCollectionPreviewImage(collection_id) {
    // Method: GetReplacementCollectionPreviewImage
    return new Promise((resolve) => {
      // Call: GetReplacementCollectionPreviewImage(collection_id)
      resolve({});
    });
  }

  getBackgroundImages(collection_id) {
    // Method: GetBackgroundImages
    return new Promise((resolve) => {
      // Call: GetBackgroundImages(collection_id)
      resolve({});
    });
  }

  updateModulesSettings() {
    // Method: UpdateModulesSettings
    // Call: UpdateModulesSettings()
  }

  setTheme() {
    // Method: SetTheme
    // Call: SetTheme()
  }

  updateTheme() {
    // Method: UpdateTheme
    // Call: UpdateTheme()
  }

  setThemeEditable() {
    // Method: SetThemeEditable
    // Call: SetThemeEditable()
  }

  updateThemeEditable(is_theme_editable) {
    // Method: UpdateThemeEditable
    // Call: UpdateThemeEditable(is_theme_editable)
  }

  setDefaultColor() {
    // Method: SetDefaultColor
    // Call: SetDefaultColor()
  }

  setFollowDeviceTheme(follow) {
    // Method: SetFollowDeviceTheme
    // Call: SetFollowDeviceTheme(follow)
  }

  removeBackgroundImage() {
    // Method: RemoveBackgroundImage
    // Call: RemoveBackgroundImage()
  }

  chooseLocalCustomBackground() {
    // Method: ChooseLocalCustomBackground
    return new Promise((resolve) => {
      // Call: ChooseLocalCustomBackground()
      resolve({});
    });
  }

  setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id) {
    // Method: SetBackgroundImage
    // Call: SetBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id)
  }

  setDailyRefreshCollectionId(collection_id) {
    // Method: SetDailyRefreshCollectionId
    // Call: SetDailyRefreshCollectionId(collection_id)
  }

  openChromeWebStore() {
    // Method: OpenChromeWebStore
    // Call: OpenChromeWebStore()
  }

  openChromeWebStoreHomePage() {
    // Method: OpenChromeWebStoreHomePage
    // Call: OpenChromeWebStoreHomePage()
  }

  openThirdPartyThemePage(theme_id) {
    // Method: OpenThirdPartyThemePage
    // Call: OpenThirdPartyThemePage(theme_id)
  }

  openChromeWebStoreCategoryPage(category) {
    // Method: OpenChromeWebStoreCategoryPage
    // Call: OpenChromeWebStoreCategoryPage(category)
  }

  openChromeWebStoreCollectionPage(collection) {
    // Method: OpenChromeWebStoreCollectionPage
    // Call: OpenChromeWebStoreCollectionPage(collection)
  }

  openNtpManagedByPage() {
    // Method: OpenNtpManagedByPage
    // Call: OpenNtpManagedByPage()
  }

  setModulesVisible(visible) {
    // Method: SetModulesVisible
    // Call: SetModulesVisible(visible)
  }

  setModuleDisabled(module_id, disabled) {
    // Method: SetModuleDisabled
    // Call: SetModuleDisabled(module_id, disabled)
  }

  setToolChipsVisible(visible) {
    // Method: SetToolChipsVisible
    // Call: SetToolChipsVisible(visible)
  }

  setToolsSettings() {
    // Method: SetToolsSettings
    // Call: SetToolsSettings()
  }

  updateToolChipsSettings() {
    // Method: UpdateToolChipsSettings
    // Call: UpdateToolChipsSettings()
  }

  updateScrollToSection() {
    // Method: UpdateScrollToSection
    // Call: UpdateScrollToSection()
  }

  updateScrollToSection() {
    // Method: UpdateScrollToSection
    // Call: UpdateScrollToSection()
  }

  attachedTabStateUpdated() {
    // Method: AttachedTabStateUpdated
    // Call: AttachedTabStateUpdated()
  }

  updateAttachedTabState() {
    // Method: UpdateAttachedTabState
    // Call: UpdateAttachedTabState()
  }

  ntpManagedByNameUpdated() {
    // Method: NtpManagedByNameUpdated
    // Call: NtpManagedByNameUpdated()
  }

  updateNtpManagedByName() {
    // Method: UpdateNtpManagedByName
    // Call: UpdateNtpManagedByName()
  }

  setFooterVisible(visible) {
    // Method: SetFooterVisible
    // Call: SetFooterVisible(visible)
  }

  setFooterSettings() {
    // Method: SetFooterSettings
    // Call: SetFooterSettings()
  }

  updateFooterSettings() {
    // Method: UpdateFooterSettings
    // Call: UpdateFooterSettings()
  }

};

side_panel.mojom.CustomizeChromePageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomizeChromePage
side_panel.mojom.CustomizeChromePagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.CustomizeChromePage';
  }

  setModulesSettings(modules_settings, managed, visible) {
    // Method: SetModulesSettings
    // Call: SetModulesSettings(modules_settings, managed, visible)
  }

  setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts) {
    // Method: SetMostVisitedSettings
    // Call: SetMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts)
  }

  setToolsSettings(visible) {
    // Method: SetToolsSettings
    // Call: SetToolsSettings(visible)
  }

  setFooterSettings(visible, extension_policy_enabled, management_notice_state) {
    // Method: SetFooterSettings
    // Call: SetFooterSettings(visible, extension_policy_enabled, management_notice_state)
  }

  setTheme(theme) {
    // Method: SetTheme
    // Call: SetTheme(theme)
  }

  setThemeEditable(is_theme_editable) {
    // Method: SetThemeEditable
    // Call: SetThemeEditable(is_theme_editable)
  }

  updateScrollToSection() {
    // Method: UpdateScrollToSection
    // Call: UpdateScrollToSection()
  }

  scrollToSection(section) {
    // Method: ScrollToSection
    // Call: ScrollToSection(section)
  }

  attachedTabStateUpdated(ntp_type) {
    // Method: AttachedTabStateUpdated
    // Call: AttachedTabStateUpdated(ntp_type)
  }

  ntpManagedByNameUpdated(name, description) {
    // Method: NtpManagedByNameUpdated
    // Call: NtpManagedByNameUpdated(name, description)
  }

};

side_panel.mojom.CustomizeChromePageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
