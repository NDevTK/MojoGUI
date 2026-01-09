// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ApplicationsSize
arc.mojom.ApplicationsSize = class {
  constructor(values = {}) {
    this.total_cache_bytes = values.total_cache_bytes !== undefined ? values.total_cache_bytes : 0;
  }
};

// Struct: DiskSpace
arc.mojom.DiskSpace = class {
  constructor(values = {}) {
    this.space_in_bytes = values.space_in_bytes !== undefined ? values.space_in_bytes : 0;
  }
};

// Struct: QuotaSpaces
arc.mojom.QuotaSpaces = class {
  constructor(values = {}) {
    this.curspaces_for_project_ids = values.curspaces_for_project_ids !== undefined ? values.curspaces_for_project_ids : 0;
  }
};

// Interface: DiskSpaceHost
arc.mojom.DiskSpaceHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.DiskSpaceHost';
  }

};

arc.mojom.DiskSpaceHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DiskSpaceInstance
arc.mojom.DiskSpaceInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.DiskSpaceInstance';
  }

};

arc.mojom.DiskSpaceInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
