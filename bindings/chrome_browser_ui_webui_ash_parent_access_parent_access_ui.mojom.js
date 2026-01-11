// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/parent_access/parent_access_ui.mojom
// Module: parent_access_ui.mojom

// Module namespace
var parent_access_ui = parent_access_ui || {};
parent_access_ui.mojom = parent_access_ui.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

parent_access_ui.mojom.GetOauthTokenStatusSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.ParentAccessServerMessageTypeSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.FlowTypeSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.ParentAccessResultSpec = { $: mojo.internal.Enum() };
parent_access_ui.mojom.FlowTypeParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessServerMessageSpec = { $: {} };
parent_access_ui.mojom.ParentAccessParamsSpec = { $: {} };
parent_access_ui.mojom.WebApprovalsParamsSpec = { $: {} };
parent_access_ui.mojom.ExtensionApprovalsParamsSpec = { $: {} };
parent_access_ui.mojom.ExtensionPermissionSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler = {};
parent_access_ui.mojom.ParentAccessUiHandler.$interfaceName = 'parent_access_ui.mojom.ParentAccessUiHandler';
parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec = { $: {} };
parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec = { $: {} };

// Enum: GetOauthTokenStatus
parent_access_ui.mojom.GetOauthTokenStatus = {
  kSuccess: 0,
  kError: 1,
  kOnlyOneFetchAtATime: 2,
};

// Enum: ParentAccessServerMessageType
parent_access_ui.mojom.ParentAccessServerMessageType = {
  kParentVerified: 0,
  kError: 1,
  kIgnore: 2,
};

// Enum: FlowType
parent_access_ui.mojom.FlowType = {
  kWebsiteAccess: 0,
  kExtensionAccess: 1,
};

// Enum: ParentAccessResult
parent_access_ui.mojom.ParentAccessResult = {
  kApproved: 0,
  kDeclined: 1,
  kCanceled: 2,
  kDisabled: 3,
  kError: 4,
};

// Union: FlowTypeParams
mojo.internal.Union(
    parent_access_ui.mojom.FlowTypeParamsSpec, 'parent_access_ui.mojom.FlowTypeParams', {
      'web_approvals_params': {
        'ordinal': 0,
        'type': parent_access_ui.mojom.WebApprovalsParamsSpec.$,
        'nullable': false,
      },
      'extension_approvals_params': {
        'ordinal': 1,
        'type': parent_access_ui.mojom.ExtensionApprovalsParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: ParentAccessServerMessage
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessServerMessageSpec, 'parent_access_ui.mojom.ParentAccessServerMessage', [
      mojo.internal.StructField('type', 0, 0, parent_access_ui.mojom.ParentAccessServerMessageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ParentAccessParams
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessParamsSpec, 'parent_access_ui.mojom.ParentAccessParams', [
      mojo.internal.StructField('kWebsiteAccess', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebApprovalsParams
mojo.internal.Struct(
    parent_access_ui.mojom.WebApprovalsParamsSpec, 'parent_access_ui.mojom.WebApprovalsParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_display_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_png_bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ExtensionApprovalsParams
mojo.internal.Struct(
    parent_access_ui.mojom.ExtensionApprovalsParamsSpec, 'parent_access_ui.mojom.ExtensionApprovalsParams', [
      mojo.internal.StructField('extension_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_png_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('child_display_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 24, 0, mojo.internal.Array(parent_access_ui.mojom.ExtensionPermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExtensionPermission
mojo.internal.Struct(
    parent_access_ui.mojom.ExtensionPermissionSpec, 'parent_access_ui.mojom.ExtensionPermission', [
      mojo.internal.StructField('permission', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ParentAccessUiHandler
mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, parent_access_ui.mojom.GetOauthTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_Params', [
      mojo.internal.StructField('encoded_parent_access_callback_proto', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, parent_access_ui.mojom.ParentAccessServerMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, parent_access_ui.mojom.ParentAccessParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_Params', [
      mojo.internal.StructField('result', 0, 0, parent_access_ui.mojom.ParentAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec, 'parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParams', [
    ],
    [[0, 8]]);

parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

parent_access_ui.mojom.ParentAccessUiHandlerRemote = class {
  static get $interfaceName() {
    return 'parent_access_ui.mojom.ParentAccessUiHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver,
      handle);
    this.$ = new parent_access_ui.mojom.ParentAccessUiHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getOauthToken() {
    return this.$.getOauthToken();
  }
  onParentAccessCallbackReceived(encoded_parent_access_callback_proto) {
    return this.$.onParentAccessCallbackReceived(encoded_parent_access_callback_proto);
  }
  getParentAccessParams() {
    return this.$.getParentAccessParams();
  }
  getParentAccessUrl() {
    return this.$.getParentAccessUrl();
  }
  onParentAccessDone(result) {
    return this.$.onParentAccessDone(result);
  }
  onBeforeScreenDone() {
    return this.$.onBeforeScreenDone();
  }
};

parent_access_ui.mojom.ParentAccessUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ParentAccessUiHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getOauthToken() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec,
      [],
      false);
  }

  onParentAccessCallbackReceived(encoded_parent_access_callback_proto) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec,
      [encoded_parent_access_callback_proto],
      false);
  }

  getParentAccessParams() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec,
      [],
      false);
  }

  getParentAccessUrl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec,
      [],
      false);
  }

  onParentAccessDone(result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec,
      [result],
      false);
  }

  onBeforeScreenDone() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec,
      [],
      false);
  }

};

parent_access_ui.mojom.ParentAccessUiHandler.getRemote = function() {
  let remote = new parent_access_ui.mojom.ParentAccessUiHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'parent_access_ui.mojom.ParentAccessUiHandler',
    'context');
  return remote.$;
};

parent_access_ui.mojom.ParentAccessUiHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ParentAccessUiHandler', [
      { explicit: null },
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
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec.$.structSpec);
          const result = this.impl.getOauthToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onParentAccessCallbackReceived(params.encoded_parent_access_callback_proto);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec.$.structSpec);
          const result = this.impl.getParentAccessParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getParentAccessUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec.$.structSpec);
          const result = this.impl.onParentAccessDone(params.result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec.$.structSpec);
          const result = this.impl.onBeforeScreenDone();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ResponseParamsSpec);
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

parent_access_ui.mojom.ParentAccessUiHandlerReceiver = parent_access_ui.mojom.ParentAccessUiHandlerReceiver;

parent_access_ui.mojom.ParentAccessUiHandlerPtr = parent_access_ui.mojom.ParentAccessUiHandlerRemote;
parent_access_ui.mojom.ParentAccessUiHandlerRequest = parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver;

