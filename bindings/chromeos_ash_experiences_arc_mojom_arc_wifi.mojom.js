// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_wifi.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: WifiScanResult
arc.mojom.mojom.WifiScanResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WifiScanResult',
      packedSize: 40,
      fields: [
        { name: 'hex_ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frequency', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'security', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.SecurityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'rssi', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ArcWifiHost
arc.mojom.mojom.ArcWifiHost = {};

arc.mojom.mojom.ArcWifiHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ArcWifiHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ArcWifiHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ArcWifiHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ArcWifiHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWifiEnabledState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec,
      arc.mojom.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec,
      []);
  }

  setWifiEnabledState(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec,
      [enabled]);
  }

  startScan() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.ArcWifiHost_StartScan_ParamsSpec,
      null,
      []);
  }

  getScanResults() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.ArcWifiHost_GetScanResults_ParamsSpec,
      arc.mojom.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.ArcWifiHost.getRemote = function() {
  let remote = new arc.mojom.mojom.ArcWifiHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetWifiEnabledState
arc.mojom.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.GetWifiEnabledState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.GetWifiEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWifiEnabledState
arc.mojom.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.SetWifiEnabledState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.SetWifiEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartScan
arc.mojom.mojom.ArcWifiHost_StartScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.StartScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetScanResults
arc.mojom.mojom.ArcWifiHost_GetScanResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.GetScanResults_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiHost.GetScanResults_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.WifiScanResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ArcWifiHostPtr = arc.mojom.mojom.ArcWifiHostRemote;
arc.mojom.mojom.ArcWifiHostRequest = arc.mojom.mojom.ArcWifiHostPendingReceiver;


// Interface: ArcWifiInstance
arc.mojom.mojom.ArcWifiInstance = {};

arc.mojom.mojom.ArcWifiInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ArcWifiInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcWifiInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ArcWifiInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ArcWifiInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ArcWifiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.ArcWifiInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  wifiEnabledStateChanged(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  scanCompleted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.ArcWifiInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.ArcWifiInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcWifiInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.ArcWifiInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ArcWifiHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WifiEnabledStateChanged
arc.mojom.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiInstance.WifiEnabledStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScanCompleted
arc.mojom.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiInstance.ScanCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ArcWifiInstancePtr = arc.mojom.mojom.ArcWifiInstanceRemote;
arc.mojom.mojom.ArcWifiInstanceRequest = arc.mojom.mojom.ArcWifiInstancePendingReceiver;

