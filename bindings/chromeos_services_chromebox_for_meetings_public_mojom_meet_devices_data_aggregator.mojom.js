// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_data_aggregator.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.cfm.mojom = ash.cfm.cfm.mojom || {};


// Enum: FilterType
ash.cfm.cfm.mojom.mojom.FilterType = {
  CHANGE: 0,
};
ash.cfm.cfm.mojom.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };

// Struct: DataFilter
ash.cfm.cfm.mojom.mojom.DataFilterSpec = {
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
ash.cfm.cfm.mojom.mojom.DataWatchDog = {};

ash.cfm.cfm.mojom.mojom.DataWatchDogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.cfm.mojom.mojom.DataWatchDogRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataWatchDog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.cfm.mojom.mojom.DataWatchDogPendingReceiver,
      handle);
    this.$ = new ash.cfm.cfm.mojom.mojom.DataWatchDogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.cfm.mojom.mojom.DataWatchDogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotify(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataWatchDog_OnNotify_ParamsSpec,
      null,
      [data]);
  }

};

ash.cfm.cfm.mojom.mojom.DataWatchDog.getRemote = function() {
  let remote = new ash.cfm.cfm.mojom.mojom.DataWatchDogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataWatchDog',
    'context');
  return remote.$;
};

// ParamsSpec for OnNotify
ash.cfm.cfm.mojom.mojom.DataWatchDog_OnNotify_ParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataWatchDogPtr = ash.cfm.cfm.mojom.mojom.DataWatchDogRemote;
ash.cfm.cfm.mojom.mojom.DataWatchDogRequest = ash.cfm.cfm.mojom.mojom.DataWatchDogPendingReceiver;


// Interface: DataSource
ash.cfm.cfm.mojom.mojom.DataSource = {};

ash.cfm.cfm.mojom.mojom.DataSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.cfm.mojom.mojom.DataSourceRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.cfm.mojom.mojom.DataSourcePendingReceiver,
      handle);
    this.$ = new ash.cfm.cfm.mojom.mojom.DataSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.cfm.mojom.mojom.DataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetch() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataSource_Fetch_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.DataSource_Fetch_ResponseParamsSpec,
      []);
  }

  addWatchDog(filter, watch_dog) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataSource_AddWatchDog_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.DataSource_AddWatchDog_ResponseParamsSpec,
      [filter, watch_dog]);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataSource_Flush_ParamsSpec,
      null,
      []);
  }

};

ash.cfm.cfm.mojom.mojom.DataSource.getRemote = function() {
  let remote = new ash.cfm.cfm.mojom.mojom.DataSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataSource',
    'context');
  return remote.$;
};

// ParamsSpec for Fetch
ash.cfm.cfm.mojom.mojom.DataSource_Fetch_ParamsSpec = {
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

ash.cfm.cfm.mojom.mojom.DataSource_Fetch_ResponseParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataSource_AddWatchDog_ParamsSpec = {
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

ash.cfm.cfm.mojom.mojom.DataSource_AddWatchDog_ResponseParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataSource_Flush_ParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataSourcePtr = ash.cfm.cfm.mojom.mojom.DataSourceRemote;
ash.cfm.cfm.mojom.mojom.DataSourceRequest = ash.cfm.cfm.mojom.mojom.DataSourcePendingReceiver;


// Interface: DataAggregator
ash.cfm.cfm.mojom.mojom.DataAggregator = {};

ash.cfm.cfm.mojom.mojom.DataAggregatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.cfm.mojom.mojom.DataAggregatorRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.DataAggregator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.cfm.mojom.mojom.DataAggregatorPendingReceiver,
      handle);
    this.$ = new ash.cfm.cfm.mojom.mojom.DataAggregatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.cfm.mojom.mojom.DataAggregatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDataSourceNames() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataAggregator_GetDataSourceNames_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec,
      []);
  }

  addDataSource(source_name, data_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataAggregator_AddDataSource_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.DataAggregator_AddDataSource_ResponseParamsSpec,
      [source_name, data_source]);
  }

  addWatchDog(source_name, filter, watch_dog) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cfm.cfm.mojom.mojom.DataAggregator_AddWatchDog_ParamsSpec,
      ash.cfm.cfm.mojom.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec,
      [source_name, filter, watch_dog]);
  }

};

ash.cfm.cfm.mojom.mojom.DataAggregator.getRemote = function() {
  let remote = new ash.cfm.cfm.mojom.mojom.DataAggregatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.DataAggregator',
    'context');
  return remote.$;
};

// ParamsSpec for GetDataSourceNames
ash.cfm.cfm.mojom.mojom.DataAggregator_GetDataSourceNames_ParamsSpec = {
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

ash.cfm.cfm.mojom.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataAggregator_AddDataSource_ParamsSpec = {
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

ash.cfm.cfm.mojom.mojom.DataAggregator_AddDataSource_ResponseParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataAggregator_AddWatchDog_ParamsSpec = {
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

ash.cfm.cfm.mojom.mojom.DataAggregator_AddWatchDog_ResponseParamsSpec = {
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
ash.cfm.cfm.mojom.mojom.DataAggregatorPtr = ash.cfm.cfm.mojom.mojom.DataAggregatorRemote;
ash.cfm.cfm.mojom.mojom.DataAggregatorRequest = ash.cfm.cfm.mojom.mojom.DataAggregatorPendingReceiver;

