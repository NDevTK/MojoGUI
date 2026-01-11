// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
// Module: mojom

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
  getDebugInfoAsJsonString() {
    return this.$.getDebugInfoAsJsonString();
  }
  installIsolatedWebAppFromDevProxy(url) {
    return this.$.installIsolatedWebAppFromDevProxy(url);
  }
  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    return this.$.selectFileAndInstallIsolatedWebAppFromDevBundle();
  }
  parseUpdateManifestFromUrl(update_manifest_url) {
    return this.$.parseUpdateManifestFromUrl(update_manifest_url);
  }
  installIsolatedWebAppFromBundleUrl(params) {
    return this.$.installIsolatedWebAppFromBundleUrl(params);
  }
  updateDevProxyIsolatedWebApp(app_id) {
    return this.$.updateDevProxyIsolatedWebApp(app_id);
  }
  selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id) {
    return this.$.selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id);
  }
  updateManifestInstalledIsolatedWebApp(app_id) {
    return this.$.updateManifestInstalledIsolatedWebApp(app_id);
  }
  deleteIsolatedWebApp(app_id) {
    return this.$.deleteIsolatedWebApp(app_id);
  }
  setUpdateChannelForIsolatedWebApp(app_id, update_channel) {
    return this.$.setUpdateChannelForIsolatedWebApp(app_id, update_channel);
  }
  setPinnedVersionForIsolatedWebApp(app_id, pinned_version) {
    return this.$.setPinnedVersionForIsolatedWebApp(app_id, pinned_version);
  }
  resetPinnedVersionForIsolatedWebApp(app_id) {
    return this.$.resetPinnedVersionForIsolatedWebApp(app_id);
  }
  setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id) {
    return this.$.setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id);
  }
  searchForIsolatedWebAppUpdates() {
    return this.$.searchForIsolatedWebAppUpdates();
  }
  getIsolatedWebAppDevModeAppInfo() {
    return this.$.getIsolatedWebAppDevModeAppInfo();
  }
  rotateKey(web_bundle_id, rotated_key) {
    return this.$.rotateKey(web_bundle_id, rotated_key);
  }
};

mojom.WebAppInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebAppInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDebugInfoAsJsonString() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec,
      mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec,
      [],
      false);
  }

  installIsolatedWebAppFromDevProxy(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec,
      [url],
      false);
  }

  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [],
      false);
  }

  parseUpdateManifestFromUrl(update_manifest_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec,
      [update_manifest_url],
      false);
  }

  installIsolatedWebAppFromBundleUrl(params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec,
      mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec,
      [params],
      false);
  }

  updateDevProxyIsolatedWebApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  selectFileAndUpdateIsolatedWebAppFromDevBundle(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec,
      mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [app_id],
      false);
  }

  updateManifestInstalledIsolatedWebApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  deleteIsolatedWebApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  setUpdateChannelForIsolatedWebApp(app_id, update_channel) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec,
      [app_id, update_channel],
      false);
  }

  setPinnedVersionForIsolatedWebApp(app_id, pinned_version) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec,
      mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec,
      [app_id, pinned_version],
      false);
  }

  resetPinnedVersionForIsolatedWebApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setAllowDowngradesForIsolatedWebApp(allow_downgrades, app_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec,
      null,
      [allow_downgrades, app_id],
      false);
  }

  searchForIsolatedWebAppUpdates() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec,
      mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec,
      [],
      false);
  }

  getIsolatedWebAppDevModeAppInfo() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec,
      mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec,
      [],
      false);
  }

  rotateKey(web_bundle_id, rotated_key) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebAppInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.WebAppInternalsHandler_RotateKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec.$.structSpec);
          const result = this.impl.getDebugInfoAsJsonString();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec.$.structSpec);
          const result = this.impl.installIsolatedWebAppFromDevProxy(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec.$.structSpec);
          const result = this.impl.selectFileAndInstallIsolatedWebAppFromDevBundle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec.$.structSpec);
          const result = this.impl.parseUpdateManifestFromUrl(params.update_manifest_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec.$.structSpec);
          const result = this.impl.installIsolatedWebAppFromBundleUrl(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.updateDevProxyIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec.$.structSpec);
          const result = this.impl.selectFileAndUpdateIsolatedWebAppFromDevBundle(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.updateManifestInstalledIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.deleteIsolatedWebApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.setUpdateChannelForIsolatedWebApp(params.app_id, params.update_channel);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.setPinnedVersionForIsolatedWebApp(params.app_id, params.pinned_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.resetPinnedVersionForIsolatedWebApp(params.app_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.setAllowDowngradesForIsolatedWebApp(params.allow_downgrades, params.app_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec.$.structSpec);
          const result = this.impl.searchForIsolatedWebAppUpdates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojom.WebAppInternalsHandler_RotateKey_ParamsSpec.$.structSpec);
          const result = this.impl.rotateKey(params.web_bundle_id, params.rotated_key);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.WebAppInternalsHandlerReceiver = mojom.WebAppInternalsHandlerReceiver;

mojom.WebAppInternalsHandlerPtr = mojom.WebAppInternalsHandlerRemote;
mojom.WebAppInternalsHandlerRequest = mojom.WebAppInternalsHandlerPendingReceiver;

