// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ActivityWindow
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
      chromecast.mojom.ActivityWindow_Show_ParamsSpec.$,
      null,
      []);
  }

  hide() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ActivityWindow_Hide_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for Show
chromecast.mojom.ActivityWindow_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ActivityWindow.Show_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Hide
chromecast.mojom.ActivityWindow_Hide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ActivityWindow.Hide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chromecast.mojom.ActivityWindowPtr = chromecast.mojom.ActivityWindowRemote;
chromecast.mojom.ActivityWindowRequest = chromecast.mojom.ActivityWindowPendingReceiver;

