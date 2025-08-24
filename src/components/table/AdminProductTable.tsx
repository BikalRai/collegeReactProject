import TertiaryButton from "../button/TertiaryButton";

const AdminProductTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse divide-y divide-muted'>
        <thead className='bg-cardbg'>
          <tr className='text-muted'>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Id
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Name
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[200px] truncate'>
              Price
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Old Price
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[200px] truncate'>
              Quantity
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              ImageUrl
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Reviews
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Rating
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Description
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-text-primary'>
            <td className='px-6 py-4 text-sm text-center font-medium text-gray-900'>
              1
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500'>
              John Doe
            </td>
            <td className='px-6 py-4 text-sm text-gray-500 max-w-[200px] truncate'>
              john@example.com
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500'>
              555-1234
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[200px] truncate'>
              123 Main St, New York City, NY, USA
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
              url_to_image.jpg
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
              url_to_image.jpg
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
              url_to_image.jpg
            </td>
            <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
              url_to_image.jpg
            </td>
            <td className='px-6 py-4 text-sm text-center font-medium flex flex-col gap-2 items-center '>
              <TertiaryButton btnText='Edit' />
              <TertiaryButton btnText='Delete' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductTable;
