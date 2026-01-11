// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/tracked_element/tracked_element.mojom
// Module: tracked_element.mojom

// Module namespace
var tracked_element = tracked_element || {};
tracked_element.mojom = tracked_element.mojom || {};
var gfx = gfx || {};

tracked_element.mojom.TrackedElementHandler = {};
tracked_element.mojom.TrackedElementHandler.$interfaceName = 'tracked_element.mojom.TrackedElementHandler';
tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec = { $: {} };
tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec = { $: {} };
tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec = { $: {} };

// Interface: TrackedElementHandler
mojo.internal.Struct(
    tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec, 'tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec, 'tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec, 'tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_Params', [
      mojo.internal.StructField('native_identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('custom_event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

tracked_element.mojom.TrackedElementHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracked_element.mojom.TrackedElementHandlerRemote = class {
  static get $interfaceName() {
    return 'tracked_element.mojom.TrackedElementHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracked_element.mojom.TrackedElementHandlerPendingReceiver,
      handle);
    this.$ = new tracked_element.mojom.TrackedElementHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  trackedElementVisibilityChanged(native_identifier, visible, rect) {
    return this.$.trackedElementVisibilityChanged(native_identifier, visible, rect);
  }
  trackedElementActivated(native_identifier) {
    return this.$.trackedElementActivated(native_identifier);
  }
  trackedElementCustomEvent(native_identifier, custom_event_name) {
    return this.$.trackedElementCustomEvent(native_identifier, custom_event_name);
  }
};

tracked_element.mojom.TrackedElementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrackedElementHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  trackedElementVisibilityChanged(native_identifier, visible, rect) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec,
      null,
      [native_identifier, visible, rect],
      false);
  }

  trackedElementActivated(native_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  trackedElementCustomEvent(native_identifier, custom_event_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec,
      null,
      [native_identifier, custom_event_name],
      false);
  }

};

tracked_element.mojom.TrackedElementHandler.getRemote = function() {
  let remote = new tracked_element.mojom.TrackedElementHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracked_element.mojom.TrackedElementHandler',
    'context');
  return remote.$;
};

tracked_element.mojom.TrackedElementHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrackedElementHandler', [
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
             decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.trackedElementVisibilityChanged(params.native_identifier, params.visible, params.rect);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec.$.structSpec);
          const result = this.impl.trackedElementActivated(params.native_identifier);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec.$.structSpec);
          const result = this.impl.trackedElementCustomEvent(params.native_identifier, params.custom_event_name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracked_element.mojom.TrackedElementHandlerReceiver = tracked_element.mojom.TrackedElementHandlerReceiver;

tracked_element.mojom.TrackedElementHandlerPtr = tracked_element.mojom.TrackedElementHandlerRemote;
tracked_element.mojom.TrackedElementHandlerRequest = tracked_element.mojom.TrackedElementHandlerPendingReceiver;

