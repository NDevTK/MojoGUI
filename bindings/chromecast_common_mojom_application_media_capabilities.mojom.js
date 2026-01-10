// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/application_media_capabilities.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.shell.mojom = chromecast.shell.shell.mojom || {};


// Struct: BitstreamAudioCodecsInfo
chromecast.shell.shell.mojom.mojom.BitstreamAudioCodecsInfoSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.BitstreamAudioCodecsInfo',
      packedSize: 16,
      fields: [
        { name: 'codecs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'spatial_rendering', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ApplicationMediaCapabilitiesObserver
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserver = {};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSupportedBitstreamAudioCodecsChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec,
      null,
      [info]);
  }

};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserver.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSupportedBitstreamAudioCodecsChanged
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserver_OnSupportedBitstreamAudioCodecsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver.OnSupportedBitstreamAudioCodecsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: chromecast.shell.mojom.BitstreamAudioCodecsInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverPtr = chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRemote;
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverRequest = chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesObserverPendingReceiver;


// Interface: ApplicationMediaCapabilities
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilities = {};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.ApplicationMediaCapabilities';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesPendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilities.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.ApplicationMediaCapabilities',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilities_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.ApplicationMediaCapabilities.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesPtr = chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRemote;
chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesRequest = chromecast.shell.shell.mojom.mojom.ApplicationMediaCapabilitiesPendingReceiver;

