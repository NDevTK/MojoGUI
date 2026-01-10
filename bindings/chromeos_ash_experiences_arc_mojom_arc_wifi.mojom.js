// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/arc_wifi.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: WifiScanResult
arc.mojom.WifiScanResultSpec = {
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
arc.mojom.ArcWifiHost = {};

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
};

arc.mojom.ArcWifiHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWifiEnabledState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec,
      []);
  }

  setWifiEnabledState(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec,
      [enabled]);
  }

  startScan() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ArcWifiHost_StartScan_ParamsSpec,
      null,
      []);
  }

  getScanResults() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec,
      arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetWifiEnabledState
arc.mojom.ArcWifiHost_GetWifiEnabledState_ParamsSpec = {
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

arc.mojom.ArcWifiHost_GetWifiEnabledState_ResponseParamsSpec = {
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
arc.mojom.ArcWifiHost_SetWifiEnabledState_ParamsSpec = {
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

arc.mojom.ArcWifiHost_SetWifiEnabledState_ResponseParamsSpec = {
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
arc.mojom.ArcWifiHost_StartScan_ParamsSpec = {
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
arc.mojom.ArcWifiHost_GetScanResults_ParamsSpec = {
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

arc.mojom.ArcWifiHost_GetScanResults_ResponseParamsSpec = {
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
arc.mojom.ArcWifiHostPtr = arc.mojom.ArcWifiHostRemote;
arc.mojom.ArcWifiHostRequest = arc.mojom.ArcWifiHostPendingReceiver;


// Interface: ArcWifiInstance
arc.mojom.ArcWifiInstance = {};

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
};

arc.mojom.ArcWifiInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ArcWifiInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  wifiEnabledStateChanged(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [enabled]);
  }

  scanCompleted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec,
      null,
      []);
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

// ParamsSpec for Init
arc.mojom.ArcWifiInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcWifiInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WifiEnabledStateChanged
arc.mojom.ArcWifiInstance_WifiEnabledStateChanged_ParamsSpec = {
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
arc.mojom.ArcWifiInstance_ScanCompleted_ParamsSpec = {
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
arc.mojom.ArcWifiInstancePtr = arc.mojom.ArcWifiInstanceRemote;
arc.mojom.ArcWifiInstanceRequest = arc.mojom.ArcWifiInstancePendingReceiver;

