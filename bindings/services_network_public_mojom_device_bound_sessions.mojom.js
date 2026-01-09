// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/device_bound_sessions.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: DeviceBoundSessionAccessType
network.mojom.DeviceBoundSessionAccessType = {
};

// Enum: DeviceBoundSessionUsage
network.mojom.DeviceBoundSessionUsage = {
};

// Enum: DeviceBoundSessionDeletionReason
network.mojom.DeviceBoundSessionDeletionReason = {
};

// Enum: DeviceBoundSessionScopeSpecificationType
network.mojom.DeviceBoundSessionScopeSpecificationType = {
};

// Enum: DeviceBoundSessionError
network.mojom.DeviceBoundSessionError = {
};

// Enum: DeviceBoundSessionRefreshResult
network.mojom.DeviceBoundSessionRefreshResult = {
};

// Enum: DeviceBoundSessionChallengeResult
network.mojom.DeviceBoundSessionChallengeResult = {
};

// Enum: DeviceBoundSessionInclusionResult
network.mojom.DeviceBoundSessionInclusionResult = {
};

// Struct: DeviceBoundSessionKey
network.mojom.DeviceBoundSessionKey = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: DeviceBoundSessionAccess
network.mojom.DeviceBoundSessionAccess = class {
  constructor(values = {}) {
    this.cookies = values.cookies !== undefined ? values.cookies : "";
  }
};

// Struct: DeviceBoundSessionScopeSpecification
network.mojom.DeviceBoundSessionScopeSpecification = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : "";
  }
};

// Struct: DeviceBoundSessionScope
network.mojom.DeviceBoundSessionScope = class {
  constructor(values = {}) {
    this.origin = values.origin !== undefined ? values.origin : false;
  }
};

// Struct: DeviceBoundSessionCredential
network.mojom.DeviceBoundSessionCredential = class {
  constructor(values = {}) {
    this.attributes = values.attributes !== undefined ? values.attributes : "";
  }
};

// Struct: DeviceBoundSessionParams
network.mojom.DeviceBoundSessionParams = class {
  constructor(values = {}) {
    this.allowed_refresh_initiators = values.allowed_refresh_initiators !== undefined ? values.allowed_refresh_initiators : "";
  }
};

// Struct: DeviceBoundSessionCookieCravingDisplay
network.mojom.DeviceBoundSessionCookieCravingDisplay = class {
  constructor(values = {}) {
    this.same_site = values.same_site !== undefined ? values.same_site : false;
  }
};

// Struct: DeviceBoundSessionUrlRuleDisplay
network.mojom.DeviceBoundSessionUrlRuleDisplay = class {
  constructor(values = {}) {
    this.path_prefix = values.path_prefix !== undefined ? values.path_prefix : "";
  }
};

// Struct: DeviceBoundSessionInclusionRulesDisplay
network.mojom.DeviceBoundSessionInclusionRulesDisplay = class {
  constructor(values = {}) {
    this.url_rules = values.url_rules !== undefined ? values.url_rules : false;
  }
};

// Struct: DeviceBoundSessionDisplay
network.mojom.DeviceBoundSessionDisplay = class {
  constructor(values = {}) {
    this.allowed_refresh_initiators = values.allowed_refresh_initiators !== undefined ? values.allowed_refresh_initiators : "";
  }
};

// Struct: DeviceBoundSessionCreationDetails
network.mojom.DeviceBoundSessionCreationDetails = class {
  constructor(values = {}) {
    this.new_session_display = values.new_session_display !== undefined ? values.new_session_display : null;
  }
};

// Struct: DeviceBoundSessionRefreshDetails
network.mojom.DeviceBoundSessionRefreshDetails = class {
  constructor(values = {}) {
    this.refresh_result = values.refresh_result !== undefined ? values.refresh_result : null;
    this.was_fully_proactive_refresh = values.was_fully_proactive_refresh !== undefined ? values.was_fully_proactive_refresh : false;
  }
};

// Struct: DeviceBoundSessionTerminationDetails
network.mojom.DeviceBoundSessionTerminationDetails = class {
  constructor(values = {}) {
    this.deletion_reason = values.deletion_reason !== undefined ? values.deletion_reason : null;
  }
};

// Struct: DeviceBoundSessionChallengeDetails
network.mojom.DeviceBoundSessionChallengeDetails = class {
  constructor(values = {}) {
    this.challenge_result = values.challenge_result !== undefined ? values.challenge_result : null;
    this.challenge = values.challenge !== undefined ? values.challenge : "";
  }
};

// Struct: DeviceBoundSessionEvent
network.mojom.DeviceBoundSessionEvent = class {
  constructor(values = {}) {
    this.event_type_details = values.event_type_details !== undefined ? values.event_type_details : false;
  }
};

// Interface: DeviceBoundSessionManager
network.mojom.DeviceBoundSessionManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionManager';
  }

  getAllSessions() {
    // Method: GetAllSessions
    return new Promise((resolve) => {
      // Call: GetAllSessions()
      resolve({});
    });
  }

  deleteSession(reason, session) {
    // Method: DeleteSession
    // Call: DeleteSession(reason, session)
  }

  deleteAllSessions(reason, created_after_time, created_before_time, filter) {
    // Method: DeleteAllSessions
    // Call: DeleteAllSessions(reason, created_after_time, created_before_time, filter)
  }

  addObserver(url, observer) {
    // Method: AddObserver
    // Call: AddObserver(url, observer)
  }

  addEventObserver(observer) {
    // Method: AddEventObserver
    // Call: AddEventObserver(observer)
  }

  createBoundSessions(params, wrapped_key, cookies_to_set, cookie_options) {
    // Method: CreateBoundSessions
    return new Promise((resolve) => {
      // Call: CreateBoundSessions(params, wrapped_key, cookies_to_set, cookie_options)
      resolve({});
    });
  }

};

network.mojom.DeviceBoundSessionManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceBoundSessionAccessObserver
network.mojom.DeviceBoundSessionAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionAccessObserver';
  }

  onDeviceBoundSessionAccessed(access) {
    // Method: OnDeviceBoundSessionAccessed
    // Call: OnDeviceBoundSessionAccessed(access)
  }

  clone(observer) {
    // Method: Clone
    // Call: Clone(observer)
  }

};

network.mojom.DeviceBoundSessionAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceBoundSessionEventObserver
network.mojom.DeviceBoundSessionEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionEventObserver';
  }

  onDeviceBoundSessionEventReceived(event) {
    // Method: OnDeviceBoundSessionEventReceived
    // Call: OnDeviceBoundSessionEventReceived(event)
  }

  addDeviceBoundSessionDisplays(session_displays) {
    // Method: AddDeviceBoundSessionDisplays
    // Call: AddDeviceBoundSessionDisplays(session_displays)
  }

};

network.mojom.DeviceBoundSessionEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
