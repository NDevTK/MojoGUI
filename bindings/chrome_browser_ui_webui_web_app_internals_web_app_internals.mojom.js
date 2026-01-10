// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Union: InstallIsolatedWebAppResult
mojom.InstallIsolatedWebAppResultSpec = { $: mojo.internal.Union(
    'mojom.InstallIsolatedWebAppResult', {
      'success': {
        'ordinal': 0,
        'type': mojom.InstallIsolatedWebAppSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: IwaDevModeLocation
mojom.IwaDevModeLocationSpec = { $: mojo.internal.Union(
    'mojom.IwaDevModeLocation', {
      'proxy_origin': {
        'ordinal': 0,
        'type': url.mojom.OriginSpec,
      }},
      'bundle_path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec,
      }},
    })
};

// Union: ParseUpdateManifestFromUrlResult
mojom.ParseUpdateManifestFromUrlResultSpec = { $: mojo.internal.Union(
    'mojom.ParseUpdateManifestFromUrlResult', {
      'update_manifest': {
        'ordinal': 0,
        'type': mojom.UpdateManifestSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: InstallIsolatedWebAppSuccess
mojom.InstallIsolatedWebAppSuccessSpec = {
  $: {
    structSpec: {
      name: 'mojom.InstallIsolatedWebAppSuccess',
      packedSize: 16,
      fields: [
        { name: 'web_bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UpdateInfo
mojom.UpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.UpdateInfo',
      packedSize: 40,
      fields: [
        { name: 'update_manifest_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'update_channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pinned_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'allow_downgrades', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IwaDevModeAppInfo
mojom.IwaDevModeAppInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.IwaDevModeAppInfo',
      packedSize: 64,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'web_bundle_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 24, packedBitOffset: 0, type: mojom.IwaDevModeLocationSpec, nullable: false, minVersion: 0 },
        { name: 'installed_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_info', packedOffset: 48, packedBitOffset: 0, type: mojom.UpdateInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: VersionEntry
mojom.VersionEntrySpec = {
  $: {
    structSpec: {
      name: 'mojom.VersionEntry',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'web_bundle_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UpdateManifest
mojom.UpdateManifestSpec = {
  $: {
    structSpec: {
      name: 'mojom.UpdateManifest',
      packedSize: 16,
      fields: [
        { name: 'versions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojom.VersionEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InstallFromBundleUrlParams
mojom.InstallFromBundleUrlParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.InstallFromBundleUrlParams',
      packedSize: 24,
      fields: [
        { name: 'web_bundle_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'update_info', packedOffset: 8, packedBitOffset: 0, type: mojom.UpdateInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebAppInternalsHandler
mojom.WebAppInternalsHandler = {};

mojom.WebAppInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.WebAppInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.WebAppInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.WebAppInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.WebAppInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.WebAppInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDebugInfoAsJsonString() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec,
      mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec,
      []);
  }

  installIsolatedWebAppFromDevProxy(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec,
      [url]);
  }

  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      []);
  }

  parseUpdateManifestFromUrl(update_manifest_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec,
      [update_manifest_url]);
  }

  installIsolatedWebAppFromBundleUrl(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec,
      [params]);
  }

  updateDevProxyIsolatedWebApp(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec,
      [app_id]);
  }

  selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [app_id]);
  }

  updateManifestInstalledIsolatedWebApp(app_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec,
      [app_id]);
  }

  deleteIsolatedWebApp(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec,
      [app_id]);
  }

  setUpdateChannelForIsolatedWebApp(app_id, update_channel) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec,
      [app_id, update_channel]);
  }

  setPinnedVersionForIsolatedWebApp(app_id, pinned_version) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec,
      [app_id, pinned_version]);
  }

  resetPinnedVersionForIsolatedWebApp(app_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec,
      null,
      [app_id]);
  }

  setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec,
      null,
      [allow_downgrades, app_id]);
  }

  searchForIsolatedWebAppUpdates() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec,
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec,
      []);
  }

  getIsolatedWebAppDevModeAppInfo() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec,
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec,
      []);
  }

  rotateKey(web_bundle_id, rotated_key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      mojom.WebAppInternalsHandler_RotateKey_ParamsSpec,
      null,
      [web_bundle_id, rotated_key]);
  }

};

mojom.WebAppInternalsHandler.getRemote = function() {
  let remote = new mojom.WebAppInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.WebAppInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDebugInfoAsJsonString
mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetDebugInfoAsJsonString_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetDebugInfoAsJsonString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallIsolatedWebAppFromDevProxy
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromDevProxy_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromDevProxy_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojom.InstallIsolatedWebAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectFileAndInstallIsolatedWebAppFromDevBundle
mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndInstallIsolatedWebAppFromDevBundle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojom.InstallIsolatedWebAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ParseUpdateManifestFromUrl
mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.ParseUpdateManifestFromUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'update_manifest_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.ParseUpdateManifestFromUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojom.ParseUpdateManifestFromUrlResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InstallIsolatedWebAppFromBundleUrl
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromBundleUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojom.InstallFromBundleUrlParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromBundleUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojom.InstallIsolatedWebAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateDevProxyIsolatedWebApp
mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateDevProxyIsolatedWebApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateDevProxyIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectFileAndUpdateIsolatedWebAppFromDevBundle
mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndUpdateIsolatedWebAppFromDevBundle_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateManifestInstalledIsolatedWebApp
mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateManifestInstalledIsolatedWebApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateManifestInstalledIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteIsolatedWebApp
mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.DeleteIsolatedWebApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.DeleteIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUpdateChannelForIsolatedWebApp
mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetUpdateChannelForIsolatedWebApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetUpdateChannelForIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPinnedVersionForIsolatedWebApp
mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetPinnedVersionForIsolatedWebApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pinned_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetPinnedVersionForIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetPinnedVersionForIsolatedWebApp
mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.ResetPinnedVersionForIsolatedWebApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAllowDowngradesForIsolatedWebApp
mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetAllowDowngradesForIsolatedWebApp_Params',
      packedSize: 24,
      fields: [
        { name: 'allow_downgrades', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SearchForIsolatedWebAppUpdates
mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SearchForIsolatedWebAppUpdates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SearchForIsolatedWebAppUpdates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetIsolatedWebAppDevModeAppInfo
mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetIsolatedWebAppDevModeAppInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetIsolatedWebAppDevModeAppInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojom.IwaDevModeAppInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RotateKey
mojom.WebAppInternalsHandler_RotateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.RotateKey_Params',
      packedSize: 24,
      fields: [
        { name: 'web_bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'rotated_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
mojom.WebAppInternalsHandlerPtr = mojom.WebAppInternalsHandlerRemote;
mojom.WebAppInternalsHandlerRequest = mojom.WebAppInternalsHandlerPendingReceiver;

