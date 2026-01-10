// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var device = device || {};

arc.mojom.UsbHostHost = {};
arc.mojom.UsbHostHost.$interfaceName = 'arc.mojom.UsbHostHost';
arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance = {};
arc.mojom.UsbHostInstance.$interfaceName = 'arc.mojom.UsbHostInstance';
arc.mojom.UsbHostInstance_Init_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbHostHost
mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('usb_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interactive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('authorized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.UsbHostHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(guid, pkg_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.UsbHostHost_OpenDevice_ParamsSpec,
      arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec,
      [guid, pkg_name],
      false);
  }

  getDeviceInfo(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec,
      arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec,
      [guid],
      false);
  }

  requestPermission(guid, pkg_name, interactive) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostHost_RequestPermission_ParamsSpec,
      arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec,
      [guid, pkg_name, interactive],
      false);
  }

};

arc.mojom.UsbHostHost.getRemote = function() {
  let remote = new arc.mojom.UsbHostHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostHost',
    'context');
  return remote.$;
};

arc.mojom.UsbHostHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(3, 0); // Default ordinal 3 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: OpenDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
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
          const params = decoder.decodeStruct(arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDevice');
          const result = this.impl.openDevice(params.guid, params.pkg_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfo');
          const result = this.impl.getDeviceInfo(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.guid, params.pkg_name, params.interactive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec);
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

arc.mojom.UsbHostHostReceiver = arc.mojom.UsbHostHostReceiver;

arc.mojom.UsbHostHostPtr = arc.mojom.UsbHostHostRemote;
arc.mojom.UsbHostHostRequest = arc.mojom.UsbHostHostPendingReceiver;


// Interface: UsbHostInstance
mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ParamsSpec, 'arc.mojom.UsbHostInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.UsbHostHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ResponseParamsSpec, 'arc.mojom.UsbHostInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceAdded_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceRemoved_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

arc.mojom.UsbHostInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.UsbHostInstance_Init_ParamsSpec,
      arc.mojom.UsbHostInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onDeviceAdded(guid, event_receiver_packages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

  onDeviceRemoved(guid, event_receiver_packages) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

};

arc.mojom.UsbHostInstance.getRemote = function() {
  let remote = new arc.mojom.UsbHostInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostInstance',
    'context');
  return remote.$;
};

arc.mojom.UsbHostInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnDeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceAdded (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnDeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRemoved (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
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
          const params = decoder.decodeStruct(arc.mojom.UsbHostInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceAdded');
          const result = this.impl.onDeviceAdded(params.guid, params.event_receiver_packages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRemoved');
          const result = this.impl.onDeviceRemoved(params.guid, params.event_receiver_packages);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.UsbHostInstanceReceiver = arc.mojom.UsbHostInstanceReceiver;

arc.mojom.UsbHostInstancePtr = arc.mojom.UsbHostInstanceRemote;
arc.mojom.UsbHostInstanceRequest = arc.mojom.UsbHostInstancePendingReceiver;

