// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tracing.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: TracingInstance
arc.mojom.mojom.TracingInstance = {};

arc.mojom.mojom.TracingInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.TracingInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TracingInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.TracingInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.TracingInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.TracingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryAvailableCategories() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec,
      arc.mojom.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec,
      []);
  }

  startTracing(categories, socket) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.TracingInstance_StartTracing_ParamsSpec,
      arc.mojom.mojom.TracingInstance_StartTracing_ResponseParamsSpec,
      [categories, socket]);
  }

  stopTracing() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.TracingInstance_StopTracing_ParamsSpec,
      arc.mojom.mojom.TracingInstance_StopTracing_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.TracingInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.TracingInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TracingInstance',
    'context');
  return remote.$;
};

// ParamsSpec for QueryAvailableCategories
arc.mojom.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.QueryAvailableCategories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.QueryAvailableCategories_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartTracing
arc.mojom.mojom.TracingInstance_StartTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.StartTracing_Params',
      packedSize: 24,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.TracingInstance_StartTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.StartTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopTracing
arc.mojom.mojom.TracingInstance_StopTracing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.StopTracing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.TracingInstance_StopTracing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TracingInstance.StopTracing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.TracingInstancePtr = arc.mojom.mojom.TracingInstanceRemote;
arc.mojom.mojom.TracingInstanceRequest = arc.mojom.mojom.TracingInstancePendingReceiver;

