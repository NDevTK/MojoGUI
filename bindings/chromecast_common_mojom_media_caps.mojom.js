// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/media_caps.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};

chromecast.media.mojom.CodecProfileLevelSpec = { $: {} };
chromecast.media.mojom.MediaCaps = {};
chromecast.media.mojom.MediaCaps.$interfaceName = 'chromecast.media.mojom.MediaCaps';
chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec = { $: {} };
chromecast.media.mojom.MediaCapsObserver = {};
chromecast.media.mojom.MediaCapsObserver.$interfaceName = 'chromecast.media.mojom.MediaCapsObserver';
chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec = { $: {} };

// Struct: CodecProfileLevel
mojo.internal.Struct(
    chromecast.media.mojom.CodecProfileLevelSpec, 'chromecast.media.mojom.CodecProfileLevel', [
      mojo.internal.StructField('codec', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('profile', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('level', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MediaCaps
mojo.internal.Struct(
    chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec, 'chromecast.media.mojom.MediaCaps_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.media.mojom.MediaCapsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
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

chromecast.media.mojom.MediaCapsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.media.mojom.MediaCaps_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
    });
  }
};

chromecast.media.mojom.MediaCapsReceiver = chromecast.media.mojom.MediaCapsReceiver;

chromecast.media.mojom.MediaCapsPtr = chromecast.media.mojom.MediaCapsRemote;
chromecast.media.mojom.MediaCapsRequest = chromecast.media.mojom.MediaCapsPendingReceiver;


// Interface: MediaCapsObserver
mojo.internal.Struct(
    chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec, 'chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_Params', [
      mojo.internal.StructField('codec_profile_level', 0, 0, chromecast.media.mojom.CodecProfileLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [codec_profile_level],
      false);
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

chromecast.media.mojom.MediaCapsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.media.mojom.MediaCapsObserver_AddSupportedCodecProfileLevel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSupportedCodecProfileLevel(params.codec_profile_level);
          break;
        }
      }
    });
  }
};

chromecast.media.mojom.MediaCapsObserverReceiver = chromecast.media.mojom.MediaCapsObserverReceiver;

chromecast.media.mojom.MediaCapsObserverPtr = chromecast.media.mojom.MediaCapsObserverRemote;
chromecast.media.mojom.MediaCapsObserverRequest = chromecast.media.mojom.MediaCapsObserverPendingReceiver;

