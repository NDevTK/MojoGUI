// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};

blink.mojom.ClipboardFormatSpec = { $: mojo.internal.Enum() };
blink.mojom.ClipboardBufferSpec = { $: mojo.internal.Enum() };
blink.mojom.PlatformClipboardPermissionStateSpec = { $: mojo.internal.Enum() };
blink.mojom.ClipboardFilesSpec = { $: {} };
blink.mojom.ClipboardListener = {};
blink.mojom.ClipboardListener.$interfaceName = 'blink.mojom.ClipboardListener';
blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost = {};
blink.mojom.ClipboardHost.$interfaceName = 'blink.mojom.ClipboardHost';
blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadText_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadHtml_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadSvg_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadRtf_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadPng_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadFiles_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteText_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteHtml_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteSvg_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteImage_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_CommitWrite_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec = { $: {} };
blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec = { $: {} };
blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec = { $: {} };

blink.mojom.kMaxFormatSize = 1024;

blink.mojom.kMaxDataSize = 1073741824;

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
mojo.internal.Struct(
    blink.mojom.ClipboardFilesSpec, 'blink.mojom.ClipboardFiles', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(blink.mojom.DataTransferFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_system_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ClipboardListener
mojo.internal.Struct(
    blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec, 'blink.mojom.ClipboardListener_OnClipboardDataChanged_Params', [
      mojo.internal.StructField('types', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('change_id', 8, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [types, change_id],
      false);
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

blink.mojom.ClipboardListenerPtr = blink.mojom.ClipboardListenerRemote;
blink.mojom.ClipboardListenerRequest = blink.mojom.ClipboardListenerPendingReceiver;


// Interface: ClipboardHost
mojo.internal.Struct(
    blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec, 'blink.mojom.ClipboardHost_GetSequenceNumber_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec, 'blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec, 'blink.mojom.ClipboardHost_IsFormatAvailable_Params', [
      mojo.internal.StructField('format', 0, 0, blink.mojom.ClipboardFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer', 8, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec, 'blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableTypes_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParams', [
      mojo.internal.StructField('types', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadText_ParamsSpec, 'blink.mojom.ClipboardHost_ReadText_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadText_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadHtml_ParamsSpec, 'blink.mojom.ClipboardHost_ReadHtml_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadHtml_ResponseParams', [
      mojo.internal.StructField('markup', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fragment_start', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fragment_end', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadSvg_ParamsSpec, 'blink.mojom.ClipboardHost_ReadSvg_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadSvg_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadRtf_ParamsSpec, 'blink.mojom.ClipboardHost_ReadRtf_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadRtf_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadPng_ParamsSpec, 'blink.mojom.ClipboardHost_ReadPng_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadPng_ResponseParams', [
      mojo.internal.StructField('png', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadFiles_ParamsSpec, 'blink.mojom.ClipboardHost_ReadFiles_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadFiles_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ClipboardFilesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec, 'blink.mojom.ClipboardHost_ReadDataTransferCustomData_Params', [
      mojo.internal.StructField('buffer', 0, 0, blink.mojom.ClipboardBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParams', [
      mojo.internal.StructField('format_types', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec, 'blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_Params', [
      mojo.internal.StructField('format', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec, 'blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteText_ParamsSpec, 'blink.mojom.ClipboardHost_WriteText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteHtml_ParamsSpec, 'blink.mojom.ClipboardHost_WriteHtml_Params', [
      mojo.internal.StructField('markup', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteSvg_ParamsSpec, 'blink.mojom.ClipboardHost_WriteSvg_Params', [
      mojo.internal.StructField('markup', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec, 'blink.mojom.ClipboardHost_WriteSmartPasteMarker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec, 'blink.mojom.ClipboardHost_WriteDataTransferCustomData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Map(mojo_base.mojom.String16Spec.$, mojo_base.mojom.BigString16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec, 'blink.mojom.ClipboardHost_WriteBookmark_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteImage_ParamsSpec, 'blink.mojom.ClipboardHost_WriteImage_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec, 'blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_Params', [
      mojo.internal.StructField('format', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_CommitWrite_ParamsSpec, 'blink.mojom.ClipboardHost_CommitWrite_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec, 'blink.mojom.ClipboardHost_WriteStringToFindPboard_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec, 'blink.mojom.ClipboardHost_GetPlatformPermissionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec, 'blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PlatformClipboardPermissionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec, 'blink.mojom.ClipboardHost_RegisterClipboardListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ClipboardListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [buffer],
      false);
  }

  isFormatAvailable(format, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec,
      blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec,
      [format, buffer],
      false);
  }

  readAvailableTypes(buffer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec,
      [buffer],
      false);
  }

  readText(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ClipboardHost_ReadText_ParamsSpec,
      blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec,
      [buffer],
      false);
  }

  readHtml(buffer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ClipboardHost_ReadHtml_ParamsSpec,
      blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec,
      [buffer],
      false);
  }

  readSvg(buffer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ClipboardHost_ReadSvg_ParamsSpec,
      blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec,
      [buffer],
      false);
  }

  readRtf(buffer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ClipboardHost_ReadRtf_ParamsSpec,
      blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec,
      [buffer],
      false);
  }

  readPng(buffer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ClipboardHost_ReadPng_ParamsSpec,
      blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec,
      [buffer],
      false);
  }

  readFiles(buffer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ClipboardHost_ReadFiles_ParamsSpec,
      blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec,
      [buffer],
      false);
  }

  readDataTransferCustomData(buffer, type) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec,
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec,
      [buffer, type],
      false);
  }

  readAvailableCustomAndStandardFormats() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec,
      [],
      false);
  }

  readUnsanitizedCustomFormat(format) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec,
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec,
      [format],
      false);
  }

  writeText(text) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.ClipboardHost_WriteText_ParamsSpec,
      null,
      [text],
      false);
  }

  writeHtml(markup, url) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.ClipboardHost_WriteHtml_ParamsSpec,
      null,
      [markup, url],
      false);
  }

  writeSvg(markup) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.ClipboardHost_WriteSvg_ParamsSpec,
      null,
      [markup],
      false);
  }

  writeSmartPasteMarker() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec,
      null,
      [],
      false);
  }

  writeDataTransferCustomData(data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec,
      null,
      [data],
      false);
  }

  writeBookmark(url, title) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec,
      null,
      [url, title],
      false);
  }

  writeImage(image) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.ClipboardHost_WriteImage_ParamsSpec,
      null,
      [image],
      false);
  }

  writeUnsanitizedCustomFormat(format, data) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec,
      null,
      [format, data],
      false);
  }

  commitWrite() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.ClipboardHost_CommitWrite_ParamsSpec,
      null,
      [],
      false);
  }

  writeStringToFindPboard(text) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec,
      null,
      [text],
      false);
  }

  getPlatformPermissionState() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec,
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec,
      [],
      false);
  }

  registerClipboardListener(listener) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec,
      null,
      [listener],
      false);
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

blink.mojom.ClipboardHostPtr = blink.mojom.ClipboardHostRemote;
blink.mojom.ClipboardHostRequest = blink.mojom.ClipboardHostPendingReceiver;

