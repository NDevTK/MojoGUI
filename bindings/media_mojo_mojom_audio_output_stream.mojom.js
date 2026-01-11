// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_output_stream.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };
media.mojom.AudioOutputStream = {};
media.mojom.AudioOutputStream.$interfaceName = 'media.mojom.AudioOutputStream';
media.mojom.AudioOutputStream_Play_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_Pause_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_Flush_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_SetVolume_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver = {};
media.mojom.AudioOutputStreamObserver.$interfaceName = 'media.mojom.AudioOutputStreamObserver';
media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamProvider = {};
media.mojom.AudioOutputStreamProvider.$interfaceName = 'media.mojom.AudioOutputStreamProvider';
media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamProviderClient = {};
media.mojom.AudioOutputStreamProviderClient.$interfaceName = 'media.mojom.AudioOutputStreamProviderClient';
media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec = { $: {} };
media.mojom.DeviceSwitchInterface = {};
media.mojom.DeviceSwitchInterface.$interfaceName = 'media.mojom.DeviceSwitchInterface';
media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec = { $: {} };

// Enum: DisconnectReason
media.mojom.DisconnectReason = {
  kDefault: 0,
  kPlatformError: 1,
  kTerminatedByClient: 2,
  kStreamCreationFailed: 3,
  kDocumentDestroyed: 4,
};

// Interface: AudioOutputStream
mojo.internal.Struct(
    media.mojom.AudioOutputStream_Play_ParamsSpec, 'media.mojom.AudioOutputStream_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_Pause_ParamsSpec, 'media.mojom.AudioOutputStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_Flush_ParamsSpec, 'media.mojom.AudioOutputStream_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_SetVolume_ParamsSpec, 'media.mojom.AudioOutputStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioOutputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  play() {
    return this.$.play();
  }
  pause() {
    return this.$.pause();
  }
  flush() {
    return this.$.flush();
  }
  setVolume(volume) {
    return this.$.setVolume(volume);
  }
};

media.mojom.AudioOutputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  play() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStream_Play_ParamsSpec,
      null,
      [],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioOutputStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioOutputStream_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.AudioOutputStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

};

media.mojom.AudioOutputStream.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStream',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Play_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_SetVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Play_ParamsSpec.$.structSpec);
          const result = this.impl.play();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_SetVolume_ParamsSpec.$.structSpec);
          const result = this.impl.setVolume(params.volume);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioOutputStreamReceiver = media.mojom.AudioOutputStreamReceiver;

media.mojom.AudioOutputStreamPtr = media.mojom.AudioOutputStreamRemote;
media.mojom.AudioOutputStreamRequest = media.mojom.AudioOutputStreamPendingReceiver;


// Interface: AudioOutputStreamObserver
mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidStartPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidStopPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_Params', [
      mojo.internal.StructField('is_audible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioOutputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didStartPlaying() {
    return this.$.didStartPlaying();
  }
  didStopPlaying() {
    return this.$.didStopPlaying();
  }
  didChangeAudibleState(is_audible) {
    return this.$.didChangeAudibleState(is_audible);
  }
};

media.mojom.AudioOutputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didStartPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  didStopPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  didChangeAudibleState(is_audible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec,
      null,
      [is_audible],
      false);
  }

};

media.mojom.AudioOutputStreamObserver.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamObserver',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec.$.structSpec);
          const result = this.impl.didStartPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec.$.structSpec);
          const result = this.impl.didStopPlaying();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeAudibleState(params.is_audible);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioOutputStreamObserverReceiver = media.mojom.AudioOutputStreamObserverReceiver;

media.mojom.AudioOutputStreamObserverPtr = media.mojom.AudioOutputStreamObserverRemote;
media.mojom.AudioOutputStreamObserverRequest = media.mojom.AudioOutputStreamObserverPendingReceiver;


// Interface: AudioOutputStreamProvider
mojo.internal.Struct(
    media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec, 'media.mojom.AudioOutputStreamProvider_Acquire_Params', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamProviderClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.AudioOutputStreamProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  acquire(params, client) {
    return this.$.acquire(params, client);
  }
};

media.mojom.AudioOutputStreamProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProvider', [
      { explicit: null },
    ]);
  }

  acquire(params, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec,
      null,
      [params, client],
      false);
  }

};

media.mojom.AudioOutputStreamProvider.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProvider',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec.$.structSpec);
          const result = this.impl.acquire(params.params, params.client);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioOutputStreamProviderReceiver = media.mojom.AudioOutputStreamProviderReceiver;

media.mojom.AudioOutputStreamProviderPtr = media.mojom.AudioOutputStreamProviderRemote;
media.mojom.AudioOutputStreamProviderRequest = media.mojom.AudioOutputStreamProviderPendingReceiver;


// Interface: AudioOutputStreamProviderClient
mojo.internal.Struct(
    media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec, 'media.mojom.AudioOutputStreamProviderClient_Created_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 8, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.AudioOutputStreamProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  created(stream, data_pipe) {
    return this.$.created(stream, data_pipe);
  }
};

media.mojom.AudioOutputStreamProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProviderClient', [
      { explicit: null },
    ]);
  }

  created(stream, data_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec,
      null,
      [stream, data_pipe],
      false);
  }

};

media.mojom.AudioOutputStreamProviderClient.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProviderClient',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamProviderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProviderClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec.$.structSpec);
          const result = this.impl.created(params.stream, params.data_pipe);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioOutputStreamProviderClientReceiver = media.mojom.AudioOutputStreamProviderClientReceiver;

media.mojom.AudioOutputStreamProviderClientPtr = media.mojom.AudioOutputStreamProviderClientRemote;
media.mojom.AudioOutputStreamProviderClientRequest = media.mojom.AudioOutputStreamProviderClientPendingReceiver;


// Interface: DeviceSwitchInterface
mojo.internal.Struct(
    media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec, 'media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_Params', [
      mojo.internal.StructField('output_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.DeviceSwitchInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DeviceSwitchInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DeviceSwitchInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DeviceSwitchInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.DeviceSwitchInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  switchAudioOutputDeviceId(output_device_id) {
    return this.$.switchAudioOutputDeviceId(output_device_id);
  }
};

media.mojom.DeviceSwitchInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceSwitchInterface', [
      { explicit: null },
    ]);
  }

  switchAudioOutputDeviceId(output_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec,
      null,
      [output_device_id],
      false);
  }

};

media.mojom.DeviceSwitchInterface.getRemote = function() {
  let remote = new media.mojom.DeviceSwitchInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DeviceSwitchInterface',
    'context');
  return remote.$;
};

media.mojom.DeviceSwitchInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceSwitchInterface', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec.$.structSpec);
          const result = this.impl.switchAudioOutputDeviceId(params.output_device_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.DeviceSwitchInterfaceReceiver = media.mojom.DeviceSwitchInterfaceReceiver;

media.mojom.DeviceSwitchInterfacePtr = media.mojom.DeviceSwitchInterfaceRemote;
media.mojom.DeviceSwitchInterfaceRequest = media.mojom.DeviceSwitchInterfacePendingReceiver;

