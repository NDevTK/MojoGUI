// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.PrintSessionHost = {};
arc.mojom.PrintSessionHost.$interfaceName = 'arc.mojom.PrintSessionHost';
arc.mojom.PrintSessionInstance = {};
arc.mojom.PrintSessionInstance.$interfaceName = 'arc.mojom.PrintSessionInstance';
arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec = { $: {} };
arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec = { $: {} };
arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec = { $: {} };
arc.mojom.PrintSpoolerHost = {};
arc.mojom.PrintSpoolerHost.$interfaceName = 'arc.mojom.PrintSpoolerHost';
arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec = { $: {} };
arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec = { $: {} };
arc.mojom.PrintSpoolerInstance = {};
arc.mojom.PrintSpoolerInstance.$interfaceName = 'arc.mojom.PrintSpoolerInstance';
arc.mojom.PrintSpoolerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: PrintSessionHost
arc.mojom.PrintSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrintSessionHost.getRemote = function() {
  let remote = new arc.mojom.PrintSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionHost',
    'context');
  return remote.$;
};

arc.mojom.PrintSessionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

arc.mojom.PrintSessionHostReceiver = arc.mojom.PrintSessionHostReceiver;

arc.mojom.PrintSessionHostPtr = arc.mojom.PrintSessionHostRemote;
arc.mojom.PrintSessionHostRequest = arc.mojom.PrintSessionHostPendingReceiver;


// Interface: PrintSessionInstance
mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec, 'arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec, 'arc.mojom.PrintSessionInstance_CreatePreviewDocument_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.PrintDocumentRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec, 'arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParams', [
      mojo.internal.StructField('data_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('preview_document', 8, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.PrintSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintPreviewClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec,
      null,
      [],
      false);
  }

  createPreviewDocument(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec,
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec,
      [request],
      false);
  }

};

arc.mojom.PrintSessionInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.PrintSessionInstanceReceiver = class {
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
          const params = arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPrintPreviewClosed();
          break;
        }
        case 1: {
          const params = arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPreviewDocument(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.PrintSessionInstanceReceiver = arc.mojom.PrintSessionInstanceReceiver;

arc.mojom.PrintSessionInstancePtr = arc.mojom.PrintSessionInstanceRemote;
arc.mojom.PrintSessionInstanceRequest = arc.mojom.PrintSessionInstancePendingReceiver;


// Interface: PrintSpoolerHost
mojo.internal.Struct(
    arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec, 'arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_Params', [
      mojo.internal.StructField('instance', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSessionInstanceSpec), null, false, 0, undefined),
      mojo.internal.StructField('scoped_handle', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec, 'arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParams', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSessionHostSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PrintSpoolerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSpoolerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPrintInCustomTab(scoped_handle, task_id, instance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec,
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec,
      [scoped_handle, task_id, instance],
      false);
  }

};

arc.mojom.PrintSpoolerHost.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerHost',
    'context');
  return remote.$;
};

arc.mojom.PrintSpoolerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startPrintInCustomTab(params.scoped_handle, params.task_id, params.instance);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.PrintSpoolerHostReceiver = arc.mojom.PrintSpoolerHostReceiver;

arc.mojom.PrintSpoolerHostPtr = arc.mojom.PrintSpoolerHostRemote;
arc.mojom.PrintSpoolerHostRequest = arc.mojom.PrintSpoolerHostPendingReceiver;


// Interface: PrintSpoolerInstance
mojo.internal.Struct(
    arc.mojom.PrintSpoolerInstance_Init_ParamsSpec, 'arc.mojom.PrintSpoolerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec, 'arc.mojom.PrintSpoolerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.PrintSpoolerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSpoolerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrintSpoolerInstance_Init_ParamsSpec,
      arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.PrintSpoolerInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerInstance',
    'context');
  return remote.$;
};

arc.mojom.PrintSpoolerInstanceReceiver = class {
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
          const params = arc.mojom.PrintSpoolerInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.PrintSpoolerInstanceReceiver = arc.mojom.PrintSpoolerInstanceReceiver;

arc.mojom.PrintSpoolerInstancePtr = arc.mojom.PrintSpoolerInstanceRemote;
arc.mojom.PrintSpoolerInstanceRequest = arc.mojom.PrintSpoolerInstancePendingReceiver;

