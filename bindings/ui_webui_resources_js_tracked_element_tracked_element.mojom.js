// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/tracked_element/tracked_element.mojom
// Module: tracked_element.mojom

'use strict';

// Module namespace
var tracked_element = tracked_element || {};
tracked_element.mojom = tracked_element.mojom || {};


// Interface: TrackedElementHandler
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
      tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec.$,
      null,
      [native_identifier, visible, rect]);
  }

  trackedElementActivated(native_identifier) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec.$,
      null,
      [native_identifier]);
  }

  trackedElementCustomEvent(native_identifier, custom_event_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec.$,
      null,
      [native_identifier, custom_event_name]);
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
}};

// ParamsSpec for TrackedElementVisibilityChanged
tracked_element.mojom.TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracked_element.mojom.TrackedElementHandler.TrackedElementVisibilityChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'rect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TrackedElementActivated
tracked_element.mojom.TrackedElementHandler_TrackedElementActivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracked_element.mojom.TrackedElementHandler.TrackedElementActivated_Params',
      packedSize: 16,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TrackedElementCustomEvent
tracked_element.mojom.TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tracked_element.mojom.TrackedElementHandler.TrackedElementCustomEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'native_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'custom_event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
tracked_element.mojom.TrackedElementHandlerPtr = tracked_element.mojom.TrackedElementHandlerRemote;
tracked_element.mojom.TrackedElementHandlerRequest = tracked_element.mojom.TrackedElementHandlerPendingReceiver;

