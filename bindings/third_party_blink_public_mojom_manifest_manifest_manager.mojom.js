// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RequestManifestError
blink.mojom.RequestManifestErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RequestManifestError',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ManifestManager
blink.mojom.ManifestManager = {};

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

// ParamsSpec for RequestManifest
blink.mojom.ManifestManager_RequestManifest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ManifestManager_RequestManifest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'manifest', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestManifestAndErrors
blink.mojom.ManifestManager_RequestManifestAndErrors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestAndErrors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestManifestDebugInfo
blink.mojom.ManifestManager_RequestManifestDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ManifestManager_RequestManifestDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.RequestManifestDebugInfo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'parsed_manifest', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'debug_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ParseManifestFromString
blink.mojom.ManifestManager_ParseManifestFromString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.ParseManifestFromString_Params',
      packedSize: 32,
      fields: [
        { name: 'document_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'manifest_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'manifest_content', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ManifestManager_ParseManifestFromString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestManager.ParseManifestFromString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'parsed_manifest', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ManifestManagerPtr = blink.mojom.ManifestManagerRemote;
blink.mojom.ManifestManagerRequest = blink.mojom.ManifestManagerPendingReceiver;

