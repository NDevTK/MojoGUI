// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/notifications_internals/notifications_internals.mojom
// Module: notifications_internals.mojom

'use strict';

// Module namespace
var notifications_internals = notifications_internals || {};
notifications_internals.mojom = notifications_internals.mojom || {};


// Interface: PageHandler
notifications_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

notifications_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'notifications_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      notifications_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new notifications_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

notifications_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scheduleNotification(feature) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec.$,
      null,
      [feature]);
  }

};

notifications_internals.mojom.PageHandler.getRemote = function() {
  let remote = new notifications_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'notifications_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ScheduleNotification
notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'notifications_internals.mojom.PageHandler.ScheduleNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
notifications_internals.mojom.PageHandlerPtr = notifications_internals.mojom.PageHandlerRemote;
notifications_internals.mojom.PageHandlerRequest = notifications_internals.mojom.PageHandlerPendingReceiver;

