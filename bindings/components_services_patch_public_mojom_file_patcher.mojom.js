// Auto-generated MojoJS binding
// Source: chromium_src/components/services/patch/public/mojom/file_patcher.mojom
// Module: patch.mojom

'use strict';

// Module namespace
var patch = patch || {};
patch.mojom = patch.mojom || {};

patch.mojom.ZucchiniStatusSpec = { $: mojo.internal.Enum() };
patch.mojom.FilePatcher = {};
patch.mojom.FilePatcher.$interfaceName = 'patch.mojom.FilePatcher';
patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec, 'patch.mojom.FilePatcher_PatchFilePuffPatch_Params', [
      mojo.internal.StructField('input_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec, null, false, 0, undefined),
      mojo.internal.StructField('patch_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 16, 0, mojo_base.mojom.FileSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec, 'patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec, 'patch.mojom.FilePatcher_PatchFileZucchini_Params', [
      mojo.internal.StructField('input_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec, null, false, 0, undefined),
      mojo.internal.StructField('patch_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 16, 0, mojo_base.mojom.FileSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec, 'patch.mojom.FilePatcher_PatchFileZucchini_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, patch.mojom.ZucchiniStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec,
      patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec,
      [input_file, patch_file, output_file]);
  }

  patchFileZucchini(input_file, patch_file, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec,
      patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec,
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

patch.mojom.FilePatcherPtr = patch.mojom.FilePatcherRemote;
patch.mojom.FilePatcherRequest = patch.mojom.FilePatcherPendingReceiver;

