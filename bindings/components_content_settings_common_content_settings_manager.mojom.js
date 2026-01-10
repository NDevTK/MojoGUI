// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_manager.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

content_settings.mojom.StorageTypeSpec = { $: mojo.internal.Enum() };
content_settings.mojom.ContentSettingsManager = {};
content_settings.mojom.ContentSettingsManager.$interfaceName = 'content_settings.mojom.ContentSettingsManager';
content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec = { $: {} };

// Enum: StorageType
content_settings.mojom.StorageType = {
  LOCAL_STORAGE: 0,
  SESSION_STORAGE: 1,
  FILE_SYSTEM: 2,
  INDEXED_DB: 3,
  CACHE: 4,
  WEB_LOCKS: 5,
};

// Interface: ContentSettingsManager
mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_Clone_Params', [
      mojo.internal.StructField('clone', 0, 0, mojo.internal.InterfaceRequest(content_settings.mojom.ContentSettingsManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_AllowStorageAccess_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_type', 8, 0, content_settings.mojom.StorageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 24, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 32, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec, 'content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec, 'content_settings.mojom.ContentSettingsManager_OnContentBlocked_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content_settings.mojom.ContentSettingsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_settings.mojom.ContentSettingsManagerRemote = class {
  static get $interfaceName() {
    return 'content_settings.mojom.ContentSettingsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_settings.mojom.ContentSettingsManagerPendingReceiver,
      handle);
    this.$ = new content_settings.mojom.ContentSettingsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_settings.mojom.ContentSettingsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(clone) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec,
      null,
      [clone],
      false);
  }

  allowStorageAccess(frame_token, storage_type, origin, site_for_cookies, top_frame_origin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec,
      content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec,
      [frame_token, storage_type, origin, site_for_cookies, top_frame_origin],
      false);
  }

  onContentBlocked(frame_token, type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec,
      null,
      [frame_token, type],
      false);
  }

};

content_settings.mojom.ContentSettingsManager.getRemote = function() {
  let remote = new content_settings.mojom.ContentSettingsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_settings.mojom.ContentSettingsManager',
    'context');
  return remote.$;
};

content_settings.mojom.ContentSettingsManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AllowStorageAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowStorageAccess (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnContentBlocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContentBlocked (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.clone);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allowStorageAccess');
          const result = this.impl.allowStorageAccess(params.frame_token, params.storage_type, params.origin, params.site_for_cookies, params.top_frame_origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content_settings.mojom.ContentSettingsManager_AllowStorageAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_settings.mojom.ContentSettingsManager_OnContentBlocked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onContentBlocked');
          const result = this.impl.onContentBlocked(params.frame_token, params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content_settings.mojom.ContentSettingsManagerReceiver = content_settings.mojom.ContentSettingsManagerReceiver;

content_settings.mojom.ContentSettingsManagerPtr = content_settings.mojom.ContentSettingsManagerRemote;
content_settings.mojom.ContentSettingsManagerRequest = content_settings.mojom.ContentSettingsManagerPendingReceiver;

