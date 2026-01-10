// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.SharedWorkerHost = {};
blink.mojom.SharedWorkerHost.$interfaceName = 'blink.mojom.SharedWorkerHost';
blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec = { $: {} };

// Interface: SharedWorkerHost
mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnConnected_Params', [
      mojo.internal.StructField('connection_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnContextClosed_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnScriptLoadFailed_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReportException_Params', [
      mojo.internal.StructField('details', 0, 0, blink.mojom.SharedWorkerExceptionDetailsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnected(connection_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec,
      null,
      [connection_id]);
  }

  onContextClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec,
      null,
      []);
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host]);
  }

  onScriptLoadFailed(error_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec,
      null,
      [error_message]);
  }

  onReportException(details) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec,
      null,
      [details]);
  }

  onFeatureUsed(feature) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec,
      null,
      [feature]);
  }

};

blink.mojom.SharedWorkerHost.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerHost',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerHostPtr = blink.mojom.SharedWorkerHostRemote;
blink.mojom.SharedWorkerHostRequest = blink.mojom.SharedWorkerHostPendingReceiver;

