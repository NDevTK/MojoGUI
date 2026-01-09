// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


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
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetDebugInfoAsJsonString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromDevProxy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'update_manifest_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.ParseUpdateManifestFromUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.InstallIsolatedWebAppFromBundleUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateDevProxyIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.UpdateManifestInstalledIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.DeleteIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'update_channel', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetUpdateChannelForIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pinned_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SetPinnedVersionForIsolatedWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'allow_downgrades', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.SearchForIsolatedWebAppUpdates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebAppInternalsHandler.GetIsolatedWebAppDevModeAppInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'web_bundle_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'rotated_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.WebAppInternalsHandlerPtr = mojom.WebAppInternalsHandlerRemote;
mojom.WebAppInternalsHandlerRequest = mojom.WebAppInternalsHandlerPendingReceiver;

