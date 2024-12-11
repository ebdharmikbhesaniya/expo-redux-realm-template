import { createRealmContext } from "@realm/react";
import { schema } from ".";

const { RealmProvider, useRealm, useQuery } = createRealmContext({
  schema,
  deleteRealmIfMigrationNeeded: true,
});

// Export the RealmProvider, useRealm, and useQuery hooks
export { RealmProvider, useRealm, useQuery };
