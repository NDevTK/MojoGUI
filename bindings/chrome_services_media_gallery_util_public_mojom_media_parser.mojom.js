// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/media_gallery_util/public/mojom/media_parser.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: ExtractVideoFrameResult
chrome.mojom.ExtractVideoFrameResultSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ExtractVideoFrameResult',
      packedSize: 24,
      fields: [
        { name: 'frame_data', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.VideoFrameDataSpec, nullable: false },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'additional_properties', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaMetadata
chrome.mojom.MediaMetadataSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaMetadata',
      packedSize: 120,
      fields: [
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'width', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'duration', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'rotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'album', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'artist', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'comment', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'copyright', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'disc', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'genre', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'language', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'track', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'raw_tags', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaParser
chrome.mojom.MediaParser = {};

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
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'total_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'get_attached_images', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'media_data_source', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaParser_ParseMediaMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ParseMediaMetadata_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'parse_success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: chrome.mojom.MediaMetadataSpec, nullable: false },
        { name: 'attached_images', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExtractVideoFrame
chrome.mojom.MediaParser_ExtractVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ExtractVideoFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'total_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'media_data_source', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaParser_ExtractVideoFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.ExtractVideoFrame_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.ExtractVideoFrameResultSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'decode_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaParser_CheckMediaFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.CheckMediaFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaParser_GetCpuInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParser.GetCpuInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'libyuv_cpu_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'ffmpeg_cpu_flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaParserPtr = chrome.mojom.MediaParserRemote;
chrome.mojom.MediaParserRequest = chrome.mojom.MediaParserPendingReceiver;


// Interface: MediaParserFactory
chrome.mojom.MediaParserFactory = {};

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
        { name: 'libyuv_cpu_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'libavutil_cpu_flags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaParserFactory_CreateMediaParser_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaParserFactory.CreateMediaParser_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'media_parser', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaParserFactoryPtr = chrome.mojom.MediaParserFactoryRemote;
chrome.mojom.MediaParserFactoryRequest = chrome.mojom.MediaParserFactoryPendingReceiver;


// Interface: MediaDataSource
chrome.mojom.MediaDataSource = {};

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
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.MediaDataSource_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.MediaDataSource.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.MediaDataSourcePtr = chrome.mojom.MediaDataSourceRemote;
chrome.mojom.MediaDataSourceRequest = chrome.mojom.MediaDataSourcePendingReceiver;

