// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/smbfs/mojom/smbfs.mojom
// Module: smbfs.mojom

'use strict';

// Module namespace
var smbfs = smbfs || {};
smbfs.mojom = smbfs.mojom || {};


smbfs.mojom.mojom.kBootstrapPipeName = "smbfs-bootstrap";

smbfs.mojom.mojom.kMaxLength = 255;

smbfs.mojom.mojom.kMinSaltLength = 16;

// Enum: MountError
smbfs.mojom.mojom.MountError = {
  kOk: 0,
  kUnknown: 1,
  kTimeout: 2,
  kInvalidUrl: 3,
  kInvalidOptions: 4,
  kNotFound: 5,
  kAccessDenied: 6,
  kInvalidProtocol: 7,
};
smbfs.mojom.mojom.MountErrorSpec = { $: mojo.internal.Enum() };

// Enum: DeleteRecursivelyError
smbfs.mojom.mojom.DeleteRecursivelyError = {
  kOk: 0,
  kUnknown: 1,
  kPathNotFound: 2,
  kFailedToDeleteNode: 3,
  kFailedToListDirectory: 4,
  kOperationInProgress: 5,
};
smbfs.mojom.mojom.DeleteRecursivelyErrorSpec = { $: mojo.internal.Enum() };

// Enum: Source
smbfs.mojom.mojom.Source = {
  kActiveDirectory: 0,
  kKerberos: 1,
};
smbfs.mojom.mojom.SourceSpec = { $: mojo.internal.Enum() };

// Struct: Password
smbfs.mojom.mojom.PasswordSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.Password',
      packedSize: 24,
      fields: [
        { name: 'kMaxLength', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KerberosConfig
smbfs.mojom.mojom.KerberosConfigSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.KerberosConfig',
      packedSize: 16,
      fields: [
        { name: 'kActiveDirectory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CredentialStorageOptions
smbfs.mojom.mojom.CredentialStorageOptionsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.CredentialStorageOptions',
      packedSize: 32,
      fields: [
        { name: 'kMinSaltLength', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'account_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'salt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MountOptions
smbfs.mojom.mojom.MountOptionsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.MountOptions',
      packedSize: 72,
      fields: [
        { name: 'share_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resolved_host', packedOffset: 8, packedBitOffset: 0, type: smbfs.mojom.IPAddressSpec, nullable: true, minVersion: 0 },
        { name: 'username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'workgroup', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 32, packedBitOffset: 0, type: smbfs.mojom.PasswordSpec, nullable: true, minVersion: 0 },
        { name: 'kerberos_config', packedOffset: 40, packedBitOffset: 0, type: smbfs.mojom.KerberosConfigSpec, nullable: true, minVersion: 0 },
        { name: 'allow_ntlm', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'skip_connect', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'credential_storage_options', packedOffset: 56, packedBitOffset: 0, type: smbfs.mojom.CredentialStorageOptionsSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 64}, {version: 1, packedSize: 72}]
    }
  }
};

// Struct: Credentials
smbfs.mojom.mojom.CredentialsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.Credentials',
      packedSize: 32,
      fields: [
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'workgroup', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 16, packedBitOffset: 0, type: smbfs.mojom.PasswordSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SmbFsBootstrap
smbfs.mojom.mojom.SmbFsBootstrap = {};

smbfs.mojom.mojom.SmbFsBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.mojom.SmbFsBootstrapRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFsBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.mojom.SmbFsBootstrapPendingReceiver,
      handle);
    this.$ = new smbfs.mojom.mojom.SmbFsBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

smbfs.mojom.mojom.SmbFsBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mountShare(options, delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      smbfs.mojom.mojom.SmbFsBootstrap_MountShare_ParamsSpec,
      smbfs.mojom.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec,
      [options, delegate]);
  }

};

smbfs.mojom.mojom.SmbFsBootstrap.getRemote = function() {
  let remote = new smbfs.mojom.mojom.SmbFsBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFsBootstrap',
    'context');
  return remote.$;
};

// ParamsSpec for MountShare
smbfs.mojom.mojom.SmbFsBootstrap_MountShare_ParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFsBootstrap.MountShare_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: smbfs.mojom.MountOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'delegate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(smbfs.mojom.SmbFsDelegateRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

smbfs.mojom.mojom.SmbFsBootstrap_MountShare_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFsBootstrap.MountShare_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: smbfs.mojom.MountErrorSpec, nullable: false, minVersion: 0 },
        { name: 'smbfs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(smbfs.mojom.SmbFsRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
smbfs.mojom.mojom.SmbFsBootstrapPtr = smbfs.mojom.mojom.SmbFsBootstrapRemote;
smbfs.mojom.mojom.SmbFsBootstrapRequest = smbfs.mojom.mojom.SmbFsBootstrapPendingReceiver;


// Interface: SmbFs
smbfs.mojom.mojom.SmbFs = {};

smbfs.mojom.mojom.SmbFsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.mojom.SmbFsRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFs';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.mojom.SmbFsPendingReceiver,
      handle);
    this.$ = new smbfs.mojom.mojom.SmbFsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

smbfs.mojom.mojom.SmbFsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  removeSavedCredentials() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      smbfs.mojom.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec,
      smbfs.mojom.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec,
      []);
  }

  deleteRecursively(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      smbfs.mojom.mojom.SmbFs_DeleteRecursively_ParamsSpec,
      smbfs.mojom.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec,
      [path]);
  }

};

smbfs.mojom.mojom.SmbFs.getRemote = function() {
  let remote = new smbfs.mojom.mojom.SmbFsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFs',
    'context');
  return remote.$;
};

// ParamsSpec for RemoveSavedCredentials
smbfs.mojom.mojom.SmbFs_RemoveSavedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFs.RemoveSavedCredentials_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

smbfs.mojom.mojom.SmbFs_RemoveSavedCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFs.RemoveSavedCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteRecursively
smbfs.mojom.mojom.SmbFs_DeleteRecursively_ParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFs.DeleteRecursively_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: smbfs.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

smbfs.mojom.mojom.SmbFs_DeleteRecursively_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFs.DeleteRecursively_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: smbfs.mojom.DeleteRecursivelyErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
smbfs.mojom.mojom.SmbFsPtr = smbfs.mojom.mojom.SmbFsRemote;
smbfs.mojom.mojom.SmbFsRequest = smbfs.mojom.mojom.SmbFsPendingReceiver;


// Interface: SmbFsDelegate
smbfs.mojom.mojom.SmbFsDelegate = {};

smbfs.mojom.mojom.SmbFsDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

smbfs.mojom.mojom.SmbFsDelegateRemote = class {
  static get $interfaceName() {
    return 'smbfs.mojom.SmbFsDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      smbfs.mojom.mojom.SmbFsDelegatePendingReceiver,
      handle);
    this.$ = new smbfs.mojom.mojom.SmbFsDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

smbfs.mojom.mojom.SmbFsDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCredentials() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      smbfs.mojom.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec,
      smbfs.mojom.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec,
      []);
  }

};

smbfs.mojom.mojom.SmbFsDelegate.getRemote = function() {
  let remote = new smbfs.mojom.mojom.SmbFsDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'smbfs.mojom.SmbFsDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for RequestCredentials
smbfs.mojom.mojom.SmbFsDelegate_RequestCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFsDelegate.RequestCredentials_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

smbfs.mojom.mojom.SmbFsDelegate_RequestCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.SmbFsDelegate.RequestCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: smbfs.mojom.CredentialsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
smbfs.mojom.mojom.SmbFsDelegatePtr = smbfs.mojom.mojom.SmbFsDelegateRemote;
smbfs.mojom.mojom.SmbFsDelegateRequest = smbfs.mojom.mojom.SmbFsDelegatePendingReceiver;

