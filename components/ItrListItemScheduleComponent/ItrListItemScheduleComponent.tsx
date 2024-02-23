// import React from 'react';

interface OpenDay {
  id: string;
  // name: keyof typeof dayMapping;
  name: string;
  color: string;
}

// Mapping for full day names to single-letter format
const dayMapping = {
  'Mon': 'M',
  'Tue': 'T',
  'Wed': 'W',
  'Thu': 'T',
  'Fri': 'F',
  'Sat': 'S',
  'Sun': 'S'
};


export default function ItrListItemSchedule({ openDays }: { openDays: OpenDay[] }) {
  // Weekdays in single-letter format
  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  

  // Find the color for a given day
  // const findColorForDay = (day: any) => {
  //   const dayObject = openDays.find(d => dayMapping[d.name] === day);
  //   return dayObject ? dayObject.color : 'black'; // Default color if not found
  // };


  // const findColorForDay = (day: string) => {
  //   const dayObject = openDays.find(d => d.name === day);
  //   return dayObject ? dayObject.color : 'black'; // Default color if not found
  // };

  return (
    <div>
      {weekdays.map(day => (
        <span
          key={day}
          style={{
            margin: '0 5px',
            // fontWeight: openDays.some(d => dayMapping[d.name] === day) ? 'bold' : 'normal',
            // fontWeight: openDays.some(d => d.name === day) ? 'bold' : 'normal',
            // color: findColorForDay(day) // Use the color specified for the day
            // color: openDays.some(d => dayMapping[d.name] === day) ? '#228BE6' : 'black',
            // color: openDays.find(d => d.name === day)?.color ?? 'black',
          }}
        >
          {day}
        </span>
      ))}
    </div>
  );
}

// Example usage
// const restaurant = {
//   Name: "Example Restaurant",
//   Open: [
//     // ... your open days objects
//   ]
// };

// function App() {
//   return (
//     <div>
//       <h1>{restaurant.Name}</h1>
//       <RestaurantSchedule openDays={restaurant.Open} />
//     </div>
//   );
// }

// export default App;
