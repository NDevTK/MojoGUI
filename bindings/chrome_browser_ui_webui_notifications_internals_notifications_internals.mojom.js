// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/notifications_internals/notifications_internals.mojom
// Module: notifications_internals.mojom

'use strict';

// Module namespace
var notifications_internals = notifications_internals || {};
notifications_internals.mojom = notifications_internals.mojom || {};

notifications_internals.mojom.PageHandler = {};
notifications_internals.mojom.PageHandler.$interfaceName = 'notifications_internals.mojom.PageHandler';
notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec, 'notifications_internals.mojom.PageHandler_ScheduleNotification_Params', [
      mojo.internal.StructField('feature', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec,
      null,
      [feature],
      false);
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

notifications_internals.mojom.PageHandlerPtr = notifications_internals.mojom.PageHandlerRemote;
notifications_internals.mojom.PageHandlerRequest = notifications_internals.mojom.PageHandlerPendingReceiver;

