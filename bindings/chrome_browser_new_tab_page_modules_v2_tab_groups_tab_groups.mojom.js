// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.mojom = ntp.tab_groups.mojom || {};
var tab_groups = tab_groups || {};
var url = url || {};

ntp.tab_groups.mojom.TabGroupSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler = {};
ntp.tab_groups.mojom.PageHandler.$interfaceName = 'ntp.tab_groups.mojom.PageHandler';
ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec = { $: {} };

// Struct: TabGroup
mojo.internal.Struct(
    ntp.tab_groups.mojom.TabGroupSpec, 'ntp.tab_groups.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('color', 32, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_urls', 40, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('total_tab_count', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_shared_tab_group', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandler
mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParams', [
      mojo.internal.StructField('tab_groups', 0, 0, mojo.internal.Array(ntp.tab_groups.mojom.TabGroupSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('showZeroState', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_OpenTabGroup_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.tab_groups.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.tab_groups.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.tab_groups.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.tab_groups.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.tab_groups.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.tab_groups.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewTabGroup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec,
      null,
      [],
      false);
  }

  getTabGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec,
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec,
      [],
      false);
  }

  openTabGroup(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [id],
      false);
  }

  dismissModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp.tab_groups.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.tab_groups.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.tab_groups.mojom.PageHandler',
    'context');
  return remote.$;
};

ntp.tab_groups.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateNewTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewTabGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTabGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabGroups (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTabGroup (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createNewTabGroup');
          const result = this.impl.createNewTabGroup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getTabGroups');
          const result = this.impl.getTabGroups();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openTabGroup');
          const result = this.impl.openTabGroup(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.restoreModule');
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp.tab_groups.mojom.PageHandlerReceiver = ntp.tab_groups.mojom.PageHandlerReceiver;

ntp.tab_groups.mojom.PageHandlerPtr = ntp.tab_groups.mojom.PageHandlerRemote;
ntp.tab_groups.mojom.PageHandlerRequest = ntp.tab_groups.mojom.PageHandlerPendingReceiver;

