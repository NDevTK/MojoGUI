// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/media_gallery_util/public/mojom/media_parser.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

chrome.mojom.VideoFrameDataSpec = { $: {} };
chrome.mojom.ExtractVideoFrameResultSpec = { $: {} };
chrome.mojom.MediaStreamInfoSpec = { $: {} };
chrome.mojom.MediaMetadataSpec = { $: {} };
chrome.mojom.AttachedImageSpec = { $: {} };
chrome.mojom.MediaParser = {};
chrome.mojom.MediaParser.$interfaceName = 'chrome.mojom.MediaParser';
chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec = { $: {} };
chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec = { $: {} };
chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec = { $: {} };
chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec = { $: {} };
chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec = { $: {} };
chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec = { $: {} };
chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec = { $: {} };
chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec = { $: {} };
chrome.mojom.MediaParserFactory = {};
chrome.mojom.MediaParserFactory.$interfaceName = 'chrome.mojom.MediaParserFactory';
chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec = { $: {} };
chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec = { $: {} };
chrome.mojom.MediaDataSource = {};
chrome.mojom.MediaDataSource.$interfaceName = 'chrome.mojom.MediaDataSource';
chrome.mojom.MediaDataSource_Read_ParamsSpec = { $: {} };
chrome.mojom.MediaDataSource_Read_ResponseParamsSpec = { $: {} };

// Union: VideoFrameData
mojo.internal.Union(
    chrome.mojom.VideoFrameDataSpec, 'chrome.mojom.VideoFrameData', {
      'encoded_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'decoded_frame': {
        'ordinal': 1,
        'type': media.mojom.VideoFrameSpec.$,
        'nullable': true,
      },
    });

// Struct: ExtractVideoFrameResult
mojo.internal.Struct(
    chrome.mojom.ExtractVideoFrameResultSpec, 'chrome.mojom.ExtractVideoFrameResult', [
      mojo.internal.StructField('frame_data', 0, 0, media.mojom.VideoFrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaStreamInfo
mojo.internal.Struct(
    chrome.mojom.MediaStreamInfoSpec, 'chrome.mojom.MediaStreamInfo', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('additional_properties', 8, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaMetadata
mojo.internal.Struct(
    chrome.mojom.MediaMetadataSpec, 'chrome.mojom.MediaMetadata', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo.internal.Double, -1, false, 0, undefined),
      mojo.internal.StructField('album', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('artist', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('comment', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('copyright', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('genre', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('raw_tags', 72, 0, mojo.internal.Array(chrome.mojom.MediaStreamInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('height', 80, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('width', 84, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('rotation', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('disc', 92, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('track', 96, 0, mojo.internal.Int32, -1, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: AttachedImage
mojo.internal.Struct(
    chrome.mojom.AttachedImageSpec, 'chrome.mojom.AttachedImage', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MediaParser
mojo.internal.Struct(
    chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec, 'chrome.mojom.MediaParser_ParseMediaMetadata_Params', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('total_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('media_data_source', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), null, false, 0, undefined),
      mojo.internal.StructField('get_attached_images', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec, 'chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, chrome.mojom.MediaMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attached_images', 8, 0, mojo.internal.Array(chrome.mojom.AttachedImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('parse_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec, 'chrome.mojom.MediaParser_ExtractVideoFrame_Params', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_data_source', 8, 0, mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), null, false, 0, undefined),
      mojo.internal.StructField('total_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec, 'chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chrome.mojom.ExtractVideoFrameResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec, 'chrome.mojom.MediaParser_CheckMediaFile_Params', [
      mojo.internal.StructField('decode_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec, 'chrome.mojom.MediaParser_CheckMediaFile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec, 'chrome.mojom.MediaParser_GetCpuInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec, 'chrome.mojom.MediaParser_GetCpuInfo_ResponseParams', [
      mojo.internal.StructField('libyuv_cpu_flags', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('ffmpeg_cpu_flags', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chrome.mojom.MediaParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.MediaParserRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.MediaParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.MediaParserPendingReceiver,
      handle);
    this.$ = new chrome.mojom.MediaParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  parseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source) {
    return this.$.parseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source);
  }
  extractVideoFrame(mime_type, total_size, media_data_source) {
    return this.$.extractVideoFrame(mime_type, total_size, media_data_source);
  }
  checkMediaFile(decode_time, file) {
    return this.$.checkMediaFile(decode_time, file);
  }
  getCpuInfo() {
    return this.$.getCpuInfo();
  }
};

chrome.mojom.MediaParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaParser', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  parseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec,
      chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec,
      [mime_type, total_size, get_attached_images, media_data_source],
      false);
  }

  extractVideoFrame(mime_type, total_size, media_data_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec,
      chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec,
      [mime_type, total_size, media_data_source],
      false);
  }

  checkMediaFile(decode_time, file) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec,
      chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec,
      [decode_time, file],
      false);
  }

  getCpuInfo() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec,
      chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec,
      [],
      false);
  }

};

chrome.mojom.MediaParser.getRemote = function() {
  let remote = new chrome.mojom.MediaParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.MediaParser',
    'context');
  return remote.$;
};

chrome.mojom.MediaParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaParser', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.parseMediaMetadata(params.mime_type, params.total_size, params.get_attached_images, params.media_data_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec.$.structSpec);
          const result = this.impl.extractVideoFrame(params.mime_type, params.total_size, params.media_data_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec.$.structSpec);
          const result = this.impl.checkMediaFile(params.decode_time, params.file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getCpuInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.MediaParserReceiver = chrome.mojom.MediaParserReceiver;

chrome.mojom.MediaParserPtr = chrome.mojom.MediaParserRemote;
chrome.mojom.MediaParserRequest = chrome.mojom.MediaParserPendingReceiver;


// Interface: MediaParserFactory
mojo.internal.Struct(
    chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec, 'chrome.mojom.MediaParserFactory_CreateMediaParser_Params', [
      mojo.internal.StructField('libyuv_cpu_flags', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('libavutil_cpu_flags', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec, 'chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParams', [
      mojo.internal.StructField('media_parser', 0, 0, mojo.internal.InterfaceProxy(chrome.mojom.MediaParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.MediaParserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.MediaParserFactoryRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.MediaParserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.MediaParserFactoryPendingReceiver,
      handle);
    this.$ = new chrome.mojom.MediaParserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createMediaParser(libyuv_cpu_flags, libavutil_cpu_flags) {
    return this.$.createMediaParser(libyuv_cpu_flags, libavutil_cpu_flags);
  }
};

chrome.mojom.MediaParserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaParserFactory', [
      { explicit: null },
    ]);
  }

  createMediaParser(libyuv_cpu_flags, libavutil_cpu_flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec,
      chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec,
      [libyuv_cpu_flags, libavutil_cpu_flags],
      false);
  }

};

chrome.mojom.MediaParserFactory.getRemote = function() {
  let remote = new chrome.mojom.MediaParserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.MediaParserFactory',
    'context');
  return remote.$;
};

chrome.mojom.MediaParserFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaParserFactory', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec.$.structSpec);
          const result = this.impl.createMediaParser(params.libyuv_cpu_flags, params.libavutil_cpu_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.MediaParserFactoryReceiver = chrome.mojom.MediaParserFactoryReceiver;

chrome.mojom.MediaParserFactoryPtr = chrome.mojom.MediaParserFactoryRemote;
chrome.mojom.MediaParserFactoryRequest = chrome.mojom.MediaParserFactoryPendingReceiver;


// Interface: MediaDataSource
mojo.internal.Struct(
    chrome.mojom.MediaDataSource_Read_ParamsSpec, 'chrome.mojom.MediaDataSource_Read_Params', [
      mojo.internal.StructField('position', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.MediaDataSource_Read_ResponseParamsSpec, 'chrome.mojom.MediaDataSource_Read_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.MediaDataSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.MediaDataSourceRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.MediaDataSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.MediaDataSourcePendingReceiver,
      handle);
    this.$ = new chrome.mojom.MediaDataSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read(position, length) {
    return this.$.read(position, length);
  }
};

chrome.mojom.MediaDataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaDataSource', [
      { explicit: null },
    ]);
  }

  read(position, length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.MediaDataSource_Read_ParamsSpec,
      chrome.mojom.MediaDataSource_Read_ResponseParamsSpec,
      [position, length],
      false);
  }

};

chrome.mojom.MediaDataSource.getRemote = function() {
  let remote = new chrome.mojom.MediaDataSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.MediaDataSource',
    'context');
  return remote.$;
};

chrome.mojom.MediaDataSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaDataSource', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.MediaDataSource_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.MediaDataSource_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read(params.position, params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.MediaDataSource_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.MediaDataSourceReceiver = chrome.mojom.MediaDataSourceReceiver;

chrome.mojom.MediaDataSourcePtr = chrome.mojom.MediaDataSourceRemote;
chrome.mojom.MediaDataSourceRequest = chrome.mojom.MediaDataSourcePendingReceiver;

