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

// Struct: ReclaimRequest
arc.mojom.ReclaimRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ReclaimRequest',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'reclaimed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'unreclaimed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.MemoryInstancePtr = arc.mojom.MemoryInstanceRemote;
arc.mojom.MemoryInstanceRequest = arc.mojom.MemoryInstancePendingReceiver;

