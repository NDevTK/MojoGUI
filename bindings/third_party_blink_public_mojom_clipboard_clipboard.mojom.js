// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
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
  onClipboardDataChanged(types, change_id) {
    return this.$.onClipboardDataChanged(types, change_id);
  }
};

blink.mojom.ClipboardListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ClipboardListener', [
      { explicit: null },
    ]);
  }

  onClipboardDataChanged(types, change_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

blink.mojom.ClipboardListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ClipboardListener', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onClipboardDataChanged(params.types, params.change_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ClipboardListenerReceiver = blink.mojom.ClipboardListenerReceiver;

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
  getSequenceNumber(buffer) {
    return this.$.getSequenceNumber(buffer);
  }
  isFormatAvailable(format, buffer) {
    return this.$.isFormatAvailable(format, buffer);
  }
  readAvailableTypes(buffer) {
    return this.$.readAvailableTypes(buffer);
  }
  readText(buffer) {
    return this.$.readText(buffer);
  }
  readHtml(buffer) {
    return this.$.readHtml(buffer);
  }
  readSvg(buffer) {
    return this.$.readSvg(buffer);
  }
  readRtf(buffer) {
    return this.$.readRtf(buffer);
  }
  readPng(buffer) {
    return this.$.readPng(buffer);
  }
  readFiles(buffer) {
    return this.$.readFiles(buffer);
  }
  readDataTransferCustomData(buffer, type) {
    return this.$.readDataTransferCustomData(buffer, type);
  }
  readAvailableCustomAndStandardFormats() {
    return this.$.readAvailableCustomAndStandardFormats();
  }
  readUnsanitizedCustomFormat(format) {
    return this.$.readUnsanitizedCustomFormat(format);
  }
  writeText(text) {
    return this.$.writeText(text);
  }
  writeHtml(markup, url) {
    return this.$.writeHtml(markup, url);
  }
  writeSvg(markup) {
    return this.$.writeSvg(markup);
  }
  writeSmartPasteMarker() {
    return this.$.writeSmartPasteMarker();
  }
  writeDataTransferCustomData(data) {
    return this.$.writeDataTransferCustomData(data);
  }
  writeBookmark(url, title) {
    return this.$.writeBookmark(url, title);
  }
  writeImage(image) {
    return this.$.writeImage(image);
  }
  writeUnsanitizedCustomFormat(format, data) {
    return this.$.writeUnsanitizedCustomFormat(format, data);
  }
  commitWrite() {
    return this.$.commitWrite();
  }
  writeStringToFindPboard(text) {
    return this.$.writeStringToFindPboard(text);
  }
  getPlatformPermissionState() {
    return this.$.getPlatformPermissionState();
  }
  registerClipboardListener(listener) {
    return this.$.registerClipboardListener(listener);
  }
};

blink.mojom.ClipboardHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ClipboardHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSequenceNumber(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec,
      blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec,
      [buffer],
      false);
  }

  isFormatAvailable(format, buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec,
      blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec,
      [format, buffer],
      false);
  }

  readAvailableTypes(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec,
      [buffer],
      false);
  }

  readText(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ClipboardHost_ReadText_ParamsSpec,
      blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec,
      [buffer],
      false);
  }

  readHtml(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ClipboardHost_ReadHtml_ParamsSpec,
      blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec,
      [buffer],
      false);
  }

  readSvg(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ClipboardHost_ReadSvg_ParamsSpec,
      blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec,
      [buffer],
      false);
  }

  readRtf(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ClipboardHost_ReadRtf_ParamsSpec,
      blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec,
      [buffer],
      false);
  }

  readPng(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ClipboardHost_ReadPng_ParamsSpec,
      blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec,
      [buffer],
      false);
  }

  readFiles(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.ClipboardHost_ReadFiles_ParamsSpec,
      blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec,
      [buffer],
      false);
  }

  readDataTransferCustomData(buffer, type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec,
      blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec,
      [buffer, type],
      false);
  }

  readAvailableCustomAndStandardFormats() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec,
      blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec,
      [],
      false);
  }

  readUnsanitizedCustomFormat(format) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec,
      blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec,
      [format],
      false);
  }

  writeText(text) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.ClipboardHost_WriteText_ParamsSpec,
      null,
      [text],
      false);
  }

  writeHtml(markup, url) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.ClipboardHost_WriteHtml_ParamsSpec,
      null,
      [markup, url],
      false);
  }

  writeSvg(markup) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.ClipboardHost_WriteSvg_ParamsSpec,
      null,
      [markup],
      false);
  }

  writeSmartPasteMarker() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec,
      null,
      [],
      false);
  }

  writeDataTransferCustomData(data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec,
      null,
      [data],
      false);
  }

  writeBookmark(url, title) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec,
      null,
      [url, title],
      false);
  }

  writeImage(image) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.ClipboardHost_WriteImage_ParamsSpec,
      null,
      [image],
      false);
  }

  writeUnsanitizedCustomFormat(format, data) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec,
      null,
      [format, data],
      false);
  }

  commitWrite() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.ClipboardHost_CommitWrite_ParamsSpec,
      null,
      [],
      false);
  }

  writeStringToFindPboard(text) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec,
      null,
      [text],
      false);
  }

  getPlatformPermissionState() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec,
      blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec,
      [],
      false);
  }

  registerClipboardListener(listener) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
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

blink.mojom.ClipboardHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ClipboardHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadHtml_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadSvg_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadRtf_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadPng_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteHtml_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteSvg_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_CommitWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec.$.structSpec);
          const result = this.impl.getSequenceNumber(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_GetSequenceNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.isFormatAvailable(params.format, params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_IsFormatAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec.$.structSpec);
          const result = this.impl.readAvailableTypes(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadAvailableTypes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadText_ParamsSpec.$.structSpec);
          const result = this.impl.readText(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadHtml_ParamsSpec.$.structSpec);
          const result = this.impl.readHtml(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadHtml_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadSvg_ParamsSpec.$.structSpec);
          const result = this.impl.readSvg(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadSvg_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadRtf_ParamsSpec.$.structSpec);
          const result = this.impl.readRtf(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadRtf_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadPng_ParamsSpec.$.structSpec);
          const result = this.impl.readPng(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadPng_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadFiles_ParamsSpec.$.structSpec);
          const result = this.impl.readFiles(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec.$.structSpec);
          const result = this.impl.readDataTransferCustomData(params.buffer, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadDataTransferCustomData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec.$.structSpec);
          const result = this.impl.readAvailableCustomAndStandardFormats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
          const result = this.impl.readUnsanitizedCustomFormat(params.format);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteText_ParamsSpec.$.structSpec);
          const result = this.impl.writeText(params.text);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteHtml_ParamsSpec.$.structSpec);
          const result = this.impl.writeHtml(params.markup, params.url);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteSvg_ParamsSpec.$.structSpec);
          const result = this.impl.writeSvg(params.markup);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec.$.structSpec);
          const result = this.impl.writeSmartPasteMarker();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec.$.structSpec);
          const result = this.impl.writeDataTransferCustomData(params.data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.writeBookmark(params.url, params.title);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteImage_ParamsSpec.$.structSpec);
          const result = this.impl.writeImage(params.image);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec.$.structSpec);
          const result = this.impl.writeUnsanitizedCustomFormat(params.format, params.data);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_CommitWrite_ParamsSpec.$.structSpec);
          const result = this.impl.commitWrite();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec.$.structSpec);
          const result = this.impl.writeStringToFindPboard(params.text);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec.$.structSpec);
          const result = this.impl.getPlatformPermissionState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ClipboardHost_GetPlatformPermissionState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec.$.structSpec);
          const result = this.impl.registerClipboardListener(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ClipboardHostReceiver = blink.mojom.ClipboardHostReceiver;

blink.mojom.ClipboardHostPtr = blink.mojom.ClipboardHostRemote;
blink.mojom.ClipboardHostRequest = blink.mojom.ClipboardHostPendingReceiver;

