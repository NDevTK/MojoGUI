// Auto-generated MojoJS binding
// Source: chromium_src/components/services/unzip/public/mojom/unzipper.mojom
// Module: unzip.mojom

'use strict';

// Module namespace
var unzip = unzip || {};
unzip.mojom = unzip.mojom || {};


// Struct: UnzipOptions
unzip.mojom.UnzipOptionsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipOptions',
      packedSize: 24,
      fields: [
        { name: 'encoding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Info
unzip.mojom.InfoSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Info',
      packedSize: 24,
      fields: [
        { name: 'size_is_valid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'is_encrypted', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uses_aes_encryption', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: UnzipFilter
unzip.mojom.UnzipFilter = {};

unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipFilter_ShouldUnzipFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.UnzipFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipFilterRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipFilterPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shouldUnzipFile(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec,
      unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec,
      [path]);
  }

};

unzip.mojom.UnzipFilter.getRemote = function() {
  let remote = new unzip.mojom.UnzipFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipFilter',
    'context');
  return remote.$;
};

// ParamsSpec for ShouldUnzipFile
unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipFilter.ShouldUnzipFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipFilter.ShouldUnzipFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
unzip.mojom.UnzipFilterPtr = unzip.mojom.UnzipFilterRemote;
unzip.mojom.UnzipFilterRequest = unzip.mojom.UnzipFilterPendingReceiver;


// Interface: UnzipListener
unzip.mojom.UnzipListener = {};

unzip.mojom.UnzipListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipListener_OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.UnzipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipListenerRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipListenerPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.UnzipListener_OnProgress_ParamsSpec,
      null,
      [bytes]);
  }

};

unzip.mojom.UnzipListener.getRemote = function() {
  let remote = new unzip.mojom.UnzipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
unzip.mojom.UnzipListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.UnzipListener.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
unzip.mojom.UnzipListenerPtr = unzip.mojom.UnzipListenerRemote;
unzip.mojom.UnzipListenerRequest = unzip.mojom.UnzipListenerPendingReceiver;


// Interface: Unzipper
unzip.mojom.Unzipper = {};

unzip.mojom.Unzipper_Unzip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper_Unzip_Params',
      packedSize: 48,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'output_dir', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: unzip.mojom.UnzipOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(unzip.mojom.UnzipFilterRemote), nullable: true, minVersion: 0 },
        { name: 'listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(unzip.mojom.UnzipListenerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

unzip.mojom.Unzipper_DetectEncoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper_DetectEncoding_Params',
      packedSize: 16,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper_GetExtractedInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.Unzipper_DecodeXz_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper_DecodeXz_Params',
      packedSize: 24,
      fields: [
        { name: 'in_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'out_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

unzip.mojom.UnzipperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.UnzipperRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.Unzipper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.UnzipperPendingReceiver,
      handle);
    this.$ = new unzip.mojom.UnzipperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.UnzipperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unzip(zip_file, output_dir, options, filter, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.Unzipper_Unzip_ParamsSpec,
      unzip.mojom.Unzipper_Unzip_ResponseParamsSpec,
      [zip_file, output_dir, options, filter, listener]);
  }

  detectEncoding(zip_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unzip.mojom.Unzipper_DetectEncoding_ParamsSpec,
      unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec,
      [zip_file]);
  }

  getExtractedInfo(zip_file) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec,
      unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec,
      [zip_file]);
  }

  decodeXz(in_file, out_file) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      unzip.mojom.Unzipper_DecodeXz_ParamsSpec,
      unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec,
      [in_file, out_file]);
  }

};

unzip.mojom.Unzipper.getRemote = function() {
  let remote = new unzip.mojom.UnzipperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.Unzipper',
    'context');
  return remote.$;
};

// ParamsSpec for Unzip
unzip.mojom.Unzipper_Unzip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.Unzip_Params',
      packedSize: 48,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'output_dir', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: unzip.mojom.UnzipOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(unzip.mojom.UnzipFilterRemote), nullable: true, minVersion: 0 },
        { name: 'listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(unzip.mojom.UnzipListenerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

unzip.mojom.Unzipper_Unzip_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.Unzip_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DetectEncoding
unzip.mojom.Unzipper_DetectEncoding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.DetectEncoding_Params',
      packedSize: 16,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.DetectEncoding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'encoding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetExtractedInfo
unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.GetExtractedInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.GetExtractedInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: unzip.mojom.InfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecodeXz
unzip.mojom.Unzipper_DecodeXz_ParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.DecodeXz_Params',
      packedSize: 24,
      fields: [
        { name: 'in_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'out_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'unzip.mojom.Unzipper.DecodeXz_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
unzip.mojom.UnzipperPtr = unzip.mojom.UnzipperRemote;
unzip.mojom.UnzipperRequest = unzip.mojom.UnzipperPendingReceiver;

