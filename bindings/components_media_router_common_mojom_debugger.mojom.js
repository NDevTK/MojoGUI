// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/debugger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};

media_router.mojom.Debugger = {};
media_router.mojom.Debugger.$interfaceName = 'media_router.mojom.Debugger';
media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec = { $: {} };
media_router.mojom.Debugger_OnMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_BindReceiver_ParamsSpec = { $: {} };

// Interface: Debugger
mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParams', [
      mojo.internal.StructField('should_fetch', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_OnMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_OnMirroringStats_Params', [
      mojo.internal.StructField('json_stats', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_BindReceiver_ParamsSpec, 'media_router.mojom.Debugger_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.DebuggerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  onMirroringStats(json_stats) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.Debugger_OnMirroringStats_ParamsSpec,
      null,
      [json_stats],
      false);
  }

  bindReceiver(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.Debugger_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
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

media_router.mojom.DebuggerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldFetchMirroringStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media_router.mojom.Debugger_OnMirroringStats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMirroringStats(params.json_stats);
          break;
        }
        case 2: {
          const params = media_router.mojom.Debugger_BindReceiver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
    });
  }
};

media_router.mojom.DebuggerReceiver = media_router.mojom.DebuggerReceiver;

media_router.mojom.DebuggerPtr = media_router.mojom.DebuggerRemote;
media_router.mojom.DebuggerRequest = media_router.mojom.DebuggerPendingReceiver;

