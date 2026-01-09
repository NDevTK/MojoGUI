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

// Struct: DataFilter
ash.cfm.mojom.DataFilterSpec = {
  $: {
    structSpec: {
      name: 'ash.cfm.mojom.DataFilter',
      packedSize: 16,
      fields: [
        { name: 'REGEX', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
ash.cfm.mojom.DataAggregatorPtr = ash.cfm.mojom.DataAggregatorRemote;
ash.cfm.mojom.DataAggregatorRequest = ash.cfm.mojom.DataAggregatorPendingReceiver;

