import React from 'react';


const MeasurePage = ({measures}) => {

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='bg-zinc-700 w-full text-sm text-left rtl:text-right text-white'>
        <thead className='uppercase'>
          <tr>
            <th scope="col" class="px-6 py-3">Id Medida</th>
            <th scope="col" class="px-6 py-3">Fecha toma</th>
            <th scope="col" class="px-6 py-3">Peso (kg)</th>
            <th scope="col" class="px-6 py-3">Altura (cm)</th>
            <th scope="col" class="px-6 py-3">IMC</th>
          </tr>
        </thead>
        <tbody>
          {measures.map((measure, index) => (
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
              <td className='px-6 py-4'>{measure.measureId}</td>
              <td className='px-6 py-4'>{measure.collectionDate}</td>
              <td className='px-6 py-4'>{measure.weight}</td>
              <td className='px-6 py-4'>{measure.height}</td>
              <td className='px-6 py-4'>{measure.imc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default MeasurePage