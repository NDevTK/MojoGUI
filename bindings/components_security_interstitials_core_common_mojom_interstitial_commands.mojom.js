// Auto-generated MojoJS binding
// Source: chromium_src/components/security_interstitials/core/common/mojom/interstitial_commands.mojom
// Module: security_interstitials.mojom

'use strict';

// Module namespace
var security_interstitials = security_interstitials || {};
security_interstitials.mojom = security_interstitials.mojom || {};


// Interface: InterstitialCommands
security_interstitials.mojom.InterstitialCommandsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'security_interstitials.mojom.InterstitialCommands';
  }

  dontProceed() {
    // Method: DontProceed
    // Call: DontProceed()
  }

  proceed() {
    // Method: Proceed
    // Call: Proceed()
  }

  showMoreSection() {
    // Method: ShowMoreSection
    // Call: ShowMoreSection()
  }

  openHelpCenter() {
    // Method: OpenHelpCenter
    // Call: OpenHelpCenter()
  }

  openDiagnostic() {
    // Method: OpenDiagnostic
    // Call: OpenDiagnostic()
  }

  reload() {
    // Method: Reload
    // Call: Reload()
  }

  openDateSettings() {
    // Method: OpenDateSettings
    // Call: OpenDateSettings()
  }

  openLogin() {
    // Method: OpenLogin
    // Call: OpenLogin()
  }

  doReport() {
    // Method: DoReport
    // Call: DoReport()
  }

  dontReport() {
    // Method: DontReport
    // Call: DontReport()
  }

  openReportingPrivacy() {
    // Method: OpenReportingPrivacy
    // Call: OpenReportingPrivacy()
  }

  openWhitepaper() {
    // Method: OpenWhitepaper
    // Call: OpenWhitepaper()
  }

  openHelpCenterInNewTab() {
    // Method: OpenHelpCenterInNewTab
    // Call: OpenHelpCenterInNewTab()
  }

  openDiagnosticInNewTab() {
    // Method: OpenDiagnosticInNewTab
    // Call: OpenDiagnosticInNewTab()
  }

  openReportingPrivacyInNewTab() {
    // Method: OpenReportingPrivacyInNewTab
    // Call: OpenReportingPrivacyInNewTab()
  }

  openWhitepaperInNewTab() {
    // Method: OpenWhitepaperInNewTab
    // Call: OpenWhitepaperInNewTab()
  }

  reportPhishingErrorInNewTab() {
    // Method: ReportPhishingErrorInNewTab
    // Call: ReportPhishingErrorInNewTab()
  }

  reportPhishingError() {
    // Method: ReportPhishingError
    // Call: ReportPhishingError()
  }

  openEnhancedProtectionSettings() {
    // Method: OpenEnhancedProtectionSettings
    // Call: OpenEnhancedProtectionSettings()
  }

  showCertificateViewer() {
    // Method: ShowCertificateViewer
    // Call: ShowCertificateViewer()
  }

  openAndroidAdvancedProtectionSettings() {
    // Method: OpenAndroidAdvancedProtectionSettings
    // Call: OpenAndroidAdvancedProtectionSettings()
  }

};

security_interstitials.mojom.InterstitialCommandsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
