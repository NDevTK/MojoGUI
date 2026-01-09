// Auto-generated MojoJS binding
// Source: chromium_src/components/security_interstitials/core/common/mojom/interstitial_commands.mojom
// Module: security_interstitials.mojom

'use strict';

// Module namespace
var security_interstitials = security_interstitials || {};
security_interstitials.mojom = security_interstitials.mojom || {};


// Interface: InterstitialCommands
security_interstitials.mojom.InterstitialCommands = {};

security_interstitials.mojom.InterstitialCommandsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

security_interstitials.mojom.InterstitialCommandsRemote = class {
  static get $interfaceName() {
    return 'security_interstitials.mojom.InterstitialCommands';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      security_interstitials.mojom.InterstitialCommandsPendingReceiver,
      handle);
    this.$ = new security_interstitials.mojom.InterstitialCommandsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

security_interstitials.mojom.InterstitialCommandsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dontProceed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec.$,
      null,
      []);
  }

  proceed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec.$,
      null,
      []);
  }

  showMoreSection() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec.$,
      null,
      []);
  }

  openHelpCenter() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec.$,
      null,
      []);
  }

  openDiagnostic() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec.$,
      null,
      []);
  }

  reload() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec.$,
      null,
      []);
  }

  openDateSettings() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec.$,
      null,
      []);
  }

  openLogin() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec.$,
      null,
      []);
  }

  doReport() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec.$,
      null,
      []);
  }

  dontReport() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec.$,
      null,
      []);
  }

  openReportingPrivacy() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec.$,
      null,
      []);
  }

  openWhitepaper() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec.$,
      null,
      []);
  }

  openHelpCenterInNewTab() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec.$,
      null,
      []);
  }

  openDiagnosticInNewTab() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec.$,
      null,
      []);
  }

  openReportingPrivacyInNewTab() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec.$,
      null,
      []);
  }

  openWhitepaperInNewTab() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec.$,
      null,
      []);
  }

  reportPhishingErrorInNewTab() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec.$,
      null,
      []);
  }

  reportPhishingError() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec.$,
      null,
      []);
  }

  openEnhancedProtectionSettings() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec.$,
      null,
      []);
  }

  showCertificateViewer() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec.$,
      null,
      []);
  }

  openAndroidAdvancedProtectionSettings() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec.$,
      null,
      []);
  }

};

security_interstitials.mojom.InterstitialCommands.getRemote = function() {
  let remote = new security_interstitials.mojom.InterstitialCommandsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'security_interstitials.mojom.InterstitialCommands',
    'context');
  return remote.$;
};

// ParamsSpec for DontProceed
security_interstitials.mojom.InterstitialCommands_DontProceed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.DontProceed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Proceed
security_interstitials.mojom.InterstitialCommands_Proceed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.Proceed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowMoreSection
security_interstitials.mojom.InterstitialCommands_ShowMoreSection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.ShowMoreSection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenHelpCenter
security_interstitials.mojom.InterstitialCommands_OpenHelpCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenHelpCenter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenDiagnostic
security_interstitials.mojom.InterstitialCommands_OpenDiagnostic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenDiagnostic_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reload
security_interstitials.mojom.InterstitialCommands_Reload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.Reload_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenDateSettings
security_interstitials.mojom.InterstitialCommands_OpenDateSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenDateSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenLogin
security_interstitials.mojom.InterstitialCommands_OpenLogin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenLogin_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DoReport
security_interstitials.mojom.InterstitialCommands_DoReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.DoReport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DontReport
security_interstitials.mojom.InterstitialCommands_DontReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.DontReport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenReportingPrivacy
security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenReportingPrivacy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenWhitepaper
security_interstitials.mojom.InterstitialCommands_OpenWhitepaper_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenWhitepaper_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenHelpCenterInNewTab
security_interstitials.mojom.InterstitialCommands_OpenHelpCenterInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenHelpCenterInNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenDiagnosticInNewTab
security_interstitials.mojom.InterstitialCommands_OpenDiagnosticInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenDiagnosticInNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenReportingPrivacyInNewTab
security_interstitials.mojom.InterstitialCommands_OpenReportingPrivacyInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenReportingPrivacyInNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenWhitepaperInNewTab
security_interstitials.mojom.InterstitialCommands_OpenWhitepaperInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenWhitepaperInNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportPhishingErrorInNewTab
security_interstitials.mojom.InterstitialCommands_ReportPhishingErrorInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.ReportPhishingErrorInNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportPhishingError
security_interstitials.mojom.InterstitialCommands_ReportPhishingError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.ReportPhishingError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenEnhancedProtectionSettings
security_interstitials.mojom.InterstitialCommands_OpenEnhancedProtectionSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenEnhancedProtectionSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowCertificateViewer
security_interstitials.mojom.InterstitialCommands_ShowCertificateViewer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.ShowCertificateViewer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenAndroidAdvancedProtectionSettings
security_interstitials.mojom.InterstitialCommands_OpenAndroidAdvancedProtectionSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'security_interstitials.mojom.InterstitialCommands.OpenAndroidAdvancedProtectionSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
security_interstitials.mojom.InterstitialCommandsPtr = security_interstitials.mojom.InterstitialCommandsRemote;
security_interstitials.mojom.InterstitialCommandsRequest = security_interstitials.mojom.InterstitialCommandsPendingReceiver;

