// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};

blink.mojom.RequestManifestErrorSpec = { $: {} };
blink.mojom.ManifestManager = {};
blink.mojom.ManifestManager.$interfaceName = 'blink.mojom.ManifestManager';
blink.mojom.ManifestManager_RequestManifest_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec = { $: {} };
blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec = { $: {} };
blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec = { $: {} };

// Struct: RequestManifestError
mojo.internal.Struct(
    blink.mojom.RequestManifestErrorSpec, 'blink.mojom.RequestManifestError', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.ManifestRequestResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(blink.mojom.ManifestErrorSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ManifestManager
mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifest_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec, 'blink.mojom.ManifestManager_RequestManifest_ResponseParams', [
      mojo.internal.StructField('result', 16, 0, blink.mojom.ManifestRequestResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('manifest', 8, 0, blink.mojom.ManifestSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifestAndErrors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec, 'blink.mojom.ManifestManager_RequestManifestDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec, 'blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('parsed_manifest', 8, 0, blink.mojom.ManifestSpec, null, false, 0, undefined),
      mojo.internal.StructField('debug_info', 16, 0, blink.mojom.ManifestDebugInfoSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec, 'blink.mojom.ManifestManager_ParseManifestFromString_Params', [
      mojo.internal.StructField('document_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('manifest_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('manifest_content', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec, 'blink.mojom.ManifestManager_ParseManifestFromString_ResponseParams', [
      mojo.internal.StructField('parsed_manifest', 0, 0, blink.mojom.ManifestSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ManifestManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManifestManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManifestManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManifestManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManifestManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManifestManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestManifest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManifestManager_RequestManifest_ParamsSpec,
      blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec,
      []);
  }

  requestManifestAndErrors() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec,
      null,
      []);
  }

  requestManifestDebugInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec,
      blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec,
      []);
  }

  parseManifestFromString(document_url, manifest_url, manifest_content) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec,
      blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec,
      [document_url, manifest_url, manifest_content]);
  }

};

blink.mojom.ManifestManager.getRemote = function() {
  let remote = new blink.mojom.ManifestManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManifestManager',
    'context');
  return remote.$;
};

blink.mojom.ManifestManagerPtr = blink.mojom.ManifestManagerRemote;
blink.mojom.ManifestManagerRequest = blink.mojom.ManifestManagerPendingReceiver;

