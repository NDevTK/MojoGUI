// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/public/protocol/group_data.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};
var url = url || {};

data_sharing.mojom.MemberRoleSpec = { $: mojo.internal.Enum() };
data_sharing.mojom.GroupMemberSpec = { $: {} };
data_sharing.mojom.GroupDataSpec = { $: {} };

// Enum: MemberRole
data_sharing.mojom.MemberRole = {
  kUnspecified: 0,
  kOwner: 1,
  kMember: 2,
  kInvitee: 3,
  kFormerMember: 4,
};

// Struct: GroupMember
mojo.internal.Struct(
    data_sharing.mojom.GroupMemberSpec, 'data_sharing.mojom.GroupMember', [
      mojo.internal.StructField('gaia_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('role', 24, 0, data_sharing.mojom.MemberRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('avatar_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('given_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 48, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_updated_time', 56, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GroupData
mojo.internal.Struct(
    data_sharing.mojom.GroupDataSpec, 'data_sharing.mojom.GroupData', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('members', 16, 0, mojo.internal.Array(data_sharing.mojom.GroupMemberSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('former_members', 24, 0, mojo.internal.Array(data_sharing.mojom.GroupMemberSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('access_token', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);
