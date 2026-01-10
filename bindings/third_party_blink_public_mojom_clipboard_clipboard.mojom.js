// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
// Module: blink.mojom

'use strict';

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

blink.mojom.ClipboardListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnClipboardDataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClipboardDataChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardListener_OnClipboardDataChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClipboardDataChanged');
          const result = this.impl.onClipboardDataChanged(params.types, params.change_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ClipboardListenerSpec), null, false, 0, undefined),
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

blink.mojom.ClipboardHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetSequenceNumber
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSequenceNumber (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsFormatAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsFormatAvailable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadAvailableTypes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAvailableTypes (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReadText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadText (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReadHtml
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadHtml_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadHtml (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReadSvg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadSvg_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadSvg (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReadRtf
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadRtf_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadRtf (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReadPng
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadPng_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadPng (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReadFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadFiles_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadFiles (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReadDataTransferCustomData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDataTransferCustomData (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ReadAvailableCustomAndStandardFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAvailableCustomAndStandardFormats (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReadUnsanitizedCustomFormat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadUnsanitizedCustomFormat (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: WriteText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteText (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: WriteHtml
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteHtml_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteHtml (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: WriteSvg
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteSvg_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSvg (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: WriteSmartPasteMarker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSmartPasteMarker (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: WriteDataTransferCustomData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteDataTransferCustomData (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: WriteBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteBookmark (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: WriteImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteImage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: WriteUnsanitizedCustomFormat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteUnsanitizedCustomFormat (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: CommitWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_CommitWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitWrite (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: WriteStringToFindPboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteStringToFindPboard (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: GetPlatformPermissionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlatformPermissionState (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RegisterClipboardListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterClipboardListener (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_GetSequenceNumber_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSequenceNumber');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_IsFormatAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isFormatAvailable');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadAvailableTypes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readAvailableTypes');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readText');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadHtml_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readHtml');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadSvg_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readSvg');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadRtf_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readRtf');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadPng_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readPng');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadFiles_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readFiles');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadDataTransferCustomData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readDataTransferCustomData');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadAvailableCustomAndStandardFormats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readAvailableCustomAndStandardFormats');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_ReadUnsanitizedCustomFormat_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readUnsanitizedCustomFormat');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeText');
          const result = this.impl.writeText(params.text);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteHtml_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeHtml');
          const result = this.impl.writeHtml(params.markup, params.url);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteSvg_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeSvg');
          const result = this.impl.writeSvg(params.markup);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteSmartPasteMarker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeSmartPasteMarker');
          const result = this.impl.writeSmartPasteMarker();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteDataTransferCustomData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeDataTransferCustomData');
          const result = this.impl.writeDataTransferCustomData(params.data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteBookmark_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeBookmark');
          const result = this.impl.writeBookmark(params.url, params.title);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeImage');
          const result = this.impl.writeImage(params.image);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteUnsanitizedCustomFormat_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeUnsanitizedCustomFormat');
          const result = this.impl.writeUnsanitizedCustomFormat(params.format, params.data);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_CommitWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.commitWrite');
          const result = this.impl.commitWrite();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_WriteStringToFindPboard_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeStringToFindPboard');
          const result = this.impl.writeStringToFindPboard(params.text);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_GetPlatformPermissionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPlatformPermissionState');
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
          const params = decoder.decodeStruct(blink.mojom.ClipboardHost_RegisterClipboardListener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerClipboardListener');
          const result = this.impl.registerClipboardListener(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ClipboardHostReceiver = blink.mojom.ClipboardHostReceiver;

blink.mojom.ClipboardHostPtr = blink.mojom.ClipboardHostRemote;
blink.mojom.ClipboardHostRequest = blink.mojom.ClipboardHostPendingReceiver;

