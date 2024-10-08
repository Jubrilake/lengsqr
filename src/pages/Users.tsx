import UsersCard from "@/components/usersSection/usersCard";

const Users = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="text-primary font-semibold text-2xl">Users</h1>
      <UsersCard />
    </main>
  );
};

export default Users;
