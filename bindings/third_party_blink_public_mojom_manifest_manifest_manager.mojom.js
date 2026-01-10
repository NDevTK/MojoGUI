// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Struct: RequestManifestError
blink.mojom.mojom.RequestManifestErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RequestManifestError',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ManifestRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestErrorSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ManifestManager
blink.mojom.mojom.ManifestManager = {};

blink.mojom.mojom.ManifestManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ManifestManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManifestManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ManifestManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ManifestManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ManifestManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestManifest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ManifestManager_RequestManifest_ParamsSpec,
      blink.mojom.mojom.ManifestManager_RequestManifest_ResponseParamsSpec,
      []);
  }

  requestManifestAndErrors() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec,
      null,
      []);
  }

  requestManifestDebugInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec,
      blink.mojom.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec,
      []);
  }

  parseManifestFromString(document_url, manifest_url, manifest_content) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ManifestManager_ParseManifestFromString_ParamsSpec,
      blink.mojom.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec,
      [document_url, manifest_url, manifest_content]);
  }

};

blink.mojom.mojom.ManifestManager.getRemote = function() {
  let remote = new blink.mojom.mojom.ManifestManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManifestManager',
    'context');
  return remote.$;
};

// ParamsSpec for RequestManifest
blink.mojom.mojom.ManifestManager_RequestManifest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ManifestManager_RequestManifest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ManifestRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'manifest', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ManifestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RequestManifestAndErrors
blink.mojom.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestAndErrors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestManifestDebugInfo
blink.mojom.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestDebugInfo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'parsed_manifest', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ManifestSpec, nullable: false, minVersion: 0 },
        { name: 'debug_info', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ManifestDebugInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ParseManifestFromString
blink.mojom.mojom.ManifestManager_ParseManifestFromString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.ParseManifestFromString_Params',
      packedSize: 32,
      fields: [
        { name: 'document_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'manifest_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'manifest_content', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.ParseManifestFromString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'parsed_manifest', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ManifestSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ManifestManagerPtr = blink.mojom.mojom.ManifestManagerRemote;
blink.mojom.mojom.ManifestManagerRequest = blink.mojom.mojom.ManifestManagerPendingReceiver;

