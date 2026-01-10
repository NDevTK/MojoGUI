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


// Interface: SharedWorkerHost
blink.mojom.SharedWorkerHost = {};

blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'connection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnContextClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnReadyForInspection_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnScriptLoadFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnReportException_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SharedWorkerExceptionDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost_OnFeatureUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for OnConnected
blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'connection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContextClosed
blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnContextClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnReadyForInspection
blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnReadyForInspection_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), nullable: false, minVersion: 0 },
        { name: 'agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnScriptLoadFailed
blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnScriptLoadFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReportException
blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnReportException_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SharedWorkerExceptionDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFeatureUsed
blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerHost.OnFeatureUsed_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerHostPtr = blink.mojom.SharedWorkerHostRemote;
blink.mojom.SharedWorkerHostRequest = blink.mojom.SharedWorkerHostPendingReceiver;

