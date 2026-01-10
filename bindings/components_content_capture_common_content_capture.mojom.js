// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture.mojom
// Module: content_capture.mojom

'use strict';

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};

content_capture.mojom.ContentCaptureReceiver = {};
content_capture.mojom.ContentCaptureReceiver.$interfaceName = 'content_capture.mojom.ContentCaptureReceiver';
content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureSender = {};
content_capture.mojom.ContentCaptureSender.$interfaceName = 'content_capture.mojom.ContentCaptureSender';
content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec = { $: {} };
content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec = { $: {} };

// Interface: ContentCaptureReceiver
mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_Params', [
      mojo.internal.StructField('data', 0, 0, content_capture.mojom.ContentCaptureDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('first_data', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_Params', [
      mojo.internal.StructField('data', 0, 0, content_capture.mojom.ContentCaptureDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec, 'content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content_capture.mojom.ContentCaptureReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_capture.mojom.ContentCaptureReceiverRemote = class {
  static get $interfaceName() {
    return 'content_capture.mojom.ContentCaptureReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_capture.mojom.ContentCaptureReceiverPendingReceiver,
      handle);
    this.$ = new content_capture.mojom.ContentCaptureReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_capture.mojom.ContentCaptureReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didCompleteBatchCaptureContent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec,
      null,
      [],
      false);
  }

  didCaptureContent(data, first_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec,
      null,
      [data, first_data],
      false);
  }

  didUpdateContent(data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec,
      null,
      [data],
      false);
  }

  didRemoveContent(ids) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec,
      null,
      [ids],
      false);
  }

};

content_capture.mojom.ContentCaptureReceiver.getRemote = function() {
  let remote = new content_capture.mojom.ContentCaptureReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_capture.mojom.ContentCaptureReceiver',
    'context');
  return remote.$;
};

content_capture.mojom.ContentCaptureReceiverReceiver = class {
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
        
        // Try Method 0: DidCompleteBatchCaptureContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCompleteBatchCaptureContent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidCaptureContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCaptureContent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidUpdateContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateContent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidRemoveContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidRemoveContent (3)');
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
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidCompleteBatchCaptureContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCompleteBatchCaptureContent');
          const result = this.impl.didCompleteBatchCaptureContent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidCaptureContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCaptureContent');
          const result = this.impl.didCaptureContent(params.data, params.first_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidUpdateContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didUpdateContent');
          const result = this.impl.didUpdateContent(params.data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureReceiver_DidRemoveContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didRemoveContent');
          const result = this.impl.didRemoveContent(params.ids);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content_capture.mojom.ContentCaptureReceiverReceiver = content_capture.mojom.ContentCaptureReceiverReceiver;

content_capture.mojom.ContentCaptureReceiverPtr = content_capture.mojom.ContentCaptureReceiverRemote;
content_capture.mojom.ContentCaptureReceiverRequest = content_capture.mojom.ContentCaptureReceiverPendingReceiver;


// Interface: ContentCaptureSender
mojo.internal.Struct(
    content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec, 'content_capture.mojom.ContentCaptureSender_StartCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec, 'content_capture.mojom.ContentCaptureSender_StopCapture_Params', [
    ],
    [[0, 8]]);

content_capture.mojom.ContentCaptureSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_capture.mojom.ContentCaptureSenderRemote = class {
  static get $interfaceName() {
    return 'content_capture.mojom.ContentCaptureSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_capture.mojom.ContentCaptureSenderPendingReceiver,
      handle);
    this.$ = new content_capture.mojom.ContentCaptureSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_capture.mojom.ContentCaptureSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startCapture() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec,
      null,
      [],
      false);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec,
      null,
      [],
      false);
  }

};

content_capture.mojom.ContentCaptureSender.getRemote = function() {
  let remote = new content_capture.mojom.ContentCaptureSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_capture.mojom.ContentCaptureSender',
    'context');
  return remote.$;
};

content_capture.mojom.ContentCaptureSenderReceiver = class {
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
        
        // Try Method 0: StartCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartCapture (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopCapture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureSender_StartCapture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startCapture');
          const result = this.impl.startCapture();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_capture.mojom.ContentCaptureSender_StopCapture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopCapture');
          const result = this.impl.stopCapture();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content_capture.mojom.ContentCaptureSenderReceiver = content_capture.mojom.ContentCaptureSenderReceiver;

content_capture.mojom.ContentCaptureSenderPtr = content_capture.mojom.ContentCaptureSenderRemote;
content_capture.mojom.ContentCaptureSenderRequest = content_capture.mojom.ContentCaptureSenderPendingReceiver;

