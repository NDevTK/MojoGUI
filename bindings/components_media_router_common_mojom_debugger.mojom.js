// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/debugger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: Debugger
media_router.mojom.Debugger = {};

media_router.mojom.DebuggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.DebuggerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.Debugger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.DebuggerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.DebuggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.DebuggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shouldFetchMirroringStats() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec,
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec,
      []);
  }

  onMirroringStats(json_stats) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.Debugger_OnMirroringStats_ParamsSpec,
      null,
      [json_stats]);
  }

  bindReceiver(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.Debugger_BindReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

media_router.mojom.Debugger.getRemote = function() {
  let remote = new media_router.mojom.DebuggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.Debugger',
    'context');
  return remote.$;
};

// ParamsSpec for ShouldFetchMirroringStats
media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Debugger.ShouldFetchMirroringStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Debugger.ShouldFetchMirroringStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_fetch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMirroringStats
media_router.mojom.Debugger_OnMirroringStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Debugger.OnMirroringStats_Params',
      packedSize: 16,
      fields: [
        { name: 'json_stats', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindReceiver
media_router.mojom.Debugger_BindReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Debugger.BindReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media_router.mojom.DebuggerPtr = media_router.mojom.DebuggerRemote;
media_router.mojom.DebuggerRequest = media_router.mojom.DebuggerPendingReceiver;

