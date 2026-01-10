// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/debug_recording.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Enum: DebugRecordingStreamType
audio.mojom.DebugRecordingStreamType = {
  kInput: 0,
  kOutput: 1,
  kLoopback: 2,
};
audio.mojom.DebugRecordingStreamTypeSpec = { $: mojo.internal.Enum() };

// Interface: DebugRecordingFileProvider
audio.mojom.DebugRecordingFileProvider = {};

audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider_CreateWavFile_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: audio.mojom.DebugRecordingStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [stream_type, id]);
  }

  createAecdumpFile(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec,
      audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec,
      [id]);
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

// ParamsSpec for CreateWavFile
audio.mojom.DebugRecordingFileProvider_CreateWavFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider.CreateWavFile_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_type', packedOffset: 0, packedBitOffset: 0, type: audio.mojom.DebugRecordingStreamTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

audio.mojom.DebugRecordingFileProvider_CreateWavFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider.CreateWavFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateAecdumpFile
audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider.CreateAecdumpFile_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

audio.mojom.DebugRecordingFileProvider_CreateAecdumpFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecordingFileProvider.CreateAecdumpFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
audio.mojom.DebugRecordingFileProviderPtr = audio.mojom.DebugRecordingFileProviderRemote;
audio.mojom.DebugRecordingFileProviderRequest = audio.mojom.DebugRecordingFileProviderPendingReceiver;


// Interface: DebugRecording
audio.mojom.DebugRecording = {};

audio.mojom.DebugRecording_Enable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecording_Enable_Params',
      packedSize: 16,
      fields: [
        { name: 'file_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(audio.mojom.DebugRecordingFileProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [file_provider]);
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

// ParamsSpec for Enable
audio.mojom.DebugRecording_Enable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.DebugRecording.Enable_Params',
      packedSize: 16,
      fields: [
        { name: 'file_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(audio.mojom.DebugRecordingFileProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
audio.mojom.DebugRecordingPtr = audio.mojom.DebugRecordingRemote;
audio.mojom.DebugRecordingRequest = audio.mojom.DebugRecordingPendingReceiver;

