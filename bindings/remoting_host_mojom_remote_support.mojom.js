// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_support.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.StartSupportSessionErrorSpec = { $: mojo.internal.Enum() };
remoting.mojom.StartSupportSessionResponseSpec = { $: {} };
remoting.mojom.SupportHostDetailsSpec = { $: {} };
remoting.mojom.SupportSessionParamsSpec = { $: {} };
remoting.mojom.NatPolicyStateSpec = { $: {} };
remoting.mojom.SupportHostObserver = {};
remoting.mojom.SupportHostObserver.$interfaceName = 'remoting.mojom.SupportHostObserver';
remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec = { $: {} };
remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec = { $: {} };

// Enum: StartSupportSessionError
remoting.mojom.StartSupportSessionError = {
  kUnknown: 0,
  kExistingAdminSession: 1,
};

// Union: StartSupportSessionResponse
mojo.internal.Union(
    remoting.mojom.StartSupportSessionResponseSpec, 'remoting.mojom.StartSupportSessionResponse', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(remoting.mojom.SupportHostObserverRemote),
        'nullable': false,
      },
      'support_session_error': {
        'ordinal': 1,
        'type': remoting.mojom.StartSupportSessionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: SupportHostDetails
mojo.internal.Struct(
    remoting.mojom.SupportHostDetailsSpec, 'remoting.mojom.SupportHostDetails', [
      mojo.internal.StructField('host_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('supported_features', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SupportSessionParams
mojo.internal.Struct(
    remoting.mojom.SupportSessionParamsSpec, 'remoting.mojom.SupportSessionParams', [
      mojo.internal.StructField('user_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('oauth_access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suppress_user_dialogs', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('suppress_notifications', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('terminate_upon_input', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('curtain_local_user_session', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('authorized_helper', 24, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 32], [2, 40]]);

// Struct: NatPolicyState
mojo.internal.Struct(
    remoting.mojom.NatPolicyStateSpec, 'remoting.mojom.NatPolicyState', [
      mojo.internal.StructField('nat_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('relay_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SupportHostObserver
mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateStarting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_Params', [
      mojo.internal.StructField('access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lifetime', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateConnecting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateConnected_Params', [
      mojo.internal.StructField('remote_username', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateDisconnected_Params', [
      mojo.internal.StructField('disconnect_reason', 0, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnNatPolicyChanged_Params', [
      mojo.internal.StructField('nat_policy_state', 0, 0, remoting.mojom.NatPolicyStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnHostStateError_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnPolicyError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec, 'remoting.mojom.SupportHostObserver_OnInvalidDomainError_Params', [
    ],
    [[0, 8]]);

remoting.mojom.SupportHostObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SupportHostObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SupportHostObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SupportHostObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SupportHostObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.SupportHostObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHostStateStarting() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateStarting_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateRequestedAccessCode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateRequestedAccessCode_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateReceivedAccessCode(access_code, lifetime) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateReceivedAccessCode_ParamsSpec,
      null,
      [access_code, lifetime],
      false);
  }

  onHostStateConnecting() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateConnecting_ParamsSpec,
      null,
      [],
      false);
  }

  onHostStateConnected(remote_username) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateConnected_ParamsSpec,
      null,
      [remote_username],
      false);
  }

  onHostStateDisconnected(disconnect_reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateDisconnected_ParamsSpec,
      null,
      [disconnect_reason],
      false);
  }

  onNatPolicyChanged(nat_policy_state) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remoting.mojom.SupportHostObserver_OnNatPolicyChanged_ParamsSpec,
      null,
      [nat_policy_state],
      false);
  }

  onHostStateError(error_code) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remoting.mojom.SupportHostObserver_OnHostStateError_ParamsSpec,
      null,
      [error_code],
      false);
  }

  onPolicyError() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remoting.mojom.SupportHostObserver_OnPolicyError_ParamsSpec,
      null,
      [],
      false);
  }

  onInvalidDomainError() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remoting.mojom.SupportHostObserver_OnInvalidDomainError_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.SupportHostObserver.getRemote = function() {
  let remote = new remoting.mojom.SupportHostObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'remoting.mojom.SupportHostObserver',
    'context');
  return remote.$;
};

remoting.mojom.SupportHostObserverPtr = remoting.mojom.SupportHostObserverRemote;
remoting.mojom.SupportHostObserverRequest = remoting.mojom.SupportHostObserverPendingReceiver;

