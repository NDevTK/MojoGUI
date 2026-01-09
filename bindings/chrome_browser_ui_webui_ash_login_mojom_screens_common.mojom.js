// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_common.mojom
// Module: ash.screens_common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_common = ash.screens_common || {};
ash.screens_common.mojom = ash.screens_common.mojom || {};


// Enum: UserCreationFlowType
ash.screens_common.mojom.UserCreationFlowType = {
  kManual: 0,
  kQuickstart: 1,
};

// Enum: GesturePages
ash.screens_common.mojom.GesturePages = {
  kIntro: 0,
  kHome: 1,
  kOverview: 2,
  kBack: 3,
};

// Interface: AiIntroPageHandler
ash.screens_common.mojom.AiIntroPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.AiIntroPageHandler';
  }

  onNextClicked() {
    // Method: OnNextClicked
    // Call: OnNextClicked()
  }

};

ash.screens_common.mojom.AiIntroPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AiIntroPage
ash.screens_common.mojom.AiIntroPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.AiIntroPage';
  }

  setAutoTransition(value) {
    // Method: SetAutoTransition
    // Call: SetAutoTransition(value)
  }

};

ash.screens_common.mojom.AiIntroPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppDownloadingPageHandler
ash.screens_common.mojom.AppDownloadingPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.AppDownloadingPageHandler';
  }

  onContinueClicked() {
    // Method: OnContinueClicked
    // Call: OnContinueClicked()
  }

};

ash.screens_common.mojom.AppDownloadingPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DrivePinningPageHandler
ash.screens_common.mojom.DrivePinningPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.DrivePinningPageHandler';
  }

  onReturnClicked(enable_drive_pinning) {
    // Method: OnReturnClicked
    // Call: OnReturnClicked(enable_drive_pinning)
  }

  onNextClicked(enable_drive_pinning) {
    // Method: OnNextClicked
    // Call: OnNextClicked(enable_drive_pinning)
  }

};

ash.screens_common.mojom.DrivePinningPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DrivePinningPage
ash.screens_common.mojom.DrivePinningPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.DrivePinningPage';
  }

  setRequiredSpaceInfo(required_space, free_space) {
    // Method: SetRequiredSpaceInfo
    // Call: SetRequiredSpaceInfo(required_space, free_space)
  }

};

ash.screens_common.mojom.DrivePinningPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FjordStationSetupPageHandler
ash.screens_common.mojom.FjordStationSetupPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.FjordStationSetupPageHandler';
  }

  onSetupComplete() {
    // Method: OnSetupComplete
    // Call: OnSetupComplete()
  }

};

ash.screens_common.mojom.FjordStationSetupPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GaiaInfoPageHandler
ash.screens_common.mojom.GaiaInfoPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.GaiaInfoPageHandler';
  }

  onBackClicked() {
    // Method: OnBackClicked
    // Call: OnBackClicked()
  }

  onNextClicked(user_flow) {
    // Method: OnNextClicked
    // Call: OnNextClicked(user_flow)
  }

};

ash.screens_common.mojom.GaiaInfoPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GaiaInfoPage
ash.screens_common.mojom.GaiaInfoPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.GaiaInfoPage';
  }

  setQuickStartVisible() {
    // Method: SetQuickStartVisible
    // Call: SetQuickStartVisible()
  }

};

ash.screens_common.mojom.GaiaInfoPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GestureNavigationPageHandler
ash.screens_common.mojom.GestureNavigationPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.GestureNavigationPageHandler';
  }

  onPageChange(page) {
    // Method: OnPageChange
    // Call: OnPageChange(page)
  }

  onSkipClicked() {
    // Method: OnSkipClicked
    // Call: OnSkipClicked()
  }

  onExitClicked() {
    // Method: OnExitClicked
    // Call: OnExitClicked()
  }

};

ash.screens_common.mojom.GestureNavigationPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GeminiIntroPageHandler
ash.screens_common.mojom.GeminiIntroPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_common.mojom.GeminiIntroPageHandler';
  }

  onBackClicked() {
    // Method: OnBackClicked
    // Call: OnBackClicked()
  }

  onNextClicked() {
    // Method: OnNextClicked
    // Call: OnNextClicked()
  }

};

ash.screens_common.mojom.GeminiIntroPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
