// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_data_aggregator.mojom
// Module: ash.cfm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onNotify(data) {
    return this.$.onNotify(data);
  }
};

ash.cfm.mojom.DataWatchDogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataWatchDog', [
      { explicit: 0 },
    ]);
  }

  onNotify(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DataWatchDog', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataWatchDog_OnNotify_ParamsSpec.$.structSpec);
          const result = this.impl.onNotify(params.data);
          break;
        }
      }
      } catch (err) {}
    }});
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
      mojo.internal.StructField('watch_dog', 8, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataWatchDogRemote), null, false, 0, undefined),
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
  fetch() {
    return this.$.fetch();
  }
  addWatchDog(filter, watch_dog) {
    return this.$.addWatchDog(filter, watch_dog);
  }
  flush() {
    return this.$.flush();
  }
};

ash.cfm.mojom.DataSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataSource', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  fetch() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cfm.mojom.DataSource_Fetch_ParamsSpec,
      ash.cfm.mojom.DataSource_Fetch_ResponseParamsSpec,
      [],
      false);
  }

  addWatchDog(filter, watch_dog) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec,
      ash.cfm.mojom.DataSource_AddWatchDog_ResponseParamsSpec,
      [filter, watch_dog],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DataSource', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataSource_Fetch_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataSource_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataSource_Fetch_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataSource_AddWatchDog_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataSource_Flush_ParamsSpec.$.structSpec);
          const result = this.impl.flush();
          break;
        }
      }
      } catch (err) {}
    }});
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
      mojo.internal.StructField('data_source', 8, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataSourceRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('watch_dog', 16, 0, mojo.internal.InterfaceProxy(ash.cfm.mojom.DataWatchDogRemote), null, false, 0, undefined),
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
  getDataSourceNames() {
    return this.$.getDataSourceNames();
  }
  addDataSource(source_name, data_source) {
    return this.$.addDataSource(source_name, data_source);
  }
  addWatchDog(source_name, filter, watch_dog) {
    return this.$.addWatchDog(source_name, filter, watch_dog);
  }
};

ash.cfm.mojom.DataAggregatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataAggregator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  getDataSourceNames() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec,
      ash.cfm.mojom.DataAggregator_GetDataSourceNames_ResponseParamsSpec,
      [],
      false);
  }

  addDataSource(source_name, data_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec,
      ash.cfm.mojom.DataAggregator_AddDataSource_ResponseParamsSpec,
      [source_name, data_source],
      false);
  }

  addWatchDog(source_name, filter, watch_dog) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DataAggregator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_GetDataSourceNames_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_AddDataSource_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cfm.mojom.DataAggregator_AddWatchDog_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ash.cfm.mojom.DataAggregatorReceiver = ash.cfm.mojom.DataAggregatorReceiver;

ash.cfm.mojom.DataAggregatorPtr = ash.cfm.mojom.DataAggregatorRemote;
ash.cfm.mojom.DataAggregatorRequest = ash.cfm.mojom.DataAggregatorPendingReceiver;

