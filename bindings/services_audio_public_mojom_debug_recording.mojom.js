// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/debug_recording.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

audio.mojom.DebugRecordingStreamTypeSpec = { $: mojo.internal.Enum() };
audio.mojom.DebugRecordingFileProvider = {};
audio.mojom.DebugRecordingFileProvider.$interfaceName = 'audio.mojom.DebugRecordingFileProvider';
audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec = { $: {} };
audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParamsSpec = { $: {} };
audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec = { $: {} };
audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec = { $: {} };
audio.mojom.DebugRecording = {};
audio.mojom.DebugRecording.$interfaceName = 'audio.mojom.DebugRecording';
audio.mojom.DebugRecording_Enable_ParamsSpec = { $: {} };

// Enum: DebugRecordingStreamType
audio.mojom.DebugRecordingStreamType = {
  kInput: 0,
  kOutput: 1,
  kLoopback: 2,
};

// Interface: DebugRecordingFileProvider
mojo.internal.Struct(
    audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec, 'audio.mojom.DebugRecordingFileProvider_CreateWavFile_Params', [
      mojo.internal.StructField('stream_type', 0, 0, audio.mojom.DebugRecordingStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParamsSpec, 'audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec, 'audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec, 'audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.DebugRecordingFileProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.DebugRecordingFileProviderRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DebugRecordingFileProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.DebugRecordingFileProviderPendingReceiver,
      handle);
    this.$ = new audio.mojom.DebugRecordingFileProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.DebugRecordingFileProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWavFile(stream_type, id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec,
      audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParamsSpec,
      [stream_type, id],
      false);
  }

  createAecdumpFile(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec,
      audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec,
      [id],
      false);
  }

};

audio.mojom.DebugRecordingFileProvider.getRemote = function() {
  let remote = new audio.mojom.DebugRecordingFileProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DebugRecordingFileProvider',
    'context');
  return remote.$;
};

audio.mojom.DebugRecordingFileProviderReceiver = class {
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
          const params = audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createWavFile(params.stream_type, params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAecdumpFile(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

audio.mojom.DebugRecordingFileProviderReceiver = audio.mojom.DebugRecordingFileProviderReceiver;

audio.mojom.DebugRecordingFileProviderPtr = audio.mojom.DebugRecordingFileProviderRemote;
audio.mojom.DebugRecordingFileProviderRequest = audio.mojom.DebugRecordingFileProviderPendingReceiver;


// Interface: DebugRecording
mojo.internal.Struct(
    audio.mojom.DebugRecording_Enable_ParamsSpec, 'audio.mojom.DebugRecording_Enable_Params', [
      mojo.internal.StructField('file_provider', 0, 0, mojo.internal.InterfaceProxy(audio.mojom.DebugRecordingFileProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.DebugRecordingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.DebugRecordingRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.DebugRecording';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.DebugRecordingPendingReceiver,
      handle);
    this.$ = new audio.mojom.DebugRecordingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.DebugRecordingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enable(file_provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.DebugRecording_Enable_ParamsSpec,
      null,
      [file_provider],
      false);
  }

};

audio.mojom.DebugRecording.getRemote = function() {
  let remote = new audio.mojom.DebugRecordingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.DebugRecording',
    'context');
  return remote.$;
};

audio.mojom.DebugRecordingReceiver = class {
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
          const params = audio.mojom.DebugRecording_Enable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enable(params.file_provider);
          break;
        }
      }
    }});
  }
};

audio.mojom.DebugRecordingReceiver = audio.mojom.DebugRecordingReceiver;

audio.mojom.DebugRecordingPtr = audio.mojom.DebugRecordingRemote;
audio.mojom.DebugRecordingRequest = audio.mojom.DebugRecordingPendingReceiver;

