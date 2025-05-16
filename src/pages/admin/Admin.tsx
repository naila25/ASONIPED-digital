import VolunteerAdminTable from '../../components/admin/VolunteerAdminTable';

const Admin = () => {
  return (
    <div>
      {/* You can reuse your NavBar and Footer here */}
      <h1 className="text-3xl font-bold text-center my-8">Panel de Administración</h1>
      {/* Here you will add your CRUD tables/components */}
      <div className="container mx-auto">
        <div className="bg-dark p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">CRUD Voluntarios</h2>
          <VolunteerAdminTable />
        </div>
        {/* You can add more sections for Donaciones, Talleres, etc. here */}
      </div>
    </div>
  );
};

export default Admin;
