// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/smbfs/mojom/smbfs.mojom
// Module: smbfs.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var smbfs = smbfs || {};
smbfs.mojom = smbfs.mojom || {};

smbfs.mojom.MountErrorSpec = { $: mojo.internal.Enum() };
smbfs.mojom.DeleteRecursivelyErrorSpec = { $: mojo.internal.Enum() };
smbfs.mojom.SourceSpec = { $: mojo.internal.Enum() };
smbfs.mojom.PasswordSpec = { $: {} };
smbfs.mojom.KerberosConfigSpec = { $: {} };
smbfs.mojom.CredentialStorageOptionsSpec = { $: {} };
smbfs.mojom.MountOptionsSpec = { $: {} };
smbfs.mojom.CredentialsSpec = { $: {} };
smbfs.mojom.SmbFsBootstrap = {};
smbfs.mojom.SmbFsBootstrap.$interfaceName = 'smbfs.mojom.SmbFsBootstrap';
smbfs.mojom.SmbFsBootstrap_MountShare_ParamsSpec = { $: {} };
smbfs.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec = { $: {} };
smbfs.mojom.SmbFs = {};
smbfs.mojom.SmbFs.$interfaceName = 'smbfs.mojom.SmbFs';
smbfs.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec = { $: {} };
smbfs.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec = { $: {} };
smbfs.mojom.SmbFs_DeleteRecursively_ParamsSpec = { $: {} };
smbfs.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec = { $: {} };
smbfs.mojom.SmbFsDelegate = {};
smbfs.mojom.SmbFsDelegate.$interfaceName = 'smbfs.mojom.SmbFsDelegate';
smbfs.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec = { $: {} };
smbfs.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec = { $: {} };

smbfs.mojom.kBootstrapPipeName = "smbfs-bootstrap";

smbfs.mojom.kMaxLength = 255;

smbfs.mojom.kMinSaltLength = 16;

// Enum: MountError
smbfs.mojom.MountError = {
  kOk: 0,
  kUnknown: 1,
  kTimeout: 2,
  kInvalidUrl: 3,
  kInvalidOptions: 4,
  kNotFound: 5,
  kAccessDenied: 6,
  kInvalidProtocol: 7,
};

// Enum: DeleteRecursivelyError
smbfs.mojom.DeleteRecursivelyError = {
  kOk: 0,
  kUnknown: 1,
  kPathNotFound: 2,
  kFailedToDeleteNode: 3,
  kFailedToListDirectory: 4,
  kOperationInProgress: 5,
};

// Enum: Source
smbfs.mojom.Source = {
  kActiveDirectory: 0,
  kKerberos: 1,
};

// Struct: Password
mojo.internal.Struct(
    smbfs.mojom.PasswordSpec, 'smbfs.mojom.Password', [
      mojo.internal.StructField('kMaxLength', 0, 0, mojo.internal.Pointer, 255, false, 0, undefined),
      mojo.internal.StructField('fd', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('length', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KerberosConfig
mojo.internal.Struct(
    smbfs.mojom.KerberosConfigSpec, 'smbfs.mojom.KerberosConfig', [
      mojo.internal.StructField('kActiveDirectory', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CredentialStorageOptions
mojo.internal.Struct(
    smbfs.mojom.CredentialStorageOptionsSpec, 'smbfs.mojom.CredentialStorageOptions', [
      mojo.internal.StructField('kMinSaltLength', 0, 0, mojo.internal.Pointer, 16, false, 0, undefined),
      mojo.internal.StructField('account_hash', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('salt', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MountOptions
mojo.internal.Struct(
    smbfs.mojom.MountOptionsSpec, 'smbfs.mojom.MountOptions', [
      mojo.internal.StructField('share_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resolved_host', 8, 0, smbfs.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('workgroup', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 32, 0, smbfs.mojom.PasswordSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('kerberos_config', 40, 0, smbfs.mojom.KerberosConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allow_ntlm', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('skip_connect', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('credential_storage_options', 56, 0, smbfs.mojom.CredentialStorageOptionsSpec.$, null, true, 1, undefined),
    ],
    [[0, 64], [1, 72]]);

// Struct: Credentials
mojo.internal.Struct(
    smbfs.mojom.CredentialsSpec, 'smbfs.mojom.Credentials', [
      mojo.internal.StructField('username', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('workgroup', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, smbfs.mojom.PasswordSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SmbFsBootstrap
mojo.internal.Struct(
    smbfs.mojom.SmbFsBootstrap_MountShare_ParamsSpec, 'smbfs.mojom.SmbFsBootstrap_MountShare_Params', [
      mojo.internal.StructField('options', 0, 0, smbfs.mojom.MountOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 8, 0, mojo.internal.InterfaceProxy(smbfs.mojom.SmbFsDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    smbfs.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec, 'smbfs.mojom.SmbFsBootstrap_MountShare_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, smbfs.mojom.MountErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('smbfs', 8, 0, mojo.internal.InterfaceProxy(smbfs.mojom.SmbFsRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

smbfs.mojom.SmbFsBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.SmbFsBootstrapRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFsBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.SmbFsBootstrapPendingReceiver,
      handle);
    this.$ = new smbfs.mojom.SmbFsBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mountShare(options, delegate) {
    return this.$.mountShare(options, delegate);
  }
};

smbfs.mojom.SmbFsBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmbFsBootstrap', [
      { explicit: null },
    ]);
  }

  mountShare(options, delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      smbfs.mojom.SmbFsBootstrap_MountShare_ParamsSpec,
      smbfs.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec,
      [options, delegate],
      false);
  }

};

smbfs.mojom.SmbFsBootstrap.getRemote = function() {
  let remote = new smbfs.mojom.SmbFsBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFsBootstrap',
    'context');
  return remote.$;
};

smbfs.mojom.SmbFsBootstrapReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmbFsBootstrap', [
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
             decoder.decodeStructInline(smbfs.mojom.SmbFsBootstrap_MountShare_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(smbfs.mojom.SmbFsBootstrap_MountShare_ParamsSpec.$.structSpec);
          const result = this.impl.mountShare(params.options, params.delegate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, smbfs.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

smbfs.mojom.SmbFsBootstrapReceiver = smbfs.mojom.SmbFsBootstrapReceiver;

smbfs.mojom.SmbFsBootstrapPtr = smbfs.mojom.SmbFsBootstrapRemote;
smbfs.mojom.SmbFsBootstrapRequest = smbfs.mojom.SmbFsBootstrapPendingReceiver;


// Interface: SmbFs
mojo.internal.Struct(
    smbfs.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec, 'smbfs.mojom.SmbFs_RemoveSavedCredentials_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    smbfs.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec, 'smbfs.mojom.SmbFs_RemoveSavedCredentials_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    smbfs.mojom.SmbFs_DeleteRecursively_ParamsSpec, 'smbfs.mojom.SmbFs_DeleteRecursively_Params', [
      mojo.internal.StructField('path', 0, 0, smbfs.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    smbfs.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec, 'smbfs.mojom.SmbFs_DeleteRecursively_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, smbfs.mojom.DeleteRecursivelyErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

smbfs.mojom.SmbFsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.SmbFsRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFs';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.SmbFsPendingReceiver,
      handle);
    this.$ = new smbfs.mojom.SmbFsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  removeSavedCredentials() {
    return this.$.removeSavedCredentials();
  }
  deleteRecursively(path) {
    return this.$.deleteRecursively(path);
  }
};

smbfs.mojom.SmbFsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmbFs', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  removeSavedCredentials() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      smbfs.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec,
      smbfs.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec,
      [],
      false);
  }

  deleteRecursively(path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      smbfs.mojom.SmbFs_DeleteRecursively_ParamsSpec,
      smbfs.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec,
      [path],
      false);
  }

};

smbfs.mojom.SmbFs.getRemote = function() {
  let remote = new smbfs.mojom.SmbFsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFs',
    'context');
  return remote.$;
};

smbfs.mojom.SmbFsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmbFs', [
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
             decoder.decodeStructInline(smbfs.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(smbfs.mojom.SmbFs_DeleteRecursively_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(smbfs.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec.$.structSpec);
          const result = this.impl.removeSavedCredentials();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, smbfs.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(smbfs.mojom.SmbFs_DeleteRecursively_ParamsSpec.$.structSpec);
          const result = this.impl.deleteRecursively(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, smbfs.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

smbfs.mojom.SmbFsReceiver = smbfs.mojom.SmbFsReceiver;

smbfs.mojom.SmbFsPtr = smbfs.mojom.SmbFsRemote;
smbfs.mojom.SmbFsRequest = smbfs.mojom.SmbFsPendingReceiver;


// Interface: SmbFsDelegate
mojo.internal.Struct(
    smbfs.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec, 'smbfs.mojom.SmbFsDelegate_RequestCredentials_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    smbfs.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec, 'smbfs.mojom.SmbFsDelegate_RequestCredentials_ResponseParams', [
      mojo.internal.StructField('credentials', 0, 0, smbfs.mojom.CredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

smbfs.mojom.SmbFsDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.SmbFsDelegateRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFsDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.SmbFsDelegatePendingReceiver,
      handle);
    this.$ = new smbfs.mojom.SmbFsDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestCredentials() {
    return this.$.requestCredentials();
  }
};

smbfs.mojom.SmbFsDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmbFsDelegate', [
      { explicit: null },
    ]);
  }

  requestCredentials() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      smbfs.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec,
      smbfs.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec,
      [],
      false);
  }

};

smbfs.mojom.SmbFsDelegate.getRemote = function() {
  let remote = new smbfs.mojom.SmbFsDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFsDelegate',
    'context');
  return remote.$;
};

smbfs.mojom.SmbFsDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmbFsDelegate', [
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
             decoder.decodeStructInline(smbfs.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(smbfs.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec.$.structSpec);
          const result = this.impl.requestCredentials();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, smbfs.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

smbfs.mojom.SmbFsDelegateReceiver = smbfs.mojom.SmbFsDelegateReceiver;

smbfs.mojom.SmbFsDelegatePtr = smbfs.mojom.SmbFsDelegateRemote;
smbfs.mojom.SmbFsDelegateRequest = smbfs.mojom.SmbFsDelegatePendingReceiver;

