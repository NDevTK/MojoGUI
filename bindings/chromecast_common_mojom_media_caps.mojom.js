// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/media_caps.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.media.mojom = chromecast.media.media.mojom || {};


// Struct: CodecProfileLevel
chromecast.media.media.mojom.mojom.CodecProfileLevelSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.CodecProfileLevel',
      packedSize: 24,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: MediaCaps
chromecast.media.media.mojom.mojom.MediaCaps = {};

chromecast.media.media.mojom.mojom.MediaCapsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.media.mojom.mojom.MediaCapsRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCaps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.media.mojom.mojom.MediaCapsPendingReceiver,
      handle);
    this.$ = new chromecast.media.media.mojom.mojom.MediaCapsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.media.mojom.mojom.MediaCapsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.media.mojom.mojom.MediaCaps_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

chromecast.media.media.mojom.mojom.MediaCaps.getRemote = function() {
  let remote = new chromecast.media.media.mojom.mojom.MediaCapsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCaps',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
chromecast.media.media.mojom.mojom.MediaCaps_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.MediaCaps.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.media.media.mojom.mojom.MediaCapsPtr = chromecast.media.media.mojom.mojom.MediaCapsRemote;
chromecast.media.media.mojom.mojom.MediaCapsRequest = chromecast.media.media.mojom.mojom.MediaCapsPendingReceiver;


// Interface: MediaCapsObserver
chromecast.media.media.mojom.mojom.MediaCapsObserver = {};

chromecast.media.media.mojom.mojom.MediaCapsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.media.mojom.mojom.MediaCapsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCapsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.media.mojom.mojom.MediaCapsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.media.media.mojom.mojom.MediaCapsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.media.mojom.mojom.MediaCapsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSupportedCodecProfileLevel(codec_profile_level) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.media.mojom.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec,
      null,
      [codec_profile_level]);
  }

};

chromecast.media.media.mojom.mojom.MediaCapsObserver.getRemote = function() {
  let remote = new chromecast.media.media.mojom.mojom.MediaCapsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCapsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for AddSupportedCodecProfileLevel
chromecast.media.media.mojom.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.MediaCapsObserver.AddSupportedCodecProfileLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'codec_profile_level', packedOffset: 0, packedBitOffset: 0, type: chromecast.media.mojom.CodecProfileLevelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.media.media.mojom.mojom.MediaCapsObserverPtr = chromecast.media.media.mojom.mojom.MediaCapsObserverRemote;
chromecast.media.media.mojom.mojom.MediaCapsObserverRequest = chromecast.media.media.mojom.mojom.MediaCapsObserverPendingReceiver;

