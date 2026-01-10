// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/speech_recognition.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.SpeechRecognitionTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.ObserverOrErrorSpec = { $: {} };
ax.mojom.SpeechRecognitionResultEventSpec = { $: {} };
ax.mojom.SpeechRecognitionErrorEventSpec = { $: {} };
ax.mojom.StartOptionsSpec = { $: {} };
ax.mojom.StopOptionsSpec = { $: {} };
ax.mojom.SpeechRecognitionStartInfoSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver = {};
ax.mojom.SpeechRecognitionEventObserver.$interfaceName = 'ax.mojom.SpeechRecognitionEventObserver';
ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition = {};
ax.mojom.SpeechRecognition.$interfaceName = 'ax.mojom.SpeechRecognition';
ax.mojom.SpeechRecognition_Start_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Start_ResponseParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Stop_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec = { $: {} };

// Enum: SpeechRecognitionType
ax.mojom.SpeechRecognitionType = {
  kOnDevice: 0,
  kNetwork: 1,
};

// Union: ObserverOrError
mojo.internal.Union(
    ax.mojom.ObserverOrErrorSpec, 'ax.mojom.ObserverOrError', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(ax.mojom.SpeechRecognitionEventObserverSpec),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: SpeechRecognitionResultEvent
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionResultEventSpec, 'ax.mojom.SpeechRecognitionResultEvent', [
      mojo.internal.StructField('transcript', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_final', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpeechRecognitionErrorEvent
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionErrorEventSpec, 'ax.mojom.SpeechRecognitionErrorEvent', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StartOptions
mojo.internal.Struct(
    ax.mojom.StartOptionsSpec, 'ax.mojom.StartOptions', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('interim_results_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'interim_results_$value', originalFieldName: 'interim_results' }),
      mojo.internal.StructField('interim_results_$value', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'interim_results_$flag', originalFieldName: 'interim_results' }),
    ],
    [[0, 32]]);

// Struct: StopOptions
mojo.internal.Struct(
    ax.mojom.StopOptionsSpec, 'ax.mojom.StopOptions', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SpeechRecognitionStartInfo
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionStartInfoSpec, 'ax.mojom.SpeechRecognitionStartInfo', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.SpeechRecognitionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer_or_error', 8, 0, ax.mojom.ObserverOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SpeechRecognitionEventObserver
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnResult_Params', [
      mojo.internal.StructField('event', 0, 0, ax.mojom.SpeechRecognitionResultEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnError_Params', [
      mojo.internal.StructField('event', 0, 0, ax.mojom.SpeechRecognitionErrorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  onResult(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec,
      null,
      [event],
      false);
  }

  onError(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec,
      null,
      [event],
      false);
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

ax.mojom.SpeechRecognitionEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStop();
          break;
        }
        case 1: {
          const params = ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onResult(params.event);
          break;
        }
        case 2: {
          const params = ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.event);
          break;
        }
      }
    });
  }
};

ax.mojom.SpeechRecognitionEventObserverReceiver = ax.mojom.SpeechRecognitionEventObserverReceiver;

ax.mojom.SpeechRecognitionEventObserverPtr = ax.mojom.SpeechRecognitionEventObserverRemote;
ax.mojom.SpeechRecognitionEventObserverRequest = ax.mojom.SpeechRecognitionEventObserverPendingReceiver;


// Interface: SpeechRecognition
mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Start_ParamsSpec, 'ax.mojom.SpeechRecognition_Start_Params', [
      mojo.internal.StructField('options', 0, 0, ax.mojom.StartOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Start_ResponseParamsSpec, 'ax.mojom.SpeechRecognition_Start_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ax.mojom.SpeechRecognitionStartInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Stop_ParamsSpec, 'ax.mojom.SpeechRecognition_Stop_Params', [
      mojo.internal.StructField('options', 0, 0, ax.mojom.StopOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec, 'ax.mojom.SpeechRecognition_Stop_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [options],
      false);
  }

  stop(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognition_Stop_ParamsSpec,
      ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec,
      [options],
      false);
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

ax.mojom.SpeechRecognitionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.SpeechRecognition_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.SpeechRecognition_Start_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ax.mojom.SpeechRecognition_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ax.mojom.SpeechRecognitionReceiver = ax.mojom.SpeechRecognitionReceiver;

ax.mojom.SpeechRecognitionPtr = ax.mojom.SpeechRecognitionRemote;
ax.mojom.SpeechRecognitionRequest = ax.mojom.SpeechRecognitionPendingReceiver;

