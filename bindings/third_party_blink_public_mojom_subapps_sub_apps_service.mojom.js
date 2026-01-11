// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/subapps/sub_apps_service.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SubAppsServiceResultCodeSpec = { $: mojo.internal.Enum() };
blink.mojom.SubAppsServiceAddParametersSpec = { $: {} };
blink.mojom.SubAppsServiceAddResultSpec = { $: {} };
blink.mojom.SubAppsServiceListResultSpec = { $: {} };
blink.mojom.SubAppsServiceListResultEntrySpec = { $: {} };
blink.mojom.SubAppsServiceRemoveResultSpec = { $: {} };
blink.mojom.SubAppsService = {};
blink.mojom.SubAppsService.$interfaceName = 'blink.mojom.SubAppsService';
blink.mojom.SubAppsService_Add_ParamsSpec = { $: {} };
blink.mojom.SubAppsService_Add_ResponseParamsSpec = { $: {} };
blink.mojom.SubAppsService_List_ParamsSpec = { $: {} };
blink.mojom.SubAppsService_List_ResponseParamsSpec = { $: {} };
blink.mojom.SubAppsService_Remove_ParamsSpec = { $: {} };
blink.mojom.SubAppsService_Remove_ResponseParamsSpec = { $: {} };

// Enum: SubAppsServiceResultCode
blink.mojom.SubAppsServiceResultCode = {
  kSuccess: 0,
  kFailure: 1,
};

// Struct: SubAppsServiceAddParameters
mojo.internal.Struct(
    blink.mojom.SubAppsServiceAddParametersSpec, 'blink.mojom.SubAppsServiceAddParameters', [
      mojo.internal.StructField('manifest_id_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('install_url_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SubAppsServiceAddResult
mojo.internal.Struct(
    blink.mojom.SubAppsServiceAddResultSpec, 'blink.mojom.SubAppsServiceAddResult', [
      mojo.internal.StructField('manifest_id_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result_code', 8, 0, blink.mojom.SubAppsServiceResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SubAppsServiceListResult
mojo.internal.Struct(
    blink.mojom.SubAppsServiceListResultSpec, 'blink.mojom.SubAppsServiceListResult', [
      mojo.internal.StructField('result_code', 0, 0, blink.mojom.SubAppsServiceResultCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_apps_list', 8, 0, mojo.internal.Array(blink.mojom.SubAppsServiceListResultEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SubAppsServiceListResultEntry
mojo.internal.Struct(
    blink.mojom.SubAppsServiceListResultEntrySpec, 'blink.mojom.SubAppsServiceListResultEntry', [
      mojo.internal.StructField('manifest_id_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SubAppsServiceRemoveResult
mojo.internal.Struct(
    blink.mojom.SubAppsServiceRemoveResultSpec, 'blink.mojom.SubAppsServiceRemoveResult', [
      mojo.internal.StructField('manifest_id_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result_code', 8, 0, blink.mojom.SubAppsServiceResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SubAppsService
mojo.internal.Struct(
    blink.mojom.SubAppsService_Add_ParamsSpec, 'blink.mojom.SubAppsService_Add_Params', [
      mojo.internal.StructField('sub_apps_to_add', 0, 0, mojo.internal.Array(blink.mojom.SubAppsServiceAddParametersSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SubAppsService_Add_ResponseParamsSpec, 'blink.mojom.SubAppsService_Add_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(blink.mojom.SubAppsServiceAddResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SubAppsService_List_ParamsSpec, 'blink.mojom.SubAppsService_List_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SubAppsService_List_ResponseParamsSpec, 'blink.mojom.SubAppsService_List_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SubAppsServiceListResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SubAppsService_Remove_ParamsSpec, 'blink.mojom.SubAppsService_Remove_Params', [
      mojo.internal.StructField('manifest_id_paths', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SubAppsService_Remove_ResponseParamsSpec, 'blink.mojom.SubAppsService_Remove_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(blink.mojom.SubAppsServiceRemoveResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SubAppsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SubAppsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SubAppsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SubAppsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SubAppsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  add(sub_apps_to_add) {
    return this.$.add(sub_apps_to_add);
  }
  list() {
    return this.$.list();
  }
  remove(manifest_id_paths) {
    return this.$.remove(manifest_id_paths);
  }
};

blink.mojom.SubAppsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SubAppsService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  add(sub_apps_to_add) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SubAppsService_Add_ParamsSpec,
      blink.mojom.SubAppsService_Add_ResponseParamsSpec,
      [sub_apps_to_add],
      false);
  }

  list() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SubAppsService_List_ParamsSpec,
      blink.mojom.SubAppsService_List_ResponseParamsSpec,
      [],
      false);
  }

  remove(manifest_id_paths) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SubAppsService_Remove_ParamsSpec,
      blink.mojom.SubAppsService_Remove_ResponseParamsSpec,
      [manifest_id_paths],
      false);
  }

};

blink.mojom.SubAppsService.getRemote = function() {
  let remote = new blink.mojom.SubAppsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SubAppsService',
    'context');
  return remote.$;
};

blink.mojom.SubAppsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SubAppsService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.SubAppsService_Add_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SubAppsService_List_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SubAppsService_Remove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SubAppsService_Add_ParamsSpec.$.structSpec);
          const result = this.impl.add(params.sub_apps_to_add);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SubAppsService_Add_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SubAppsService_List_ParamsSpec.$.structSpec);
          const result = this.impl.list();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SubAppsService_List_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SubAppsService_Remove_ParamsSpec.$.structSpec);
          const result = this.impl.remove(params.manifest_id_paths);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SubAppsService_Remove_ResponseParamsSpec);
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

blink.mojom.SubAppsServiceReceiver = blink.mojom.SubAppsServiceReceiver;

blink.mojom.SubAppsServicePtr = blink.mojom.SubAppsServiceRemote;
blink.mojom.SubAppsServiceRequest = blink.mojom.SubAppsServicePendingReceiver;

