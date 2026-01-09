// Auto-generated MojoJS binding
// Source: chromium_src/components/services/patch/public/mojom/file_patcher.mojom
// Module: patch.mojom

'use strict';

// Module namespace
var patch = patch || {};
patch.mojom = patch.mojom || {};


// Enum: ZucchiniStatus
patch.mojom.ZucchiniStatus = {
  kStatusSuccess: 0,
  kStatusInvalidParam: 1,
  kStatusFileReadError: 2,
  kStatusFileWriteError: 3,
  kStatusPatchReadError: 4,
  kStatusPatchWriteError: 5,
  kStatusInvalidOldImage: 6,
  kStatusInvalidNewImage: 7,
  kStatusDiskFull: 8,
  kStatusIoError: 9,
  kStatusFatal: 10,
};

// Interface: FilePatcher
patch.mojom.FilePatcher = {};

patch.mojom.FilePatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

patch.mojom.FilePatcherRemote = class {
  static get $interfaceName() {
    return 'patch.mojom.FilePatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      patch.mojom.FilePatcherPendingReceiver,
      handle);
    this.$ = new patch.mojom.FilePatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

patch.mojom.FilePatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  patchFilePuffPatch(input_file, patch_file, output_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec.$,
      patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec.$,
      [input_file, patch_file, output_file]);
  }

  patchFileZucchini(input_file, patch_file, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec.$,
      patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec.$,
      [input_file, patch_file, output_file]);
  }

};

patch.mojom.FilePatcher.getRemote = function() {
  let remote = new patch.mojom.FilePatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'patch.mojom.FilePatcher',
    'context');
  return remote.$;
};

// ParamsSpec for PatchFilePuffPatch
patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'patch.mojom.FilePatcher.PatchFilePuffPatch_Params',
      packedSize: 32,
      fields: [
        { name: 'input_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'patch_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_file', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'patch.mojom.FilePatcher.PatchFilePuffPatch_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PatchFileZucchini
patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec = {
  $: {
    structSpec: {
      name: 'patch.mojom.FilePatcher.PatchFileZucchini_Params',
      packedSize: 32,
      fields: [
        { name: 'input_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'patch_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_file', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'patch.mojom.FilePatcher.PatchFileZucchini_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
patch.mojom.FilePatcherPtr = patch.mojom.FilePatcherRemote;
patch.mojom.FilePatcherRequest = patch.mojom.FilePatcherPendingReceiver;

