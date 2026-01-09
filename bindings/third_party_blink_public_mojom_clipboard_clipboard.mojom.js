// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ClipboardFormat
blink.mojom.ClipboardFormat = {
  kPlaintext: 0,
  kHtml: 1,
  kSmartPaste: 2,
  kBookmark: 3,
};

// Enum: ClipboardBuffer
blink.mojom.ClipboardBuffer = {
  kStandard: 0,
  kSelection: 1,
};

// Enum: PlatformClipboardPermissionState
blink.mojom.PlatformClipboardPermissionState = {
  kAllow: 0,
  kAsk: 1,
  kDeny: 2,
};

// Struct: ClipboardFiles
blink.mojom.ClipboardFilesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardFiles',
      packedSize: 24,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'file_system_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ClipboardListener
blink.mojom.ClipboardListener = {};

blink.mojom.ClipboardListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ClipboardListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ClipboardListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ClipboardListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ClipboardListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ClipboardListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClipboardDataChanged(types, change_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec,
      null,
      [types, change_id]);
  }

};

blink.mojom.ClipboardListener.getRemote = function() {
  let remote = new blink.mojom.ClipboardListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ClipboardListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnClipboardDataChanged
blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardListener.OnClipboardDataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'change_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ClipboardListenerPtr = blink.mojom.ClipboardListenerRemote;
blink.mojom.ClipboardListenerRequest = blink.mojom.ClipboardListenerPendingReceiver;


// Interface: ClipboardHost
blink.mojom.ClipboardHost = {};

blink.mojom.ClipboardHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ClipboardHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ClipboardHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ClipboardHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ClipboardHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ClipboardHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSequenceNumber(buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec,
      blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec,
      [buffer]);
  }

  isFormatAvailable(format, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec,
      blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec,
      [format, buffer]);
  }

  readAvailableTypes(buffer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec,
      [buffer]);
  }

  readText(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ClipboardHost_ReadText_ParamsSpec,
      blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec,
      [buffer]);
  }

  readHtml(buffer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ClipboardHost_ReadHtml_ParamsSpec,
      blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec,
      [buffer]);
  }

  readSvg(buffer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ClipboardHost_ReadSvg_ParamsSpec,
      blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec,
      [buffer]);
  }

  readRtf(buffer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ClipboardHost_ReadRtf_ParamsSpec,
      blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec,
      [buffer]);
  }

  readPng(buffer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ClipboardHost_ReadPng_ParamsSpec,
      blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec,
      [buffer]);
  }

  readFiles(buffer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ClipboardHost_ReadFiles_ParamsSpec,
      blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec,
      [buffer]);
  }

  readDataTransferCustomData(buffer, type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec,
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec,
      [buffer, type]);
  }

  readAvailableCustomAndStandardFormats() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec,
      []);
  }

  readUnsanitizedCustomFormat(format) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec,
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec,
      [format]);
  }

  writeText(text) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.ClipboardHost_WriteText_ParamsSpec,
      null,
      [text]);
  }

  writeHtml(markup, url) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.ClipboardHost_WriteHtml_ParamsSpec,
      null,
      [markup, url]);
  }

  writeSvg(markup) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.ClipboardHost_WriteSvg_ParamsSpec,
      null,
      [markup]);
  }

  writeSmartPasteMarker() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec,
      null,
      []);
  }

  writeDataTransferCustomData(data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec,
      null,
      [data]);
  }

  writeBookmark(url, title) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec,
      null,
      [url, title]);
  }

  writeImage(image) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.ClipboardHost_WriteImage_ParamsSpec,
      null,
      [image]);
  }

  writeUnsanitizedCustomFormat(format, data) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec,
      null,
      [format, data]);
  }

  commitWrite() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.ClipboardHost_CommitWrite_ParamsSpec,
      null,
      []);
  }

  writeStringToFindPboard(text) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec,
      null,
      [text]);
  }

  getPlatformPermissionState() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec,
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec,
      []);
  }

  registerClipboardListener(listener) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec,
      null,
      [listener]);
  }

};

blink.mojom.ClipboardHost.getRemote = function() {
  let remote = new blink.mojom.ClipboardHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ClipboardHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetSequenceNumber
blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.GetSequenceNumber_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.GetSequenceNumber_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsFormatAvailable
blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.IsFormatAvailable_Params',
      packedSize: 24,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardFormatSpec, nullable: false },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.IsFormatAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadAvailableTypes
blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadAvailableTypes_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadAvailableTypes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadText
blink.mojom.ClipboardHost_ReadText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadText_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadText_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadHtml
blink.mojom.ClipboardHost_ReadHtml_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadHtml_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadHtml_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'markup', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'fragment_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'fragment_end', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadSvg
blink.mojom.ClipboardHost_ReadSvg_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadSvg_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadSvg_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadRtf
blink.mojom.ClipboardHost_ReadRtf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadRtf_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadRtf_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadPng
blink.mojom.ClipboardHost_ReadPng_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadPng_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadPng_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'png', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadFiles
blink.mojom.ClipboardHost_ReadFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadFiles_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardFilesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadDataTransferCustomData
blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadDataTransferCustomData_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ClipboardBufferSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadDataTransferCustomData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadAvailableCustomAndStandardFormats
blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadAvailableCustomAndStandardFormats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadAvailableCustomAndStandardFormats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'format_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadUnsanitizedCustomFormat
blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadUnsanitizedCustomFormat_Params',
      packedSize: 16,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.ReadUnsanitizedCustomFormat_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteText
blink.mojom.ClipboardHost_WriteText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteText_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteHtml
blink.mojom.ClipboardHost_WriteHtml_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteHtml_Params',
      packedSize: 24,
      fields: [
        { name: 'markup', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteSvg
blink.mojom.ClipboardHost_WriteSvg_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteSvg_Params',
      packedSize: 16,
      fields: [
        { name: 'markup', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteSmartPasteMarker
blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteSmartPasteMarker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteDataTransferCustomData
blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteDataTransferCustomData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteBookmark
blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteBookmark_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteImage
blink.mojom.ClipboardHost_WriteImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteImage_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteUnsanitizedCustomFormat
blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteUnsanitizedCustomFormat_Params',
      packedSize: 24,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CommitWrite
blink.mojom.ClipboardHost_CommitWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.CommitWrite_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteStringToFindPboard
blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.WriteStringToFindPboard_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPlatformPermissionState
blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.GetPlatformPermissionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.GetPlatformPermissionState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PlatformClipboardPermissionStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterClipboardListener
blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ClipboardHost.RegisterClipboardListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ClipboardHostPtr = blink.mojom.ClipboardHostRemote;
blink.mojom.ClipboardHostRequest = blink.mojom.ClipboardHostPendingReceiver;

