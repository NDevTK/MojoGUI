// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

extensions.mojom.RendererHost = {};
extensions.mojom.RendererHost.$interfaceName = 'extensions.mojom.RendererHost';
extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec = { $: {} };

// Interface: RendererHost
mojo.internal.Struct(
    extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddAPIActionToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddEventToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddDOMActionToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_title', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_type', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec, 'extensions.mojom.RendererHost_GetMessageBundle_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec, 'extensions.mojom.RendererHost_GetMessageBundle_ResponseParams', [
      mojo.internal.StructField('message_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.RendererHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.RendererHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.RendererHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.RendererHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.RendererHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAPIActionToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra],
      false);
  }

  addEventToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra],
      false);
  }

  addDOMActionToActivityLog(extension_id, call_name, args, url, url_title, call_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, url, url_title, call_type],
      false);
  }

  getMessageBundle(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec,
      extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec,
      [extension_id],
      false);
  }

};

extensions.mojom.RendererHost.getRemote = function() {
  let remote = new extensions.mojom.RendererHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererHost',
    'context');
  return remote.$;
};

extensions.mojom.RendererHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddAPIActionToActivityLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAPIActionToActivityLog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddEventToActivityLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEventToActivityLog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddDOMActionToActivityLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDOMActionToActivityLog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetMessageBundle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMessageBundle (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addAPIActionToActivityLog');
          const result = this.impl.addAPIActionToActivityLog(params.extension_id, params.call_name, params.args, params.extra);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addEventToActivityLog');
          const result = this.impl.addEventToActivityLog(params.extension_id, params.call_name, params.args, params.extra);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addDOMActionToActivityLog');
          const result = this.impl.addDOMActionToActivityLog(params.extension_id, params.call_name, params.args, params.url, params.url_title, params.call_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getMessageBundle');
          const result = this.impl.getMessageBundle(params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec);
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

extensions.mojom.RendererHostReceiver = extensions.mojom.RendererHostReceiver;

extensions.mojom.RendererHostPtr = extensions.mojom.RendererHostRemote;
extensions.mojom.RendererHostRequest = extensions.mojom.RendererHostPendingReceiver;

