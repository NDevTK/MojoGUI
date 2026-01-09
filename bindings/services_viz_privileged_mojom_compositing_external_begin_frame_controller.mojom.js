// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/external_begin_frame_controller.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: ExternalBeginFrameController
viz.mojom.ExternalBeginFrameController = {};

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
      [args, force]);
  }

  issueExternalBeginFrameNoAck(args) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec,
      null,
      [args]);
  }

  issueExternalVSync(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec,
      null,
      [params]);
  }

  setSupportedDisplayLinkId(display_id, is_supported) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec,
      null,
      [display_id, is_supported]);
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

// ParamsSpec for IssueExternalBeginFrame
viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameController.IssueExternalBeginFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
        { name: 'force', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ack', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameAckSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IssueExternalBeginFrameNoAck
viz.mojom.ExternalBeginFrameController_IssueExternalBeginFrameNoAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameController.IssueExternalBeginFrameNoAck_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IssueExternalVSync
viz.mojom.ExternalBeginFrameController_IssueExternalVSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameController.IssueExternalVSync_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CADisplayLinkParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSupportedDisplayLinkId
viz.mojom.ExternalBeginFrameController_SetSupportedDisplayLinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameController.SetSupportedDisplayLinkId_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'is_supported', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.ExternalBeginFrameControllerPtr = viz.mojom.ExternalBeginFrameControllerRemote;
viz.mojom.ExternalBeginFrameControllerRequest = viz.mojom.ExternalBeginFrameControllerPendingReceiver;


// Interface: ExternalBeginFrameControllerClient
viz.mojom.ExternalBeginFrameControllerClient = {};

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
      [needs_begin_frames]);
  }

  needsBeginFrameWithId(display_id, needs_begin_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec,
      null,
      [display_id, needs_begin_frames]);
  }

  setPreferredInterval(interval) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec,
      null,
      [interval]);
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

// ParamsSpec for SetNeedsBeginFrame
viz.mojom.ExternalBeginFrameControllerClient_SetNeedsBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameControllerClient.SetNeedsBeginFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_begin_frames', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NeedsBeginFrameWithId
viz.mojom.ExternalBeginFrameControllerClient_NeedsBeginFrameWithId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameControllerClient.NeedsBeginFrameWithId_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'needs_begin_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPreferredInterval
viz.mojom.ExternalBeginFrameControllerClient_SetPreferredInterval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ExternalBeginFrameControllerClient.SetPreferredInterval_Params',
      packedSize: 16,
      fields: [
        { name: 'interval', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.ExternalBeginFrameControllerClientPtr = viz.mojom.ExternalBeginFrameControllerClientRemote;
viz.mojom.ExternalBeginFrameControllerClientRequest = viz.mojom.ExternalBeginFrameControllerClientPendingReceiver;

