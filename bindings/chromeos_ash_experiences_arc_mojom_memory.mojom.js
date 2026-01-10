// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/memory.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ReclaimTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ReclaimRequestSpec = { $: {} };
arc.mojom.ReclaimResultSpec = { $: {} };
arc.mojom.MemoryInstance = {};
arc.mojom.MemoryInstance.$interfaceName = 'arc.mojom.MemoryInstance';
arc.mojom.MemoryInstance_DropCaches_ParamsSpec = { $: {} };
arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec = { $: {} };
arc.mojom.MemoryInstance_Reclaim_ParamsSpec = { $: {} };
arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec = { $: {} };

// Enum: ReclaimType
arc.mojom.ReclaimType = {
  ANON: 0,
  ALL: 1,
};

// Struct: ReclaimRequest
mojo.internal.Struct(
    arc.mojom.ReclaimRequestSpec, 'arc.mojom.ReclaimRequest', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.ReclaimTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ReclaimResult
mojo.internal.Struct(
    arc.mojom.ReclaimResultSpec, 'arc.mojom.ReclaimResult', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('unreclaimed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MemoryInstance
mojo.internal.Struct(
    arc.mojom.MemoryInstance_DropCaches_ParamsSpec, 'arc.mojom.MemoryInstance_DropCaches_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec, 'arc.mojom.MemoryInstance_DropCaches_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_Reclaim_ParamsSpec, 'arc.mojom.MemoryInstance_Reclaim_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.ReclaimRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec, 'arc.mojom.MemoryInstance_Reclaim_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ReclaimResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  reclaim(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MemoryInstance_Reclaim_ParamsSpec,
      arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec,
      [request],
      false);
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

arc.mojom.MemoryInstancePtr = arc.mojom.MemoryInstanceRemote;
arc.mojom.MemoryInstanceRequest = arc.mojom.MemoryInstancePendingReceiver;

