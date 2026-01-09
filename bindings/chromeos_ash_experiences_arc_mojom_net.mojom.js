// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: NetworkResult
arc.mojom.NetworkResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: GetNetworksRequestType
arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
};

// Enum: ConnectionStateType
arc.mojom.ConnectionStateType = {
  CONNECTED: 0,
  CONNECTING: 1,
  NOT_CONNECTED: 2,
  PORTAL: 3,
  ONLINE: 4,
};

// Enum: EapMethod
arc.mojom.EapMethod = {
  kNone: 0,
  kLeap: 1,
  kPeap: 2,
  kTls: 3,
  kTtls: 4,
};

// Enum: EapPhase2Method
arc.mojom.EapPhase2Method = {
  kNone: 0,
  kPap: 1,
  kMschap: 2,
  kMschapv2: 3,
};

// Enum: KeyManagement
arc.mojom.KeyManagement = {
  kNone: 0,
  kIeee8021X: 1,
  kFtEap: 2,
  kFtPsk: 3,
  kFtSae: 4,
  kWpaEap: 5,
  kWpaEapSha256: 6,
  kWpaPsk: 7,
  kSae: 8,
};

// Enum: IPAddressType
arc.mojom.IPAddressType = {
  IPV4: 0,
  IPV6: 1,
};

// Enum: TetheringClientState
arc.mojom.TetheringClientState = {
  CONFIRMED: 0,
  NOT_DETECTED: 1,
  SUSPECTED: 2,
};

// Enum: NetworkType
arc.mojom.NetworkType = {
  CELLULAR: 0,
  ETHERNET: 1,
  VPN: 2,
  WIFI: 3,
};

// Enum: MeteredOverride
arc.mojom.MeteredOverride = {
  kMetered: 0,
  kNotmetered: 1,
};

// Enum: Flag
arc.mojom.Flag = {
  DEPRECATED_ENABLE_ARC_HOST_VPN: 0,
};

// Enum: WifiBand
arc.mojom.WifiBand = {
  k2Ghz: 0,
  k5Ghz: 1,
  k6Ghz: 2,
  k60Ghz: 3,
};

// Enum: LohsStatus
arc.mojom.LohsStatus = {
  kSuccess: 0,
  kErrorGeneric: 1,
  kErrorIncompatibleMode: 2,
  kErrorTetheringDisallowed: 3,
};

// Enum: IpProtocol
arc.mojom.IpProtocol = {
  kTcp: 0,
  kUdp: 1,
};

// Enum: SocketEvent
arc.mojom.SocketEvent = {
  kOpen: 0,
  kClose: 1,
};

// Enum: QosCategory
arc.mojom.QosCategory = {
  kRealtimeInteractive: 0,
  kMultimediaConferencing: 1,
};

// Interface: NetHost
arc.mojom.NetHost = {};

arc.mojom.NetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NetHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NetHost.getRemote = function() {
  let remote = new arc.mojom.NetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NetHostPtr = arc.mojom.NetHostRemote;
arc.mojom.NetHostRequest = arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
arc.mojom.NetInstance = {};

arc.mojom.NetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NetInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NetInstance.getRemote = function() {
  let remote = new arc.mojom.NetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NetInstancePtr = arc.mojom.NetInstanceRemote;
arc.mojom.NetInstanceRequest = arc.mojom.NetInstancePendingReceiver;

