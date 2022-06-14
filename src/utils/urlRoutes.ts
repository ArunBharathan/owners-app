export const routes = {
  toDashbaord: "/dashboard",
  toHostels: "/dashboard/hostels",
  toHostel: (entityId?:string) => entityId ? `/dashboard/hostels/${entityId}` : "/dashboard/hostels/:entityId",
  toRoom: (entityId?:string, roomId?: string) =>
    entityId && roomId
      ? `/dashboard/hostels/${entityId}/${roomId}`
      : "/dashboard/hostels/:entityId/:roomId",
};
