// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/application.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var system_media_controls = system_media_controls || {};

remote_cocoa.mojom.CutCopyPasteCommandSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.StubInterface = {};
remote_cocoa.mojom.StubInterface.$interfaceName = 'remote_cocoa.mojom.StubInterface';
remote_cocoa.mojom.Application = {};
remote_cocoa.mojom.Application.$interfaceName = 'remote_cocoa.mojom.Application';
remote_cocoa.mojom.Application_CreateAlert_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec = { $: {} };

// Enum: CutCopyPasteCommand
remote_cocoa.mojom.CutCopyPasteCommand = {
  kCut: 0,
  kCopy: 1,
  kPaste: 2,
};

// Interface: StubInterface
remote_cocoa.mojom.StubInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.StubInterfaceRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.StubInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.StubInterfacePendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.StubInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.StubInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

remote_cocoa.mojom.StubInterface.getRemote = function() {
  let remote = new remote_cocoa.mojom.StubInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.StubInterface',
    'context');
  return remote.$;
};

remote_cocoa.mojom.StubInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.StubInterfaceReceiver = remote_cocoa.mojom.StubInterfaceReceiver;

remote_cocoa.mojom.StubInterfacePtr = remote_cocoa.mojom.StubInterfaceRemote;
remote_cocoa.mojom.StubInterfaceRequest = remote_cocoa.mojom.StubInterfacePendingReceiver;


// Interface: Application
mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateAlert_ParamsSpec, 'remote_cocoa.mojom.Application_CreateAlert_Params', [
      mojo.internal.StructField('alert_bridge_receiver', 0, 0, mojo.internal.InterfaceRequest(remote_cocoa.mojom.AlertBridgeRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec, 'remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_Params', [
      mojo.internal.StructField('bridge_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('window_receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('host', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('text_input_host', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec, 'remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_Params', [
      mojo.internal.StructField('view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('view_receiver', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec, 'remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(system_media_controls.mojom.SystemMediaControlsRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(system_media_controls.mojom.SystemMediaControlsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec, 'remote_cocoa.mojom.Application_CreateWebContentsNSView_Params', [
      mojo.internal.StructField('view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('view_receiver', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec, 'remote_cocoa.mojom.Application_ForwardCutCopyPaste_Params', [
      mojo.internal.StructField('command', 0, 0, remote_cocoa.mojom.CutCopyPasteCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remote_cocoa.mojom.ApplicationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.ApplicationRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.Application';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.ApplicationPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.ApplicationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.ApplicationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAlert(alert_bridge_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.Application_CreateAlert_ParamsSpec,
      null,
      [alert_bridge_receiver],
      false);
  }

  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec,
      null,
      [bridge_id, window_receiver, host, text_input_host],
      false);
  }

  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  createSystemMediaControlsBridge(receiver, host) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec,
      null,
      [receiver, host],
      false);
  }

  createWebContentsNSView(view_id, host, view_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  forwardCutCopyPaste(command) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec,
      null,
      [command],
      false);
  }

};

remote_cocoa.mojom.Application.getRemote = function() {
  let remote = new remote_cocoa.mojom.ApplicationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.Application',
    'context');
  return remote.$;
};

remote_cocoa.mojom.ApplicationReceiver = class {
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
        
        // Try Method 0: CreateAlert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateAlert_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAlert (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateNativeWidgetNSWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNativeWidgetNSWindow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateRenderWidgetHostNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRenderWidgetHostNSView (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateSystemMediaControlsBridge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSystemMediaControlsBridge (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateWebContentsNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebContentsNSView (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ForwardCutCopyPaste
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardCutCopyPaste (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateAlert_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createAlert');
          const result = this.impl.createAlert(params.alert_bridge_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createNativeWidgetNSWindow');
          const result = this.impl.createNativeWidgetNSWindow(params.bridge_id, params.window_receiver, params.host, params.text_input_host);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createRenderWidgetHostNSView');
          const result = this.impl.createRenderWidgetHostNSView(params.view_id, params.host, params.view_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createSystemMediaControlsBridge');
          const result = this.impl.createSystemMediaControlsBridge(params.receiver, params.host);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createWebContentsNSView');
          const result = this.impl.createWebContentsNSView(params.view_id, params.host, params.view_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.forwardCutCopyPaste');
          const result = this.impl.forwardCutCopyPaste(params.command);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.ApplicationReceiver = remote_cocoa.mojom.ApplicationReceiver;

remote_cocoa.mojom.ApplicationPtr = remote_cocoa.mojom.ApplicationRemote;
remote_cocoa.mojom.ApplicationRequest = remote_cocoa.mojom.ApplicationPendingReceiver;

