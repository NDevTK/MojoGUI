// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/calendar/calendar_data.mojom
// Module: ntp.calendar.mojom

// Module namespace
var ntp = ntp || {};
ntp.calendar = ntp.calendar || {};
ntp.calendar.mojom = ntp.calendar.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ntp.calendar.mojom.AttachmentSpec = { $: {} };
ntp.calendar.mojom.CalendarEventSpec = { $: {} };

// Struct: Attachment
mojo.internal.Struct(
    ntp.calendar.mojom.AttachmentSpec, 'ntp.calendar.mojom.Attachment', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resource_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('icon_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CalendarEvent
mojo.internal.Struct(
    ntp.calendar.mojom.CalendarEventSpec, 'ntp.calendar.mojom.CalendarEvent', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('attachments', 40, 0, mojo.internal.Array(ntp.calendar.mojom.AttachmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('conference_url', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_accepted', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_other_attendee', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);
