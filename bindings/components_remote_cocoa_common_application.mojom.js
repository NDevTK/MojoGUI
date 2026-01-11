// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/application.mojom
// Module: remote_cocoa.mojom

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
    this.ordinals = window.mojoScrambler.getOrdinals('StubInterface', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('StubInterface', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
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
  createAlert(alert_bridge_receiver) {
    return this.$.createAlert(alert_bridge_receiver);
  }
  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    return this.$.createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host);
  }
  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    return this.$.createRenderWidgetHostNSView(view_id, host, view_receiver);
  }
  createSystemMediaControlsBridge(receiver, host) {
    return this.$.createSystemMediaControlsBridge(receiver, host);
  }
  createWebContentsNSView(view_id, host, view_receiver) {
    return this.$.createWebContentsNSView(view_id, host, view_receiver);
  }
  forwardCutCopyPaste(command) {
    return this.$.forwardCutCopyPaste(command);
  }
};

remote_cocoa.mojom.ApplicationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Application', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAlert(alert_bridge_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.Application_CreateAlert_ParamsSpec,
      null,
      [alert_bridge_receiver],
      false);
  }

  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec,
      null,
      [bridge_id, window_receiver, host, text_input_host],
      false);
  }

  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  createSystemMediaControlsBridge(receiver, host) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec,
      null,
      [receiver, host],
      false);
  }

  createWebContentsNSView(view_id, host, view_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  forwardCutCopyPaste(command) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Application', [
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
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateAlert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateAlert_ParamsSpec.$.structSpec);
          const result = this.impl.createAlert(params.alert_bridge_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec.$.structSpec);
          const result = this.impl.createNativeWidgetNSWindow(params.bridge_id, params.window_receiver, params.host, params.text_input_host);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec.$.structSpec);
          const result = this.impl.createRenderWidgetHostNSView(params.view_id, params.host, params.view_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec.$.structSpec);
          const result = this.impl.createSystemMediaControlsBridge(params.receiver, params.host);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec.$.structSpec);
          const result = this.impl.createWebContentsNSView(params.view_id, params.host, params.view_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec.$.structSpec);
          const result = this.impl.forwardCutCopyPaste(params.command);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remote_cocoa.mojom.ApplicationReceiver = remote_cocoa.mojom.ApplicationReceiver;

remote_cocoa.mojom.ApplicationPtr = remote_cocoa.mojom.ApplicationRemote;
remote_cocoa.mojom.ApplicationRequest = remote_cocoa.mojom.ApplicationPendingReceiver;

