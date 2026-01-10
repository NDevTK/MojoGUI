// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/parent_access/parent_access_ui.mojom
// Module: parent_access_ui.mojom

'use strict';

// Module namespace
var parent_access_ui = parent_access_ui || {};
parent_access_ui.mojom = parent_access_ui.mojom || {};
var url = url || {};


// Enum: GetOauthTokenStatus
parent_access_ui.mojom.GetOauthTokenStatus = {
  kSuccess: 0,
  kError: 1,
  kOnlyOneFetchAtATime: 2,
};
parent_access_ui.mojom.GetOauthTokenStatusSpec = { $: mojo.internal.Enum() };

// Enum: ParentAccessServerMessageType
parent_access_ui.mojom.ParentAccessServerMessageType = {
  kParentVerified: 0,
  kError: 1,
  kIgnore: 2,
};
parent_access_ui.mojom.ParentAccessServerMessageTypeSpec = { $: mojo.internal.Enum() };

// Enum: FlowType
parent_access_ui.mojom.FlowType = {
  kWebsiteAccess: 0,
  kExtensionAccess: 1,
};
parent_access_ui.mojom.FlowTypeSpec = { $: mojo.internal.Enum() };

// Enum: ParentAccessResult
parent_access_ui.mojom.ParentAccessResult = {
  kApproved: 0,
  kDeclined: 1,
  kCanceled: 2,
  kDisabled: 3,
  kError: 4,
};
parent_access_ui.mojom.ParentAccessResultSpec = { $: mojo.internal.Enum() };

// Union: FlowTypeParams
parent_access_ui.mojom.FlowTypeParamsSpec = { $: mojo.internal.Union(
    'parent_access_ui.mojom.FlowTypeParams', {
      'web_approvals_params': {
        'ordinal': 0,
        'type': parent_access_ui.mojom.WebApprovalsParamsSpec,
      }},
      'extension_approvals_params': {
        'ordinal': 1,
        'type': parent_access_ui.mojom.ExtensionApprovalsParamsSpec,
      }},
    })
};

// Struct: ParentAccessServerMessage
parent_access_ui.mojom.ParentAccessServerMessageSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessServerMessage',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: parent_access_ui.mojom.ParentAccessServerMessageTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ParentAccessParams
parent_access_ui.mojom.ParentAccessParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessParams',
      packedSize: 16,
      fields: [
        { name: 'kWebsiteAccess', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WebApprovalsParams
parent_access_ui.mojom.WebApprovalsParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.WebApprovalsParams',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'child_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'favicon_png_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ExtensionApprovalsParams
parent_access_ui.mojom.ExtensionApprovalsParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ExtensionApprovalsParams',
      packedSize: 40,
      fields: [
        { name: 'extension_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'icon_png_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'child_display_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'permissions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(parent_access_ui.mojom.ExtensionPermissionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ExtensionPermission
parent_access_ui.mojom.ExtensionPermissionSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ExtensionPermission',
      packedSize: 24,
      fields: [
        { name: 'permission', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ParentAccessUiHandler
parent_access_ui.mojom.ParentAccessUiHandler = {};

parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'encoded_parent_access_callback_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: parent_access_ui.mojom.ParentAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

parent_access_ui.mojom.ParentAccessUiHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getOauthToken() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec,
      []);
  }

  onParentAccessCallbackReceived(encoded_parent_access_callback_proto) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec,
      [encoded_parent_access_callback_proto]);
  }

  getParentAccessParams() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec,
      []);
  }

  getParentAccessUrl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec,
      parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec,
      []);
  }

  onParentAccessDone(result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec,
      null,
      [result]);
  }

  onBeforeScreenDone() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetOauthToken
parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetOauthToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_GetOauthToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetOauthToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: parent_access_ui.mojom.GetOauthTokenStatusSpec, nullable: false, minVersion: 0 },
        { name: 'oauth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnParentAccessCallbackReceived
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.OnParentAccessCallbackReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'encoded_parent_access_callback_proto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessCallbackReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.OnParentAccessCallbackReceived_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: parent_access_ui.mojom.ParentAccessServerMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetParentAccessParams
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetParentAccessParams_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessParams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetParentAccessParams_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: parent_access_ui.mojom.ParentAccessParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetParentAccessUrl
parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetParentAccessUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

parent_access_ui.mojom.ParentAccessUiHandler_GetParentAccessUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.GetParentAccessUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnParentAccessDone
parent_access_ui.mojom.ParentAccessUiHandler_OnParentAccessDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.OnParentAccessDone_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: parent_access_ui.mojom.ParentAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBeforeScreenDone
parent_access_ui.mojom.ParentAccessUiHandler_OnBeforeScreenDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'parent_access_ui.mojom.ParentAccessUiHandler.OnBeforeScreenDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
parent_access_ui.mojom.ParentAccessUiHandlerPtr = parent_access_ui.mojom.ParentAccessUiHandlerRemote;
parent_access_ui.mojom.ParentAccessUiHandlerRequest = parent_access_ui.mojom.ParentAccessUiHandlerPendingReceiver;

