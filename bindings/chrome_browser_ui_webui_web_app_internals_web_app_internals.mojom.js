// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Struct: InstallIsolatedWebAppSuccess
mojom.InstallIsolatedWebAppSuccess = class {
  constructor(values = {}) {
    this.web_bundle_id = values.web_bundle_id !== undefined ? values.web_bundle_id : "";
  }
};

// Struct: UpdateInfo
mojom.UpdateInfo = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: IwaDevModeAppInfo
mojom.IwaDevModeAppInfo = class {
  constructor(values = {}) {
    this.update_info = values.update_info !== undefined ? values.update_info : "";
  }
};

// Struct: VersionEntry
mojom.VersionEntry = class {
  constructor(values = {}) {
    this.web_bundle_url = values.web_bundle_url !== undefined ? values.web_bundle_url : "";
  }
};

// Struct: UpdateManifest
mojom.UpdateManifest = class {
  constructor(values = {}) {
    this.versions = values.versions !== undefined ? values.versions : [];
  }
};

// Struct: InstallFromBundleUrlParams
mojom.InstallFromBundleUrlParams = class {
  constructor(values = {}) {
    this.update_info = values.update_info !== undefined ? values.update_info : null;
  }
};

// Interface: WebAppInternalsHandler
mojom.WebAppInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.WebAppInternalsHandler';
  }

  getDebugInfoAsJsonString() {
    // Method: GetDebugInfoAsJsonString
    return new Promise((resolve) => {
      // Call: GetDebugInfoAsJsonString()
      resolve({});
    });
  }

  installIsolatedWebAppFromDevProxy(url) {
    // Method: InstallIsolatedWebAppFromDevProxy
    return new Promise((resolve) => {
      // Call: InstallIsolatedWebAppFromDevProxy(url)
      resolve({});
    });
  }

  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    // Method: SelectFileAndInstallIsolatedWebAppFromDevBundle
    return new Promise((resolve) => {
      // Call: SelectFileAndInstallIsolatedWebAppFromDevBundle()
      resolve({});
    });
  }

  parseUpdateManifestFromUrl(update_manifest_url) {
    // Method: ParseUpdateManifestFromUrl
    return new Promise((resolve) => {
      // Call: ParseUpdateManifestFromUrl(update_manifest_url)
      resolve({});
    });
  }

  installIsolatedWebAppFromBundleUrl(params) {
    // Method: InstallIsolatedWebAppFromBundleUrl
    return new Promise((resolve) => {
      // Call: InstallIsolatedWebAppFromBundleUrl(params)
      resolve({});
    });
  }

  updateDevProxyIsolatedWebApp(app_id) {
    // Method: UpdateDevProxyIsolatedWebApp
    return new Promise((resolve) => {
      // Call: UpdateDevProxyIsolatedWebApp(app_id)
      resolve({});
    });
  }

  selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id) {
    // Method: SelectFileAndUpdateIsolatedWebAppFromDevBundle
    return new Promise((resolve) => {
      // Call: SelectFileAndUpdateIsolatedWebAppFromDevBundle(app_id)
      resolve({});
    });
  }

  updateManifestInstalledIsolatedWebApp(app_id) {
    // Method: UpdateManifestInstalledIsolatedWebApp
    return new Promise((resolve) => {
      // Call: UpdateManifestInstalledIsolatedWebApp(app_id)
      resolve({});
    });
  }

  deleteIsolatedWebApp(app_id) {
    // Method: DeleteIsolatedWebApp
    return new Promise((resolve) => {
      // Call: DeleteIsolatedWebApp(app_id)
      resolve({});
    });
  }

  setUpdateChannelForIsolatedWebApp(app_id, update_channel) {
    // Method: SetUpdateChannelForIsolatedWebApp
    return new Promise((resolve) => {
      // Call: SetUpdateChannelForIsolatedWebApp(app_id, update_channel)
      resolve({});
    });
  }

  setPinnedVersionForIsolatedWebApp(app_id, pinned_version) {
    // Method: SetPinnedVersionForIsolatedWebApp
    return new Promise((resolve) => {
      // Call: SetPinnedVersionForIsolatedWebApp(app_id, pinned_version)
      resolve({});
    });
  }

  resetPinnedVersionForIsolatedWebApp(app_id) {
    // Method: ResetPinnedVersionForIsolatedWebApp
    // Call: ResetPinnedVersionForIsolatedWebApp(app_id)
  }

  setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id) {
    // Method: SetAllowDowngradesForIsolatedWebApp
    // Call: SetAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id)
  }

  searchForIsolatedWebAppUpdates() {
    // Method: SearchForIsolatedWebAppUpdates
    return new Promise((resolve) => {
      // Call: SearchForIsolatedWebAppUpdates()
      resolve({});
    });
  }

  getIsolatedWebAppDevModeAppInfo() {
    // Method: GetIsolatedWebAppDevModeAppInfo
    return new Promise((resolve) => {
      // Call: GetIsolatedWebAppDevModeAppInfo()
      resolve({});
    });
  }

  rotateKey(web_bundle_id, rotated_key) {
    // Method: RotateKey
    // Call: RotateKey(web_bundle_id, rotated_key)
  }

};

mojom.WebAppInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
