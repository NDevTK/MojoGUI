// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var url = url || {};
var url = url || {};

mojom.InstallIsolatedWebAppResultSpec = { $: {} };
mojom.IwaDevModeLocationSpec = { $: {} };
mojom.ParseUpdateManifestFromUrlResultSpec = { $: {} };
mojom.InstallIsolatedWebAppSuccessSpec = { $: {} };
mojom.UpdateInfoSpec = { $: {} };
mojom.IwaDevModeAppInfoSpec = { $: {} };
mojom.VersionEntrySpec = { $: {} };
mojom.UpdateManifestSpec = { $: {} };
mojom.InstallFromBundleUrlParamsSpec = { $: {} };
mojom.WebAppInternalsHandler = {};
mojom.WebAppInternalsHandler.$interfaceName = 'mojom.WebAppInternalsHandler';
mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec = { $: {} };
mojom.WebAppInternalsHandler_RotateKey_ParamsSpec = { $: {} };

// Union: InstallIsolatedWebAppResult
mojo.internal.Union(
    mojom.InstallIsolatedWebAppResultSpec, 'mojom.InstallIsolatedWebAppResult', {
      'success': {
        'ordinal': 0,
        'type': mojom.InstallIsolatedWebAppSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: IwaDevModeLocation
mojo.internal.Union(
    mojom.IwaDevModeLocationSpec, 'mojom.IwaDevModeLocation', {
      'proxy_origin': {
        'ordinal': 0,
        'type': url.mojom.OriginSpec.$,
        'nullable': false,
      },
      'bundle_path': {
        'ordinal': 1,
        'type': mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
    });

// Union: ParseUpdateManifestFromUrlResult
mojo.internal.Union(
    mojom.ParseUpdateManifestFromUrlResultSpec, 'mojom.ParseUpdateManifestFromUrlResult', {
      'update_manifest': {
        'ordinal': 0,
        'type': mojom.UpdateManifestSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: InstallIsolatedWebAppSuccess
mojo.internal.Struct(
    mojom.InstallIsolatedWebAppSuccessSpec, 'mojom.InstallIsolatedWebAppSuccess', [
      mojo.internal.StructField('web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UpdateInfo
mojo.internal.Struct(
    mojom.UpdateInfoSpec, 'mojom.UpdateInfo', [
      mojo.internal.StructField('update_manifest_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_channel', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pinned_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allow_downgrades', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IwaDevModeAppInfo
mojo.internal.Struct(
    mojom.IwaDevModeAppInfoSpec, 'mojom.IwaDevModeAppInfo', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('web_bundle_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('location', 24, 0, mojom.IwaDevModeLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('installed_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_info', 40, 0, mojom.UpdateInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VersionEntry
mojo.internal.Struct(
    mojom.VersionEntrySpec, 'mojom.VersionEntry', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('web_bundle_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpdateManifest
mojo.internal.Struct(
    mojom.UpdateManifestSpec, 'mojom.UpdateManifest', [
      mojo.internal.StructField('versions', 0, 0, mojo.internal.Array(mojom.VersionEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InstallFromBundleUrlParams
mojo.internal.Struct(
    mojom.InstallFromBundleUrlParamsSpec, 'mojom.InstallFromBundleUrlParams', [
      mojo.internal.StructField('web_bundle_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_info', 8, 0, mojom.UpdateInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebAppInternalsHandler
mojo.internal.Struct(
    mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec, 'mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec, 'mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_Params', [
      mojo.internal.StructField('update_manifest_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojom.ParseUpdateManifestFromUrlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_Params', [
      mojo.internal.StructField('params', 0, 0, mojom.InstallFromBundleUrlParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_channel', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pinned_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_Params', [
      mojo.internal.StructField('allow_downgrades', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec, 'mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec, 'mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(mojom.IwaDevModeAppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.WebAppInternalsHandler_RotateKey_ParamsSpec, 'mojom.WebAppInternalsHandler_RotateKey_Params', [
      mojo.internal.StructField('web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rotated_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  installIsolatedWebAppFromDevProxy(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec,
      [url],
      false);
  }

  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [],
      false);
  }

  parseUpdateManifestFromUrl(update_manifest_url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec,
      [update_manifest_url],
      false);
  }

  installIsolatedWebAppFromBundleUrl(params) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec,
      [params],
      false);
  }

  updateDevProxyIsolatedWebApp(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [app_id],
      false);
  }

  updateManifestInstalledIsolatedWebApp(app_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  deleteIsolatedWebApp(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  setUpdateChannelForIsolatedWebApp(app_id, update_channel) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec,
      [app_id, update_channel],
      false);
  }

  setPinnedVersionForIsolatedWebApp(app_id, pinned_version) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec,
      [app_id, pinned_version],
      false);
  }

  resetPinnedVersionForIsolatedWebApp(app_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec,
      null,
      [allow_downgrades, app_id],
      false);
  }

  searchForIsolatedWebAppUpdates() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec,
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec,
      [],
      false);
  }

  getIsolatedWebAppDevModeAppInfo() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec,
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec,
      [],
      false);
  }

  rotateKey(web_bundle_id, rotated_key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      mojom.WebAppInternalsHandler_RotateKey_ParamsSpec,
      null,
      [web_bundle_id, rotated_key],
      false);
  }

};

mojom.WebAppInternalsHandler.getRemote = function() {
  let remote = new mojom.WebAppInternalsHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'mojom.WebAppInternalsHandler',
    'context');
  return remote.$;
};

mojom.WebAppInternalsHandlerPtr = mojom.WebAppInternalsHandlerRemote;
mojom.WebAppInternalsHandlerRequest = mojom.WebAppInternalsHandlerPendingReceiver;

