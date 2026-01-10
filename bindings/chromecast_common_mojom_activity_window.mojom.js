// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ActivityWindow = {};
chromecast.mojom.ActivityWindow.$interfaceName = 'chromecast.mojom.ActivityWindow';
chromecast.mojom.ActivityWindow_Show_ParamsSpec = { $: {} };
chromecast.mojom.ActivityWindow_Hide_ParamsSpec = { $: {} };

// Interface: ActivityWindow
mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Show_ParamsSpec, 'chromecast.mojom.ActivityWindow_Show_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Hide_ParamsSpec, 'chromecast.mojom.ActivityWindow_Hide_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.ActivityWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ActivityWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ActivityWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ActivityWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ActivityWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ActivityWindow_Show_ParamsSpec,
      null,
      [],
      false);
  }

  hide() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ActivityWindow_Hide_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.ActivityWindow.getRemote = function() {
  let remote = new chromecast.mojom.ActivityWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityWindow',
    'context');
  return remote.$;
};

chromecast.mojom.ActivityWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.ActivityWindow_Show_ParamsSpec.$.decode(message.payload);
          const result = this.impl.show();
          break;
        }
        case 1: {
          const params = chromecast.mojom.ActivityWindow_Hide_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hide();
          break;
        }
      }
    }});
  }
};

chromecast.mojom.ActivityWindowReceiver = chromecast.mojom.ActivityWindowReceiver;

chromecast.mojom.ActivityWindowPtr = chromecast.mojom.ActivityWindowRemote;
chromecast.mojom.ActivityWindowRequest = chromecast.mojom.ActivityWindowPendingReceiver;

