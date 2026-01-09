// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/public/protocol/group_data.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};


// Enum: MemberRole
data_sharing.mojom.MemberRole = {
  kUnspecified: 0,
  kOwner: 1,
  kMember: 2,
  kInvitee: 3,
  kFormerMember: 4,
};

// Struct: GroupMember
data_sharing.mojom.GroupMemberSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupMember',
      packedSize: 72,
      fields: [
        { name: 'gaia_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'role', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'avatar_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'given_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'creation_time', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_updated_time', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GroupData
data_sharing.mojom.GroupDataSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupData',
      packedSize: 48,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'members', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'former_members', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'access_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
