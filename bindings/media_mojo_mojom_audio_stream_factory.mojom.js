// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

media.mojom.LocalMuter = {};
media.mojom.LocalMuter.$interfaceName = 'media.mojom.LocalMuter';
media.mojom.AudioStreamFactory = {};
media.mojom.AudioStreamFactory.$interfaceName = 'media.mojom.AudioStreamFactory';
media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_BindMuter_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = { $: {} };

// Interface: LocalMuter
media.mojom.LocalMuterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.LocalMuterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.LocalMuter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.LocalMuterPendingReceiver,
      handle);
    this.$ = new media.mojom.LocalMuterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.LocalMuterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMuter', [
    ]);
  }

};

media.mojom.LocalMuter.getRemote = function() {
  let remote = new media.mojom.LocalMuterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.LocalMuter',
    'context');
  return remote.$;
};

media.mojom.LocalMuterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalMuter', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

media.mojom.LocalMuterReceiver = media.mojom.LocalMuterReceiver;

media.mojom.LocalMuterPtr = media.mojom.LocalMuterRemote;
media.mojom.LocalMuterRequest = media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('processing_config', 56, 0, media.mojom.AudioProcessingConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_agc', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initially_muted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec, 'media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_Params', [
      mojo.internal.StructField('input_stream_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, pending_associated_remote<media.mojom.AudioOutputStreamObserver>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('log', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 32, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_switch_receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.DeviceSwitchInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, pending_associated_remote<media.mojom.AudioOutputStreamObserver>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_BindMuter_ParamsSpec, 'media.mojom.AudioStreamFactory_BindMuter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioStreamFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    return this.$.createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config);
  }
  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    return this.$.associateInputAndOutputForAec(input_stream_id, output_device_id);
  }
  createOutputStream(stream, observer, log, device_id, params, group_id) {
    return this.$.createOutputStream(stream, observer, log, device_id, params, group_id);
  }
  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    return this.$.createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id);
  }
  bindMuter(receiver, group_id) {
    return this.$.bindMuter(receiver, group_id);
  }
  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    return this.$.createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id);
  }
};

media.mojom.AudioStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioStreamFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec,
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config],
      false);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id],
      false);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [stream, observer, log, device_id, params, group_id],
      false);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id],
      false);
  }

  bindMuter(receiver, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [receiver, group_id],
      false);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [receiver, client, observer, params, shared_memory_count, group_id],
      false);
  }

};

media.mojom.AudioStreamFactory.getRemote = function() {
  let remote = new media.mojom.AudioStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioStreamFactory',
    'context');
  return remote.$;
};

media.mojom.AudioStreamFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioStreamFactory', [
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_BindMuter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec.$.structSpec);
          const result = this.impl.createInputStream(params.stream, params.client, params.observer, params.log, params.device_id, params.params, params.group_id, params.shared_memory_count, params.enable_agc, params.processing_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec.$.structSpec);
          const result = this.impl.associateInputAndOutputForAec(params.input_stream_id, params.output_device_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec.$.structSpec);
          const result = this.impl.createOutputStream(params.stream, params.observer, params.log, params.device_id, params.params, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec.$.structSpec);
          const result = this.impl.createSwitchableOutputStream(params.stream, params.device_switch_receiver, params.observer, params.log, params.device_id, params.params, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_BindMuter_ParamsSpec.$.structSpec);
          const result = this.impl.bindMuter(params.receiver, params.group_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec.$.structSpec);
          const result = this.impl.createLoopbackStream(params.receiver, params.client, params.observer, params.params, params.shared_memory_count, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.AudioStreamFactoryReceiver = media.mojom.AudioStreamFactoryReceiver;

media.mojom.AudioStreamFactoryPtr = media.mojom.AudioStreamFactoryRemote;
media.mojom.AudioStreamFactoryRequest = media.mojom.AudioStreamFactoryPendingReceiver;

