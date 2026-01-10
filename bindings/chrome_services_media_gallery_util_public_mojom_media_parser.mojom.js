// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/media_gallery_util/public/mojom/media_parser.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Union: VideoFrameData
chrome.mojom.VideoFrameDataSpec = { $: mojo.internal.Union(
    'chrome.mojom.VideoFrameData', {
      'encoded_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'decoded_frame': {
        'ordinal': 1,
        'type': media.mojom.VideoFrameSpec,
        'nullable': true,
      }},
    })
};

// Struct: ExtractVideoFrameResult
chrome.mojom.ExtractVideoFrameResultSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ExtractVideoFrameResult',
      packedSize: 32,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.VideoFrameDataSpec, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MediaStreamInfo
chrome.mojom.MediaStreamInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaStreamInfo',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'additional_properties', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaMetadata
chrome.mojom.MediaMetadataSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaMetadata',
      packedSize: 112,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'album', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'artist', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'comment', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'copyright', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disc', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'genre', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'track', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'raw_tags', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.MediaStreamInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
    }
  }
};

// Struct: AttachedImage
chrome.mojom.AttachedImageSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AttachedImage',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: MediaParser
chrome.mojom.MediaParser = {};

chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser_ParseMediaMetadata_Params',
      packedSize: 40,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'total_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'get_attached_images', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_data_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser_ExtractVideoFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'total_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'media_data_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser_CheckMediaFile_Params',
      packedSize: 24,
      fields: [
        { name: 'decode_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser_GetCpuInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

// ParamsSpec for ParseMediaMetadata
chrome.mojom.MediaParser_ParseMediaMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ParseMediaMetadata_Params',
      packedSize: 40,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'total_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'get_attached_images', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_data_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ParseMediaMetadata_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'parse_success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.MediaMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'attached_images', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.AttachedImageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ExtractVideoFrame
chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ExtractVideoFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'total_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'media_data_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.MediaDataSourceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ExtractVideoFrame_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ExtractVideoFrameResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CheckMediaFile
chrome.mojom.MediaParser_CheckMediaFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.CheckMediaFile_Params',
      packedSize: 24,
      fields: [
        { name: 'decode_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.CheckMediaFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCpuInfo
chrome.mojom.MediaParser_GetCpuInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.GetCpuInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.GetCpuInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'libyuv_cpu_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'ffmpeg_cpu_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaParserPtr = chrome.mojom.MediaParserRemote;
chrome.mojom.MediaParserRequest = chrome.mojom.MediaParserPendingReceiver;


// Interface: MediaParserFactory
chrome.mojom.MediaParserFactory = {};

chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParserFactory_CreateMediaParser_Params',
      packedSize: 24,
      fields: [
        { name: 'libyuv_cpu_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'libavutil_cpu_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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

// ParamsSpec for CreateMediaParser
chrome.mojom.MediaParserFactory_CreateMediaParser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParserFactory.CreateMediaParser_Params',
      packedSize: 24,
      fields: [
        { name: 'libyuv_cpu_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'libavutil_cpu_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParserFactory.CreateMediaParser_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'media_parser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.MediaParserRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaParserFactoryPtr = chrome.mojom.MediaParserFactoryRemote;
chrome.mojom.MediaParserFactoryRequest = chrome.mojom.MediaParserFactoryPendingReceiver;


// Interface: MediaDataSource
chrome.mojom.MediaDataSource = {};

chrome.mojom.MediaDataSource_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaDataSource_Read_Params',
      packedSize: 24,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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

// ParamsSpec for Read
chrome.mojom.MediaDataSource_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaDataSource.Read_Params',
      packedSize: 24,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chrome.mojom.MediaDataSource_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaDataSource.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaDataSourcePtr = chrome.mojom.MediaDataSourceRemote;
chrome.mojom.MediaDataSourceRequest = chrome.mojom.MediaDataSourcePendingReceiver;

