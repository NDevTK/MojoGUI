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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(uid) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(uid)
      resolve({});
    });
  }

  2(gid) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(gid)
      resolve({});
    });
  }

  3(project_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(project_id)
      resolve({});
    });
  }

  fails(is, fails) {
    // Method: fails
    // Call: fails(is, fails)
  }

  returned(type) {
    // Method: returned
    // Call: returned(type)
  }

  6(uids, gids, project_ids) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(uids, gids, project_ids)
      resolve({});
    });
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
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

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  usage(cache) {
    // Method: usage
    // Call: usage(cache)
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(free_space_bytes) {
    // Method: 2
    // Call: 2(free_space_bytes)
  }

};

arc.mojom.DiskSpaceInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
