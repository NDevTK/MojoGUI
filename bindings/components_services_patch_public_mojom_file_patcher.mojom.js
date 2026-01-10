// Auto-generated MojoJS binding
// Source: chromium_src/components/services/patch/public/mojom/file_patcher.mojom
// Module: patch.mojom

'use strict';

// Module namespace
var patch = patch || {};
patch.mojom = patch.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

patch.mojom.ZucchiniStatusSpec = { $: mojo.internal.Enum() };
patch.mojom.FilePatcher = {};
patch.mojom.FilePatcher.$interfaceName = 'patch.mojom.FilePatcher';
patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec = { $: {} };
patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec = { $: {} };

// Enum: ZucchiniStatus
patch.mojom.ZucchiniStatus = {
  kStatusSuccess: 0,
  kStatusInvalidParam: 1,
  kStatusFileReadError: 2,
  kStatusFileWriteError: 3,
  kStatusPatchReadError: 4,
  kStatusPatchWriteError: 5,
  kStatusInvalidOldImage: 6,
  kStatusInvalidNewImage: 7,
  kStatusDiskFull: 8,
  kStatusIoError: 9,
  kStatusFatal: 10,
};

// Interface: FilePatcher
mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec, 'patch.mojom.FilePatcher_PatchFilePuffPatch_Params', [
      mojo.internal.StructField('input_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('patch_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 16, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec, 'patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec, 'patch.mojom.FilePatcher_PatchFileZucchini_Params', [
      mojo.internal.StructField('input_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('patch_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 16, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec, 'patch.mojom.FilePatcher_PatchFileZucchini_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, patch.mojom.ZucchiniStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

patch.mojom.FilePatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

patch.mojom.FilePatcherRemote = class {
  static get $interfaceName() {
    return 'patch.mojom.FilePatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      patch.mojom.FilePatcherPendingReceiver,
      handle);
    this.$ = new patch.mojom.FilePatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

patch.mojom.FilePatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  patchFilePuffPatch(input_file, patch_file, output_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec,
      patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec,
      [input_file, patch_file, output_file],
      false);
  }

  patchFileZucchini(input_file, patch_file, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec,
      patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec,
      [input_file, patch_file, output_file],
      false);
  }

};

patch.mojom.FilePatcher.getRemote = function() {
  let remote = new patch.mojom.FilePatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'patch.mojom.FilePatcher',
    'context');
  return remote.$;
};

patch.mojom.FilePatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: PatchFilePuffPatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PatchFilePuffPatch (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: PatchFileZucchini
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PatchFileZucchini (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(patch.mojom.FilePatcher_PatchFilePuffPatch_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.patchFilePuffPatch');
          const result = this.impl.patchFilePuffPatch(params.input_file, params.patch_file, params.output_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, patch.mojom.FilePatcher_PatchFilePuffPatch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(patch.mojom.FilePatcher_PatchFileZucchini_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.patchFileZucchini');
          const result = this.impl.patchFileZucchini(params.input_file, params.patch_file, params.output_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, patch.mojom.FilePatcher_PatchFileZucchini_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

patch.mojom.FilePatcherReceiver = patch.mojom.FilePatcherReceiver;

patch.mojom.FilePatcherPtr = patch.mojom.FilePatcherRemote;
patch.mojom.FilePatcherRequest = patch.mojom.FilePatcherPendingReceiver;

