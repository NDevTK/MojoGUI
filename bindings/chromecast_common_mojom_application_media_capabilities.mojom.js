// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/application_media_capabilities.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};

chromecast.shell.mojom.BitstreamAudioCodecsInfoSpec = { $: {} };
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver = {};
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver.$interfaceName = 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver';
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec = { $: {} };
chromecast.shell.mojom.ApplicationMediaCapabilities = {};
chromecast.shell.mojom.ApplicationMediaCapabilities.$interfaceName = 'chromecast.shell.mojom.ApplicationMediaCapabilities';
chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec = { $: {} };

// Struct: BitstreamAudioCodecsInfo
mojo.internal.Struct(
    chromecast.shell.mojom.BitstreamAudioCodecsInfoSpec, 'chromecast.shell.mojom.BitstreamAudioCodecsInfo', [
      mojo.internal.StructField('codecs', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('spatial_rendering', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ApplicationMediaCapabilitiesObserver
mojo.internal.Struct(
    chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec, 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_Params', [
      mojo.internal.StructField('info', 0, 0, chromecast.shell.mojom.BitstreamAudioCodecsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSupportedBitstreamAudioCodecsChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec,
      null,
      [info],
      false);
  }

};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver.getRemote = function() {
  let remote = new chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver',
    'context');
  return remote.$;
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverReceiver = class {
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
          const params = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSupportedBitstreamAudioCodecsChanged(params.info);
          break;
        }
      }
    }});
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverReceiver = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverReceiver;

chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPtr = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemote;
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRequest = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver;


// Interface: ApplicationMediaCapabilities
mojo.internal.Struct(
    chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec, 'chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.shell.mojom.ApplicationMediaCapabilitiesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.ApplicationMediaCapabilities';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.ApplicationMediaCapabilitiesPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.ApplicationMediaCapabilitiesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.shell.mojom.ApplicationMediaCapabilities.getRemote = function() {
  let remote = new chromecast.shell.mojom.ApplicationMediaCapabilitiesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.ApplicationMediaCapabilities',
    'context');
  return remote.$;
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesReceiver = class {
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
          const params = chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
    }});
  }
};

chromecast.shell.mojom.ApplicationMediaCapabilitiesReceiver = chromecast.shell.mojom.ApplicationMediaCapabilitiesReceiver;

chromecast.shell.mojom.ApplicationMediaCapabilitiesPtr = chromecast.shell.mojom.ApplicationMediaCapabilitiesRemote;
chromecast.shell.mojom.ApplicationMediaCapabilitiesRequest = chromecast.shell.mojom.ApplicationMediaCapabilitiesPendingReceiver;

