// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/privacy_sandbox_internals.mojom
// Module: privacy_sandbox_internals.mojom

'use strict';

// Module namespace
var privacy_sandbox_internals = privacy_sandbox_internals || {};
privacy_sandbox_internals.mojom = privacy_sandbox_internals.mojom || {};


// Struct: PrivacySandboxInternalsPref
privacy_sandbox_internals.mojom.PrivacySandboxInternalsPrefSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PrivacySandboxInternalsPref',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
privacy_sandbox_internals.mojom.PageHandler = {};

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
      [pref_prefixes]);
  }

  readContentSettings(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec,
      [type]);
  }

  getTpcdMetadataGrants() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec,
      []);
  }

  contentSettingsPatternToString(pattern) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec,
      [pattern]);
  }

  stringToContentSettingsPattern(s) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec,
      privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec,
      [s]);
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

// ParamsSpec for ReadPrefsWithPrefixes
privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ReadPrefsWithPrefixes_Params',
      packedSize: 16,
      fields: [
        { name: 'pref_prefixes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

privacy_sandbox_internals.mojom.PageHandler_ReadPrefsWithPrefixes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ReadPrefsWithPrefixes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'prefs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadContentSettings
privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ReadContentSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

privacy_sandbox_internals.mojom.PageHandler_ReadContentSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ReadContentSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'content_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTpcdMetadataGrants
privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.GetTpcdMetadataGrants_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

privacy_sandbox_internals.mojom.PageHandler_GetTpcdMetadataGrants_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.GetTpcdMetadataGrants_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'content_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContentSettingsPatternToString
privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ContentSettingsPatternToString_Params',
      packedSize: 16,
      fields: [
        { name: 'pattern', packedOffset: 8, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsPatternSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

privacy_sandbox_internals.mojom.PageHandler_ContentSettingsPatternToString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.ContentSettingsPatternToString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StringToContentSettingsPattern
privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.StringToContentSettingsPattern_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

privacy_sandbox_internals.mojom.PageHandler_StringToContentSettingsPattern_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'privacy_sandbox_internals.mojom.PageHandler.StringToContentSettingsPattern_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pattern', packedOffset: 8, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsPatternSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
privacy_sandbox_internals.mojom.PageHandlerPtr = privacy_sandbox_internals.mojom.PageHandlerRemote;
privacy_sandbox_internals.mojom.PageHandlerRequest = privacy_sandbox_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
privacy_sandbox_internals.mojom.Page = {};

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

// Legacy compatibility
privacy_sandbox_internals.mojom.PagePtr = privacy_sandbox_internals.mojom.PageRemote;
privacy_sandbox_internals.mojom.PageRequest = privacy_sandbox_internals.mojom.PagePendingReceiver;

