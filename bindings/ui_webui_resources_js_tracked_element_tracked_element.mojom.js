// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/tracked_element/tracked_element.mojom
// Module: tracked_element.mojom

'use strict';

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
};

tracked_element.mojom.TrackedElementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  trackedElementVisibilityChanged(native_identifier, visible, rect) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec,
      null,
      [native_identifier, visible, rect],
      false);
  }

  trackedElementActivated(native_identifier) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec,
      null,
      [native_identifier],
      false);
  }

  trackedElementCustomEvent(native_identifier, custom_event_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.trackedElementVisibilityChanged(params.native_identifier, params.visible, params.rect);
          break;
        }
        case 1: {
          const params = tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.trackedElementActivated(params.native_identifier);
          break;
        }
        case 2: {
          const params = tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.trackedElementCustomEvent(params.native_identifier, params.custom_event_name);
          break;
        }
      }
    }});
  }
};

tracked_element.mojom.TrackedElementHandlerReceiver = tracked_element.mojom.TrackedElementHandlerReceiver;

tracked_element.mojom.TrackedElementHandlerPtr = tracked_element.mojom.TrackedElementHandlerRemote;
tracked_element.mojom.TrackedElementHandlerRequest = tracked_element.mojom.TrackedElementHandlerPendingReceiver;

