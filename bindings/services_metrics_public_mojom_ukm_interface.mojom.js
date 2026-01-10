// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

'use strict';

// Module namespace
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};

ukm.mojom.UkmEntrySpec = { $: {} };
ukm.mojom.UkmRecorderParametersSpec = { $: {} };
ukm.mojom.SingularUkmInterface = {};
ukm.mojom.SingularUkmInterface.$interfaceName = 'ukm.mojom.SingularUkmInterface';
ukm.mojom.SingularUkmInterface_Submit_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderClientInterface = {};
ukm.mojom.UkmRecorderClientInterface.$interfaceName = 'ukm.mojom.UkmRecorderClientInterface';
ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface = {};
ukm.mojom.UkmRecorderInterface.$interfaceName = 'ukm.mojom.UkmRecorderInterface';
ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderFactory = {};
ukm.mojom.UkmRecorderFactory.$interfaceName = 'ukm.mojom.UkmRecorderFactory';
ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec = { $: {} };

// Struct: UkmEntry
mojo.internal.Struct(
    ukm.mojom.UkmEntrySpec, 'ukm.mojom.UkmEntry', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('event_hash', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('metrics', 16, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UkmRecorderParameters
mojo.internal.Struct(
    ukm.mojom.UkmRecorderParametersSpec, 'ukm.mojom.UkmRecorderParameters', [
      mojo.internal.StructField('event_hash_bypass_list', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SingularUkmInterface
mojo.internal.Struct(
    ukm.mojom.SingularUkmInterface_Submit_ParamsSpec, 'ukm.mojom.SingularUkmInterface_Submit_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.SingularUkmInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.SingularUkmInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.SingularUkmInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.SingularUkmInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.SingularUkmInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.SingularUkmInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  submit(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.SingularUkmInterface_Submit_ParamsSpec,
      null,
      [entry],
      false);
  }

};

ukm.mojom.SingularUkmInterface.getRemote = function() {
  let remote = new ukm.mojom.SingularUkmInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.SingularUkmInterface',
    'context');
  return remote.$;
};

ukm.mojom.SingularUkmInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ukm.mojom.SingularUkmInterface_Submit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.submit(params.entry);
          break;
        }
      }
    }});
  }
};

ukm.mojom.SingularUkmInterfaceReceiver = ukm.mojom.SingularUkmInterfaceReceiver;

ukm.mojom.SingularUkmInterfacePtr = ukm.mojom.SingularUkmInterfaceRemote;
ukm.mojom.SingularUkmInterfaceRequest = ukm.mojom.SingularUkmInterfacePendingReceiver;


// Interface: UkmRecorderClientInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec, 'ukm.mojom.UkmRecorderClientInterface_SetParameters_Params', [
      mojo.internal.StructField('params', 0, 0, ukm.mojom.UkmRecorderParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.UkmRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParameters(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec,
      null,
      [params],
      false);
  }

};

ukm.mojom.UkmRecorderClientInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderClientInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setParameters(params.params);
          break;
        }
      }
    }});
  }
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = ukm.mojom.UkmRecorderClientInterfaceReceiver;

ukm.mojom.UkmRecorderClientInterfacePtr = ukm.mojom.UkmRecorderClientInterfaceRemote;
ukm.mojom.UkmRecorderClientInterfaceRequest = ukm.mojom.UkmRecorderClientInterfacePendingReceiver;


// Interface: UkmRecorderInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_AddEntry_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_UpdateSourceURL_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntry(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry],
      false);
  }

  updateSourceURL(source_id, url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec,
      null,
      [source_id, url],
      false);
  }

};

ukm.mojom.UkmRecorderInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addEntry(params.entry);
          break;
        }
        case 1: {
          const params = ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateSourceURL(params.source_id, params.url);
          break;
        }
      }
    }});
  }
};

ukm.mojom.UkmRecorderInterfaceReceiver = ukm.mojom.UkmRecorderInterfaceReceiver;

ukm.mojom.UkmRecorderInterfacePtr = ukm.mojom.UkmRecorderInterfaceRemote;
ukm.mojom.UkmRecorderInterfaceRequest = ukm.mojom.UkmRecorderInterfacePendingReceiver;


// Interface: UkmRecorderFactory
mojo.internal.Struct(
    ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec, 'ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ukm.mojom.UkmRecorderInterfaceSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(ukm.mojom.UkmRecorderClientInterfaceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderFactoryPendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUkmRecorder(receiver, client_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec,
      null,
      [receiver, client_remote],
      false);
  }

};

ukm.mojom.UkmRecorderFactory.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderFactory',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createUkmRecorder(params.receiver, params.client_remote);
          break;
        }
      }
    }});
  }
};

ukm.mojom.UkmRecorderFactoryReceiver = ukm.mojom.UkmRecorderFactoryReceiver;

ukm.mojom.UkmRecorderFactoryPtr = ukm.mojom.UkmRecorderFactoryRemote;
ukm.mojom.UkmRecorderFactoryRequest = ukm.mojom.UkmRecorderFactoryPendingReceiver;

