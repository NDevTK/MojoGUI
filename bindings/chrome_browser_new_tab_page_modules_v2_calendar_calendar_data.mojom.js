// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/calendar_data.mojom
// Module: ntp.calendar.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};


// Struct: Attachment
ntp.calendar.mojom.AttachmentSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.Attachment',
      packedSize: 16,
      fields: [
        { name: 'icon_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CalendarEvent
ntp.calendar.mojom.CalendarEventSpec = {
  $: {
    structSpec: {
      name: 'ntp.calendar.mojom.CalendarEvent',
      packedSize: 16,
      fields: [
        { name: 'has_other_attendee', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
