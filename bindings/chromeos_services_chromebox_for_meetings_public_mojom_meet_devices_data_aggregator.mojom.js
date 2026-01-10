// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_data_aggregator.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};

ash.cfm.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };
ash.cfm.mojom.DataFilterSpec = { $: {} };
ash.cfm.mojom.DataWatchDog = {};
ash.cfm.mojom.DataWatchDog.$interfaceName = 'ash.cfm.mojom.DataWatchDog';
ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec = { $: {} };
ash.cfm.mojom.DataSource = {};
ash.cfm.mojom.DataSource.$interfaceName = 'ash.cfm.mojom.DataSource';
ash.cfm.mojom.DataSource_Fetch_ParamsSpec = { $: {} };
ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec = { $: {} };
ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.DataSource_Flush_ParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator = {};
ash.cfm.mojom.DataAggregator.$interfaceName = 'ash.cfm.mojom.DataAggregator';
ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec = { $: {} };
ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec = { $: {} };

// Enum: FilterType
ash.cfm.mojom.FilterType = {
  REGEX: 0,
  CHANGE: 1,
};

// Struct: DataFilter
mojo.internal.Struct(
    ash.cfm.mojom.DataFilterSpec, 'ash.cfm.mojom.DataFilter', [
      mojo.internal.StructField('REGEX', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DataWatchDog
mojo.internal.Struct(
    ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec, 'ash.cfm.mojom.DataWatchDog_OnNotify_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cfm.mojom.DataWatchDogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.DataWatchDogRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataWatchDog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.DataWatchDogPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.DataWatchDogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.DataWatchDogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotify(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec,
      null,
      [data],
      false);
  }

};

ash.cfm.mojom.DataWatchDog.getRemote = function() {
  let remote = new ash.cfm.mojom.DataWatchDogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataWatchDog',
    'context');
  return remote.$;
};

ash.cfm.mojom.DataWatchDogReceiver = class {
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
          const params = ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNotify(params.data);
          break;
        }
      }
    });
  }
};

ash.cfm.mojom.DataWatchDogReceiver = ash.cfm.mojom.DataWatchDogReceiver;

ash.cfm.mojom.DataWatchDogPtr = ash.cfm.mojom.DataWatchDogRemote;
ash.cfm.mojom.DataWatchDogRequest = ash.cfm.mojom.DataWatchDogPendingReceiver;


// Interface: DataSource
mojo.internal.Struct(
    ash.cfm.mojom.DataSource_Fetch_ParamsSpec, 'ash.cfm.mojom.DataSource_Fetch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec, 'ash.cfm.mojom.DataSource_Fetch_ResponseParams', [
      mojo.internal.StructField('serialized_payloads', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec, 'ash.cfm.mojom.DataSource_AddWatchDog_Params', [
      mojo.internal.StructField('filter', 0, 0, ash.cfm.mojom.DataFilterSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('watch_dog', 8, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataWatchDogSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec, 'ash.cfm.mojom.DataSource_AddWatchDog_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataSource_Flush_ParamsSpec, 'ash.cfm.mojom.DataSource_Flush_Params', [
    ],
    [[0, 8]]);

ash.cfm.mojom.DataSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.DataSourceRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.DataSourcePendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.DataSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.DataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetch() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.mojom.DataSource_Fetch_ParamsSpec,
      ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec,
      [],
      false);
  }

  addWatchDog(filter, watch_dog) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec,
      ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec,
      [filter, watch_dog],
      false);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.DataSource_Flush_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cfm.mojom.DataSource.getRemote = function() {
  let remote = new ash.cfm.mojom.DataSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataSource',
    'context');
  return remote.$;
};

ash.cfm.mojom.DataSourceReceiver = class {
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
          const params = ash.cfm.mojom.DataSource_Fetch_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetch();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addWatchDog(params.filter, params.watch_dog);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.cfm.mojom.DataSource_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          break;
        }
      }
    });
  }
};

ash.cfm.mojom.DataSourceReceiver = ash.cfm.mojom.DataSourceReceiver;

ash.cfm.mojom.DataSourcePtr = ash.cfm.mojom.DataSourceRemote;
ash.cfm.mojom.DataSourceRequest = ash.cfm.mojom.DataSourcePendingReceiver;


// Interface: DataAggregator
mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec, 'ash.cfm.mojom.DataAggregator_GetDataSourceNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec, 'ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParams', [
      mojo.internal.StructField('data_source_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec, 'ash.cfm.mojom.DataAggregator_AddDataSource_Params', [
      mojo.internal.StructField('source_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_source', 8, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataSourceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec, 'ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec, 'ash.cfm.mojom.DataAggregator_AddWatchDog_Params', [
      mojo.internal.StructField('source_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 8, 0, ash.cfm.mojom.DataFilterSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('watch_dog', 16, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataWatchDogSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec, 'ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cfm.mojom.DataAggregatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.DataAggregatorRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataAggregator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.DataAggregatorPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.DataAggregatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.DataAggregatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDataSourceNames() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec,
      ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec,
      [],
      false);
  }

  addDataSource(source_name, data_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec,
      ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec,
      [source_name, data_source],
      false);
  }

  addWatchDog(source_name, filter, watch_dog) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec,
      ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec,
      [source_name, filter, watch_dog],
      false);
  }

};

ash.cfm.mojom.DataAggregator.getRemote = function() {
  let remote = new ash.cfm.mojom.DataAggregatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataAggregator',
    'context');
  return remote.$;
};

ash.cfm.mojom.DataAggregatorReceiver = class {
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
          const params = ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDataSourceNames();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addDataSource(params.source_name, params.data_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addWatchDog(params.source_name, params.filter, params.watch_dog);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.cfm.mojom.DataAggregatorReceiver = ash.cfm.mojom.DataAggregatorReceiver;

ash.cfm.mojom.DataAggregatorPtr = ash.cfm.mojom.DataAggregatorRemote;
ash.cfm.mojom.DataAggregatorRequest = ash.cfm.mojom.DataAggregatorPendingReceiver;

