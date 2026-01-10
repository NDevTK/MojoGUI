// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.SharedWorkerClient = {};
blink.mojom.SharedWorkerClient.$interfaceName = 'blink.mojom.SharedWorkerClient';
blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec = { $: {} };

// Interface: SharedWorkerClient
mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnCreated_Params', [
      mojo.internal.StructField('creation_context_type', 0, 0, blink.mojom.SharedWorkerCreationContextTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnConnected_Params', [
      mojo.internal.StructField('features_used', 0, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnScriptLoadFailed_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnReportException_Params', [
      mojo.internal.StructField('details', 0, 0, blink.mojom.SharedWorkerExceptionDetailsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec, 'blink.mojom.SharedWorkerClient_OnFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedWorkerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedWorkerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreated(creation_context_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec,
      null,
      [creation_context_type]);
  }

  onConnected(features_used) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec,
      null,
      [features_used]);
  }

  onScriptLoadFailed(error_message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec,
      null,
      [error_message]);
  }

  onReportException(details) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec,
      null,
      [details]);
  }

  onFeatureUsed(feature) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec,
      null,
      [feature]);
  }

};

blink.mojom.SharedWorkerClient.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerClient',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerClientPtr = blink.mojom.SharedWorkerClientRemote;
blink.mojom.SharedWorkerClientRequest = blink.mojom.SharedWorkerClientPendingReceiver;

