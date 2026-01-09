// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/media_caps.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};


// Struct: CodecProfileLevel
chromecast.media.mojom.CodecProfileLevelSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.CodecProfileLevel',
      packedSize: 24,
      fields: [
        { name: 'codec', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'profile', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaCaps
chromecast.media.mojom.MediaCaps = {};

chromecast.media.mojom.MediaCapsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.MediaCapsRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCaps';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.MediaCapsPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.MediaCapsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.mojom.MediaCapsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

};

chromecast.media.mojom.MediaCaps.getRemote = function() {
  let remote = new chromecast.media.mojom.MediaCapsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCaps',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.MediaCaps.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.media.mojom.MediaCapsPtr = chromecast.media.mojom.MediaCapsRemote;
chromecast.media.mojom.MediaCapsRequest = chromecast.media.mojom.MediaCapsPendingReceiver;


// Interface: MediaCapsObserver
chromecast.media.mojom.MediaCapsObserver = {};

chromecast.media.mojom.MediaCapsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.MediaCapsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.MediaCapsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.MediaCapsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.MediaCapsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.mojom.MediaCapsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSupportedCodecProfileLevel(codec_profile_level) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec,
      null,
      [codec_profile_level]);
  }

};

chromecast.media.mojom.MediaCapsObserver.getRemote = function() {
  let remote = new chromecast.media.mojom.MediaCapsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.MediaCapsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for AddSupportedCodecProfileLevel
chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.MediaCapsObserver.AddSupportedCodecProfileLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'codec_profile_level', packedOffset: 8, packedBitOffset: 0, type: chromecast.media.mojom.CodecProfileLevelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.media.mojom.MediaCapsObserverPtr = chromecast.media.mojom.MediaCapsObserverRemote;
chromecast.media.mojom.MediaCapsObserverRequest = chromecast.media.mojom.MediaCapsObserverPendingReceiver;

