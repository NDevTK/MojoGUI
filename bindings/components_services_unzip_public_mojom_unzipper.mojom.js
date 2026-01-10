// Auto-generated MojoJS binding
// Source: chromium_src/components/services/unzip/public/mojom/unzipper.mojom
// Module: unzip.mojom

'use strict';

// Module namespace
var unzip = unzip || {};
unzip.mojom = unzip.mojom || {};
var storage = storage || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

unzip.mojom.UnzipOptionsSpec = { $: {} };
unzip.mojom.InfoSpec = { $: {} };
unzip.mojom.UnzipFilter = {};
unzip.mojom.UnzipFilter.$interfaceName = 'unzip.mojom.UnzipFilter';
unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec = { $: {} };
unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec = { $: {} };
unzip.mojom.UnzipListener = {};
unzip.mojom.UnzipListener.$interfaceName = 'unzip.mojom.UnzipListener';
unzip.mojom.UnzipListener_OnProgress_ParamsSpec = { $: {} };
unzip.mojom.Unzipper = {};
unzip.mojom.Unzipper.$interfaceName = 'unzip.mojom.Unzipper';
unzip.mojom.Unzipper_Unzip_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_Unzip_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_DetectEncoding_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec = { $: {} };
unzip.mojom.Unzipper_DecodeXz_ParamsSpec = { $: {} };
unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec = { $: {} };

// Struct: UnzipOptions
mojo.internal.Struct(
    unzip.mojom.UnzipOptionsSpec, 'unzip.mojom.UnzipOptions', [
      mojo.internal.StructField('encoding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Info
mojo.internal.Struct(
    unzip.mojom.InfoSpec, 'unzip.mojom.Info', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size_is_valid', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_encrypted', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uses_aes_encryption', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: UnzipFilter
mojo.internal.Struct(
    unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec, 'unzip.mojom.UnzipFilter_ShouldUnzipFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec, 'unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [path],
      false);
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

unzip.mojom.UnzipFilterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = unzip.mojom.UnzipFilter_ShouldUnzipFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldUnzipFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.UnzipFilter_ShouldUnzipFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

unzip.mojom.UnzipFilterReceiver = unzip.mojom.UnzipFilterReceiver;

unzip.mojom.UnzipFilterPtr = unzip.mojom.UnzipFilterRemote;
unzip.mojom.UnzipFilterRequest = unzip.mojom.UnzipFilterPendingReceiver;


// Interface: UnzipListener
mojo.internal.Struct(
    unzip.mojom.UnzipListener_OnProgress_ParamsSpec, 'unzip.mojom.UnzipListener_OnProgress_Params', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [bytes],
      false);
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

unzip.mojom.UnzipListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = unzip.mojom.UnzipListener_OnProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onProgress(params.bytes);
          break;
        }
      }
    });
  }
};

unzip.mojom.UnzipListenerReceiver = unzip.mojom.UnzipListenerReceiver;

unzip.mojom.UnzipListenerPtr = unzip.mojom.UnzipListenerRemote;
unzip.mojom.UnzipListenerRequest = unzip.mojom.UnzipListenerPendingReceiver;


// Interface: Unzipper
mojo.internal.Struct(
    unzip.mojom.Unzipper_Unzip_ParamsSpec, 'unzip.mojom.Unzipper_Unzip_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_dir', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.DirectoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, unzip.mojom.UnzipOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo.internal.InterfaceProxy(unzip.mojom.UnzipFilterSpec), null, true, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(unzip.mojom.UnzipListenerSpec), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_Unzip_ResponseParamsSpec, 'unzip.mojom.Unzipper_Unzip_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DetectEncoding_ParamsSpec, 'unzip.mojom.Unzipper_DetectEncoding_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec, 'unzip.mojom.Unzipper_DetectEncoding_ResponseParams', [
      mojo.internal.StructField('encoding', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec, 'unzip.mojom.Unzipper_GetExtractedInfo_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec, 'unzip.mojom.Unzipper_GetExtractedInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, unzip.mojom.InfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DecodeXz_ParamsSpec, 'unzip.mojom.Unzipper_DecodeXz_Params', [
      mojo.internal.StructField('in_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('out_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec, 'unzip.mojom.Unzipper_DecodeXz_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [zip_file, output_dir, options, filter, listener],
      false);
  }

  detectEncoding(zip_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unzip.mojom.Unzipper_DetectEncoding_ParamsSpec,
      unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec,
      [zip_file],
      false);
  }

  getExtractedInfo(zip_file) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec,
      unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec,
      [zip_file],
      false);
  }

  decodeXz(in_file, out_file) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      unzip.mojom.Unzipper_DecodeXz_ParamsSpec,
      unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec,
      [in_file, out_file],
      false);
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

unzip.mojom.UnzipperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = unzip.mojom.Unzipper_Unzip_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unzip(params.zip_file, params.output_dir, params.options, params.filter, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_Unzip_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = unzip.mojom.Unzipper_DetectEncoding_ParamsSpec.$.decode(message.payload);
          const result = this.impl.detectEncoding(params.zip_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_DetectEncoding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = unzip.mojom.Unzipper_GetExtractedInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getExtractedInfo(params.zip_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_GetExtractedInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = unzip.mojom.Unzipper_DecodeXz_ParamsSpec.$.decode(message.payload);
          const result = this.impl.decodeXz(params.in_file, params.out_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unzip.mojom.Unzipper_DecodeXz_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

unzip.mojom.UnzipperReceiver = unzip.mojom.UnzipperReceiver;

unzip.mojom.UnzipperPtr = unzip.mojom.UnzipperRemote;
unzip.mojom.UnzipperRequest = unzip.mojom.UnzipperPendingReceiver;

