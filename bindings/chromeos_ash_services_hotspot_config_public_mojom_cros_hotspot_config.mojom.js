// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/hotspot_config/public/mojom/cros_hotspot_config.mojom
// Module: ash.hotspot_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.hotspot_config = ash.hotspot_config || {};
ash.hotspot_config.mojom = ash.hotspot_config.mojom || {};


// Enum: HotspotState
ash.hotspot_config.mojom.HotspotState = {
  kDisabled: 0,
  kEnabled: 1,
  kEnabling: 2,
  kDisabling: 3,
};

// Enum: WiFiSecurityMode
ash.hotspot_config.mojom.WiFiSecurityMode = {
  kWpa2: 0,
  kWpa3: 1,
  kWpa2Wpa3: 2,
};

// Enum: WiFiBand
ash.hotspot_config.mojom.WiFiBand = {
};

// Enum: SetHotspotConfigResult
ash.hotspot_config.mojom.SetHotspotConfigResult = {
};

// Enum: HotspotAllowStatus
ash.hotspot_config.mojom.HotspotAllowStatus = {
  kAllowed: 0,
};

// Enum: HotspotControlResult
ash.hotspot_config.mojom.HotspotControlResult = {
  kUnknownFailure: 0,
};

// Enum: DisableReason
ash.hotspot_config.mojom.DisableReason = {
};

// Struct: HotspotConfig
ash.hotspot_config.mojom.HotspotConfig = class {
  constructor(values = {}) {
    this.passphrase = values.passphrase !== undefined ? values.passphrase : false;
    this.the = values.the !== undefined ? values.the : null;
    this.bssid_randomization = values.bssid_randomization !== undefined ? values.bssid_randomization : false;
  }
};

// Struct: HotspotInfo
ash.hotspot_config.mojom.HotspotInfo = class {
  constructor(values = {}) {
    this.config = values.config !== undefined ? values.config : 0;
  }
};

// Interface: CrosHotspotConfig
ash.hotspot_config.mojom.CrosHotspotConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfig';
  }

  onHotspotInfoChange() {
    // Method: OnHotspotInfoChange
    // Call: OnHotspotInfoChange()
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  observeEnabledStateChanges(observer) {
    // Method: ObserveEnabledStateChanges
    // Call: ObserveEnabledStateChanges(observer)
  }

  getHotspotInfo() {
    // Method: GetHotspotInfo
    return new Promise((resolve) => {
      // Call: GetHotspotInfo()
      resolve({});
    });
  }

  setHotspotConfig(config) {
    // Method: SetHotspotConfig
    return new Promise((resolve) => {
      // Call: SetHotspotConfig(config)
      resolve({});
    });
  }

  enableHotspot() {
    // Method: EnableHotspot
    return new Promise((resolve) => {
      // Call: EnableHotspot()
      resolve({});
    });
  }

  disableHotspot() {
    // Method: DisableHotspot
    return new Promise((resolve) => {
      // Call: DisableHotspot()
      resolve({});
    });
  }

};

ash.hotspot_config.mojom.CrosHotspotConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHotspotConfigObserver
ash.hotspot_config.mojom.CrosHotspotConfigObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.hotspot_config.mojom.CrosHotspotConfigObserver';
  }

  onHotspotInfoChanged() {
    // Method: OnHotspotInfoChanged
    // Call: OnHotspotInfoChanged()
  }

};

ash.hotspot_config.mojom.CrosHotspotConfigObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HotspotEnabledStateObserver
ash.hotspot_config.mojom.HotspotEnabledStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.hotspot_config.mojom.HotspotEnabledStateObserver';
  }

  onHotspotTurnedOn() {
    // Method: OnHotspotTurnedOn
    // Call: OnHotspotTurnedOn()
  }

  onHotspotTurnedOff(reason) {
    // Method: OnHotspotTurnedOff
    // Call: OnHotspotTurnedOff(reason)
  }

};

ash.hotspot_config.mojom.HotspotEnabledStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
