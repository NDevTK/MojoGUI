// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/output_protection.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.ProtectionTypeSpec = { $: mojo.internal.Enum() };
media.mojom.LinkTypeSpec = { $: mojo.internal.Enum() };
media.mojom.OutputProtection = {};
media.mojom.OutputProtection.$interfaceName = 'media.mojom.OutputProtection';
media.mojom.OutputProtection_QueryStatus_ParamsSpec = { $: {} };
media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec = { $: {} };
media.mojom.OutputProtection_EnableProtection_ParamsSpec = { $: {} };
media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec = { $: {} };

// Enum: ProtectionType
media.mojom.ProtectionType = {
  NONE: 0,
  HDCP: 1,
};

// Enum: LinkType
media.mojom.LinkType = {
  NONE: 0,
  UNKNOWN: 1,
  INTERNAL: 2,
  VGA: 4,
  HDMI: 8,
  DVI: 16,
  DISPLAYPORT: 32,
  NETWORK: 64,
};

// Interface: OutputProtection
mojo.internal.Struct(
    media.mojom.OutputProtection_QueryStatus_ParamsSpec, 'media.mojom.OutputProtection_QueryStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec, 'media.mojom.OutputProtection_QueryStatus_ResponseParams', [
      mojo.internal.StructField('link_mask', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('protection_mask', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.OutputProtection_EnableProtection_ParamsSpec, 'media.mojom.OutputProtection_EnableProtection_Params', [
      mojo.internal.StructField('desired_protection_mask', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec, 'media.mojom.OutputProtection_EnableProtection_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.OutputProtectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.OutputProtectionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OutputProtection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.OutputProtectionPendingReceiver,
      handle);
    this.$ = new media.mojom.OutputProtectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.OutputProtectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.OutputProtection_QueryStatus_ParamsSpec,
      media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec,
      [],
      false);
  }

  enableProtection(desired_protection_mask) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.OutputProtection_EnableProtection_ParamsSpec,
      media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec,
      [desired_protection_mask],
      false);
  }

};

media.mojom.OutputProtection.getRemote = function() {
  let remote = new media.mojom.OutputProtectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OutputProtection',
    'context');
  return remote.$;
};

media.mojom.OutputProtectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.OutputProtection_QueryStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.OutputProtection_QueryStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = media.mojom.OutputProtection_EnableProtection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableProtection(params.desired_protection_mask);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.OutputProtection_EnableProtection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

media.mojom.OutputProtectionReceiver = media.mojom.OutputProtectionReceiver;

media.mojom.OutputProtectionPtr = media.mojom.OutputProtectionRemote;
media.mojom.OutputProtectionRequest = media.mojom.OutputProtectionPendingReceiver;

