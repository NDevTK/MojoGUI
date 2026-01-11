// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/webapk.mojom
// Module: arc.mojom

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
  installWebApk(package_name, version, app_name, token) {
    return this.$.installWebApk(package_name, version, app_name, token);
  }
  getWebApkInfo(package_name) {
    return this.$.getWebApkInfo(package_name);
  }
};

arc.mojom.WebApkInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebApkInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  installWebApk(package_name, version, app_name, token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec,
      arc.mojom.WebApkInstance_InstallWebApk_ResponseParamsSpec,
      [package_name, version, app_name, token],
      false);
  }

  getWebApkInfo(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebApkInstance', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WebApkInstance_InstallWebApk_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.WebApkInstance_GetWebApkInfo_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.WebApkInstanceReceiver = arc.mojom.WebApkInstanceReceiver;

arc.mojom.WebApkInstancePtr = arc.mojom.WebApkInstanceRemote;
arc.mojom.WebApkInstanceRequest = arc.mojom.WebApkInstancePendingReceiver;

