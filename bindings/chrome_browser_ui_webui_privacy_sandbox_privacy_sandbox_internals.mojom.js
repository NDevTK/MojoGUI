// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/privacy_sandbox_internals.mojom
// Module: privacy_sandbox_internals.mojom

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
  readPrefsWithPrefixes(pref_prefixes) {
    return this.$.readPrefsWithPrefixes(pref_prefixes);
  }
  readContentSettings(type) {
    return this.$.readContentSettings(type);
  }
  getTpcdMetadataGrants() {
    return this.$.getTpcdMetadataGrants();
  }
  contentSettingsPatternToString(pattern) {
    return this.$.contentSettingsPatternToString(pattern);
  }
  stringToContentSettingsPattern(s) {
    return this.$.stringToContentSettingsPattern(s);
  }
};

privacy_sandbox_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  readPrefsWithPrefixes(pref_prefixes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec,
      [pref_prefixes],
      false);
  }

  readContentSettings(type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec,
      [type],
      false);
  }

  getTpcdMetadataGrants() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec,
      [],
      false);
  }

  contentSettingsPatternToString(pattern) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec,
      [pattern],
      false);
  }

  stringToContentSettingsPattern(s) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

privacy_sandbox_internals.mojom.PageReceiver = privacy_sandbox_internals.mojom.PageReceiver;

privacy_sandbox_internals.mojom.PagePtr = privacy_sandbox_internals.mojom.PageRemote;
privacy_sandbox_internals.mojom.PageRequest = privacy_sandbox_internals.mojom.PagePendingReceiver;

