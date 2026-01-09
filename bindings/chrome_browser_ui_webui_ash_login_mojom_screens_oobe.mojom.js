// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_oobe.mojom
// Module: ash.screens_oobe.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_oobe = ash.screens_oobe || {};
ash.screens_oobe.mojom = ash.screens_oobe.mojom || {};


// Enum: ConsumerUpdateStep
ash.screens_oobe.mojom.ConsumerUpdateStep = {
  kCheckingForUpdate: 0,
  kUpdateInProgress: 1,
  kRestartInProgress: 2,
  kManualReboot: 3,
  kCellularPermission: 4,
};

// Interface: ConsumerUpdatePageHandler
ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler';
  }

  onDeclineCellularClicked() {
    // Method: OnDeclineCellularClicked
    // Call: OnDeclineCellularClicked()
  }

  onAcceptCellularClicked() {
    // Method: OnAcceptCellularClicked
    // Call: OnAcceptCellularClicked()
  }

  onSkipClicked() {
    // Method: OnSkipClicked
    // Call: OnSkipClicked()
  }

  onBackClicked() {
    // Method: OnBackClicked
    // Call: OnBackClicked()
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConsumerUpdatePage
ash.screens_oobe.mojom.ConsumerUpdatePagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_oobe.mojom.ConsumerUpdatePage';
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PackagedLicensePageHandler
ash.screens_oobe.mojom.PackagedLicensePageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_oobe.mojom.PackagedLicensePageHandler';
  }

  onDontEnrollClicked() {
    // Method: OnDontEnrollClicked
    // Call: OnDontEnrollClicked()
  }

  onEnrollClicked() {
    // Method: OnEnrollClicked
    // Call: OnEnrollClicked()
  }

};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
