// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allow_downgrades', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.WebAppInternalsHandler',
    'context');
  return remote.$;
};

mojom.WebAppInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDebugInfoAsJsonString
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfoAsJsonString (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: InstallIsolatedWebAppFromDevProxy
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallIsolatedWebAppFromDevProxy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SelectFileAndInstallIsolatedWebAppFromDevBundle
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFileAndInstallIsolatedWebAppFromDevBundle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ParseUpdateManifestFromUrl
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseUpdateManifestFromUrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: InstallIsolatedWebAppFromBundleUrl
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallIsolatedWebAppFromBundleUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: UpdateDevProxyIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDevProxyIsolatedWebApp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: SelectFileAndUpdateIsolatedWebAppFromDevBundle
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFileAndUpdateIsolatedWebAppFromDevBundle (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: UpdateManifestInstalledIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateManifestInstalledIsolatedWebApp (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: DeleteIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteIsolatedWebApp (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: SetUpdateChannelForIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpdateChannelForIsolatedWebApp (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: SetPinnedVersionForIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPinnedVersionForIsolatedWebApp (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: ResetPinnedVersionForIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetPinnedVersionForIsolatedWebApp (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: SetAllowDowngradesForIsolatedWebApp
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowDowngradesForIsolatedWebApp (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: SearchForIsolatedWebAppUpdates
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchForIsolatedWebAppUpdates (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: GetIsolatedWebAppDevModeAppInfo
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsolatedWebAppDevModeAppInfo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: RotateKey
        try {
             decoder.decodeStruct(mojom.WebAppInternalsHandler_RotateKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RotateKey (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfoAsJsonString');
          const result = this.impl.getDebugInfoAsJsonString();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installIsolatedWebAppFromDevProxy');
          const result = this.impl.installIsolatedWebAppFromDevProxy(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectFileAndInstallIsolatedWebAppFromDevBundle');
          const result = this.impl.selectFileAndInstallIsolatedWebAppFromDevBundle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseUpdateManifestFromUrl');
          const result = this.impl.parseUpdateManifestFromUrl(params.update_manifest_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installIsolatedWebAppFromBundleUrl');
          const result = this.impl.installIsolatedWebAppFromBundleUrl(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateDevProxyIsolatedWebApp');
          const result = this.impl.updateDevProxyIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectFileAndUpdateIsolatedWebAppFromDevBundle');
          const result = this.impl.selectFileAndUpdateIsolatedWebAppFromDevBundle(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateManifestInstalledIsolatedWebApp');
          const result = this.impl.updateManifestInstalledIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteIsolatedWebApp');
          const result = this.impl.deleteIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUpdateChannelForIsolatedWebApp');
          const result = this.impl.setUpdateChannelForIsolatedWebApp(params.app_id, params.update_channel);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPinnedVersionForIsolatedWebApp');
          const result = this.impl.setPinnedVersionForIsolatedWebApp(params.app_id, params.pinned_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetPinnedVersionForIsolatedWebApp');
          const result = this.impl.resetPinnedVersionForIsolatedWebApp(params.app_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAllowDowngradesForIsolatedWebApp');
          const result = this.impl.setAllowDowngradesForIsolatedWebApp(params.allow_downgrades, params.app_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.searchForIsolatedWebAppUpdates');
          const result = this.impl.searchForIsolatedWebAppUpdates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getIsolatedWebAppDevModeAppInfo');
          const result = this.impl.getIsolatedWebAppDevModeAppInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(mojom.WebAppInternalsHandler_RotateKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rotateKey');
          const result = this.impl.rotateKey(params.web_bundle_id, params.rotated_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.WebAppInternalsHandlerReceiver = mojom.WebAppInternalsHandlerReceiver;

mojom.WebAppInternalsHandlerPtr = mojom.WebAppInternalsHandlerRemote;
mojom.WebAppInternalsHandlerRequest = mojom.WebAppInternalsHandlerPendingReceiver;

