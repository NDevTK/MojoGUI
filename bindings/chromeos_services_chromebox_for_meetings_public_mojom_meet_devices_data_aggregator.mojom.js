// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_data_aggregator.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};


// Enum: FilterType
ash.cfm.mojom.FilterType = {
  CHANGE: 0,
};
ash.cfm.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };

// Struct: DataFilter
ash.cfm.mojom.DataFilterSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataFilter',
      packedSize: 16,
      fields: [
        { name: 'REGEX', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: DataWatchDog
ash.cfm.mojom.DataWatchDog = {};

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
      [data]);
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

// ParamsSpec for OnNotify
ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataWatchDog.OnNotify_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cfm.mojom.DataWatchDogPtr = ash.cfm.mojom.DataWatchDogRemote;
ash.cfm.mojom.DataWatchDogRequest = ash.cfm.mojom.DataWatchDogPendingReceiver;


// Interface: DataSource
ash.cfm.mojom.DataSource = {};

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
      []);
  }

  addWatchDog(filter, watch_dog) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec,
      ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec,
      [filter, watch_dog]);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.DataSource_Flush_ParamsSpec,
      null,
      []);
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

// ParamsSpec for Fetch
ash.cfm.mojom.DataSource_Fetch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataSource.Fetch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataSource.Fetch_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'serialized_payloads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddWatchDog
ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataSource.AddWatchDog_Params',
      packedSize: 24,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: ash.cfm.mojom.DataFilterSpec, nullable: false, minVersion: 0 },
        { name: 'watch_dog', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataSource.AddWatchDog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
ash.cfm.mojom.DataSource_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataSource.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cfm.mojom.DataSourcePtr = ash.cfm.mojom.DataSourceRemote;
ash.cfm.mojom.DataSourceRequest = ash.cfm.mojom.DataSourcePendingReceiver;


// Interface: DataAggregator
ash.cfm.mojom.DataAggregator = {};

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
      []);
  }

  addDataSource(source_name, data_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec,
      ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec,
      [source_name, data_source]);
  }

  addWatchDog(source_name, filter, watch_dog) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec,
      ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec,
      [source_name, filter, watch_dog]);
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

// ParamsSpec for GetDataSourceNames
ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.GetDataSourceNames_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.GetDataSourceNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data_source_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDataSource
ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.AddDataSource_Params',
      packedSize: 24,
      fields: [
        { name: 'source_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.AddDataSource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddWatchDog
ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.AddWatchDog_Params',
      packedSize: 32,
      fields: [
        { name: 'source_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'filter', packedOffset: 8, packedBitOffset: 0, type: ash.cfm.mojom.DataFilterSpec, nullable: false, minVersion: 0 },
        { name: 'watch_dog', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.cfm.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataAggregator.AddWatchDog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cfm.mojom.DataAggregatorPtr = ash.cfm.mojom.DataAggregatorRemote;
ash.cfm.mojom.DataAggregatorRequest = ash.cfm.mojom.DataAggregatorPendingReceiver;

