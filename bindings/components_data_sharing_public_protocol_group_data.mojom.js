// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/public/protocol/group_data.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};
var url = url || {};


// Enum: MemberRole
data_sharing.mojom.mojom.MemberRole = {
  kUnspecified: 0,
  kOwner: 1,
  kMember: 2,
  kInvitee: 3,
  kFormerMember: 4,
};
data_sharing.mojom.mojom.MemberRoleSpec = { $: mojo.internal.Enum() };

// Struct: GroupMember
data_sharing.mojom.mojom.GroupMemberSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupMember',
      packedSize: 72,
      fields: [
        { name: 'gaia_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'role', packedOffset: 56, packedBitOffset: 0, type: data_sharing.mojom.MemberRoleSpec, nullable: false, minVersion: 0 },
        { name: 'avatar_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'given_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'creation_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_updated_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: GroupData
data_sharing.mojom.mojom.GroupDataSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupData',
      packedSize: 48,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'members', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(data_sharing.mojom.GroupMemberSpec, false), nullable: false, minVersion: 0 },
        { name: 'former_members', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(data_sharing.mojom.GroupMemberSpec, false), nullable: false, minVersion: 0 },
        { name: 'access_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
