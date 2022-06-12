import DataTable from "../../components/DataTable/DataTable";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="relative py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Customer Spending Forecast Dashboard
          </h1>
        </div>
      </div>
      <div className="mx-auto sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <DataTable data={[]}/>
        {/* /End replace */}
      </div>
    </MainLayout>
  )
}