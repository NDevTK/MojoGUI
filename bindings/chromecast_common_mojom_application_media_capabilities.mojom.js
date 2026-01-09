// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/application_media_capabilities.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Interface: ApplicationMediaCapabilitiesObserver
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver = {};

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
      [info]);
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

// ParamsSpec for OnSupportedBitstreamAudioCodecsChanged
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver.OnSupportedBitstreamAudioCodecsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPtr = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRemote;
chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverRequest = chromecast.shell.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver;


// Interface: ApplicationMediaCapabilities
chromecast.shell.mojom.ApplicationMediaCapabilities = {};

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
      [observer]);
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

// ParamsSpec for AddObserver
chromecast.shell.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.ApplicationMediaCapabilities.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.shell.mojom.ApplicationMediaCapabilitiesPtr = chromecast.shell.mojom.ApplicationMediaCapabilitiesRemote;
chromecast.shell.mojom.ApplicationMediaCapabilitiesRequest = chromecast.shell.mojom.ApplicationMediaCapabilitiesPendingReceiver;

