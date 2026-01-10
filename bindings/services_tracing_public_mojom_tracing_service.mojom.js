// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var services = services || {};
var services = services || {};

tracing.mojom.ClientInfoSpec = { $: {} };
tracing.mojom.TracingService = {};
tracing.mojom.TracingService.$interfaceName = 'tracing.mojom.TracingService';
tracing.mojom.TracingService_Initialize_ParamsSpec = { $: {} };
tracing.mojom.TracingService_AddClient_ParamsSpec = { $: {} };
tracing.mojom.TracingService_BindConsumerHost_ParamsSpec = { $: {} };

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kUtility;

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kService;

// Struct: ClientInfo
mojo.internal.Struct(
    tracing.mojom.ClientInfoSpec, 'tracing.mojom.ClientInfo', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('process', 8, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracedProcessRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TracingService
mojo.internal.Struct(
    tracing.mojom.TracingService_Initialize_ParamsSpec, 'tracing.mojom.TracingService_Initialize_Params', [
      mojo.internal.StructField('clients', 0, 0, mojo.internal.Array(tracing.mojom.ClientInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_AddClient_ParamsSpec, 'tracing.mojom.TracingService_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, tracing.mojom.ClientInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_BindConsumerHost_ParamsSpec, 'tracing.mojom.TracingService_BindConsumerHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.ConsumerHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.TracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(clients) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracingService_Initialize_ParamsSpec,
      null,
      [clients],
      false);
  }

  addClient(client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tracing.mojom.TracingService_AddClient_ParamsSpec,
      null,
      [client],
      false);
  }

  bindConsumerHost(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tracing.mojom.TracingService_BindConsumerHost_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

tracing.mojom.TracingService.getRemote = function() {
  let remote = new tracing.mojom.TracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingService',
    'context');
  return remote.$;
};

tracing.mojom.TracingServicePtr = tracing.mojom.TracingServiceRemote;
tracing.mojom.TracingServiceRequest = tracing.mojom.TracingServicePendingReceiver;

