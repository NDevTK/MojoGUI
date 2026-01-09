// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/speech_recognition.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: SpeechRecognitionType
ax.mojom.SpeechRecognitionType = {
  kOnDevice: 0,
  kNetwork: 1,
};

// Struct: SpeechRecognitionResultEvent
ax.mojom.SpeechRecognitionResultEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionResultEvent',
      packedSize: 24,
      fields: [
        { name: 'transcript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_final', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpeechRecognitionErrorEvent
ax.mojom.SpeechRecognitionErrorEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionErrorEvent',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StartOptions
ax.mojom.StartOptionsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.StartOptions',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interim_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StopOptions
ax.mojom.StopOptionsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.StopOptions',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SpeechRecognitionStartInfo
ax.mojom.SpeechRecognitionStartInfoSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionStartInfo',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'observer_or_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SpeechRecognitionEventObserver
ax.mojom.SpeechRecognitionEventObserver = {};

ax.mojom.SpeechRecognitionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.SpeechRecognitionEventObserverRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognitionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.SpeechRecognitionEventObserverPendingReceiver,
      handle);
    this.$ = new ax.mojom.SpeechRecognitionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.SpeechRecognitionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStop() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec,
      null,
      []);
  }

  onResult(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec,
      null,
      [event]);
  }

  onError(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec,
      null,
      [event]);
  }

};

ax.mojom.SpeechRecognitionEventObserver.getRemote = function() {
  let remote = new ax.mojom.SpeechRecognitionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognitionEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStop
ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnResult
ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.SpeechRecognitionEventObserverPtr = ax.mojom.SpeechRecognitionEventObserverRemote;
ax.mojom.SpeechRecognitionEventObserverRequest = ax.mojom.SpeechRecognitionEventObserverPendingReceiver;


// Interface: SpeechRecognition
ax.mojom.SpeechRecognition = {};

ax.mojom.SpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.SpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.SpeechRecognitionPendingReceiver,
      handle);
    this.$ = new ax.mojom.SpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.SpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.SpeechRecognition_Start_ParamsSpec,
      ax.mojom.SpeechRecognition_Start_ResponseParamsSpec,
      [options]);
  }

  stop(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognition_Stop_ParamsSpec,
      ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec,
      [options]);
  }

};

ax.mojom.SpeechRecognition.getRemote = function() {
  let remote = new ax.mojom.SpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognition',
    'context');
  return remote.$;
};

// ParamsSpec for Start
ax.mojom.SpeechRecognition_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.SpeechRecognition_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Start_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
ax.mojom.SpeechRecognition_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.SpeechRecognitionPtr = ax.mojom.SpeechRecognitionRemote;
ax.mojom.SpeechRecognitionRequest = ax.mojom.SpeechRecognitionPendingReceiver;

