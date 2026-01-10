// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/media_gallery_util/public/mojom/media_parser.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

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
        'type': media.mojom.VideoFrameSpec,
        'nullable': true,
      },
    });

// Struct: ExtractVideoFrameResult
mojo.internal.Struct(
    chrome.mojom.ExtractVideoFrameResultSpec, 'chrome.mojom.ExtractVideoFrameResult', [
      mojo.internal.StructField('frame_data', 0, 0, chrome.mojom.VideoFrameDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('config', 16, 0, media.mojom.VideoDecoderConfigSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MediaStreamInfo
mojo.internal.Struct(
    chrome.mojom.MediaStreamInfoSpec, 'chrome.mojom.MediaStreamInfo', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('additional_properties', 8, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaMetadata
mojo.internal.Struct(
    chrome.mojom.MediaMetadataSpec, 'chrome.mojom.MediaMetadata', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('height', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('rotation', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('album', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('artist', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('comment', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('copyright', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disc', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('genre', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('track', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('raw_tags', 72, 0, mojo.internal.Array(chrome.mojom.MediaStreamInfoSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('get_attached_images', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('media_data_source', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec, 'chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParams', [
      mojo.internal.StructField('parse_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('metadata', 0, 0, chrome.mojom.MediaMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('attached_images', 8, 0, mojo.internal.Array(chrome.mojom.AttachedImageSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec, 'chrome.mojom.MediaParser_ExtractVideoFrame_Params', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('total_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('media_data_source', 8, 0, mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec, 'chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chrome.mojom.ExtractVideoFrameResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec, 'chrome.mojom.MediaParser_CheckMediaFile_Params', [
      mojo.internal.StructField('decode_time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec, null, false, 0, undefined),
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
    [{version: 0, packedSize: 8}]);

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
};

chrome.mojom.MediaParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec,
      chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec,
      [mime_type, total_size, get_attached_images, media_data_source]);
  }

  extractVideoFrame(mime_type, total_size, media_data_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec,
      chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec,
      [mime_type, total_size, media_data_source]);
  }

  checkMediaFile(decode_time, file) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec,
      chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec,
      [decode_time, file]);
  }

  getCpuInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec,
      chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec,
      []);
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
};

chrome.mojom.MediaParserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMediaParser(libyuv_cpu_flags, libavutil_cpu_flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec,
      chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec,
      [libyuv_cpu_flags, libavutil_cpu_flags]);
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
};

chrome.mojom.MediaDataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(position, length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.MediaDataSource_Read_ParamsSpec,
      chrome.mojom.MediaDataSource_Read_ResponseParamsSpec,
      [position, length]);
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

chrome.mojom.MediaDataSourcePtr = chrome.mojom.MediaDataSourceRemote;
chrome.mojom.MediaDataSourceRequest = chrome.mojom.MediaDataSourcePendingReceiver;

