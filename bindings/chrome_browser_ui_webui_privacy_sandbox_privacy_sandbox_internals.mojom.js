// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/privacy_sandbox_internals.mojom
// Module: privacy_sandbox_internals.mojom

'use strict';

// Module namespace
var privacy_sandbox_internals = privacy_sandbox_internals || {};
privacy_sandbox_internals.mojom = privacy_sandbox_internals.mojom || {};
var mojo_base = mojo_base || {};
var content_settings = content_settings || {};

privacy_sandbox_internals.mojom.PrivacySandboxInternalsPrefSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler = {};
privacy_sandbox_internals.mojom.PageHandler.$interfaceName = 'privacy_sandbox_internals.mojom.PageHandler';
privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec = { $: {} };
privacy_sandbox_internals.mojom.Page = {};
privacy_sandbox_internals.mojom.Page.$interfaceName = 'privacy_sandbox_internals.mojom.Page';

// Struct: PrivacySandboxInternalsPref
mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PrivacySandboxInternalsPrefSpec, 'privacy_sandbox_internals.mojom.PrivacySandboxInternalsPref', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_Params', [
      mojo.internal.StructField('pref_prefixes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParams', [
      mojo.internal.StructField('prefs', 0, 0, mojo.internal.Array(privacy_sandbox_internals.mojom.PrivacySandboxInternalsPrefSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_Params', [
      mojo.internal.StructField('type', 0, 0, content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParams', [
      mojo.internal.StructField('content_settings', 0, 0, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParams', [
      mojo.internal.StructField('content_settings', 0, 0, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_Params', [
      mojo.internal.StructField('pattern', 0, 0, content_settings.mojom.ContentSettingsPatternSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParams', [
      mojo.internal.StructField('s', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_Params', [
      mojo.internal.StructField('s', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec, 'privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParams', [
      mojo.internal.StructField('pattern', 0, 0, content_settings.mojom.ContentSettingsPatternSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

privacy_sandbox_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

privacy_sandbox_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'privacy_sandbox_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      privacy_sandbox_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new privacy_sandbox_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

privacy_sandbox_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readPrefsWithPrefixes(pref_prefixes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec,
      [pref_prefixes],
      false);
  }

  readContentSettings(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec,
      [type],
      false);
  }

  getTpcdMetadataGrants() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec,
      [],
      false);
  }

  contentSettingsPatternToString(pattern) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec,
      [pattern],
      false);
  }

  stringToContentSettingsPattern(s) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec,
      [s],
      false);
  }

};

privacy_sandbox_internals.mojom.PageHandler.getRemote = function() {
  let remote = new privacy_sandbox_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'privacy_sandbox_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

privacy_sandbox_internals.mojom.PageHandlerReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: ReadPrefsWithPrefixes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadPrefsWithPrefixes (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReadContentSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadContentSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetTpcdMetadataGrants
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTpcdMetadataGrants (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ContentSettingsPatternToString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentSettingsPatternToString (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StringToContentSettingsPattern
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StringToContentSettingsPattern (4)');
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
          const params = decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readPrefsWithPrefixes');
          const result = this.impl.readPrefsWithPrefixes(params.pref_prefixes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readContentSettings');
          const result = this.impl.readContentSettings(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTpcdMetadataGrants');
          const result = this.impl.getTpcdMetadataGrants();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.contentSettingsPatternToString');
          const result = this.impl.contentSettingsPatternToString(params.pattern);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stringToContentSettingsPattern');
          const result = this.impl.stringToContentSettingsPattern(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

privacy_sandbox_internals.mojom.PageHandlerReceiver = privacy_sandbox_internals.mojom.PageHandlerReceiver;

privacy_sandbox_internals.mojom.PageHandlerPtr = privacy_sandbox_internals.mojom.PageHandlerRemote;
privacy_sandbox_internals.mojom.PageHandlerRequest = privacy_sandbox_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
privacy_sandbox_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

privacy_sandbox_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'privacy_sandbox_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      privacy_sandbox_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new privacy_sandbox_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

privacy_sandbox_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

privacy_sandbox_internals.mojom.Page.getRemote = function() {
  let remote = new privacy_sandbox_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'privacy_sandbox_internals.mojom.Page',
    'context');
  return remote.$;
};

privacy_sandbox_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

privacy_sandbox_internals.mojom.PageReceiver = privacy_sandbox_internals.mojom.PageReceiver;

privacy_sandbox_internals.mojom.PagePtr = privacy_sandbox_internals.mojom.PageRemote;
privacy_sandbox_internals.mojom.PageRequest = privacy_sandbox_internals.mojom.PagePendingReceiver;

