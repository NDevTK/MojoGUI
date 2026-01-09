// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/orca/public/mojom/orca_service.mojom
// Module: ash.orca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.orca = ash.orca || {};
ash.orca.mojom = ash.orca.mojom || {};


// Enum: PresetTextQueryType
ash.orca.mojom.PresetTextQueryType = {
  kShorten: 0,
  kElaborate: 1,
  kRephrase: 2,
  kFormalize: 3,
  kEmojify: 4,
};

// Enum: MetricEvent
ash.orca.mojom.MetricEvent = {
  kRefineRequest: 0,
  kFeedbackThumbsUp: 1,
  kFeedbackThumbsDown: 2,
  kReturnToPreviousSuggestions: 3,
  kWebUIRequest: 4,
};

// Enum: TextQueryErrorCode
ash.orca.mojom.TextQueryErrorCode = {
  kInvalidArgument: 0,
};

// Interface: EditorClient
ash.orca.mojom.EditorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.EditorClient.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClient',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.EditorClientPtr = ash.orca.mojom.EditorClientRemote;
ash.orca.mojom.EditorClientRequest = ash.orca.mojom.EditorClientPendingReceiver;


// Interface: EditorClientConnector
ash.orca.mojom.EditorClientConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorClientConnectorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorClientConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorClientConnectorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorClientConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorClientConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.EditorClientConnector.getRemote = function() {
  let remote = new ash.orca.mojom.EditorClientConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorClientConnector',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.EditorClientConnectorPtr = ash.orca.mojom.EditorClientConnectorRemote;
ash.orca.mojom.EditorClientConnectorRequest = ash.orca.mojom.EditorClientConnectorPendingReceiver;


// Interface: EditorEventSink
ash.orca.mojom.EditorEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.EditorEventSinkRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.EditorEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.EditorEventSinkPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.EditorEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.EditorEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.EditorEventSink.getRemote = function() {
  let remote = new ash.orca.mojom.EditorEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.EditorEventSink',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.EditorEventSinkPtr = ash.orca.mojom.EditorEventSinkRemote;
ash.orca.mojom.EditorEventSinkRequest = ash.orca.mojom.EditorEventSinkPendingReceiver;


// Interface: SystemActuator
ash.orca.mojom.SystemActuatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.SystemActuatorRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.SystemActuator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.SystemActuatorPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.SystemActuatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.SystemActuatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.SystemActuator.getRemote = function() {
  let remote = new ash.orca.mojom.SystemActuatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.SystemActuator',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.SystemActuatorPtr = ash.orca.mojom.SystemActuatorRemote;
ash.orca.mojom.SystemActuatorRequest = ash.orca.mojom.SystemActuatorPendingReceiver;


// Interface: TextQueryProvider
ash.orca.mojom.TextQueryProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.TextQueryProviderRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.TextQueryProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.TextQueryProviderPendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.TextQueryProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.TextQueryProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.TextQueryProvider.getRemote = function() {
  let remote = new ash.orca.mojom.TextQueryProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.TextQueryProvider',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.TextQueryProviderPtr = ash.orca.mojom.TextQueryProviderRemote;
ash.orca.mojom.TextQueryProviderRequest = ash.orca.mojom.TextQueryProviderPendingReceiver;


// Interface: OrcaService
ash.orca.mojom.OrcaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.orca.mojom.OrcaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.orca.mojom.OrcaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.orca.mojom.OrcaServicePendingReceiver,
      handle);
    this.$ = new ash.orca.mojom.OrcaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.orca.mojom.OrcaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.orca.mojom.OrcaService.getRemote = function() {
  let remote = new ash.orca.mojom.OrcaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.orca.mojom.OrcaService',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.orca.mojom.OrcaServicePtr = ash.orca.mojom.OrcaServiceRemote;
ash.orca.mojom.OrcaServiceRequest = ash.orca.mojom.OrcaServicePendingReceiver;

