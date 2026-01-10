// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/speech_recognition.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: SpeechRecognitionType
ax.mojom.mojom.SpeechRecognitionType = {
  kOnDevice: 0,
  kNetwork: 1,
};
ax.mojom.mojom.SpeechRecognitionTypeSpec = { $: mojo.internal.Enum() };

// Union: ObserverOrError
ax.mojom.mojom.ObserverOrErrorSpec = { $: mojo.internal.Union(
    'ax.mojom.ObserverOrError', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(ax.mojom.SpeechRecognitionEventObserverRemote),
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: SpeechRecognitionResultEvent
ax.mojom.mojom.SpeechRecognitionResultEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionResultEvent',
      packedSize: 24,
      fields: [
        { name: 'transcript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_final', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SpeechRecognitionErrorEvent
ax.mojom.mojom.SpeechRecognitionErrorEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionErrorEvent',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: StartOptions
ax.mojom.mojom.StartOptionsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.StartOptions',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AssistiveTechnologyTypeSpec, nullable: false, minVersion: 0 },
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'interim_results_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'interim_results_$value', originalFieldName: 'interim_results' } },
        { name: 'interim_results_$value', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'interim_results_$flag', originalFieldName: 'interim_results' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StopOptions
ax.mojom.mojom.StopOptionsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.StopOptions',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AssistiveTechnologyTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SpeechRecognitionStartInfo
ax.mojom.mojom.SpeechRecognitionStartInfoSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionStartInfo',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.SpeechRecognitionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'observer_or_error', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.ObserverOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SpeechRecognitionEventObserver
ax.mojom.mojom.SpeechRecognitionEventObserver = {};

ax.mojom.mojom.SpeechRecognitionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.SpeechRecognitionEventObserverRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognitionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.SpeechRecognitionEventObserverPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.SpeechRecognitionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.SpeechRecognitionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStop() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec,
      null,
      []);
  }

  onResult(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec,
      null,
      [event]);
  }

  onError(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec,
      null,
      [event]);
  }

};

ax.mojom.mojom.SpeechRecognitionEventObserver.getRemote = function() {
  let remote = new ax.mojom.mojom.SpeechRecognitionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognitionEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStop
ax.mojom.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnResult
ax.mojom.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnResult_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.SpeechRecognitionResultEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
ax.mojom.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognitionEventObserver.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.SpeechRecognitionErrorEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.SpeechRecognitionEventObserverPtr = ax.mojom.mojom.SpeechRecognitionEventObserverRemote;
ax.mojom.mojom.SpeechRecognitionEventObserverRequest = ax.mojom.mojom.SpeechRecognitionEventObserverPendingReceiver;


// Interface: SpeechRecognition
ax.mojom.mojom.SpeechRecognition = {};

ax.mojom.mojom.SpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.SpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.SpeechRecognitionPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.SpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.SpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.SpeechRecognition_Start_ParamsSpec,
      ax.mojom.mojom.SpeechRecognition_Start_ResponseParamsSpec,
      [options]);
  }

  stop(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.mojom.SpeechRecognition_Stop_ParamsSpec,
      ax.mojom.mojom.SpeechRecognition_Stop_ResponseParamsSpec,
      [options]);
  }

};

ax.mojom.mojom.SpeechRecognition.getRemote = function() {
  let remote = new ax.mojom.mojom.SpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognition',
    'context');
  return remote.$;
};

// ParamsSpec for Start
ax.mojom.mojom.SpeechRecognition_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.StartOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.mojom.mojom.SpeechRecognition_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Start_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.SpeechRecognitionStartInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
ax.mojom.mojom.SpeechRecognition_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.StopOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.mojom.mojom.SpeechRecognition_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SpeechRecognition.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.SpeechRecognitionPtr = ax.mojom.mojom.SpeechRecognitionRemote;
ax.mojom.mojom.SpeechRecognitionRequest = ax.mojom.mojom.SpeechRecognitionPendingReceiver;

