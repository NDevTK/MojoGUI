// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/core/common/content_settings_types.mojom
// Module: content_settings.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};

content_settings.mojom.ContentSettingsTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContentSettingsType
content_settings.mojom.ContentSettingsType = {
  DEFAULT: -1,
  COOKIES: 0,
  IMAGES: 1,
  JAVASCRIPT: 2,
  POPUPS: 3,
  GEOLOCATION: 4,
  GEOLOCATION_WITH_OPTIONS: 5,
  NOTIFICATIONS: 6,
  AUTO_SELECT_CERTIFICATE: 7,
  MIXEDSCRIPT: 8,
  MEDIASTREAM_MIC: 9,
  MEDIASTREAM_CAMERA: 10,
  PROTOCOL_HANDLERS: 11,
  DEPRECATED_PPAPI_BROKER: 12,
  AUTOMATIC_DOWNLOADS: 13,
  MIDI_SYSEX: 14,
  SSL_CERT_DECISIONS: 15,
  PROTECTED_MEDIA_IDENTIFIER: 16,
  APP_BANNER: 17,
  SITE_ENGAGEMENT: 18,
  DURABLE_STORAGE: 19,
  USB_CHOOSER_DATA: 20,
  BLUETOOTH_GUARD: 21,
  BACKGROUND_SYNC: 22,
  AUTOPLAY: 23,
  IMPORTANT_SITE_INFO: 24,
  PERMISSION_AUTOBLOCKER_DATA: 25,
  ADS: 26,
  ADS_DATA: 27,
  MIDI: 28,
  PASSWORD_PROTECTION: 29,
  MEDIA_ENGAGEMENT: 30,
  SOUND: 31,
  CLIENT_HINTS: 32,
  SENSORS: 33,
  DEPRECATED_ACCESSIBILITY_EVENTS: 34,
  PAYMENT_HANDLER: 35,
  USB_GUARD: 36,
  BACKGROUND_FETCH: 37,
  INTENT_PICKER_DISPLAY: 38,
  IDLE_DETECTION: 39,
  SERIAL_GUARD: 40,
  SERIAL_CHOOSER_DATA: 41,
  PERIODIC_BACKGROUND_SYNC: 42,
  BLUETOOTH_SCANNING: 43,
  HID_GUARD: 44,
  HID_CHOOSER_DATA: 45,
  WAKE_LOCK_SCREEN: 46,
  WAKE_LOCK_SYSTEM: 47,
  LEGACY_COOKIE_ACCESS: 48,
  FILE_SYSTEM_WRITE_GUARD: 49,
  NFC: 50,
  BLUETOOTH_CHOOSER_DATA: 51,
  CLIPBOARD_READ_WRITE: 52,
  CLIPBOARD_SANITIZED_WRITE: 53,
  SAFE_BROWSING_URL_CHECK_DATA: 54,
  VR: 55,
  AR: 56,
  FILE_SYSTEM_READ_GUARD: 57,
  STORAGE_ACCESS: 58,
  CAMERA_PAN_TILT_ZOOM: 59,
  WINDOW_MANAGEMENT: 60,
  LOCAL_FONTS: 61,
  PERMISSION_AUTOREVOCATION_DATA: 62,
  FILE_SYSTEM_LAST_PICKED_DIRECTORY: 63,
  DISPLAY_CAPTURE: 64,
  FILE_SYSTEM_ACCESS_CHOOSER_DATA: 65,
  FEDERATED_IDENTITY_SHARING: 66,
  JAVASCRIPT_JIT: 67,
  HTTP_ALLOWED: 68,
  FORMFILL_METADATA: 69,
  DEPRECATED_FEDERATED_IDENTITY_ACTIVE_SESSION: 70,
  AUTO_DARK_WEB_CONTENT: 71,
  REQUEST_DESKTOP_SITE: 72,
  FEDERATED_IDENTITY_API: 73,
  NOTIFICATION_INTERACTIONS: 74,
  REDUCED_ACCEPT_LANGUAGE: 75,
  NOTIFICATION_PERMISSION_REVIEW: 76,
  FEDERATED_IDENTITY_IDENTITY_PROVIDER_SIGNIN_STATUS: 77,
  REVOKED_UNUSED_SITE_PERMISSIONS: 78,
  TOP_LEVEL_STORAGE_ACCESS: 79,
  FEDERATED_IDENTITY_AUTO_REAUTHN_PERMISSION: 80,
  FEDERATED_IDENTITY_IDENTITY_PROVIDER_REGISTRATION: 81,
  ANTI_ABUSE: 82,
  THIRD_PARTY_STORAGE_PARTITIONING: 83,
  HTTPS_ENFORCED: 84,
  ALL_SCREEN_CAPTURE: 85,
  COOKIE_CONTROLS_METADATA: 86,
  TPCD_HEURISTICS_GRANTS: 87,
  TPCD_METADATA_GRANTS: 88,
  AUTO_PICTURE_IN_PICTURE: 89,
  FILE_SYSTEM_ACCESS_EXTENDED_PERMISSION: 90,
  FILE_SYSTEM_ACCESS_RESTORE_PERMISSION: 91,
  CAPTURED_SURFACE_CONTROL: 92,
  SMART_CARD_GUARD: 93,
  SMART_CARD_DATA: 94,
  WEB_PRINTING: 95,
  AUTOMATIC_FULLSCREEN: 96,
  SUB_APP_INSTALLATION_PROMPTS: 97,
  SPEAKER_SELECTION: 98,
  DIRECT_SOCKETS: 99,
  KEYBOARD_LOCK: 100,
  POINTER_LOCK: 101,
  REVOKED_ABUSIVE_NOTIFICATION_PERMISSIONS: 102,
  TRACKING_PROTECTION: 103,
  DISPLAY_MEDIA_SYSTEM_AUDIO: 104,
  JAVASCRIPT_OPTIMIZER: 105,
  STORAGE_ACCESS_HEADER_ORIGIN_TRIAL: 106,
  HAND_TRACKING: 107,
  WEB_APP_INSTALLATION: 108,
  DIRECT_SOCKETS_PRIVATE_NETWORK_ACCESS: 109,
  LEGACY_COOKIE_SCOPE: 110,
  ARE_SUSPICIOUS_NOTIFICATIONS_ALLOWLISTED_BY_USER: 111,
  CONTROLLED_FRAME: 112,
  REVOKED_DISRUPTIVE_NOTIFICATION_PERMISSIONS: 113,
  LOCAL_NETWORK_ACCESS: 114,
  LOCAL_NETWORK: 115,
  LOOPBACK_NETWORK: 116,
  ON_DEVICE_SPEECH_RECOGNITION_LANGUAGES_DOWNLOADED: 117,
  INITIALIZED_TRANSLATIONS: 118,
  SUSPICIOUS_NOTIFICATION_IDS: 119,
  DEVICE_ATTRIBUTES: 120,
  PERMISSION_ACTIONS_HISTORY: 121,
  SUSPICIOUS_NOTIFICATION_SHOW_ORIGINAL: 122,
};
