// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_support.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: StartSupportSessionError
remoting.mojom.mojom.StartSupportSessionError = {
  kExistingAdminSession: 0,
};
remoting.mojom.mojom.StartSupportSessionErrorSpec = { $: mojo.internal.Enum() };

// Union: StartSupportSessionResponse
remoting.mojom.mojom.StartSupportSessionResponseSpec = { $: mojo.internal.Union(
    'remoting.mojom.StartSupportSessionResponse', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(remoting.mojom.SupportHostObserverRemote),
      }},
      'support_session_error': {
        'ordinal': 1,
        'type': remoting.mojom.StartSupportSessionErrorSpec,
      }},
    })
};

// Struct: SupportHostDetails
remoting.mojom.mojom.SupportHostDetailsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostDetails',
      packedSize: 24,
      fields: [
        { name: 'host_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'supported_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SupportSessionParams
remoting.mojom.mojom.SupportSessionParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportSessionParams',
      packedSize: 40,
      fields: [
        { name: 'user_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'oauth_access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suppress_user_dialogs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suppress_notifications', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'terminate_upon_input', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'curtain_local_user_session', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'authorized_helper', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 2, packedSize: 40}]
    }
  }
};

// Struct: NatPolicyState
remoting.mojom.mojom.NatPolicyStateSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.NatPolicyState',
      packedSize: 16,
      fields: [
        { name: 'nat_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'relay_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SupportHostObserver
remoting.mojom.mojom.SupportHostObserver = {};

remoting.mojom.mojom.SupportHostObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.SupportHostObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SupportHostObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.SupportHostObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.SupportHostObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.SupportHostObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHostStateStarting() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec,
      null,
      []);
  }

  onHostStateRequestedAccessCode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec,
      null,
      []);
  }

  onHostStateReceivedAccessCode(access_code, lifetime) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec,
      null,
      [access_code, lifetime]);
  }

  onHostStateConnecting() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec,
      null,
      []);
  }

  onHostStateConnected(remote_username) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec,
      null,
      [remote_username]);
  }

  onHostStateDisconnected(disconnect_reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec,
      null,
      [disconnect_reason]);
  }

  onNatPolicyChanged(nat_policy_state) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec,
      null,
      [nat_policy_state]);
  }

  onHostStateError(error_code) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnHostStateError_ParamsSpec,
      null,
      [error_code]);
  }

  onPolicyError() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnPolicyError_ParamsSpec,
      null,
      []);
  }

  onInvalidDomainError() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remoting.mojom.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec,
      null,
      []);
  }

};

remoting.mojom.mojom.SupportHostObserver.getRemote = function() {
  let remote = new remoting.mojom.mojom.SupportHostObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SupportHostObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHostStateStarting
remoting.mojom.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateStarting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnHostStateRequestedAccessCode
remoting.mojom.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateRequestedAccessCode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnHostStateReceivedAccessCode
remoting.mojom.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateReceivedAccessCode_Params',
      packedSize: 24,
      fields: [
        { name: 'access_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'lifetime', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnHostStateConnecting
remoting.mojom.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateConnecting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnHostStateConnected
remoting.mojom.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHostStateDisconnected
remoting.mojom.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'disconnect_reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNatPolicyChanged
remoting.mojom.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnNatPolicyChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'nat_policy_state', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.NatPolicyStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHostStateError
remoting.mojom.mojom.SupportHostObserver_OnHostStateError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnHostStateError_Params',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPolicyError
remoting.mojom.mojom.SupportHostObserver_OnPolicyError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnPolicyError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnInvalidDomainError
remoting.mojom.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SupportHostObserver.OnInvalidDomainError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.SupportHostObserverPtr = remoting.mojom.mojom.SupportHostObserverRemote;
remoting.mojom.mojom.SupportHostObserverRequest = remoting.mojom.mojom.SupportHostObserverPendingReceiver;

