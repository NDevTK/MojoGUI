// Auto-generated MojoJS binding
// Source: chromium_src/components/services/unzip/public/mojom/unzipper.mojom
// Module: unzip.mojom

'use strict';

// Module namespace
var unzip = unzip || {};
unzip.mojom = unzip.mojom || {};


// Struct: UnzipOptions
unzip.mojom.mojom.UnzipOptionsSpec = {
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
unzip.mojom.mojom.InfoSpec = {
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
unzip.mojom.mojom.UnzipFilter = {};

unzip.mojom.mojom.UnzipFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.mojom.UnzipFilterRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.mojom.UnzipFilterPendingReceiver,
      handle);
    this.$ = new unzip.mojom.mojom.UnzipFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.mojom.UnzipFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shouldUnzipFile(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec,
      unzip.mojom.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec,
      [path]);
  }

};

unzip.mojom.mojom.UnzipFilter.getRemote = function() {
  let remote = new unzip.mojom.mojom.UnzipFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipFilter',
    'context');
  return remote.$;
};

// ParamsSpec for ShouldUnzipFile
unzip.mojom.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec = {
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

unzip.mojom.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec = {
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
unzip.mojom.mojom.UnzipFilterPtr = unzip.mojom.mojom.UnzipFilterRemote;
unzip.mojom.mojom.UnzipFilterRequest = unzip.mojom.mojom.UnzipFilterPendingReceiver;


// Interface: UnzipListener
unzip.mojom.mojom.UnzipListener = {};

unzip.mojom.mojom.UnzipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.mojom.UnzipListenerRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.UnzipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.mojom.UnzipListenerPendingReceiver,
      handle);
    this.$ = new unzip.mojom.mojom.UnzipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.mojom.UnzipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.mojom.UnzipListener_OnProgress_ParamsSpec,
      null,
      [bytes]);
  }

};

unzip.mojom.mojom.UnzipListener.getRemote = function() {
  let remote = new unzip.mojom.mojom.UnzipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.UnzipListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
unzip.mojom.mojom.UnzipListener_OnProgress_ParamsSpec = {
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
unzip.mojom.mojom.UnzipListenerPtr = unzip.mojom.mojom.UnzipListenerRemote;
unzip.mojom.mojom.UnzipListenerRequest = unzip.mojom.mojom.UnzipListenerPendingReceiver;


// Interface: Unzipper
unzip.mojom.mojom.Unzipper = {};

unzip.mojom.mojom.UnzipperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unzip.mojom.mojom.UnzipperRemote = class {
  static get $interfaceName() {
    return 'unzip.mojom.Unzipper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unzip.mojom.mojom.UnzipperPendingReceiver,
      handle);
    this.$ = new unzip.mojom.mojom.UnzipperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unzip.mojom.mojom.UnzipperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unzip(zip_file, output_dir, options, filter, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unzip.mojom.mojom.Unzipper_Unzip_ParamsSpec,
      unzip.mojom.mojom.Unzipper_Unzip_ResponseParamsSpec,
      [zip_file, output_dir, options, filter, listener]);
  }

  detectEncoding(zip_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unzip.mojom.mojom.Unzipper_DetectEncoding_ParamsSpec,
      unzip.mojom.mojom.Unzipper_DetectEncoding_ResponseParamsSpec,
      [zip_file]);
  }

  getExtractedInfo(zip_file) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      unzip.mojom.mojom.Unzipper_GetExtractedInfo_ParamsSpec,
      unzip.mojom.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec,
      [zip_file]);
  }

  decodeXz(in_file, out_file) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      unzip.mojom.mojom.Unzipper_DecodeXz_ParamsSpec,
      unzip.mojom.mojom.Unzipper_DecodeXz_ResponseParamsSpec,
      [in_file, out_file]);
  }

};

unzip.mojom.mojom.Unzipper.getRemote = function() {
  let remote = new unzip.mojom.mojom.UnzipperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unzip.mojom.Unzipper',
    'context');
  return remote.$;
};

// ParamsSpec for Unzip
unzip.mojom.mojom.Unzipper_Unzip_ParamsSpec = {
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

unzip.mojom.mojom.Unzipper_Unzip_ResponseParamsSpec = {
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
unzip.mojom.mojom.Unzipper_DetectEncoding_ParamsSpec = {
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

unzip.mojom.mojom.Unzipper_DetectEncoding_ResponseParamsSpec = {
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
unzip.mojom.mojom.Unzipper_GetExtractedInfo_ParamsSpec = {
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

unzip.mojom.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec = {
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
unzip.mojom.mojom.Unzipper_DecodeXz_ParamsSpec = {
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

unzip.mojom.mojom.Unzipper_DecodeXz_ResponseParamsSpec = {
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
unzip.mojom.mojom.UnzipperPtr = unzip.mojom.mojom.UnzipperRemote;
unzip.mojom.mojom.UnzipperRequest = unzip.mojom.mojom.UnzipperPendingReceiver;

