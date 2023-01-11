import React from "react";

const datas = [
  {
    id: 1,
    state: "Indiana",
    city: "Indianapolis",
  },
  {
    id: 2,
    state: "Ohio",
    city: "Columbus",
  },
  {
    id: 3,
    state: "Michigan",
    city: "Detroit",
  },
];

const Table = () => {
  return (
    <div class="flex justify-center mt-3">
      <table class="px-3 rounded-lg bg-white shadow-lg">
        <thead>
          <tr>
            <th class="border-b-2 px-20">State</th>
            <th class="border-b-2 px-20">City</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id} class="border-t text-center">
              <td>{data.state}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
