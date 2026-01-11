// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/alert.mojom
// Module: remote_cocoa.mojom

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};

remote_cocoa.mojom.AlertDispositionSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.AlertBridgeInitParamsSpec = { $: {} };
remote_cocoa.mojom.AlertBridge = {};
remote_cocoa.mojom.AlertBridge.$interfaceName = 'remote_cocoa.mojom.AlertBridge';
remote_cocoa.mojom.AlertBridge_Show_ParamsSpec = { $: {} };
remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec = { $: {} };

// Enum: AlertDisposition
remote_cocoa.mojom.AlertDisposition = {
  PRIMARY_BUTTON: 0,
  SECONDARY_BUTTON: 1,
  CLOSE: 2,
};

// Struct: AlertBridgeInitParams
mojo.internal.Struct(
    remote_cocoa.mojom.AlertBridgeInitParamsSpec, 'remote_cocoa.mojom.AlertBridgeInitParams', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('message_text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_button_text', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('secondary_button_text', 24, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('text_field_text', 32, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('check_box_text', 40, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Interface: AlertBridge
mojo.internal.Struct(
    remote_cocoa.mojom.AlertBridge_Show_ParamsSpec, 'remote_cocoa.mojom.AlertBridge_Show_Params', [
      mojo.internal.StructField('params', 0, 0, remote_cocoa.mojom.AlertBridgeInitParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec, 'remote_cocoa.mojom.AlertBridge_Show_ResponseParams', [
      mojo.internal.StructField('disposition', 0, 0, remote_cocoa.mojom.AlertDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_field_value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('check_box_value', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec, 'remote_cocoa.mojom.AlertBridge_Dismiss_Params', [
    ],
    [[0, 8]]);

remote_cocoa.mojom.AlertBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.AlertBridgeRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.AlertBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.AlertBridgePendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.AlertBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  show(params) {
    return this.$.show(params);
  }
  dismiss() {
    return this.$.dismiss();
  }
};

remote_cocoa.mojom.AlertBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AlertBridge', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  show(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.AlertBridge_Show_ParamsSpec,
      remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec,
      [params],
      false);
  }

  dismiss() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec,
      null,
      [],
      false);
  }

};

remote_cocoa.mojom.AlertBridge.getRemote = function() {
  let remote = new remote_cocoa.mojom.AlertBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.AlertBridge',
    'context');
  return remote.$;
};

remote_cocoa.mojom.AlertBridgeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AlertBridge', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(remote_cocoa.mojom.AlertBridge_Show_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.AlertBridge_Show_ParamsSpec.$.structSpec);
          const result = this.impl.show(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec.$.structSpec);
          const result = this.impl.dismiss();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remote_cocoa.mojom.AlertBridgeReceiver = remote_cocoa.mojom.AlertBridgeReceiver;

remote_cocoa.mojom.AlertBridgePtr = remote_cocoa.mojom.AlertBridgeRemote;
remote_cocoa.mojom.AlertBridgeRequest = remote_cocoa.mojom.AlertBridgePendingReceiver;

