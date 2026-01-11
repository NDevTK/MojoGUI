// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_wifi.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WifiScanResultSpec = { $: {} };
arc.mojom.ArcWifiHost = {};
arc.mojom.ArcWifiHost.$interfaceName = 'arc.mojom.ArcWifiHost';
arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_StartScan_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec = { $: {} };
arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance = {};
arc.mojom.ArcWifiInstance.$interfaceName = 'arc.mojom.ArcWifiInstance';
arc.mojom.ArcWifiInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec = { $: {} };
arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec = { $: {} };

// Struct: WifiScanResult
mojo.internal.Struct(
    arc.mojom.WifiScanResultSpec, 'arc.mojom.WifiScanResult', [
      mojo.internal.StructField('hex_ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rssi', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ArcWifiHost
mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.ArcWifiHost_GetWifiEnabledState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec, 'arc.mojom.ArcWifiHost_SetWifiEnabledState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('enabled_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_StartScan_ParamsSpec, 'arc.mojom.ArcWifiHost_StartScan_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec, 'arc.mojom.ArcWifiHost_GetScanResults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec, 'arc.mojom.ArcWifiHost_GetScanResults_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.Array(arc.mojom.WifiScanResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ArcWifiHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcWifiHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcWifiHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcWifiHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWifiEnabledState() {
    return this.$.getWifiEnabledState();
  }
  setWifiEnabledState(enabled) {
    return this.$.setWifiEnabledState(enabled);
  }
  startScan() {
    return this.$.startScan();
  }
  getScanResults() {
    return this.$.getScanResults();
  }
};

arc.mojom.ArcWifiHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcWifiHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  getWifiEnabledState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec,
      [],
      false);
  }

  setWifiEnabledState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec,
      [enabled],
      false);
  }

  startScan() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ArcWifiHost_StartScan_ParamsSpec,
      null,
      [],
      false);
  }

  getScanResults() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec,
      arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.ArcWifiHost.getRemote = function() {
  let remote = new arc.mojom.ArcWifiHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiHost',
    'context');
  return remote.$;
};

arc.mojom.ArcWifiHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcWifiHost', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcWifiHost_StartScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec.$.structSpec);
          const result = this.impl.getWifiEnabledState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec.$.structSpec);
          const result = this.impl.setWifiEnabledState(params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiHost_StartScan_ParamsSpec.$.structSpec);
          const result = this.impl.startScan();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec.$.structSpec);
          const result = this.impl.getScanResults();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.ArcWifiHostReceiver = arc.mojom.ArcWifiHostReceiver;

arc.mojom.ArcWifiHostPtr = arc.mojom.ArcWifiHostRemote;
arc.mojom.ArcWifiHostRequest = arc.mojom.ArcWifiHostPendingReceiver;


// Interface: ArcWifiInstance
mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_Init_ParamsSpec, 'arc.mojom.ArcWifiInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ArcWifiHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec, 'arc.mojom.ArcWifiInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec, 'arc.mojom.ArcWifiInstance_ScanCompleted_Params', [
    ],
    [[0, 8]]);

arc.mojom.ArcWifiInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcWifiInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcWifiInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcWifiInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  wifiEnabledStateChanged(enabled) {
    return this.$.wifiEnabledStateChanged(enabled);
  }
  scanCompleted() {
    return this.$.scanCompleted();
  }
};

arc.mojom.ArcWifiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ArcWifiInstance', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ArcWifiInstance_Init_ParamsSpec,
      arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  wifiEnabledStateChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  scanCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.ArcWifiInstance.getRemote = function() {
  let remote = new arc.mojom.ArcWifiInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiInstance',
    'context');
  return remote.$;
};

arc.mojom.ArcWifiInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ArcWifiInstance', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.ArcWifiInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ArcWifiInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.wifiEnabledStateChanged(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.scanCompleted();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.ArcWifiInstanceReceiver = arc.mojom.ArcWifiInstanceReceiver;

arc.mojom.ArcWifiInstancePtr = arc.mojom.ArcWifiInstanceRemote;
arc.mojom.ArcWifiInstanceRequest = arc.mojom.ArcWifiInstancePendingReceiver;

