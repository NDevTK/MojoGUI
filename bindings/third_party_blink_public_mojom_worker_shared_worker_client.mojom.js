// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerClient
blink.mojom.SharedWorkerClient = {};

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

// ParamsSpec for OnCreated
blink.mojom.SharedWorkerClient_OnCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerClient.OnCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'creation_context_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SharedWorkerCreationContextTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnected
blink.mojom.SharedWorkerClient_OnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerClient.OnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'features_used', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScriptLoadFailed
blink.mojom.SharedWorkerClient_OnScriptLoadFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerClient.OnScriptLoadFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReportException
blink.mojom.SharedWorkerClient_OnReportException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerClient.OnReportException_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SharedWorkerExceptionDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFeatureUsed
blink.mojom.SharedWorkerClient_OnFeatureUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerClient.OnFeatureUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebFeatureSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerClientPtr = blink.mojom.SharedWorkerClientRemote;
blink.mojom.SharedWorkerClientRequest = blink.mojom.SharedWorkerClientPendingReceiver;

