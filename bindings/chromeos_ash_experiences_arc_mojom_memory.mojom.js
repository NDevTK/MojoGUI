// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/memory.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ReclaimType
arc.mojom.ReclaimType = {
  ANON: 0,
  ALL: 1,
};
arc.mojom.ReclaimTypeSpec = { $: mojo.internal.Enum() };

// Struct: ReclaimRequest
arc.mojom.ReclaimRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ReclaimRequest',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ReclaimTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ReclaimResult
arc.mojom.ReclaimResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ReclaimResult',
      packedSize: 16,
      fields: [
        { name: 'reclaimed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'unreclaimed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MemoryInstance
arc.mojom.MemoryInstance = {};

arc.mojom.MemoryInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MemoryInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MemoryInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MemoryInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MemoryInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MemoryInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dropCaches() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MemoryInstance_DropCaches_ParamsSpec,
      arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec,
      []);
  }

  reclaim(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MemoryInstance_Reclaim_ParamsSpec,
      arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec,
      [request]);
  }

};

arc.mojom.MemoryInstance.getRemote = function() {
  let remote = new arc.mojom.MemoryInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MemoryInstance',
    'context');
  return remote.$;
};

// ParamsSpec for DropCaches
arc.mojom.MemoryInstance_DropCaches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MemoryInstance.DropCaches_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reclaim
arc.mojom.MemoryInstance_Reclaim_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MemoryInstance.Reclaim_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ReclaimRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ReclaimResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.MemoryInstancePtr = arc.mojom.MemoryInstanceRemote;
arc.mojom.MemoryInstanceRequest = arc.mojom.MemoryInstancePendingReceiver;

