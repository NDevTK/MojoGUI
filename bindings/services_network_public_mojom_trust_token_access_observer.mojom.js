// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_token_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Union: TrustTokenAccessDetails
network.mojom.TrustTokenAccessDetailsSpec = { $: mojo.internal.Union(
    'network.mojom.TrustTokenAccessDetails', {
      'issuance': {
        'ordinal': 0,
        'type': network.mojom.TrustTokenIssuanceDetailsSpec,
      }},
      'redemption': {
        'ordinal': 1,
        'type': network.mojom.TrustTokenRedemptionDetailsSpec,
      }},
      'signing': {
        'ordinal': 2,
        'type': network.mojom.TrustTokenSigningDetailsSpec,
      }},
    })
};

// Struct: TrustTokenIssuanceDetails
network.mojom.TrustTokenIssuanceDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenIssuanceDetails',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'issuer', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'blocked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TrustTokenRedemptionDetails
network.mojom.TrustTokenRedemptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenRedemptionDetails',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'issuer', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'blocked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TrustTokenSigningDetails
network.mojom.TrustTokenSigningDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenSigningDetails',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'blocked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TrustTokenAccessObserver
network.mojom.TrustTokenAccessObserver = {};

network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_Params',
      packedSize: 24,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: network.mojom.TrustTokenAccessDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenAccessObserver_Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TrustTokenAccessObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TrustTokenAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TrustTokenAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustTokenAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TrustTokenAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.TrustTokenAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TrustTokenAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTrustTokensAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec,
      null,
      [details]);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec,
      null,
      [listener]);
  }

};

network.mojom.TrustTokenAccessObserver.getRemote = function() {
  let remote = new network.mojom.TrustTokenAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustTokenAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTrustTokensAccessed
network.mojom.TrustTokenAccessObserver_OnTrustTokensAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenAccessObserver.OnTrustTokensAccessed_Params',
      packedSize: 24,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: network.mojom.TrustTokenAccessDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.TrustTokenAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustTokenAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TrustTokenAccessObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.TrustTokenAccessObserverPtr = network.mojom.TrustTokenAccessObserverRemote;
network.mojom.TrustTokenAccessObserverRequest = network.mojom.TrustTokenAccessObserverPendingReceiver;

