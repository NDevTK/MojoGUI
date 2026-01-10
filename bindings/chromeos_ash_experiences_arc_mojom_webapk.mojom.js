// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/webapk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WebApkInstallResultSpec = { $: mojo.internal.Enum() };
arc.mojom.WebShareTargetInfoSpec = { $: {} };
arc.mojom.WebApkInfoSpec = { $: {} };
arc.mojom.WebApkInstance = {};
arc.mojom.WebApkInstance.$interfaceName = 'arc.mojom.WebApkInstance';
arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec = { $: {} };
arc.mojom.WebApkInstance_InstallWebApk_ResponseParamsSpec = { $: {} };
arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec = { $: {} };
arc.mojom.WebApkInstance_GetWebApkInfo_ResponseParamsSpec = { $: {} };

// Enum: WebApkInstallResult
arc.mojom.WebApkInstallResult = {
  kSuccess: 0,
  kErrorUnknown: 1,
  kErrorServiceCommunication: 2,
  kErrorServiceTimeout: 3,
  kErrorCallerVerificationFailed: 4,
  kErrorPolicyViolation: 5,
  kErrorApiDisabled: 6,
  kErrorUnknownAccount: 7,
  kErrorResolveNetworkError: 8,
  kErrorResolveError: 9,
  kErrorNotGoogleSigned: 10,
  MinVersion: 10,
  MinVersion: 10,
  MinVersion: 10,
};

// Struct: WebShareTargetInfo
mojo.internal.Struct(
    arc.mojom.WebShareTargetInfoSpec, 'arc.mojom.WebShareTargetInfo', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('method', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enctype', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('param_title', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('param_text', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('param_url', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('file_names', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('file_accepts', 56, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: WebApkInfo
mojo.internal.Struct(
    arc.mojom.WebApkInfoSpec, 'arc.mojom.WebApkInfo', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apk_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shell_apk_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manifest_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_url', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_hash', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('share_info', 64, 0, arc.mojom.WebShareTargetInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Interface: WebApkInstance
mojo.internal.Struct(
    arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec, 'arc.mojom.WebApkInstance_InstallWebApk_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.WebApkInstance_InstallWebApk_ResponseParamsSpec, 'arc.mojom.WebApkInstance_InstallWebApk_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.WebApkInstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec, 'arc.mojom.WebApkInstance_GetWebApkInfo_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WebApkInstance_GetWebApkInfo_ResponseParamsSpec, 'arc.mojom.WebApkInstance_GetWebApkInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.WebApkInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.WebApkInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WebApkInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WebApkInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WebApkInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WebApkInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WebApkInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installWebApk(package_name, version, app_name, token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec,
      arc.mojom.WebApkInstance_InstallWebApk_ResponseParamsSpec,
      [package_name, version, app_name, token],
      false);
  }

  getWebApkInfo(package_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec,
      arc.mojom.WebApkInstance_GetWebApkInfo_ResponseParamsSpec,
      [package_name],
      false);
  }

};

arc.mojom.WebApkInstance.getRemote = function() {
  let remote = new arc.mojom.WebApkInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WebApkInstance',
    'context');
  return remote.$;
};

arc.mojom.WebApkInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec.$.decode(message.payload);
          const result = this.impl.installWebApk(params.package_name, params.version, params.app_name, params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WebApkInstance_InstallWebApk_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getWebApkInfo(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WebApkInstance_GetWebApkInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.WebApkInstanceReceiver = arc.mojom.WebApkInstanceReceiver;

arc.mojom.WebApkInstancePtr = arc.mojom.WebApkInstanceRemote;
arc.mojom.WebApkInstanceRequest = arc.mojom.WebApkInstancePendingReceiver;

