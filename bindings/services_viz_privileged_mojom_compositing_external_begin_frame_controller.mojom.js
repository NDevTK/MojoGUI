// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/external_begin_frame_controller.mojom
// Module: viz.mojom

'use strict';

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
};

viz.mojom.ExternalBeginFrameControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  issueExternalBeginFrame(args, force) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec,
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec,
      [args, force],
      false);
  }

  issueExternalBeginFrameNoAck(args) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec,
      null,
      [args],
      false);
  }

  issueExternalVSync(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec,
      null,
      [params],
      false);
  }

  setSupportedDisplayLinkId(display_id, is_supported) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec.$.decode(message.payload);
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
          const params = viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec.$.decode(message.payload);
          const result = this.impl.issueExternalBeginFrameNoAck(params.args);
          break;
        }
        case 2: {
          const params = viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec.$.decode(message.payload);
          const result = this.impl.issueExternalVSync(params.params);
          break;
        }
        case 3: {
          const params = viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSupportedDisplayLinkId(params.display_id, params.is_supported);
          break;
        }
      }
      }
    }});
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
};

viz.mojom.ExternalBeginFrameControllerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNeedsBeginFrame(needs_begin_frames) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec,
      null,
      [needs_begin_frames],
      false);
  }

  needsBeginFrameWithId(display_id, needs_begin_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec,
      null,
      [display_id, needs_begin_frames],
      false);
  }

  setPreferredInterval(interval) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setNeedsBeginFrame(params.needs_begin_frames);
          break;
        }
        case 1: {
          const params = viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.needsBeginFrameWithId(params.display_id, params.needs_begin_frames);
          break;
        }
        case 2: {
          const params = viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPreferredInterval(params.interval);
          break;
        }
      }
      }
    }});
  }
};

viz.mojom.ExternalBeginFrameControllerClientReceiver = viz.mojom.ExternalBeginFrameControllerClientReceiver;

viz.mojom.ExternalBeginFrameControllerClientPtr = viz.mojom.ExternalBeginFrameControllerClientRemote;
viz.mojom.ExternalBeginFrameControllerClientRequest = viz.mojom.ExternalBeginFrameControllerClientPendingReceiver;

