// import React, { useState, useEffect } from "react";
// import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

// // Generate mock data for subscriptions
// const generateSubscriptions = () => {
//   return Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     name: `Subscription ${i + 1}`,
//     status: i % 2 === 0 ? "Active" : "Inactive",
//     createdDate: new Date(2023, i % 12, i % 28 + 1).toISOString().split("T")[0],
//     amount: (Math.random() * 100).toFixed(2),
//   }));
// };

// const SubscriptionAdmin = () => {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortField, setSortField] = useState("name");
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     setSubscriptions(generateSubscriptions());
//   }, []);

//   useEffect(() => {
//     let filtered = subscriptions.filter((sub) =>
//       sub.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     filtered = filtered.sort((a, b) => {
//       if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
//       if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
//       return 0;
//     });

//     setFilteredSubscriptions(filtered);
//   }, [searchTerm, sortField, sortDirection, subscriptions]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//   };

//   const handleSort = (field) => {
//     const isAsc = sortField === field && sortDirection === "asc";
//     setSortDirection(isAsc ? "desc" : "asc");
//     setSortField(field);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const paginatedData = filteredSubscriptions.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="p-5 max-w-3xl mx-auto font-sans">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Subscription Admin</h2>
//       <input
//         type="text"
//         placeholder="Search Subscriptions"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="p-2 mb-4 w-full text-lg border border-gray-300 rounded"
//       />
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">ID</th>
//             <th
//               onClick={() => handleSort("name")}
//               className="border p-2 cursor-pointer text-blue-600"
//             >
//               Name {sortField === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
//             </th>
//             <th className="border p-2">Status</th>
//             <th
//               onClick={() => handleSort("createdDate")}
//               className="border p-2 cursor-pointer text-blue-600"
//             >
//               Created Date {sortField === "createdDate" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
//             </th>
//             <th
//               onClick={() => handleSort("amount")}
//               className="border p-2 cursor-pointer text-blue-600"
//             >
//               Amount {sortField === "amount" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((sub) => (
//             <tr key={sub.id} className="odd:bg-white even:bg-gray-50">
//               <td className="border p-2 text-center">{sub.id}</td>
//               <td className="border p-2 text-center">{sub.name}</td>
//               <td className="border p-2 text-center">{sub.status}</td>
//               <td className="border p-2 text-center">{sub.createdDate}</td>
//               <td className="border p-2 text-center">${sub.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center mt-4">
//         {Array.from(
//           { length: Math.ceil(filteredSubscriptions.length / itemsPerPage) },
//           (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => handlePageChange(i + 1)}
//               className={`px-3 py-1 mx-1 border rounded ${
//                 currentPage === i + 1
//                   ? "bg-blue-600 text-white font-bold"
//                   : "border-gray-300"
//               }`}
//             >
//               {i + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubscriptionAdmin;
