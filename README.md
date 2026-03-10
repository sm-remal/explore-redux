## JSON - Server
```npm i json-server```

```npx json-server -p 5000 -w database/db.json```
---
---
**providesTags**: Marks the data returned from a query with specific tags.

 **invalidatesTags**: Invalidates those tags after a mutation (like delete/update), which automatically triggers a refetch of the affected queries.