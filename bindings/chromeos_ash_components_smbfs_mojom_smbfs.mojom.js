// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/smbfs/mojom/smbfs.mojom
// Module: smbfs.mojom

'use strict';

// Module namespace
var smbfs = smbfs || {};
smbfs.mojom = smbfs.mojom || {};


// Enum: MountError
smbfs.mojom.MountError = {
  or: 0,
};

// Enum: DeleteRecursivelyError
smbfs.mojom.DeleteRecursivelyError = {
};

// Enum: Source
smbfs.mojom.Source = {
};

// Struct: Password
smbfs.mojom.Password = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
  }
};

// Struct: KerberosConfig
smbfs.mojom.KerberosConfig = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
  }
};

// Struct: CredentialStorageOptions
smbfs.mojom.CredentialStorageOptions = class {
  constructor(values = {}) {
    this.salt = values.salt !== undefined ? values.salt : 0;
  }
};

// Struct: MountOptions
smbfs.mojom.MountOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.credential_storage_options = values.credential_storage_options !== undefined ? values.credential_storage_options : null;
  }
};

// Struct: Credentials
smbfs.mojom.Credentials = class {
  constructor(values = {}) {
    this.password = values.password !== undefined ? values.password : "";
  }
};

// Interface: SmbFsBootstrap
smbfs.mojom.SmbFsBootstrapPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'smbfs.mojom.SmbFsBootstrap';
  }

  mountShare(options, delegate) {
    // Method: MountShare
    return new Promise((resolve) => {
      // Call: MountShare(options, delegate)
      resolve({});
    });
  }

};

smbfs.mojom.SmbFsBootstrapRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmbFs
smbfs.mojom.SmbFsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'smbfs.mojom.SmbFs';
  }

  removeSavedCredentials() {
    // Method: RemoveSavedCredentials
    return new Promise((resolve) => {
      // Call: RemoveSavedCredentials()
      resolve({});
    });
  }

  path(SMB, /dir_a/file_b) {
    // Method: path
    // Call: path(SMB, /dir_a/file_b)
  }

  deleteRecursively(path) {
    // Method: DeleteRecursively
    return new Promise((resolve) => {
      // Call: DeleteRecursively(path)
      resolve({});
    });
  }

};

smbfs.mojom.SmbFsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmbFsDelegate
smbfs.mojom.SmbFsDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'smbfs.mojom.SmbFsDelegate';
  }

  requestCredentials() {
    // Method: RequestCredentials
    return new Promise((resolve) => {
      // Call: RequestCredentials()
      resolve({});
    });
  }

};

smbfs.mojom.SmbFsDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
