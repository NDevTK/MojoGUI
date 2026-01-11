// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/external_begin_frame_controller.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.ExternalBeginFrameController = {};
viz.mojom.ExternalBeginFrameController.$interfaceName = 'viz.mojom.ExternalBeginFrameController';
viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameControllerClient = {};
viz.mojom.ExternalBeginFrameControllerClient.$interfaceName = 'viz.mojom.ExternalBeginFrameControllerClient';
viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec = { $: {} };
viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec = { $: {} };

// Interface: ExternalBeginFrameController
mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec, 'viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec, 'viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParams', [
      mojo.internal.StructField('ack', 0, 0, viz.mojom.BeginFrameAckSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec, 'viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec, 'viz.mojom.ExternalBeginFrameController_IssueExternalVSync_Params', [
      mojo.internal.StructField('params', 0, 0, viz.mojom.CADisplayLinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec, 'viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_supported', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.ExternalBeginFrameControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.ExternalBeginFrameControllerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.ExternalBeginFrameController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.ExternalBeginFrameControllerPendingReceiver,
      handle);
    this.$ = new viz.mojom.ExternalBeginFrameControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  issueExternalBeginFrame(args, force) {
    return this.$.issueExternalBeginFrame(args, force);
  }
  issueExternalBeginFrameNoAck(args) {
    return this.$.issueExternalBeginFrameNoAck(args);
  }
  issueExternalVSync(params) {
    return this.$.issueExternalVSync(params);
  }
  setSupportedDisplayLinkId(display_id, is_supported) {
    return this.$.setSupportedDisplayLinkId(display_id, is_supported);
  }
};

viz.mojom.ExternalBeginFrameControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalBeginFrameController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  issueExternalBeginFrame(args, force) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec,
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec,
      [args, force],
      false);
  }

  issueExternalBeginFrameNoAck(args) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec,
      null,
      [args],
      false);
  }

  issueExternalVSync(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec,
      null,
      [params],
      false);
  }

  setSupportedDisplayLinkId(display_id, is_supported) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec,
      null,
      [display_id, is_supported],
      false);
  }

};

viz.mojom.ExternalBeginFrameController.getRemote = function() {
  let remote = new viz.mojom.ExternalBeginFrameControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.ExternalBeginFrameController',
    'context');
  return remote.$;
};

viz.mojom.ExternalBeginFrameControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalBeginFrameController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec.$.structSpec);
          const result = this.impl.issueExternalBeginFrame(params.args, params.force);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec.$.structSpec);
          const result = this.impl.issueExternalBeginFrameNoAck(params.args);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec.$.structSpec);
          const result = this.impl.issueExternalVSync(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec.$.structSpec);
          const result = this.impl.setSupportedDisplayLinkId(params.display_id, params.is_supported);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.ExternalBeginFrameControllerReceiver = viz.mojom.ExternalBeginFrameControllerReceiver;

viz.mojom.ExternalBeginFrameControllerPtr = viz.mojom.ExternalBeginFrameControllerRemote;
viz.mojom.ExternalBeginFrameControllerRequest = viz.mojom.ExternalBeginFrameControllerPendingReceiver;


// Interface: ExternalBeginFrameControllerClient
mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('needs_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec, 'viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('needs_begin_frames', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec, 'viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_Params', [
      mojo.internal.StructField('interval', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.ExternalBeginFrameControllerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.ExternalBeginFrameControllerClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.ExternalBeginFrameControllerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.ExternalBeginFrameControllerClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.ExternalBeginFrameControllerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setNeedsBeginFrame(needs_begin_frames) {
    return this.$.setNeedsBeginFrame(needs_begin_frames);
  }
  needsBeginFrameWithId(display_id, needs_begin_frames) {
    return this.$.needsBeginFrameWithId(display_id, needs_begin_frames);
  }
  setPreferredInterval(interval) {
    return this.$.setPreferredInterval(interval);
  }
};

viz.mojom.ExternalBeginFrameControllerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ExternalBeginFrameControllerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNeedsBeginFrame(needs_begin_frames) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec,
      null,
      [needs_begin_frames],
      false);
  }

  needsBeginFrameWithId(display_id, needs_begin_frames) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec,
      null,
      [display_id, needs_begin_frames],
      false);
  }

  setPreferredInterval(interval) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec,
      null,
      [interval],
      false);
  }

};

viz.mojom.ExternalBeginFrameControllerClient.getRemote = function() {
  let remote = new viz.mojom.ExternalBeginFrameControllerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.ExternalBeginFrameControllerClient',
    'context');
  return remote.$;
};

viz.mojom.ExternalBeginFrameControllerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ExternalBeginFrameControllerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec.$.structSpec);
          const result = this.impl.setNeedsBeginFrame(params.needs_begin_frames);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec.$.structSpec);
          const result = this.impl.needsBeginFrameWithId(params.display_id, params.needs_begin_frames);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec.$.structSpec);
          const result = this.impl.setPreferredInterval(params.interval);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.ExternalBeginFrameControllerClientReceiver = viz.mojom.ExternalBeginFrameControllerClientReceiver;

viz.mojom.ExternalBeginFrameControllerClientPtr = viz.mojom.ExternalBeginFrameControllerClientRemote;
viz.mojom.ExternalBeginFrameControllerClientRequest = viz.mojom.ExternalBeginFrameControllerClientPendingReceiver;

